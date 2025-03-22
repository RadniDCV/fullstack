const verbs = [
  { verb: "act", correct: "actuar", wrong1: "correr", wrong2: "saltar" },
  { verb: "add", correct: "añadir", wrong1: "nadar", wrong2: "volar" },
  { verb: "arrest", correct: "arrestar", wrong1: "dormir", wrong2: "comer" },
  { verb: "assist", correct: "asistir", wrong1: "bailar", wrong2: "jugar" },
  { verb: "address", correct: "dirigirse", wrong1: "dormir", wrong2: "llegar" },
  { verb: "Amuse", correct: "Entretener", wrong1: "Creer", wrong2: "Marcar" },
  {
    verb: "Approach",
    correct: "Acercarse",
    wrong1: "Culpar",
    wrong2: "Extrañar",
  },
  {
    verb: "Ask",
    correct: "Preguntar",
    wrong1: "Pertenecer",
    wrong2: "Manejar"
  },
  {
    verb: "Agree",
    correct: "Concordar",
    wrong1: "Equilibrar",
    wrong2: "Mantener"
  },
  { verb: "Annoy", correct: "Molestar", wrong1: "Bendecir", wrong2: "Casarse" },
  {
    verb: "Answer",
    correct: "Responder",
    wrong1: "Cepillar",
    wrong2: "Masajear"
  },
  {
    verb: "Appear",
    correct: "Aparecer",
    wrong1: "Comportarse",
    wrong2: "Medir",
  },
  { verb: "Arrange", correct: "Arreglar", wrong1: "Respirar", wrong2: "Mover" },
  {
    verb: "Arrive",
    correct: "Llegar",
    wrong1: "Completar",
    wrong2: "Notificar",
  },
  {
    verb: "Abandon",
    correct: "Abandonar",
    wrong1: "Consistir",
    wrong2: "Enumerar",
  },
  { verb: "Abuse", correct: "Abusar", wrong1: "Contar", wrong2: "Nombrar" },
  { verb: "Acquire", correct: "Adquirir", wrong1: "Cerrar", wrong2: "Notar" },
  { verb: "Admire", correct: "Admirar", wrong1: "Cocinar", wrong2: "Observar" },
  { verb: "Adore", correct: "Adorar", wrong1: "Chocar", wrong2: "Ofrecer" },
  { verb: "Advance", correct: "Avanzar", wrong1: "Cruzar", wrong2: "Abrir" },
  { verb: "Advice", correct: "Aconsejar", wrong1: "Llamar", wrong2: "Ordenar" },
  {
    verb: "Announce",
    correct: "Anunciar",
    wrong1: "Cuidar",
    wrong2: "Ejecutar",
  },
  {
    verb: "Attempt",
    correct: "Intentar",
    wrong1: "Llevar",
    wrong2: "Telefonear",
  },
  { verb: "Avoid", correct: "Evitar", wrong1: "Cambiar", wrong2: "Planificar" },
  { verb: "Attack", correct: "Atacar", wrong1: "Chequear", wrong2: "Jugar" },
  { verb: "Assure", correct: "Asegurar", wrong1: "Cargar", wrong2: "Orar" },
  {
    verb: "Apologize",
    correct: "Disculparse",
    wrong1: "Limpiar",
    wrong2: "Preferir",
  },
  { verb: "Allow", correct: "Permitir", wrong1: "Escalar", wrong2: "Preparar" },
  { verb: "Admit", correct: "Admitir", wrong1: "Cubrir", wrong2: "Estacionar" },
  { verb: "Accuse", correct: "Acusar", wrong1: "Llorar", wrong2: "Pasar" },
  { verb: "Accede", correct: "Acceder", wrong1: "Cobrar", wrong2: "Recoger" },
  {
    verb: "Absorb",
    correct: "Absorber",
    wrong1: "Reclamar",
    wrong2: "Complacer",
  },
  { verb: "Abolish", correct: "Abolir", wrong1: "Mandar", wrong2: "Practicar" },
  {
    verb: "Accent",
    correct: "Acentuar",
    wrong1: "Comparar",
    wrong2: "Prometer",
  },
  { verb: "Beg", correct: "Rogar", wrong1: "Componer", wrong2: "Pronunciar" },
  {
    verb: "Believe",
    correct: "Creer",
    wrong1: "Considerar",
    wrong2: "Castigar",
  },
  { verb: "Blame", correct: "Culpar", wrong1: "Contener", wrong2: "Empujar" },
  {
    verb: "Belong",
    correct: "Pertenecer",
    wrong1: "Copiar",
    wrong2: "Repetir",
  },
  {
    verb: "Balance",
    correct: "Equilibrar",
    wrong1: "Coronar",
    wrong2: "Reportar",
  },
  {
    verb: "Bless",
    correct: "Bendecir",
    wrong1: "Continuar",
    wrong2: "Solicitar",
  },
  { verb: "Brush", correct: "Cepillar", wrong1: "Cometer", wrong2: "Rechazar" },
  {
    verb: "Behave",
    correct: "Comportarse",
    wrong1: "Combinar",
    wrong2: "Levantar",
  },
  {
    verb: "Breathe",
    correct: "Respirar",
    wrong1: "Colectar",
    wrong2: "Registrar",
  },
  {
    verb: "Complete",
    correct: "Completar",
    wrong1: "Bailar",
    wrong2: "Recibir",
  },
  {
    verb: "Consist",
    correct: "Consistir",
    wrong1: "Vestir",
    wrong2: "Recordar",
  },
  { verb: "Count", correct: "Contar", wrong1: "Dejar caer", wrong2: "Reparar" },
  { verb: "Close", correct: "Cerrar", wrong1: "Morir", wrong2: "Requerir" },
  { verb: "Cook", correct: "Cocinar", wrong1: "Declarar", wrong2: "Reservar" },
  { verb: "Crash", correct: "Chocar", wrong1: "Demorar", wrong2: "Resolver" },
  { verb: "Cross", correct: "Cruzar", wrong1: "Entregar", wrong2: "Buscar" },
  { verb: "Call", correct: "Llamar", wrong1: "Denegar", wrong2: "Salvar" },
  { verb: "Care", correct: "Cuidar", wrong1: "Secar", wrong2: "Servir" },
  { verb: "Carry", correct: "Llevar", wrong1: "Destruir", wrong2: "Firmar" },
  { verb: "Change", correct: "Cambiar", wrong1: "Dedicar", wrong2: "Sonreír" },
  {
    verb: "Check",
    correct: "Chequear",
    wrong1: "Disfrutar",
    wrong2: "Permanecer",
  },
  {
    verb: "Charge",
    correct: "Cargar",
    wrong1: "Comprometer",
    wrong2: "Estudiar",
  },
  { verb: "Clean", correct: "Limpiar", wrong1: "Envidiar", wrong2: "Sufrir" },
  { verb: "Climb", correct: "Escalar", wrong1: "Expresar", wrong2: "Fumar" },
  { verb: "Cover", correct: "Cubrir", wrong1: "Exclamar", wrong2: "Detener" },
  { verb: "Cry", correct: "Llorar", wrong1: "Explicar", wrong2: "Comenzar" },
  { verb: "Cash", correct: "Cobrar", wrong1: "Fracasar", wrong2: "Sonar" },
  {
    verb: "Claim",
    correct: "Reclamar",
    wrong1: "Archivar",
    wrong2: "Sorprender",
  },
  { verb: "Command", correct: "Mandar", wrong1: "Despedir", wrong2: "Navegar" },
  {
    verb: "Compare",
    correct: "Comparar",
    wrong1: "Llenar",
    wrong2: "Conversar",
  },
  { verb: "Compose", correct: "Componer", wrong1: "Seguir", wrong2: "Tocar" },
  {
    verb: "Consider",
    correct: "Considerar",
    wrong1: "Freir",
    wrong2: "Entrenar",
  },
  {
    verb: "Contain",
    correct: "Contener",
    wrong1: "Terminar",
    wrong2: "Probar",
  },
  { verb: "Copy", correct: "Copiar", wrong1: "Pescar", wrong2: "Traducir" },
  { verb: "Crown", correct: "Coronar", wrong1: "Arreglar", wrong2: "Viajar" },
  {
    verb: "Continue",
    correct: "Continuar",
    wrong1: "Ganar",
    wrong2: "Molestar",
  },
  { verb: "Commit", correct: "Cometer", wrong1: "Adivinar", wrong2: "Atar" },
  { verb: "Combine", correct: "Combinar", wrong1: "Ayudar", wrong2: "Probar" },
  {
    verb: "Collect",
    correct: "Colectar",
    wrong1: "Desear",
    wrong2: "Intentar",
  },
  { verb: "Dance", correct: "Bailar", wrong1: "Suceder", wrong2: "Confiar" },
  { verb: "Dress", correct: "Vestir", wrong1: "Apurarse", wrong2: "Girar" },
  { verb: "Dropp", correct: "Dejar caer", wrong1: "Imaginar", wrong2: "Usar" },
  { verb: "Die", correct: "Morir", wrong1: "Juzgar", wrong2: "Unir" },
  { verb: "Declare", correct: "Declarar", wrong1: "Besar", wrong2: "Visitar" },
  { verb: "Delay", correct: "Demorar", wrong1: "Matar", wrong2: "Variar" },
  { verb: "Deliver", correct: "Entregar", wrong1: "Reir", wrong2: "Esperar" },
  { verb: "Deny", correct: "Denegar", wrong1: "Gustar", wrong2: "Querer" },
  { verb: "Dry", correct: "Secar", wrong1: "Mirar", wrong2: "Caminar" },
  { verb: "Destroy", correct: "Destruir", wrong1: "Marcar", wrong2: "Lavar" },
  {
    verb: "Devote",
    correct: "Dedicar",
    wrong1: "Extrañar",
    wrong2: "Observar",
  },
  { verb: "Enjoy", correct: "Disfrutar", wrong1: "Manejar", wrong2: "Desear" },
  {
    verb: "Engage",
    correct: "Comprometer",
    wrong1: "Mantener",
    wrong2: "Trabajar",
  },
  { verb: "Envy", correct: "Envidiar", wrong1: "Casarse", wrong2: "Calentar" },
  { verb: "Express", correct: "Expresar", wrong1: "Masajear", wrong2: "Regar" },
  { verb: "Exclaim", correct: "Exclamar", wrong1: "Medir", wrong2: "Pesar" },
  { verb: "Explain", correct: "Explicar", wrong1: "Mover", wrong2: "Silbar" },
  {
    verb: "Fail",
    correct: "Fracasar",
    wrong1: "Notificar",
    wrong2: "Preocuparse",
  },
  { verb: "File", correct: "Archivar", wrong1: "Enumerar", wrong2: "Herir" },
  {
    verb: "Fire",
    correct: "Despedir",
    wrong1: "Nombrar",
    wrong2: "Entretener",
  },
  { verb: "Fill", correct: "Llenar", wrong1: "Notar", wrong2: "Acercarse" },
  {
    verb: "Follow",
    correct: "Seguir",
    wrong1: "Observar",
    wrong2: "Preguntar",
  },
  { verb: "Fry", correct: "Freir", wrong1: "Ofrecer", wrong2: "Concordar" },
  { verb: "Finish", correct: "Terminar", wrong1: "Abrir", wrong2: "Molestar" },
  { verb: "Fish", correct: "Pescar", wrong1: "Ordenar", wrong2: "Responder" },
  { verb: "Fix", correct: "Arreglar", wrong1: "Ejecutar", wrong2: "Aparecer" },
  { verb: "Gain", correct: "Ganar", wrong1: "Telefonear", wrong2: "Arreglar" },
  {
    verb: "Guess",
    correct: "Adivinar",
    wrong1: "Planificar",
    wrong2: "Llegar",
  },
  { verb: "Help", correct: "Ayudar", wrong1: "Jugar", wrong2: "Abandonar" },
  { verb: "Hope", correct: "Desear", wrong1: "Orar", wrong2: "Abusar" },
  {
    verb: "Happen",
    correct: "Suceder",
    wrong1: "Preferir",
    wrong2: "Adquirir",
  },
  { verb: "Hurry", correct: "Apurarse", wrong1: "Preparar", wrong2: "Admirar" },
  {
    verb: "Imagine",
    correct: "Imaginar",
    wrong1: "Estacionar",
    wrong2: "Adorar",
  },
  { verb: "Judge", correct: "Juzgar", wrong1: "Pasar", wrong2: "Avanzar" },
  { verb: "Kiss", correct: "Besar", wrong1: "Recoger", wrong2: "Aconsejar" },
  { verb: "Kill", correct: "Matar", wrong1: "Complacer", wrong2: "Anunciar" },
  { verb: "Laugh", correct: "Reir", wrong1: "Practicar", wrong2: "Intentar" },
  { verb: "Like", correct: "Gustar", wrong1: "Prometer", wrong2: "Evitar" },
  { verb: "Look", correct: "Mirar", wrong1: "Pronunciar", wrong2: "Atacar" },
  { verb: "Mark", correct: "Marcar", wrong1: "Castigar", wrong2: "Asegurar" },
  {
    verb: "Miss",
    correct: "Extrañar",
    wrong1: "Empujar",
    wrong2: "Disculparse",
  },
  { verb: "Manage", correct: "Manejar", wrong1: "Repetir", wrong2: "Permitir" },
  {
    verb: "Maintain",
    correct: "Mantener",
    wrong1: "Reportar",
    wrong2: "Admitir",
  },
  { verb: "Marry", correct: "Casarse", wrong1: "Solicitar", wrong2: "Acusar" },
  {
    verb: "Massage",
    correct: "Masajear",
    wrong1: "Rechazar",
    wrong2: "Acceder",
  },
  { verb: "Measure", correct: "Medir", wrong1: "Levantar", wrong2: "Absorber" },
  { verb: "Move", correct: "Mover", wrong1: "Registrar", wrong2: "Abolir" },
  {
    verb: "Notice",
    correct: "Notificar",
    wrong1: "Recibir",
    wrong2: "Acentuar",
  },
  { verb: "Number", correct: "Enumerar", wrong1: "Recordar", wrong2: "Rogar" },
  { verb: "Name", correct: "Nombrar", wrong1: "Reparar", wrong2: "Creer" },
  { verb: "Note", correct: "Notar", wrong1: "Requerir", wrong2: "Culpar" },
  {
    verb: "Observe",
    correct: "Observar",
    wrong1: "Reservar",
    wrong2: "Pertenecer",
  },
  {
    verb: "Offer",
    correct: "Ofrecer",
    wrong1: "Resolver",
    wrong2: "Equilibrar",
  },
  { verb: "Open", correct: "Abrir", wrong1: "Buscar", wrong2: "Bendecir" },
  { verb: "Order", correct: "Ordenar", wrong1: "Salvar", wrong2: "Cepillar" },
  {
    verb: "Perform",
    correct: "Ejecutar",
    wrong1: "Servir",
    wrong2: "Comportarse",
  },
  {
    verb: "Phone",
    correct: "Telefonear",
    wrong1: "Firmar",
    wrong2: "Respirar",
  },
  {
    verb: "Plan",
    correct: "Planificar",
    wrong1: "Sonreír",
    wrong2: "Completar",
  },
  { verb: "Play", correct: "Jugar", wrong1: "Permanecer", wrong2: "Consistir" },
  { verb: "Pray", correct: "Orar", wrong1: "Estudiar", wrong2: "Contar" },
  { verb: "Prefer", correct: "Preferir", wrong1: "Sufrir", wrong2: "Cerrar" },
  { verb: "Prepare", correct: "Preparar", wrong1: "Fumar", wrong2: "Cocinar" },
  { verb: "Park", correct: "Estacionar", wrong1: "Detener", wrong2: "Chocar" },
  { verb: "Pass", correct: "Pasar", wrong1: "Comenzar", wrong2: "Cruzar" },
  { verb: "Pick", correct: "Recoger", wrong1: "Sonar", wrong2: "Llamar" },
  {
    verb: "Please",
    correct: "Complacer",
    wrong1: "Sorprender",
    wrong2: "Cuidar",
  },
  {
    verb: "Practice",
    correct: "Practicar",
    wrong1: "Navegar",
    wrong2: "Llevar",
  },
  {
    verb: "Promise",
    correct: "Prometer",
    wrong1: "Conversar",
    wrong2: "Cambiar",
  },
  {
    verb: "Pronounce",
    correct: "Pronunciar",
    wrong1: "Tocar",
    wrong2: "Chequear",
  },
  { verb: "Punish", correct: "Castigar", wrong1: "Entrenar", wrong2: "Cargar" },
  { verb: "Push", correct: "Empujar", wrong1: "Probar", wrong2: "Limpiar" },
  { verb: "Repeat", correct: "Repetir", wrong1: "Traducir", wrong2: "Escalar" },
  { verb: "Report", correct: "Reportar", wrong1: "Viajar", wrong2: "Cubrir" },
  {
    verb: "Request",
    correct: "Solicitar",
    wrong1: "Molestar",
    wrong2: "Llorar",
  },
  { verb: "Refuse", correct: "Rechazar", wrong1: "Atar", wrong2: "Cobrar" },
  { verb: "Raise", correct: "Levantar", wrong1: "Probar", wrong2: "Reclamar" },
  {
    verb: "Register",
    correct: "Registrar",
    wrong1: "Intentar",
    wrong2: "Mandar",
  },
  {
    verb: "Receive",
    correct: "Recibir",
    wrong1: "Confiar",
    wrong2: "Comparar",
  },
  {
    verb: "Remember",
    correct: "Recordar",
    wrong1: "Girar",
    wrong2: "Componer",
  },
  { verb: "Repair", correct: "Reparar", wrong1: "Usar", wrong2: "Considerar" },
  { verb: "Require", correct: "Requerir", wrong1: "Unir", wrong2: "Contener" },
  { verb: "Reserve", correct: "Reservar", wrong1: "Visitar", wrong2: "Copiar" },
  { verb: "Resolve", correct: "Resolver", wrong1: "Variar", wrong2: "Coronar" },
  { verb: "Search", correct: "Buscar", wrong1: "Esperar", wrong2: "Continuar" },
  { verb: "Save", correct: "Salvar", wrong1: "Querer", wrong2: "Cometer" },
  { verb: "Serve", correct: "Servir", wrong1: "Caminar", wrong2: "Combinar" },
  { verb: "Sign", correct: "Firmar", wrong1: "Lavar", wrong2: "Colectar" },
  { verb: "Smile", correct: "Sonreír", wrong1: "Observar", wrong2: "Bailar" },
  { verb: "Stay", correct: "Permanecer", wrong1: "Desear", wrong2: "Vestir" },
  {
    verb: "Study",
    correct: "Estudiar",
    wrong1: "Trabajar",
    wrong2: "Dejar caer",
  },
  { verb: "Suffer", correct: "Sufrir", wrong1: "Calentar", wrong2: "Morir" },
  { verb: "Smoke", correct: "Fumar", wrong1: "Regar", wrong2: "Declarar" },
  { verb: "Stop", correct: "Detener", wrong1: "Pesar", wrong2: "Demorar" },
  { verb: "Start", correct: "Comenzar", wrong1: "Silbar", wrong2: "Entregar" },
  { verb: "Sound", correct: "Sonar", wrong1: "Preocuparse", wrong2: "Denegar" },
  { verb: "Surprise", correct: "Sorprender", wrong1: "Herir", wrong2: "Secar" },
  {
    verb: "Sail",
    correct: "Navegar",
    wrong1: "Entretener",
    wrong2: "Destruir",
  },
  {
    verb: "Talk",
    correct: "Conversar",
    wrong1: "Acercarse",
    wrong2: "Dedicar",
  },
  { verb: "Touch", correct: "Tocar", wrong1: "Preguntar", wrong2: "Disfrutar" },
  {
    verb: "Train",
    correct: "Entrenar",
    wrong1: "Concordar",
    wrong2: "Comprometer",
  },
  { verb: "Taste", correct: "Probar", wrong1: "Molestar", wrong2: "Envidiar" },
  {
    verb: "Translate",
    correct: "Traducir",
    wrong1: "Responder",
    wrong2: "Expresar",
  },
  { verb: "Travel", correct: "Viajar", wrong1: "Aparecer", wrong2: "Exclamar" },
  {
    verb: "Trouble",
    correct: "Molestar",
    wrong1: "Arreglar",
    wrong2: "Explicar",
  },
  { verb: "Tie", correct: "Atar", wrong1: "Llegar", wrong2: "Fracasar" },
  { verb: "Test", correct: "Probar", wrong1: "Abandonar", wrong2: "Archivar" },
  { verb: "Try", correct: "Intentar", wrong1: "Abusar", wrong2: "Despedir" },
  { verb: "Trust", correct: "Confiar", wrong1: "Adquirir", wrong2: "Llenar" },
  { verb: "Turn", correct: "Girar", wrong1: "Admirar", wrong2: "Seguir" },
  { verb: "Use", correct: "Usar", wrong1: "Adorar", wrong2: "Freir" },
  { verb: "Unite", correct: "Unir", wrong1: "Avanzar", wrong2: "Terminar" },
  { verb: "Visit", correct: "Visitar", wrong1: "Aconsejar", wrong2: "Pescar" },
  { verb: "Vary", correct: "Variar", wrong1: "Anunciar", wrong2: "Arreglar" },
  { verb: "Wait", correct: "Esperar", wrong1: "Intentar", wrong2: "Ganar" },
  { verb: "Want", correct: "Querer", wrong1: "Evitar", wrong2: "Adivinar" },
  { verb: "Walk", correct: "Caminar", wrong1: "Atacar", wrong2: "Ayudar" },
  { verb: "Wash", correct: "Lavar", wrong1: "Asegurar", wrong2: "Desear" },
  {
    verb: "Watch",
    correct: "Observar",
    wrong1: "Disculparse",
    wrong2: "Suceder",
  },
  { verb: "Wish", correct: "Desear", wrong1: "Permitir", wrong2: "Apurarse" },
  { verb: "Work", correct: "Trabajar", wrong1: "Admitir", wrong2: "Imaginar" },
  { verb: "Warm", correct: "Calentar", wrong1: "Acusar", wrong2: "Juzgar" },
  { verb: "Water", correct: "Regar", wrong1: "Acceder", wrong2: "Besar" },
  { verb: "Weigh", correct: "Pesar", wrong1: "Absorber", wrong2: "Matar" },
  { verb: "Whistle", correct: "Silbar", wrong1: "Abolir", wrong2: "Reir" },
  {
    verb: "Worry",
    correct: "Preocuparse",
    wrong1: "Acentuar",
    wrong2: "Gustar",
  },
  { verb: "Wound", correct: "Herir", wrong1: "Rogar", wrong2: "Mirar" },
];

let currentVerbIndex = 0;
let score = 0;

const verbDisplay = document.getElementById("verb-display");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultDisplay = document.getElementById("result");

function displayVerb() {
  const currentVerb = verbs[currentVerbIndex];
  verbDisplay.textContent = currentVerb.verb;

  const options = [currentVerb.correct, currentVerb.wrong1, currentVerb.wrong2];
  options.sort(() => Math.random() - 0.5); // Mezclar opciones

  optionsContainer.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () =>
      checkAnswer(option, currentVerb.correct)
    );
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
  nextButton.style.display = "block";
}

function nextVerb() {
  currentVerbIndex++;
  if (currentVerbIndex < verbs.length) {
    displayVerb();
    resultDisplay.textContent = "";
    nextButton.style.display = "none";
  } else {
    endGame();
  }
}

function endGame() {
  verbDisplay.textContent = `Juego terminado. Puntuación: ${score}/${verbs.length}`;
  optionsContainer.innerHTML = "";

  // Mostrar respuestas correctas
  /*const answersList = document.createElement("ul");
  verbs.forEach((verb, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${verb.verb}: ${verb.correct}`;
    answersList.appendChild(listItem);
  });
  optionsContainer.appendChild(answersList);*/

  // Botón para reiniciar el juego
  const restartButton = document.createElement("button");
  restartButton.textContent = "Reiniciar Juego";
  restartButton.addEventListener("click", restartGame);
  optionsContainer.appendChild(restartButton);

  nextButton.style.display = "none";
}

function restartGame() {
  currentVerbIndex = 0;
  score = 0;
  resultDisplay.textContent = "";
  displayVerb();
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", nextVerb);
nextButton.style.display = "none";

displayVerb();
