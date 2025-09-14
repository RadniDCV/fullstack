import sys
from PyQt6.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel, QPushButton, QTextEdit
from PyQt6.QtMultimedia import QMediaPlayer, QAudioOutput
from PyQt6.QtCore import QTimer, QUrl

class MediaPlayer(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Karaoke 🎤 Rock That Body")
        self.resize(600, 400)

        # --- Layout ---
        layout = QVBoxLayout()
        self.setLayout(layout)

        self.lyrics_label = QLabel("Presiona Play para iniciar 🎶")
        self.lyrics_label.setStyleSheet("font-size: 22px; color: yellow;")
        layout.addWidget(self.lyrics_label)

        self.play_button = QPushButton("▶ Play")
        self.play_button.clicked.connect(self.start_media)
        layout.addWidget(self.play_button)

        # --- Audio ---
        self.audio_output = QAudioOutput()
        self.audio_output.setVolume(0.8)

        self.media_player = QMediaPlayer()
        self.media_player.setAudioOutput(self.audio_output)

        # Cambia este archivo por tu canción
        self.media_player.setSource(QUrl.fromLocalFile("rockthatbody.mp3"))

        # --- Letra ---
        lyrics_text = """I wanna da-, I wanna dance in the lights
I wanna ro-, I wanna rock your body
I wanna go, I wanna go for a ride
Hop in the music and rock your body right
Rock that body, come on, come on, rock that body
Rock that body, come on, come on, rock that body (rock your body)
Rock that body, come on, come on, rock that body
Rock that body, come on, come on, rock that body (rock your body)
Rock that body, come on, come on, rock that body"""

        self.lines = lyrics_text.split("\n")
        self.line_index = 0

        # Timer para mostrar cada línea
        self.timer = QTimer()
        self.timer.timeout.connect(self.show_next_line)

    def start_media(self):
        self.line_index = 0
        self.media_player.play()
        self.timer.start(3500)  # cada 3.5 segundos

    def show_next_line(self):
        if self.line_index < len(self.lines):
            self.lyrics_label.setText(self.lines[self.line_index])
            self.line_index += 1
        else:
            self.timer.stop()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    player = MediaPlayer()
    player.show()
    sys.exit(app.exec())
