function checkAnswer() {
    // Obtener la respuesta seleccionada
    const selectedOption = document.querySelector('input[name="verb"]:checked');

    // Verificar si seleccionó alguna opción
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Por favor, selecciona una opción.";
        document.getElementById('feedback').classList.add('incorrect');
        return;
    }

    // Respuesta correcta
    const correctAnswer = "went";

    // Mostrar si la respuesta es correcta o incorrecta
    if (selectedOption.value === correctAnswer) {
        document.getElementById('feedback').textContent = "¡Correcto!";
        document.getElementById('feedback').classList.remove('incorrect');
        document.getElementById('feedback').classList.add('feedback');
    } else {
        document.getElementById('feedback').textContent = "Incorrecto, la respuesta correcta es 'went'.";
        document.getElementById('feedback').classList.remove('feedback');
        document.getElementById('feedback').classList.add('incorrect');
    }
}