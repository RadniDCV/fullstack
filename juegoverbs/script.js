const verbs = [
    { verb: "act", correct: "actuar", wrong1: "correr", wrong2: "saltar" },
    { verb: "add", correct: "añadir", wrong1: "nadar", wrong2: "volar" },
    { verb: "arrest", correct: "arrestar", wrong1: "dormir", wrong2: "comer" },
    { verb: "assist", correct: "asistir", wrong1: "bailar", wrong2: "jugar" },
    { verb: "assist", correct: "asistir", wrong1: "bailar", wrong2: "jugar" }
];

let currentVerbIndex = 0;
let score = 0;

const verbDisplay = document.getElementById('verb-display');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultDisplay = document.getElementById('result');

function displayVerb() {
    const currentVerb = verbs[currentVerbIndex];
    verbDisplay.textContent = currentVerb.verb;

    const options = [currentVerb.correct, currentVerb.wrong1, currentVerb.wrong2];
    options.sort(() => Math.random() - 0.5); // Mezclar opciones

    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, currentVerb.correct));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        resultDisplay.textContent = "¡Correcto!";
        score++;
    } else {
        resultDisplay.textContent = `Incorrecto. La respuesta correcta es "${correct}".`;
    }
    nextButton.style.display = 'block';
}

function nextVerb() {
    currentVerbIndex++;
    if (currentVerbIndex < verbs.length) {
        displayVerb();
        resultDisplay.textContent = '';
        nextButton.style.display = 'none';
    } else {
        endGame();
    }
}

function endGame() {
    verbDisplay.textContent = `Juego terminado. Puntuación: ${score}/${verbs.length}`;
    optionsContainer.innerHTML = '';

    // Mostrar respuestas correctas
    const answersList = document.createElement('ul');
    verbs.forEach((verb, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${verb.verb}: ${verb.correct}`;
        answersList.appendChild(listItem);
    });
    optionsContainer.appendChild(answersList);

    // Botón para reiniciar el juego
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Reiniciar Juego';
    restartButton.addEventListener('click', restartGame);
    optionsContainer.appendChild(restartButton);

    nextButton.style.display = 'none';
}

function restartGame() {
    currentVerbIndex = 0;
    score = 0;
    resultDisplay.textContent = '';
    displayVerb();
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', nextVerb);
nextButton.style.display = 'none';

displayVerb();