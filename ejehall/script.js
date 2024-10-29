// script.js

const lightning = document.getElementById('lightning');
const thunderSound = document.getElementById('thunder-sound');

function triggerLightning() {
  const delay = Math.random() * 15000 + 10000; // entre 1 y 6 segundos
  setTimeout(() => {
    lightning.style.opacity = 1;
    setTimeout(() => {
      lightning.style.opacity = 0;
      playThunder();
    }, 400); // Duración del rayo

    triggerLightning();
  }, delay);
}

function playThunder() {
  const delay = Math.random() * 5000; // retraso de entre 0 y 3 segundos
  setTimeout(() => {
    thunderSound.currentTime = 0;
    thunderSound.play();
  }, delay);
}

// Iniciar el efecto
triggerLightning();
