function checkAnswers() {
    const verbs = {
        abide: {
            past: "abode",
            participle: "abiden",
            meaning: "sufrir"
        },
        arise: {
            past: "arose",
            participle: "arisen",
            meaning: "surgir"
        },
        awake: {
            past: "awoke",
            participle: "awoken",
            meaning: "despertar"
        },
        be:{
            past: "was",
            participle: "been",
            meaning: "ser"
        },
        bear:{
            past: "bore",
            participle: "born",
            meaning: "soportar"
        },
    };

    let resultText = "";

    // Función para verificar y aplicar las clases de error o acierto
    function checkInput(inputElement, correctValue) {
        if (inputElement.value.toLowerCase() === correctValue) {
            inputElement.classList.remove("input-incorrect");
            inputElement.classList.add("input-correct");
            return true;
        } else {
            inputElement.classList.remove("input-correct");
            inputElement.classList.add("input-incorrect");
            return false;
        }
    }

    // Verificar 'abide'
    const abidePast = document.getElementById('abide-past');
    const abideParticiple = document.getElementById('abide-participle');
    const abideMeaning = document.getElementById('abide-meaning');

    let abideCorrect = checkInput(abidePast, verbs.abide.past) &&
                       checkInput(abideParticiple, verbs.abide.participle) &&
                       checkInput(abideMeaning, verbs.abide.meaning);

    resultText += abideCorrect ? "Abide: Correct!<br>" : "Abide: Incorrect.<br>";

    // Verificar 'arise'
    const arisePast = document.getElementById('arise-past');
    const ariseParticiple = document.getElementById('arise-participle');
    const ariseMeaning = document.getElementById('arise-meaning');

    let ariseCorrect = checkInput(arisePast, verbs.arise.past) &&
                       checkInput(ariseParticiple, verbs.arise.participle) &&
                       checkInput(ariseMeaning, verbs.arise.meaning);

    resultText += ariseCorrect ? "Arise: Correct!<br>" : "Arise: Incorrect.<br>";

    // Verificar 'awake'
    const awakePast = document.getElementById('awake-past');
    const awakeParticiple = document.getElementById('awake-participle');
    const awakeMeaning = document.getElementById('awake-meaning');

    let awakeCorrect = checkInput(awakePast, verbs.awake.past) &&
                       checkInput(awakeParticiple, verbs.awake.participle) &&
                       checkInput(awakeMeaning, verbs.awake.meaning);

    resultText += awakeCorrect ? "Awake: Correct!<br>" : "Awake: Incorrect.<br>";

    // Verificar 'be'
    const bePast = document.getElementById('be-past');
    const beParticiple = document.getElementById('be-participle');
    const beMeaning = document.getElementById('be-meaning');

    let beCorrect = checkInput(bePast, verbs.be.past) &&
                       checkInput(beParticiple, verbs.be.participle) &&
                       checkInput(beMeaning, verbs.be.meaning);

    resultText += beCorrect ? "be: Correct!<br>" : "be: Incorrect.<br>";

    // Verificar 'bear'
    const bearPast = document.getElementById('bear-past');
    const bearParticiple = document.getElementById('bear-participle');
    const bearMeaning = document.getElementById('bear-meaning');

    let bearCorrect = checkInput(bearPast, verbs.bear.past) &&
                       checkInput(bearParticiple, verbs.bear.participle) &&
                       checkInput(bearMeaning, verbs.bear.meaning);

    resultText += beCorrect ? "bear: Correct!<br>" : "bear: Incorrect.<br>";





    document.getElementById('result').innerHTML = resultText;
}
