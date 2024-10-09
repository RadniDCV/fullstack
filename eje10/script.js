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
        cast:{
            past: "cast",
            participle: "cast",
            meaning: "lanzar"
        },
        catch:{
            past: "caught",
            participle: "caught",
            meaning: "atrapar"
        },
        choose:{
            past: "choset",
            participle: "chosen",
            meaning: "elegir"
        },
        clap:{
            past: "clapt",
            participle: "clapt",
            meaning: "aplaudir"
        },
        cling:{
            past: "clung",
            participle: "clung",
            meaning: "agarrase"
        },
        clothe:{
            past: "clad",
            participle: "clad",
            meaning: "vestir"
        },
        come:{
            past: "came",
            participle: "come",
            meaning: "venir"
        },
        cost:{
            past: "cost",
            participle: "cost",
            meaning: "costar"
        },
        creep:{
            past: "crept",
            participle: "crept",
            meaning: "gatear"
        },
        cut:{
            past: "cut",
            participle: "cut",
            meaning: "cortar"
        },
        deal:{
            past: "dealt",
            participle: "dealt",
            meaning: "repartir"
        },
        dig:{
            past: "dug",
            participle: "dug",
            meaning: "cavar"
        },
        dive:{
            past: "dove",
            participle: "dived",
            meaning: "bucear"
        },
        do:{
            past: "did",
            participle: "done",
            meaning: "hacer"
        },
        draw:{
            past: "drew",
            participle: "drawn",
            meaning: "dibujar"
        },
        dream:{
            past: "dreamt",
            participle: "dreamt",
            meaning: "soñar"
        },
        drink:{
            past: "drank",
            participle: "drunk",
            meaning: "beber"
        },
        drive:{
            past: "drove",
            participle: "driven",
            meaning: "conducir"
        },
        dwell:{
            past: "dwelt",
            participle: "dwelt",
            meaning: "habilitar"
        },
        eat:{
            past: "ate",
            participle: "eaten",
            meaning: "comer"
        },
        fall:{
            past: "fell",
            participle: "fallen",
            meaning: "caer"
        },
        feed:{
            past: "fed",
            participle: "fed",
            meaning: "alimentar"
        },
        feel:{
            past: "felt",
            participle: "felt",
            meaning: "sentir"
        },

        fight:{
            past: "fought",
            participle: "fought",
            meaning: "pelear"
        },
        find:{
            past: "found",
            participle: "found",
            meaning: "encontrar"
        },
        flee:{
            past: "fled",
            participle: "fled",
            meaning: "huir"
        },
        fling:{
            past: "flung",
            participle: "flung",
            meaning: "arrojar"
        },
        fly:{
            past: "flew",
            participle: "flown",
            meaning: "volar"
        },
        forbid:{
            past: "forbade",
            participle: "forbidden",
            meaning: "prohibir"
        },
        forecast:{
            past: "forecast",
            participle: "forecast",
            meaning: "pronosticar"
        },
        foresee:{
            past: "foresaw",
            participle: "foreseen",
            meaning: "preveer"
        },
        foretell:{
            past: "foretold",
            participle: "foretold",
            meaning: "predecir"
        },
        forget:{
            past: "forgot",
            participle: "forgotten",
            meaning: "olvidar"
        },
        forgive:{
            past: "forgave",
            participle: "forgiven",
            meaning: "perdonar"
        },
        forsake:{
            past: "forsook",
            participle: "forsaken",
            meaning: "abandonar"
        },
        freeze:{
            past: "froze",
            participle: "frozen",
            meaning: "congelar"
        },
        get:{
            past: "got",
            participle: "gotten",
            meaning: "conseguir"
        },
        give:{
            past: "gave",
            participle: "given",
            meaning: "dar"
        },
        go:{
            past: "went",
            participle: "gone",
            meaning: "ir"
        },
        grind:{
            past: "ground",
            participle: "ground",
            meaning: "moler"
        },
        grow:{
            past: "gre",
            participle: "grown",
            meaning: "cultivar"
        },
        handwrite:{
            past: "handwrote",
            participle: "handwritten",
            meaning: "escribir a mano"
        },
        hang:{
            past: "hung",
            participle: "hung",
            meaning: "colgar"
        },
        have:{
            past: "had",
            participle: "had",
            meaning: "tener"
        },
        hear:{
            past: "heard",
            participle: "heard",
            meaning: "oir"
        },
        hide:{
            past: "hid",
            participle: "hidden",
            meaning: "esconderse"
        },
        hit:{
            past: "hit",
            participle: "hit",
            meaning: "golpear"
        },
        hold:{
            past: "held",
            participle: "held",
            meaning: "sostener"
        },
        hurt:{
            past: "hurt",
            participle: "hurt",
            meaning: "herir"
        },
        inlay:{
            past: "inlaid",
            participle: "inlaid",
            meaning: "incrustar"
        },
        input:{
            past: "input",
            participle: "input",
            meaning: "introducir"
        },
        keep:{
            past: "kept",
            participle: "kept",
            meaning: "mantener"
        },
        kneel:{
            past: "knelt",
            participle: "knelt",
            meaning: "arrodillarse"
        },
        knit:{
            past: "knit",
            participle: "knit",
            meaning: "tejer"
        },
        know:{
            past: "knew",
            participle: "known",
            meaning: "saber"
        },
        lay:{
            past: "laid",
            participle: "laid",
            meaning: "poner"
        },
        lead:{
            past: "led",
            participle: "led",
            meaning: "guiar"
        },
        lean:{
            past: "leant",
            participle: "leant",
            meaning: "inclinarse"
        },
        leap:{
            past: "leapt",
            participle: "leapt",
            meaning: "saltar"
        },
        learn:{
            past: "learnt",
            participle: "learnt",
            meaning: "aprender"
        },
        leave:{
            past: "left",
            participle: "left",
            meaning: "irse"
        },
        lend:{
            past: "lent",
            participle: "lent",
            meaning: "prestar"
        },
        let:{
            past: "let",
            participle: "let",
            meaning: "permitir"
        },
        lie:{
            past: "lay",
            participle: "lain",
            meaning: "echarse"
        },
        light:{
            past: "lit",
            participle: "lit",
            meaning: "encender"
        },
        lose:{
            past: "lost",
            participle: "lost",
            meaning: "perder"
        },
        make:{
            past: "made",
            participle: "lost",
            meaning: "hacer"
        },
        
        mean:{
            past: "meant",
            participle: "meant",
            meaning: "significar"
        },
        meet:{
            past: "met",
            participle: "met",
            meaning: "conocer"
        },
        melt:{
            past: "melted",
            participle: "molten",
            meaning: "derretir"
        },
        mislead:{
            past: "misled",
            participle: "misled",
            meaning: "engañar"
        },
        mistake:{
            past: "mistook",
            participle: "mistaken",
            meaning: "confundir"
        },
        misunderstand:{
            past: "misunderstood",
            participle: "misunderstood",
            meaning: "entender mal"
        },
        mow:{
            past: "mowed",
            participle: "mown",
            meaning: "segar"
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
  
    // Verificar 'cast'
    const castPast = document.getElementById('cast-past');
    const castParticiple = document.getElementById('cast-participle');
    const castMeaning = document.getElementById('cast-meaning');

    let castCorrect = checkInput(castPast, verbs.cast.past) &&
                       checkInput(castParticiple, verbs.cast.participle) &&
                       checkInput(castMeaning, verbs.cast.meaning);

    resultText += castCorrect ? "cast: Correct!<br>" : "cast: Incorrect.<br>";
    
    // Verificar 'catch'
    const catchPast = document.getElementById('catch-past');
    const catchParticiple = document.getElementById('catch-participle');
    const catchMeaning = document.getElementById('catch-meaning');

    let catchCorrect = checkInput(catchPast, verbs.catch.past) &&
                       checkInput(catchParticiple, verbs.catch.participle) &&
                       checkInput(catchMeaning, verbs.catch.meaning);

    resultText += catchCorrect ? "catch: Correct!<br>" : "catch: Incorrect.<br>";
    
    // Verificar 'choose'
    const choosePast = document.getElementById('choose-past');
    const chooseParticiple = document.getElementById('choose-participle');
    const chooseMeaning = document.getElementById('choose-meaning');

    let chooseCorrect = checkInput(choosePast, verbs.choose.past) &&
                       checkInput(chooseParticiple, verbs.choose.participle) &&
                       checkInput(chooseMeaning, verbs.choose.meaning);

    resultText += chooseCorrect ? "choose: Correct!<br>" : "choose: Incorrect.<br>";
    
    // Verificar 'clap'
    const clapPast = document.getElementById('clap-past');
    const clapParticiple = document.getElementById('clap-participle');
    const clapMeaning = document.getElementById('clap-meaning');

    let clapCorrect = checkInput(clapPast, verbs.clap.past) &&
                       checkInput(clapParticiple, verbs.clap.participle) &&
                       checkInput(clapMeaning, verbs.clap.meaning);

    resultText += clapCorrect ? "clap: Correct!<br>" : "clap: Incorrect.<br>";
    
    // Verificar 'cling'
    const clingPast = document.getElementById('cling-past');
    const clingParticiple = document.getElementById('cling-participle');
    const clingMeaning = document.getElementById('cling-meaning');

    let clingCorrect = checkInput(clingPast, verbs.cling.past) &&
                       checkInput(clingParticiple, verbs.cling.participle) &&
                       checkInput(clingMeaning, verbs.cling.meaning);

    resultText += clingCorrect ? "cling: Correct!<br>" : "cling: Incorrect.<br>";
    
    // Verificar 'clothe'
    const clothePast = document.getElementById('clothe-past');
    const clotheParticiple = document.getElementById('clothe-participle');
    const clotheMeaning = document.getElementById('clothe-meaning');

    let clotheCorrect = checkInput(clothePast, verbs.clothe.past) &&
                       checkInput(clotheParticiple, verbs.clothe.participle) &&
                       checkInput(clotheMeaning, verbs.clothe.meaning);

    resultText += clotheCorrect ? "clothe: Correct!<br>" : "clothe: Incorrect.<br>";
    
    // Verificar 'come'
    const comePast = document.getElementById('come-past');
    const comeParticiple = document.getElementById('come-participle');
    const comeMeaning = document.getElementById('come-meaning');

    let comeCorrect = checkInput(comePast, verbs.come.past) &&
                       checkInput(comeParticiple, verbs.come.participle) &&
                       checkInput(comeMeaning, verbs.come.meaning);

    resultText += comeCorrect ? "come: Correct!<br>" : "come: Incorrect.<br>";
    
    // Verificar 'cost'
    const costPast = document.getElementById('cost-past');
    const costParticiple = document.getElementById('cost-participle');
    const costMeaning = document.getElementById('cost-meaning');

    let costCorrect = checkInput(costPast, verbs.cost.past) &&
                       checkInput(costParticiple, verbs.cost.participle) &&
                       checkInput(costMeaning, verbs.cost.meaning);

    resultText += costCorrect ? "cost: Correct!<br>" : "cost: Incorrect.<br>";
    
    // Verificar 'creep'
    const creepPast = document.getElementById('creep-past');
    const creepParticiple = document.getElementById('creep-participle');
    const creepMeaning = document.getElementById('creep-meaning');

    let creepCorrect = checkInput(creepPast, verbs.creep.past) &&
                       checkInput(creepParticiple, verbs.creep.participle) &&
                       checkInput(creepMeaning, verbs.creep.meaning);

    resultText += creepCorrect ? "creep: Correct!<br>" : "creep: Incorrect.<br>";
    
    // Verificar 'cut'
    const cutPast = document.getElementById('cut-past');
    const cutParticiple = document.getElementById('cut-participle');
    const cutMeaning = document.getElementById('cut-meaning');

    let cutCorrect = checkInput(cutPast, verbs.cut.past) &&
                       checkInput(cutParticiple, verbs.cut.participle) &&
                       checkInput(cutMeaning, verbs.cut.meaning);

    resultText += cutCorrect ? "cut: Correct!<br>" : "cut: Incorrect.<br>";
    
    // Verificar 'deal'
    const dealPast = document.getElementById('deal-past');
    const dealParticiple = document.getElementById('deal-participle');
    const dealMeaning = document.getElementById('deal-meaning');

    let dealCorrect = checkInput(dealPast, verbs.deal.past) &&
                       checkInput(dealParticiple, verbs.deal.participle) &&
                       checkInput(dealMeaning, verbs.deal.meaning);

    resultText += dealCorrect ? "deal: Correct!<br>" : "deal: Incorrect.<br>";
    
    // Verificar 'dig'
    const digPast = document.getElementById('dig-past');
    const digParticiple = document.getElementById('dig-participle');
    const digMeaning = document.getElementById('dig-meaning');

    let digCorrect = checkInput(digPast, verbs.dig.past) &&
                       checkInput(digParticiple, verbs.dig.participle) &&
                       checkInput(digMeaning, verbs.dig.meaning);

    resultText += digCorrect ? "dig: Correct!<br>" : "dig: Incorrect.<br>";
    
    // Verificar 'dive'
    const divePast = document.getElementById('dive-past');
    const diveParticiple = document.getElementById('dive-participle');
    const diveMeaning = document.getElementById('dive-meaning');

    let diveCorrect = checkInput(divePast, verbs.dive.past) &&
                       checkInput(diveParticiple, verbs.dive.participle) &&
                       checkInput(diveMeaning, verbs.dive.meaning);

    resultText += diveCorrect ? "dive: Correct!<br>" : "dive: Incorrect.<br>";
    
    // Verificar 'do'
    const doPast = document.getElementById('do-past');
    const doParticiple = document.getElementById('do-participle');
    const doMeaning = document.getElementById('do-meaning');

    let doCorrect = checkInput(doPast, verbs.do.past) &&
                       checkInput(doParticiple, verbs.do.participle) &&
                       checkInput(doMeaning, verbs.do.meaning);

    resultText += doCorrect ? "do: Correct!<br>" : "do: Incorrect.<br>";
    
    // Verificar 'draw'
    const drawPast = document.getElementById('draw-past');
    const drawParticiple = document.getElementById('draw-participle');
    const drawMeaning = document.getElementById('draw-meaning');

    let drawCorrect = checkInput(drawPast, verbs.draw.past) &&
                       checkInput(drawParticiple, verbs.draw.participle) &&
                       checkInput(drawMeaning, verbs.draw.meaning);

    resultText += drawCorrect ? "draw: Correct!<br>" : "draw: Incorrect.<br>";
    
    // Verificar 'dream'
    const dreamPast = document.getElementById('dream-past');
    const dreamParticiple = document.getElementById('dream-participle');
    const dreamMeaning = document.getElementById('dream-meaning');

    let dreamCorrect = checkInput(dreamPast, verbs.dream.past) &&
                       checkInput(dreamParticiple, verbs.dream.participle) &&
                       checkInput(dreamMeaning, verbs.dream.meaning);

    resultText += dreamCorrect ? "dream: Correct!<br>" : "dream: Incorrect.<br>";
    
    // Verificar 'drink'
    const drinkPast = document.getElementById('drink-past');
    const drinkParticiple = document.getElementById('drink-participle');
    const drinkMeaning = document.getElementById('drink-meaning');

    let drinkCorrect = checkInput(drinkPast, verbs.drink.past) &&
                       checkInput(drinkParticiple, verbs.drink.participle) &&
                       checkInput(drinkMeaning, verbs.drink.meaning);

    resultText += drinkCorrect ? "drink: Correct!<br>" : "drink: Incorrect.<br>";
    
    // Verificar 'drive'
    const drivePast = document.getElementById('drive-past');
    const driveParticiple = document.getElementById('drive-participle');
    const driveMeaning = document.getElementById('drive-meaning');

    let driveCorrect = checkInput(drivePast, verbs.drive.past) &&
                       checkInput(driveParticiple, verbs.drive.participle) &&
                       checkInput(driveMeaning, verbs.drive.meaning);

    resultText += driveCorrect ? "drive: Correct!<br>" : "drive: Incorrect.<br>";
    
    // Verificar 'dwell'
    const dwellPast = document.getElementById('dwell-past');
    const dwellParticiple = document.getElementById('dwell-participle');
    const dwellMeaning = document.getElementById('dwell-meaning');

    let dwellCorrect = checkInput(dwellPast, verbs.dwell.past) &&
                       checkInput(dwellParticiple, verbs.dwell.participle) &&
                       checkInput(dwellMeaning, verbs.dwell.meaning);

    resultText += dwellCorrect ? "dwell: Correct!<br>" : "dwell: Incorrect.<br>";
    
    // Verificar 'eat'
    const eatPast = document.getElementById('eat-past');
    const eatParticiple = document.getElementById('eat-participle');
    const eatMeaning = document.getElementById('eat-meaning');

    let eatCorrect = checkInput(eatPast, verbs.eat.past) &&
                       checkInput(eatParticiple, verbs.eat.participle) &&
                       checkInput(eatMeaning, verbs.eat.meaning);

    resultText += eatCorrect ? "eat: Correct!<br>" : "eat: Incorrect.<br>";
    
    // Verificar 'fall'
    const fallPast = document.getElementById('fall-past');
    const fallParticiple = document.getElementById('fall-participle');
    const fallMeaning = document.getElementById('fall-meaning');

    let fallCorrect = checkInput(fallPast, verbs.fall.past) &&
                       checkInput(fallParticiple, verbs.fall.participle) &&
                       checkInput(fallMeaning, verbs.fall.meaning);

    resultText += fallCorrect ? "fall: Correct!<br>" : "fall: Incorrect.<br>";
    
    // Verificar 'feed'
    const feedPast = document.getElementById('feed-past');
    const feedParticiple = document.getElementById('feed-participle');
    const feedMeaning = document.getElementById('feed-meaning');

    let feedCorrect = checkInput(feedPast, verbs.feed.past) &&
                       checkInput(feedParticiple, verbs.feed.participle) &&
                       checkInput(feedMeaning, verbs.feed.meaning);

    resultText += feedCorrect ? "feed: Correct!<br>" : "feed: Incorrect.<br>";
    
    // Verificar 'feel'
    const feelPast = document.getElementById('feel-past');
    const feelParticiple = document.getElementById('feel-participle');
    const feelMeaning = document.getElementById('feel-meaning');

    let feelCorrect = checkInput(feelPast, verbs.feel.past) &&
                       checkInput(feelParticiple, verbs.feel.participle) &&
                       checkInput(feelMeaning, verbs.feel.meaning);

    resultText += feelCorrect ? "feel: Correct!<br>" : "feel: Incorrect.<br>";
    
    // Verificar 'fight'
    const fightPast = document.getElementById('fight-past');
    const fightParticiple = document.getElementById('fight-participle');
    const fightMeaning = document.getElementById('fight-meaning');

    let fightCorrect = checkInput(fightPast, verbs.fight.past) &&
                       checkInput(fightParticiple, verbs.fight.participle) &&
                       checkInput(fightMeaning, verbs.fight.meaning);

    resultText += fightCorrect ? "fight: Correct!<br>" : "fight: Incorrect.<br>";
    
    // Verificar 'find'
    const findPast = document.getElementById('find-past');
    const findParticiple = document.getElementById('find-participle');
    const findMeaning = document.getElementById('find-meaning');

    let findCorrect = checkInput(findPast, verbs.find.past) &&
                       checkInput(findParticiple, verbs.find.participle) &&
                       checkInput(findMeaning, verbs.find.meaning);

    resultText += findCorrect ? "find: Correct!<br>" : "find: Incorrect.<br>";
    
    // Verificar 'flee'
    const fleePast = document.getElementById('flee-past');
    const fleeParticiple = document.getElementById('flee-participle');
    const fleeMeaning = document.getElementById('flee-meaning');

    let fleeCorrect = checkInput(fleePast, verbs.flee.past) &&
                       checkInput(fleeParticiple, verbs.flee.participle) &&
                       checkInput(fleeMeaning, verbs.flee.meaning);

    resultText += fleeCorrect ? "flee: Correct!<br>" : "flee: Incorrect.<br>";
    
    // Verificar 'fling'
    const flingPast = document.getElementById('fling-past');
    const flingParticiple = document.getElementById('fling-participle');
    const flingMeaning = document.getElementById('fling-meaning');

    let flingCorrect = checkInput(flingPast, verbs.fling.past) &&
                       checkInput(flingParticiple, verbs.fling.participle) &&
                       checkInput(flingMeaning, verbs.fling.meaning);

    resultText += flingCorrect ? "fling: Correct!<br>" : "fling: Incorrect.<br>";
    
    // Verificar 'fly'
    const flyPast = document.getElementById('fly-past');
    const flyParticiple = document.getElementById('fly-participle');
    const flyMeaning = document.getElementById('fly-meaning');

    let flyCorrect = checkInput(flyPast, verbs.fly.past) &&
                       checkInput(flyParticiple, verbs.fly.participle) &&
                       checkInput(flyMeaning, verbs.fly.meaning);

    resultText += flyCorrect ? "fly: Correct!<br>" : "fly: Incorrect.<br>";
    
    // Verificar 'forbid'
    const forbidPast = document.getElementById('forbid-past');
    const forbidParticiple = document.getElementById('forbid-participle');
    const forbidMeaning = document.getElementById('forbid-meaning');

    let forbidCorrect = checkInput(forbidPast, verbs.forbid.past) &&
                       checkInput(forbidParticiple, verbs.forbid.participle) &&
                       checkInput(forbidMeaning, verbs.forbid.meaning);

    resultText += forbidCorrect ? "forbid: Correct!<br>" : "forbid: Incorrect.<br>";
    
    // Verificar 'forecast'
    const forecastPast = document.getElementById('forecast-past');
    const forecastParticiple = document.getElementById('forecast-participle');
    const forecastMeaning = document.getElementById('forecast-meaning');

    let forecastCorrect = checkInput(forecastPast, verbs.forecast.past) &&
                       checkInput(forecastParticiple, verbs.forecast.participle) &&
                       checkInput(forecastMeaning, verbs.forecast.meaning);

    resultText += forecastCorrect ? "forecast: Correct!<br>" : "forecast: Incorrect.<br>";
    
    // Verificar 'foresee'
    const foreseePast = document.getElementById('foresee-past');
    const foreseeParticiple = document.getElementById('foresee-participle');
    const foreseeMeaning = document.getElementById('foresee-meaning');

    let foreseeCorrect = checkInput(foreseePast, verbs.foresee.past) &&
                       checkInput(foreseeParticiple, verbs.foresee.participle) &&
                       checkInput(foreseeMeaning, verbs.foresee.meaning);

    resultText += foreseeCorrect ? "foresee: Correct!<br>" : "foresee: Incorrect.<br>";
    
    // Verificar 'foretell'
    const foretellPast = document.getElementById('foretell-past');
    const foretellParticiple = document.getElementById('foretell-participle');
    const foretellMeaning = document.getElementById('foretell-meaning');

    let foretellCorrect = checkInput(foretellPast, verbs.foretell.past) &&
                       checkInput(foretellParticiple, verbs.foretell.participle) &&
                       checkInput(foretellMeaning, verbs.foretell.meaning);

    resultText += foretellCorrect ? "foretell: Correct!<br>" : "foretell: Incorrect.<br>";
    
    // Verificar 'forget'
    const forgetPast = document.getElementById('forget-past');
    const forgetParticiple = document.getElementById('forget-participle');
    const forgetMeaning = document.getElementById('forget-meaning');

    let forgetCorrect = checkInput(forgetPast, verbs.forget.past) &&
                       checkInput(forgetParticiple, verbs.forget.participle) &&
                       checkInput(forgetMeaning, verbs.forget.meaning);

    resultText += forgetCorrect ? "forget: Correct!<br>" : "forget: Incorrect.<br>";
    
    // Verificar 'forgive'
    const forgivePast = document.getElementById('forgive-past');
    const forgiveParticiple = document.getElementById('forgive-participle');
    const forgiveMeaning = document.getElementById('forgive-meaning');

    let forgiveCorrect = checkInput(forgivePast, verbs.forgive.past) &&
                       checkInput(forgiveParticiple, verbs.forgive.participle) &&
                       checkInput(forgiveMeaning, verbs.forgive.meaning);

    resultText += forgiveCorrect ? "forgive: Correct!<br>" : "forgive: Incorrect.<br>";
    
    // Verificar 'forsake'
    const forsakePast = document.getElementById('forsake-past');
    const forsakeParticiple = document.getElementById('forsake-participle');
    const forsakeMeaning = document.getElementById('forsake-meaning');

    let forsakeCorrect = checkInput(forsakePast, verbs.forsake.past) &&
                       checkInput(forsakeParticiple, verbs.forsake.participle) &&
                       checkInput(forsakeMeaning, verbs.forsake.meaning);

    resultText += forsakeCorrect ? "forsake: Correct!<br>" : "forsake: Incorrect.<br>";
    
    // Verificar 'freeze'
    const freezePast = document.getElementById('freeze-past');
    const freezeParticiple = document.getElementById('freeze-participle');
    const freezeMeaning = document.getElementById('freeze-meaning');

    let freezeCorrect = checkInput(freezePast, verbs.freeze.past) &&
                       checkInput(freezeParticiple, verbs.freeze.participle) &&
                       checkInput(freezeMeaning, verbs.freeze.meaning);

    resultText += freezeCorrect ? "freeze: Correct!<br>" : "freeze: Incorrect.<br>";
    
    // Verificar 'get'
    const getPast = document.getElementById('get-past');
    const getParticiple = document.getElementById('get-participle');
    const getMeaning = document.getElementById('get-meaning');

    let getCorrect = checkInput(getPast, verbs.get.past) &&
                       checkInput(getParticiple, verbs.get.participle) &&
                       checkInput(getMeaning, verbs.get.meaning);

    resultText += getCorrect ? "get: Correct!<br>" : "get: Incorrect.<br>";
    
    // Verificar 'give'
    const givePast = document.getElementById('give-past');
    const giveParticiple = document.getElementById('give-participle');
    const giveMeaning = document.getElementById('give-meaning');

    let giveCorrect = checkInput(givePast, verbs.give.past) &&
                       checkInput(giveParticiple, verbs.give.participle) &&
                       checkInput(giveMeaning, verbs.give.meaning);

    resultText += giveCorrect ? "give: Correct!<br>" : "give: Incorrect.<br>";
    
    // Verificar 'go'
    const goPast = document.getElementById('go-past');
    const goParticiple = document.getElementById('go-participle');
    const goMeaning = document.getElementById('go-meaning');

    let goCorrect = checkInput(goPast, verbs.go.past) &&
                       checkInput(goParticiple, verbs.go.participle) &&
                       checkInput(goMeaning, verbs.go.meaning);

    resultText += goCorrect ? "go: Correct!<br>" : "go: Incorrect.<br>";
    
    // Verificar 'grind'
    const grindPast = document.getElementById('grind-past');
    const grindParticiple = document.getElementById('grind-participle');
    const grindMeaning = document.getElementById('grind-meaning');

    let grindCorrect = checkInput(grindPast, verbs.grind.past) &&
                       checkInput(grindParticiple, verbs.grind.participle) &&
                       checkInput(grindMeaning, verbs.grind.meaning);

    resultText += grindCorrect ? "grind: Correct!<br>" : "grind: Incorrect.<br>";
    
    // Verificar 'grow'
    const growPast = document.getElementById('grow-past');
    const growParticiple = document.getElementById('grow-participle');
    const growMeaning = document.getElementById('grow-meaning');

    let growCorrect = checkInput(growPast, verbs.grow.past) &&
                       checkInput(growParticiple, verbs.grow.participle) &&
                       checkInput(growMeaning, verbs.grow.meaning);

    resultText += growCorrect ? "grow: Correct!<br>" : "grow: Incorrect.<br>";
    
    // Verificar 'handwrite'
    const handwritePast = document.getElementById('handwrite-past');
    const handwriteParticiple = document.getElementById('handwrite-participle');
    const handwriteMeaning = document.getElementById('handwrite-meaning');

    let handwriteCorrect = checkInput(handwritePast, verbs.handwrite.past) &&
                       checkInput(handwriteParticiple, verbs.handwrite.participle) &&
                       checkInput(handwriteMeaning, verbs.handwrite.meaning);

    resultText += handwriteCorrect ? "handwrite: Correct!<br>" : "handwrite: Incorrect.<br>";

    
    // Verificar 'hang'
    const hangPast = document.getElementById('hang-past');
    const hangParticiple = document.getElementById('hang-participle');
    const hangMeaning = document.getElementById('hang-meaning');

    let hangCorrect = checkInput(hangPast, verbs.hang.past) &&
                       checkInput(hangParticiple, verbs.hang.participle) &&
                       checkInput(hangMeaning, verbs.hang.meaning);

    resultText += hangCorrect ? "hang: Correct!<br>" : "hang: Incorrect.<br>";
    
    // Verificar 'have'
    const havePast = document.getElementById('have-past');
    const haveParticiple = document.getElementById('have-participle');
    const haveMeaning = document.getElementById('have-meaning');

    let haveCorrect = checkInput(havePast, verbs.have.past) &&
                       checkInput(haveParticiple, verbs.have.participle) &&
                       checkInput(haveMeaning, verbs.have.meaning);

    resultText += haveCorrect ? "have: Correct!<br>" : "have: Incorrect.<br>";
    
    // Verificar 'hear'
    const hearPast = document.getElementById('hear-past');
    const hearParticiple = document.getElementById('hear-participle');
    const hearMeaning = document.getElementById('hear-meaning');

    let hearCorrect = checkInput(hearPast, verbs.hear.past) &&
                       checkInput(hearParticiple, verbs.hear.participle) &&
                       checkInput(hearMeaning, verbs.hear.meaning);

    resultText += hearCorrect ? "hear: Correct!<br>" : "hear: Incorrect.<br>";
    
    // Verificar 'hide'
    const hidePast = document.getElementById('hide-past');
    const hideParticiple = document.getElementById('hide-participle');
    const hideMeaning = document.getElementById('hide-meaning');

    let hideCorrect = checkInput(hidePast, verbs.hide.past) &&
                       checkInput(hideParticiple, verbs.hide.participle) &&
                       checkInput(hideMeaning, verbs.hide.meaning);

    resultText += hideCorrect ? "hide: Correct!<br>" : "hide: Incorrect.<br>";
    
    // Verificar 'hit'
    const hitPast = document.getElementById('hit-past');
    const hitParticiple = document.getElementById('hit-participle');
    const hitMeaning = document.getElementById('hit-meaning');

    let hitCorrect = checkInput(hitPast, verbs.hit.past) &&
                       checkInput(hitParticiple, verbs.hit.participle) &&
                       checkInput(hitMeaning, verbs.hit.meaning);

    resultText += hitCorrect ? "hit: Correct!<br>" : "hit: Incorrect.<br>";
    
    // Verificar 'hold'
    const holdPast = document.getElementById('hold-past');
    const holdParticiple = document.getElementById('hold-participle');
    const holdMeaning = document.getElementById('hold-meaning');

    let holdCorrect = checkInput(holdPast, verbs.hold.past) &&
                       checkInput(holdParticiple, verbs.hold.participle) &&
                       checkInput(holdMeaning, verbs.hold.meaning);

    resultText += holdCorrect ? "hold: Correct!<br>" : "hold: Incorrect.<br>";
    
    // Verificar 'hurt'
    const hurtPast = document.getElementById('hurt-past');
    const hurtParticiple = document.getElementById('hurt-participle');
    const hurtMeaning = document.getElementById('hurt-meaning');

    let hurtCorrect = checkInput(hurtPast, verbs.hurt.past) &&
                       checkInput(hurtParticiple, verbs.hurt.participle) &&
                       checkInput(hurtMeaning, verbs.hurt.meaning);

    resultText += hurtCorrect ? "hurt: Correct!<br>" : "hurt: Incorrect.<br>";
    
    // Verificar 'inlay'
    const inlayPast = document.getElementById('inlay-past');
    const inlayParticiple = document.getElementById('inlay-participle');
    const inlayMeaning = document.getElementById('inlay-meaning');

    let inlayCorrect = checkInput(inlayPast, verbs.inlay.past) &&
                       checkInput(inlayParticiple, verbs.inlay.participle) &&
                       checkInput(inlayMeaning, verbs.inlay.meaning);

    resultText += inlayCorrect ? "inlay: Correct!<br>" : "inlay: Incorrect.<br>";
    
    // Verificar 'input'
    const inputPast = document.getElementById('input-past');
    const inputParticiple = document.getElementById('input-participle');
    const inputMeaning = document.getElementById('input-meaning');

    let inputCorrect = checkInput(inputPast, verbs.input.past) &&
                       checkInput(inputParticiple, verbs.input.participle) &&
                       checkInput(inputMeaning, verbs.input.meaning);

    resultText += inputCorrect ? "input: Correct!<br>" : "input: Incorrect.<br>";
    
    // Verificar 'keep'
    const keepPast = document.getElementById('keep-past');
    const keepParticiple = document.getElementById('keep-participle');
    const keepMeaning = document.getElementById('keep-meaning');

    let keepCorrect = checkInput(keepPast, verbs.keep.past) &&
                       checkInput(keepParticiple, verbs.keep.participle) &&
                       checkInput(keepMeaning, verbs.keep.meaning);

    resultText += inputCorrect ? "keep: Correct!<br>" : "keep: Incorrect.<br>";
    
    // Verificar 'kneel'
    const kneelPast = document.getElementById('kneel-past');
    const kneelParticiple = document.getElementById('kneel-participle');
    const kneelMeaning = document.getElementById('kneel-meaning');

    let kneelCorrect = checkInput(kneelPast, verbs.kneel.past) &&
                       checkInput(kneelParticiple, verbs.kneel.participle) &&
                       checkInput(kneelMeaning, verbs.kneel.meaning);

    resultText += inputCorrect  ? "kneel: Correct!<br>" : "kneel: Incorrect.<br>";
    
    // Verificar 'knit'
    const knitPast = document.getElementById('knit-past');
    const knitParticiple = document.getElementById('knit-participle');
    const knitMeaning = document.getElementById('knit-meaning');

    let knitCorrect = checkInput(knitPast, verbs.knit.past) &&
                       checkInput(knitParticiple, verbs.knit.participle) &&
                       checkInput(knitMeaning, verbs.knit.meaning);

    resultText += inputCorrect  ? "knit: Correct!<br>" : "knit: Incorrect.<br>";
    
    // Verificar 'know'
    const knowPast = document.getElementById('know-past');
    const knowParticiple = document.getElementById('know-participle');
    const knowMeaning = document.getElementById('know-meaning');

    let knowCorrect = checkInput(knowPast, verbs.know.past) &&
                       checkInput(knowParticiple, verbs.know.participle) &&
                       checkInput(knowMeaning, verbs.know.meaning);

    resultText += inputCorrect  ? "know: Correct!<br>" : "know: Incorrect.<br>";
    
    // Verificar 'lay'
    const layPast = document.getElementById('lay-past');
    const layParticiple = document.getElementById('lay-participle');
    const layMeaning = document.getElementById('lay-meaning');

    let layCorrect = checkInput(layPast, verbs.lay.past) &&
                       checkInput(layParticiple, verbs.lay.participle) &&
                       checkInput(layMeaning, verbs.lay.meaning);

    resultText += inputCorrect  ? "lay: Correct!<br>" : "lay: Incorrect.<br>";
    
    // Verificar 'lead'
    const leadPast = document.getElementById('lead-past');
    const leadParticiple = document.getElementById('lead-participle');
    const leadMeaning = document.getElementById('lead-meaning');

    let leadCorrect = checkInput(leadPast, verbs.lead.past) &&
                       checkInput(leadParticiple, verbs.lead.participle) &&
                       checkInput(leadMeaning, verbs.lead.meaning);

    resultText += inputCorrect  ? "lead: Correct!<br>" : "lead: Incorrect.<br>";
    
    
    // Verificar 'lean'
    const leanPast = document.getElementById('lean-past');
    const leanParticiple = document.getElementById('lean-participle');
    const leanMeaning = document.getElementById('lean-meaning');

    let leanCorrect = checkInput(leanPast, verbs.lean.past) &&
                       checkInput(leanParticiple, verbs.lean.participle) &&
                       checkInput(leanMeaning, verbs.lean.meaning);

    resultText += inputCorrect  ? "lean: Correct!<br>" : "lean: Incorrect.<br>";
    
    // Verificar 'leap'
    const leapPast = document.getElementById('leap-past');
    const leapParticiple = document.getElementById('leap-participle');
    const leapMeaning = document.getElementById('leap-meaning');

    let leapCorrect = checkInput(leapPast, verbs.leap.past) &&
                       checkInput(leapParticiple, verbs.leap.participle) &&
                       checkInput(leapMeaning, verbs.leap.meaning);

    resultText += inputCorrect  ? "leap: Correct!<br>" : "leap: Incorrect.<br>";
    
    // Verificar 'learn'
    const learnPast = document.getElementById('learn-past');
    const learnParticiple = document.getElementById('learn-participle');
    const learnMeaning = document.getElementById('learn-meaning');

    let learnCorrect = checkInput(learnPast, verbs.learn.past) &&
                       checkInput(learnParticiple, verbs.learn.participle) &&
                       checkInput(learnMeaning, verbs.learn.meaning);

    resultText += inputCorrect  ? "learn: Correct!<br>" : "learn: Incorrect.<br>";
    
    // Verificar 'leave'
    const leavePast = document.getElementById('leave-past');
    const leaveParticiple = document.getElementById('leave-participle');
    const leaveMeaning = document.getElementById('leave-meaning');

    let leaveCorrect = checkInput(leavePast, verbs.leave.past) &&
                       checkInput(leaveParticiple, verbs.leave.participle) &&
                       checkInput(leaveMeaning, verbs.leave.meaning);

    resultText += inputCorrect  ? "leave: Correct!<br>" : "leave: Incorrect.<br>";
    
    // Verificar 'lend'
    const lendPast = document.getElementById('lend-past');
    const lendParticiple = document.getElementById('lend-participle');
    const lendMeaning = document.getElementById('lend-meaning');

    let lendCorrect = checkInput(lendPast, verbs.lend.past) &&
                       checkInput(lendParticiple, verbs.lend.participle) &&
                       checkInput(lendMeaning, verbs.lend.meaning);

    resultText += inputCorrect  ? "lend: Correct!<br>" : "lend: Incorrect.<br>";
    
    
    // Verificar 'let'
    const letPast = document.getElementById('let-past');
    const letParticiple = document.getElementById('let-participle');
    const letMeaning = document.getElementById('let-meaning');

    let letCorrect = checkInput(letPast, verbs.let.past) &&
                       checkInput(letParticiple, verbs.let.participle) &&
                       checkInput(letMeaning, verbs.let.meaning);

    resultText += inputCorrect  ? "let: Correct!<br>" : "let: Incorrect.<br>";
    
    // Verificar 'lie'
    const liePast = document.getElementById('lie-past');
    const lieParticiple = document.getElementById('lie-participle');
    const lieMeaning = document.getElementById('lie-meaning');

    let lieCorrect = checkInput(liePast, verbs.lie.past) &&
                       checkInput(lieParticiple, verbs.lie.participle) &&
                       checkInput(lieMeaning, verbs.lie.meaning);

    resultText += inputCorrect  ? "lie: Correct!<br>" : "lie: Incorrect.<br>";
    
    // Verificar 'light'
    const lightPast = document.getElementById('light-past');
    const lightParticiple = document.getElementById('light-participle');
    const lightMeaning = document.getElementById('light-meaning');

    let lightCorrect = checkInput(lightPast, verbs.light.past) &&
                       checkInput(lightParticiple, verbs.light.participle) &&
                       checkInput(lightMeaning, verbs.light.meaning);

    resultText += inputCorrect  ? "light: Correct!<br>" : "light: Incorrect.<br>";
    
    // Verificar 'lose'
    const losePast = document.getElementById('lose-past');
    const loseParticiple = document.getElementById('lose-participle');
    const loseMeaning = document.getElementById('lose-meaning');

    let loseCorrect = checkInput(losePast, verbs.lose.past) &&
                       checkInput(loseParticiple, verbs.lose.participle) &&
                       checkInput(loseMeaning, verbs.lose.meaning);

    resultText += inputCorrect  ? "lose: Correct!<br>" : "lose: Incorrect.<br>";
    
    // Verificar 'make'
    const makePast = document.getElementById('make-past');
    const makeParticiple = document.getElementById('make-participle');
    const makeMeaning = document.getElementById('make-meaning');

    let makeCorrect = checkInput(makePast, verbs.make.past) &&
                       checkInput(makeParticiple, verbs.make.participle) &&
                       checkInput(makeMeaning, verbs.make.meaning);

    resultText += inputCorrect  ? "make: Correct!<br>" : "make: Incorrect.<br>";
    
    // Verificar 'mean'
    const meanPast = document.getElementById('mean-past');
    const meanParticiple = document.getElementById('mean-participle');
    const meanMeaning = document.getElementById('mean-meaning');

    let meanCorrect = checkInput(meanPast, verbs.mean.past) &&
                       checkInput(meanParticiple, verbs.mean.participle) &&
                       checkInput(meanMeaning, verbs.mean.meaning);

    resultText += inputCorrect  ? "mean: Correct!<br>" : "mean: Incorrect.<br>";
    
    // Verificar 'meet'
    const meetPast = document.getElementById('meet-past');
    const meetParticiple = document.getElementById('meet-participle');
    const meetMeaning = document.getElementById('meet-meaning');

    let meetCorrect = checkInput(meetPast, verbs.meet.past) &&
                       checkInput(meetParticiple, verbs.meet.participle) &&
                       checkInput(meetMeaning, verbs.meet.meaning);

    resultText += inputCorrect  ? "meet: Correct!<br>" : "meet: Incorrect.<br>";
    
    // Verificar 'melt'
    const meltPast = document.getElementById('melt-past');
    const meltParticiple = document.getElementById('melt-participle');
    const meltMeaning = document.getElementById('melt-meaning');

    let meltCorrect = checkInput(meltPast, verbs.melt.past) &&
                       checkInput(meltParticiple, verbs.melt.participle) &&
                       checkInput(meltMeaning, verbs.melt.meaning);

    resultText += inputCorrect  ? "melt: Correct!<br>" : "melt: Incorrect.<br>";
    
    // Verificar 'mislead'
    const misleadPast = document.getElementById('mislead-past');
    const misleadParticiple = document.getElementById('mislead-participle');
    const misleadMeaning = document.getElementById('mislead-meaning');

    let misleadCorrect = checkInput(misleadPast, verbs.mislead.past) &&
                       checkInput(misleadParticiple, verbs.mislead.participle) &&
                       checkInput(misleadMeaning, verbs.mislead.meaning);

    resultText += inputCorrect  ? "mislead: Correct!<br>" : "mislead: Incorrect.<br>";
    
    
    // Verificar 'mistake'
    const mistakePast = document.getElementById('mistake-past');
    const mistakeParticiple = document.getElementById('mistake-participle');
    const mistakeMeaning = document.getElementById('mistake-meaning');

    let mistakeCorrect = checkInput(mistakePast, verbs.mistake.past) &&
                       checkInput(mistakeParticiple, verbs.mistake.participle) &&
                       checkInput(mistakeMeaning, verbs.mistake.meaning);

    resultText += inputCorrect  ? "mistake: Correct!<br>" : "mistake: Incorrect.<br>";
    
    // Verificar 'misunderstand'
    const misunderstandPast = document.getElementById('misunderstand-past');
    const misunderstandParticiple = document.getElementById('misunderstand-participle');
    const misunderstandMeaning = document.getElementById('misunderstand-meaning');

    let misunderstandCorrect = checkInput(misunderstandPast, verbs.misunderstand.past) &&
                       checkInput(misunderstandParticiple, verbs.misunderstand.participle) &&
                       checkInput(misunderstandMeaning, verbs.misunderstand.meaning);

    resultText += inputCorrect  ? "misunderstand: Correct!<br>" : "misunderstand: Incorrect.<br>";
    
    // Verificar 'mow'
    const mowPast = document.getElementById('mow-past');
    const mowParticiple = document.getElementById('mow-participle');
    const mowMeaning = document.getElementById('mow-meaning');

    let mowCorrect = checkInput(mowPast, verbs.mow.past) &&
                       checkInput(mowParticiple, verbs.mow.participle) &&
                       checkInput(mowMeaning, verbs.mow.meaning);

    resultText += inputCorrect  ? "mow: Correct!<br>" : "mow: Incorrect.<br>";
    




    document.getElementById('result').innerHTML = resultText;
}
