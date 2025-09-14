#!/usr/bin/env python3
"""
Karaoke simple en Python
-------------------------
- Reproduce un archivo de audio .wav o .mp3
- Muestra la letra sincronizada en pantalla
- Resalta la parte actual a cantar

Requisitos:
    pip install pygame

Ejecuta:
    python karaoke.py
"""

import pygame
import time

# --- Configuración ---
AUDIO_FILE = "tu_cancion.wav"  # Cambia por tu archivo
FPS = 30
WIDTH, HEIGHT = 900, 400

# Letras con tiempos (segundos, texto)
LYRICS = [
    (0,   "🎤  Let's sing together!"),
    (2,   "Rock that body, move your feet"),
    (6,   "Feel the rhythm, feel the beat"),
    (10,  "Sing it louder, let it fly"),
    (14,  "Raise your hands up to the sky"),
    (18,  "🎶 La la la la... 🎶"),
    (22,  "Keep it moving, don’t you stop"),
    (26,  "Let the music take the top"),
    (30,  "Everybody sing with me"),
    (34,  "This is how it’s meant to be"),
]

def karaoke():
    pygame.init()
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Karaoke en Python 🎤")
    font_big = pygame.font.SysFont("arial", 40, bold=True)
    font_small = pygame.font.SysFont("arial", 28)

    # Música
    pygame.mixer.init()
    pygame.mixer.music.load(AUDIO_FILE)
    pygame.mixer.music.play()

    start_time = time.time()
    current_line = 0
    running = True

    while running:
        screen.fill((10, 10, 25))

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        now = time.time() - start_time

        # Avanzar línea si toca
        if current_line + 1 < len(LYRICS) and now >= LYRICS[current_line + 1][0]:
            current_line += 1

        # Mostrar letra actual
        for i, (t, text) in enumerate(LYRICS):
            color = (200, 200, 200)
            if i == current_line:
                color = (255, 255, 0)  # Amarillo para resaltar
                txt = font_big.render(text, True, color)
            else:
                txt = font_small.render(text, True, color)

            screen.blit(txt, (50, 100 + i * 30))

        pygame.display.flip()
        pygame.time.Clock().tick(FPS)

    pygame.quit()

if __name__ == "__main__":
    karaoke()
