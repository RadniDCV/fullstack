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
        beat:{
            past: "beat",
            participle: "beaten",
            meaning: "golpear"
        },
        becom:{
            past: "became",
            participle: "become",
            meaning: "convertirse"
        },
        
        begin:{
            past: "began",
            participle: "begun",
            meaning: "empezar"
        },
        bet:{
            past: "bet",
            participle: "bet",
            meaning: "apostar"
        },
        bend:{
            past: "bent",
            participle: "bent",
            meaning: "torcer"
        },
        bid:{
            past: "bid",
            participle: "bid",
            meaning: "ofrecer"
        },
        
        bind:{
            past: "bound",
            participle: "bound",
            meaning: "unir"
        },
        
        bite:{
            past: "bit",
            participle: "bitten",
            meaning: "morder"
        },
        bleed:{
            past: "bled",
            participle: "bled",
            meaning: "sangrar"
        },
        
        blow:{
            past: "blew",
            participle: "blown",
            meaning: "soplar"
        },
        break:{
            past: "broke",
            participle: "broken",
            meaning: "romper"
        },
        breed:{
            past: "bred",
            participle: "bred",
            meaning: "criar"
        },
        bring:{
            past: "brought",
            participle: "brought",
            meaning: "traer"
        },
        broadcast:{
            past: "broadcast",
            participle: "broadcast",
            meaning: "transmitir"
        },
        build:{
            past: "built",
            participle: "built",
            meaning: "construir"
        },
        burn:{
            past: "burnt",
            participle: "burnt",
            meaning: "quemar"
        },
        burst:{
            past: "burst",
            participle: "burst",
            meaning: "explotar"
        },
        buy:{
            past: "bought",
            participle: "bought",
            meaning: "comprar"
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
   
    // Verificar 'beat'
    const beatPast = document.getElementById('beat-past');
    const beatParticiple = document.getElementById('beat-participle');
    const beatMeaning = document.getElementById('beat-meaning');

    let beatCorrect = checkInput(beatPast, verbs.beat.past) &&
                       checkInput(beatParticiple, verbs.beat.participle) &&
                       checkInput(beatMeaning, verbs.beat.meaning);

    resultText += beatCorrect ? "beat: Correct!<br>" : "beat: Incorrect.<br>";

    // Verificar 'becom'
    const becomPast = document.getElementById('becom-past');
    const becomParticiple = document.getElementById('becom-participle');
    const becomMeaning = document.getElementById('becom-meaning');

    let becomCorrect = checkInput(becomPast, verbs.becom.past) &&
                       checkInput(becomParticiple, verbs.becom.participle) &&
                       checkInput(becomMeaning, verbs.becom.meaning);

    resultText += becomCorrect ? "becom: Correct!<br>" : "becom: Incorrect.<br>";

    // Verificar 'begin'
    const beginPast = document.getElementById('begin-past');
    const beginParticiple = document.getElementById('begin-participle');
    const beginMeaning = document.getElementById('begin-meaning');

    let beginCorrect = checkInput(beginPast, verbs.begin.past) &&
                       checkInput(beginParticiple, verbs.begin.participle) &&
                       checkInput(beginMeaning, verbs.begin.meaning);

    resultText += beginCorrect ? "begin: Correct!<br>" : "begin: Incorrect.<br>";

    // Verificar 'bet'
    const betPast = document.getElementById('bet-past');
    const betParticiple = document.getElementById('bet-participle');
    const betMeaning = document.getElementById('bet-meaning');

    let betCorrect = checkInput(betPast, verbs.bet.past) &&
                       checkInput(betParticiple, verbs.bet.participle) &&
                       checkInput(betMeaning, verbs.bet.meaning);

    resultText += betCorrect ? "bet: Correct!<br>" : "bet: Incorrect.<br>";

    // Verificar 'bend'
    const bendPast = document.getElementById('bend-past');
    const bendParticiple = document.getElementById('bend-participle');
    const bendMeaning = document.getElementById('bend-meaning');

    let bendCorrect = checkInput(bendPast, verbs.bend.past) &&
                       checkInput(bendParticiple, verbs.bend.participle) &&
                       checkInput(bendMeaning, verbs.bend.meaning);

    resultText += bendCorrect ? "bend: Correct!<br>" : "bend: Incorrect.<br>";

    // Verificar 'bid'
    const bidPast = document.getElementById('bid-past');
    const bidParticiple = document.getElementById('bid-participle');
    const bidMeaning = document.getElementById('bid-meaning');

    let bidCorrect = checkInput(bidPast, verbs.bid.past) &&
                       checkInput(bidParticiple, verbs.bid.participle) &&
                       checkInput(bidMeaning, verbs.bid.meaning);

    resultText += bidCorrect ? "bid: Correct!<br>" : "bid: Incorrect.<br>";

    // Verificar 'bind'
    const bindPast = document.getElementById('bind-past');
    const bindParticiple = document.getElementById('bind-participle');
    const bindMeaning = document.getElementById('bind-meaning');

    let bindCorrect = checkInput(bindPast, verbs.bind.past) &&
                       checkInput(bindParticiple, verbs.bind.participle) &&
                       checkInput(bindMeaning, verbs.bind.meaning);

    resultText += bindCorrect ? "bind: Correct!<br>" : "bind: Incorrect.<br>";

    // Verificar 'bite'
    const bitePast = document.getElementById('bite-past');
    const biteParticiple = document.getElementById('bite-participle');
    const biteMeaning = document.getElementById('bite-meaning');

    let biteCorrect = checkInput(bitePast, verbs.bite.past) &&
                       checkInput(biteParticiple, verbs.bite.participle) &&
                       checkInput(biteMeaning, verbs.bite.meaning);

    resultText += biteCorrect ? "bite: Correct!<br>" : "bite: Incorrect.<br>";

    // Verificar 'bleed'
    const bleedPast = document.getElementById('bleed-past');
    const bleedParticiple = document.getElementById('bleed-participle');
    const bleedMeaning = document.getElementById('bleed-meaning');

    let bleedCorrect = checkInput(bleedPast, verbs.bleed.past) &&
                       checkInput(bleedParticiple, verbs.bleed.participle) &&
                       checkInput(bleedMeaning, verbs.bleed.meaning);

    resultText += bleedCorrect ? "bleed: Correct!<br>" : "bleed: Incorrect.<br>";

    // Verificar 'blow'
    const blowPast = document.getElementById('blow-past');
    const blowParticiple = document.getElementById('blow-participle');
    const blowMeaning = document.getElementById('blow-meaning');

    let blowCorrect = checkInput(blowPast, verbs.blow.past) &&
                       checkInput(blowParticiple, verbs.blow.participle) &&
                       checkInput(blowMeaning, verbs.blow.meaning);

    resultText += blowCorrect ? "blow: Correct!<br>" : "blow: Incorrect.<br>";

    // Verificar 'break'
    const breakPast = document.getElementById('break-past');
    const breakParticiple = document.getElementById('break-participle');
    const breakMeaning = document.getElementById('break-meaning');

    let breakCorrect = checkInput(breakPast, verbs.break.past) &&
                       checkInput(breakParticiple, verbs.break.participle) &&
                       checkInput(breakMeaning, verbs.break.meaning);

    resultText += breakCorrect ? "break: Correct!<br>" : "break: Incorrect.<br>";
    
    // Verificar 'breed'
    const breedPast = document.getElementById('breed-past');
    const breedParticiple = document.getElementById('breed-participle');
    const breedMeaning = document.getElementById('breed-meaning');

    let breedCorrect = checkInput(breedPast, verbs.breed.past) &&
                       checkInput(breedParticiple, verbs.breed.participle) &&
                       checkInput(breedMeaning, verbs.breed.meaning);

    resultText += breedCorrect ? "breed: Correct!<br>" : "breed: Incorrect.<br>";
    
    // Verificar 'bring'
    const bringPast = document.getElementById('bring-past');
    const bringParticiple = document.getElementById('bring-participle');
    const bringMeaning = document.getElementById('bring-meaning');

    let bringCorrect = checkInput(bringPast, verbs.bring.past) &&
                       checkInput(bringParticiple, verbs.bring.participle) &&
                       checkInput(bringMeaning, verbs.bring.meaning);

    resultText += bringCorrect ? "bring: Correct!<br>" : "bring: Incorrect.<br>";

    // Verificar 'broadcast'
    const broadcastPast = document.getElementById('broadcast-past');
    const broadcastParticiple = document.getElementById('broadcast-participle');
    const broadcastMeaning = document.getElementById('broadcast-meaning');

    let broadcastCorrect = checkInput(broadcastPast, verbs.broadcast.past) &&
                       checkInput(broadcastParticiple, verbs.broadcast.participle) &&
                       checkInput(broadcastMeaning, verbs.broadcast.meaning);

    resultText += broadcastCorrect ? "broadcast: Correct!<br>" : "broadcast: Incorrect.<br>";
    
    // Verificar 'build'
    const buildPast = document.getElementById('build-past');
    const buildParticiple = document.getElementById('build-participle');
    const buildMeaning = document.getElementById('build-meaning');

    let buildCorrect = checkInput(buildPast, verbs.build.past) &&
                       checkInput(buildParticiple, verbs.build.participle) &&
                       checkInput(buildMeaning, verbs.build.meaning);

    resultText += buildCorrect ? "build: Correct!<br>" : "build: Incorrect.<br>";
    
    // Verificar 'burn'
    const burnPast = document.getElementById('burn-past');
    const burnParticiple = document.getElementById('burn-participle');
    const burnMeaning = document.getElementById('burn-meaning');

    let burnCorrect = checkInput(burnPast, verbs.burn.past) &&
                       checkInput(burnParticiple, verbs.burn.participle) &&
                       checkInput(burnMeaning, verbs.burn.meaning);

    resultText += burnCorrect ? "burn: Correct!<br>" : "burn: Incorrect.<br>";

    // Verificar 'burst'
    const burstPast = document.getElementById('burst-past');
    const burstParticiple = document.getElementById('burst-participle');
    const burstMeaning = document.getElementById('burst-meaning');

    let burstCorrect = checkInput(burstPast, verbs.burst.past) &&
                       checkInput(burstParticiple, verbs.burst.participle) &&
                       checkInput(burstMeaning, verbs.burst.meaning);

    resultText += burstCorrect ? "burst: Correct!<br>" : "burst: Incorrect.<br>";
  
    // Verificar 'buy'
    const buyPast = document.getElementById('buy-past');
    const buyParticiple = document.getElementById('buy-participle');
    const buyMeaning = document.getElementById('buy-meaning');

    let buyCorrect = checkInput(buyPast, verbs.buy.past) &&
                       checkInput(buyParticiple, verbs.buy.participle) &&
                       checkInput(buyMeaning, verbs.buy.meaning);

    resultText += buyCorrect ? "buy: Correct!<br>" : "buy: Incorrect.<br>";





    document.getElementById('result').innerHTML = resultText;
}
