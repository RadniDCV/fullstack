#!/usr/bin/env python3
"""
Rock That Body — a tiny rhythm-tap game in pure Python.

How to play
-----------
- Press SPACE when a beat circle touches the hit line.
- You have 60 seconds. Keep the streak for bonus!
- ESC to quit.

Dependencies
------------
pip install pygame numpy

Run
---
python rock_that_body.py
"""

import math
import sys
import time
import random
from dataclasses import dataclass, field
from typing import List, Tuple

# Lazy-import pygame so error messages are friendly
try:
    import pygame
    import numpy as np
except Exception as e:
    print("This game needs pygame and numpy. Install with:\n  pip install pygame numpy")
    sys.exit(1)

# ----------------------------- Config ---------------------------------

WIDTH, HEIGHT = 900, 540
FPS = 60
HIT_LINE_Y = HEIGHT - 120
HIT_WINDOW_MS = 120  # ± window for "Great" hits
GOOD_WINDOW_MS = 220  # ± window for "Good" hits
SONG_BPM = 120  # beats per minute (procedural, no copyrighted audio)
SONG_SECS = 60  # length of a run
SPAWN_LOOKAHEAD = 4.0  # seconds of notes pre-spawned
LANES = [WIDTH * x for x in (0.2, 0.4, 0.6, 0.8)]
LANE_KEYS = [pygame.K_f, pygame.K_g, pygame.K_h, pygame.K_j]  # like rhythm games
LANE_NAMES = ["F", "G", "H", "J"]
BG_COLOR = (10, 12, 16)

# --------------------------- Sound helpers ----------------------------

def synth_tone(freq=440.0, dur_ms=120, volume=0.4, wave="sine", sr=44100):
    """Return a pygame.Sound generated procedurally (no external files)."""
    t = np.linspace(0, dur_ms/1000.0, int(sr * (dur_ms/1000.0)), False)
    if wave == "sine":
        sig = np.sin(2 * np.pi * freq * t)
    elif wave == "square":
        sig = np.sign(np.sin(2 * np.pi * freq * t))
    elif wave == "tri":
        sig = 2 * np.arcsin(np.sin(2 * np.pi * freq * t)) / np.pi
    else:
        sig = np.sin(2 * np.pi * freq * t)

    # simple envelope to reduce clicks
    attack = int(0.01 * sr)
    release = int(0.02 * sr)
    env = np.ones_like(sig)
    env[:attack] = np.linspace(0, 1, attack)
    env[-release:] = np.linspace(1, 0, release)
    sig = sig * env * volume

    # convert to 16-bit
    audio = np.int16(sig * 32767)
    stereo = np.column_stack((audio, audio))
    return pygame.mixer.Sound(stereo)

def make_kit():
    """Build a tiny drum kit with synthesized sounds."""
    return {
        "kick": synth_tone(60, 90, 0.7, "sine"),
        "snare": synth_tone(220, 100, 0.5, "square"),
        "hat": synth_tone(8000, 40, 0.15, "square"),
        "hit": synth_tone(880, 120, 0.4, "tri"),
        "good": synth_tone(660, 140, 0.35, "tri"),
        "miss": synth_tone(120, 200, 0.35, "sine"),
    }

# ----------------------------- Notes ----------------------------------

@dataclass
class Note:
    lane: int
    t_hit: float  # absolute seconds since song_start to reach hit line
    y: float = -20.0
    spawned: bool = False
    hit: bool = False
    judged: bool = False

# ----------------------------- Game -----------------------------------

def generate_chart(bpm: int, secs: int) -> List[Note]:
    """Generate a simple 4-lane chart with some syncopation."""
    beat = 60.0 / bpm
    times = []
    t = 0.0
    while t < secs:
        # 4/4 pattern per bar with off-beat hats
        for i in range(4):
            times.append(t + i * beat)
            if i != 0:
                times.append(t + i * beat - beat/2)  # off-beat
        # occasional 16th note flourish
        if random.random() < 0.35:
            times.append(t + beat * 3.0 + beat/4.0)
        t += beat * 4

    # assign lanes in a musical-ish way
    notes = []
    last_lane = random.randint(0, 3)
    for tt in times:
        if random.random() < 0.2:
            lane = last_lane
        else:
            lane = random.choice([l for l in range(4) if l != last_lane])
        last_lane = lane
        notes.append(Note(lane=lane, t_hit=tt))
    notes.sort(key=lambda n: n.t_hit)
    return notes

def lerp(a, b, t):
    return a + (b - a) * t

def run():
    pygame.init()
    pygame.mixer.pre_init(44100, -16, 2, 512)
    pygame.display.set_caption("Rock That Body — Python Rhythm")
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    clock = pygame.time.Clock()
    font = pygame.font.SysFont("arial", 22)
    big = pygame.font.SysFont("arial", 48, bold=True)

    kit = make_kit()
    notes = generate_chart(SONG_BPM, SONG_SECS)

    # Precompute travel time: from spawn y to hit line y at constant speed
    travel_px = HIT_LINE_Y + 50.0
    speed_px_per_s = 320.0  # tweak for feel
    travel_time = travel_px / speed_px_per_s

    song_start = time.perf_counter()
    last_beat_idx = -1

    # scoring
    score = 0
    combo = 0
    max_combo = 0
    judgments: List[Tuple[str, float, int]] = []  # (label, stamp, lane)
    end_time = song_start + SONG_SECS + 2.0

    # main loop
    running = True
    while running:
        now = time.perf_counter()
        dt = clock.tick(FPS) / 1000.0

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    running = False
                else:
                    # map keys to lanes
                    if event.key in LANE_KEYS:
                        lane = LANE_KEYS.index(event.key)
                        # find closest unjudged note in that lane
                        cand = None
                        best_dt = 1e9
                        for n in notes:
                            if n.lane != lane or n.judged:
                                continue
                            delta_ms = (n.t_hit - (now - song_start)) * 1000.0
                            if abs(delta_ms) < best_dt:
                                best_dt = abs(delta_ms)
                                cand = n
                        if cand is not None and best_dt <= GOOD_WINDOW_MS:
                            cand.judged = True
                            cand.hit = True
                            if best_dt <= HIT_WINDOW_MS:
                                score += 100 + int(combo * 0.5)
                                combo += 1
                                max_combo = max(max_combo, combo)
                                judgments.append(("GREAT", now, lane))
                                kit["hit"].play()
                            else:
                                score += 70
                                combo += 1
                                max_combo = max(max_combo, combo)
                                judgments.append(("GOOD", now, lane))
                                kit["good"].play()
                        else:
                            combo = 0
                            judgments.append(("MISS", now, lane if cand else -1))
                            kit["miss"].play()

        # spawn notes as they enter viewport
        song_t = now - song_start
        for n in notes:
            if not n.spawned and n.t_hit - song_t <= travel_time:
                n.spawned = True
                # initial y so it reaches HIT_LINE_Y exactly at t_hit
                n.y = -20.0 + (song_t - (n.t_hit - travel_time)) * speed_px_per_s

        # update note positions and auto-miss if passed
        for n in notes:
            if n.spawned and not n.judged:
                n.y += speed_px_per_s * dt
                # auto-miss if it passed the window
                delta_ms = (n.t_hit - song_t) * 1000.0
                if delta_ms < -GOOD_WINDOW_MS:
                    n.judged = True
                    n.hit = False
                    combo = 0
                    judgments.append(("MISS", now, n.lane))
                    kit["miss"].play()

        # procedural metronome (no copyrighted audio)
        # play simple kick/snare/hat on beats
        beat = 60.0 / SONG_BPM
        idx = int(song_t / (beat/2))  # 8th notes index
        if idx != last_beat_idx:
            last_beat_idx = idx
            pos_in_bar = idx % 8
            if pos_in_bar % 2 == 0:
                if pos_in_bar == 0:
                    kit["kick"].play()
                elif pos_in_bar == 4:
                    kit["snare"].play()
                else:
                    kit["hat"].play()

        # draw
        screen.fill(BG_COLOR)

        # lanes
        for i, x in enumerate(LANES):
            pygame.draw.rect(screen, (26, 28, 36), pygame.Rect(x-60, 0, 120, HEIGHT), border_radius=12)
            pygame.draw.line(screen, (80, 85, 100), (x-60, HIT_LINE_Y), (x+60, HIT_LINE_Y), 3)
            key_lbl = font.render(LANE_NAMES[i], True, (180, 190, 210))
            screen.blit(key_lbl, (x - key_lbl.get_width()//2, HEIGHT - 32))

        # notes
        for n in notes:
            if n.spawned and not (n.judged and n.y > HIT_LINE_Y + 36):
                x = LANES[n.lane]
                color = (90, 200, 255) if not n.judged else ((80, 200, 120) if n.hit else (220, 90, 90))
                pygame.draw.circle(screen, color, (int(x), int(n.y)), 22)
                pygame.draw.circle(screen, (255, 255, 255), (int(x), int(n.y)), 22, 2)

        # hud
        title = font.render("ROCK THAT BODY — Python Rhythm", True, (220, 230, 245))
        screen.blit(title, (20, 14))
        sc = font.render(f"Score: {score}", True, (240, 240, 240))
        cb = font.render(f"Combo: {combo} (Max {max_combo})", True, (240, 240, 240))
        tm_left = max(0, int(end_time - now))
        tleft = font.render(f"Time: {tm_left}s", True, (200, 210, 230))
        screen.blit(sc, (20, 44))
        screen.blit(cb, (20, 70))
        screen.blit(tleft, (20, 96))

        # floating judgments
        judgments = [(lbl, ts, ln) for (lbl, ts, ln) in judgments if now - ts < 0.6]
        for (lbl, ts, ln) in judgments:
            alpha = 1.0 - (now - ts) / 0.6
            x = LANES[ln] if 0 <= ln < 4 else WIDTH//2
            surf = big.render(lbl, True, (255, 255, 255))
            surf.set_alpha(int(255 * alpha))
            screen.blit(surf, (x - surf.get_width()//2, HIT_LINE_Y - 90 - int(40*(1-alpha))))

        # end
        if now >= end_time:
            over = big.render("TIME!", True, (250, 250, 250))
            screen.blit(over, (WIDTH//2 - over.get_width()//2, HEIGHT//2 - 60))
            fin = font.render("Press ESC to quit or SPACE to play again", True, (230, 230, 230))
            screen.blit(fin, (WIDTH//2 - fin.get_width()//2, HEIGHT//2 + 6))
            pygame.display.flip()

            # wait for input to restart or quit
            waiting = True
            while waiting:
                for e in pygame.event.get():
                    if e.type == pygame.QUIT:
                        waiting = False
                        running = False
                    elif e.type == pygame.KEYDOWN:
                        if e.key == pygame.K_ESCAPE:
                            waiting = False
                            running = False
                        elif e.key in (pygame.K_SPACE,):
                            # reset game
                            notes[:] = generate_chart(SONG_BPM, SONG_SECS)
                            song_start = time.perf_counter()
                            end_time = song_start + SONG_SECS + 2.0
                            score = 0
                            combo = 0
                            max_combo = 0
                            judgments.clear()
                            waiting = False
                clock.tick(60)
            continue

        pygame.display.flip()

    pygame.quit()

if __name__ == "__main__":
    run()
