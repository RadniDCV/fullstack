import sys
from rich import print
from time import sleep

def lyrics_music():
    # Cada línea: (quién canta, texto, tiempo de espera)
    lines = [
        ("H", "I wanna da-", 0.09),
        ("H", "I wanna dance in the lights", 0.06),
        ("H", "I wanna ro-", 0.12),
        ("H", "I wanna rock your body", 0.09),
        ("H", "I wanna go", 0.08),
        ("H", "I wanna go for a ride", 0.09),
        ("H", "Hop in the music and", 0.10),
        ("H", "Rock your body", 0.05),
        ("M", "Rock that body", 0.10),
        ("M", "come on, come on", 0.03),
        ("M", "Rock that body", 0.05),
        ("H", "(Rock your body)", 0.03),
    ]

    for singer, text, delay in lines:
        if singer == "H":  # Highlight
            print(f"[bold cyan]{text}[/bold cyan] 🎤")
        elif singer == "M":  # Mark as music/chorus
            print(f"[bold magenta]{text}[/bold magenta] 🔥")
        else:
            print(text)
        sleep(delay)

if __name__ == "__main__":
    lyrics_music()
