function checkAnswers() {
    const verbs = {
        abide: {
            past: "abode",
            participle: "abiden",
            meaning: "cumplir"
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
        overhear:{
            past: "overheard",
            participle: "overheard",
            meaning: "oir sin intencion"
        },
        overtake:{
            past: "overtook",
            participle: "overtaken",
            meaning: "sobrepasar"
        },
        pay:{
            past: "paid",
            participle: "paid",
            meaning: "pagar"
        },
        prove:{
            past: "proved",
            participle: "proven",
            meaning: "probar"
        },
        put:{
            past: "put",
            participle: "put",
            meaning: "poner"
        },
        quit:{
            past: "quit",
            participle: "quit",
            meaning: "abandonar"
        },
        read:{
            past: "read",
            participle: "read",
            meaning: "leer"
        },
        rid:{
            past: "rid",
            participle: "rid",
            meaning: "librar"
        },
        ride:{
            past: "rode",
            participle: "ridden",
            meaning: "montar"
        },
        ring:{
            past: "rang",
            participle: "rung",
            meaning: "llamar por telefono"
        },
        rise:{
            past: "rose",
            participle: "risen",
            meaning: "levantarse"
        },
        run:{
            past: "ran",
            participle: "run",
            meaning: "correr"
        },
        saw:{
            past: "sawed",
            participle: "sawn",
            meaning: "serruchar"
        },
        say:{
            past: "said",
            participle: "said",
            meaning: "decir"
        },
        see:{
            past: "saw",
            participle: "seen",
            meaning: "ver"
        },
        seek:{
            past: "sought",
            participle: "sought",
            meaning: "buscar"
        },
        sell:{
            past: "sold",
            participle: "sold",
            meaning: "vender"
        },
        send:{
            past: "sent",
            participle: "sent",
            meaning: "enviar"
        },
        set:{
            past: "set",
            participle: "set",
            meaning: "poner"
        },
        sew:{
            past: "sewed",
            participle: "sewn",
            meaning: "coser"
        },
        shake:{
            past: "shook",
            participle: "shaken",
            meaning: "sacudir"
        },
        shave:{
            past: "shaved",
            participle: "shaven",
            meaning: "afeitarse"
        },
        shear:{
            past: "shore",
            participle: "shorn",
            meaning: "esquilar"
        },
        shed:{
            past: "shed",
            participle: "shed",
            meaning: "derramar"
        },
        shine:{
            past: "shone",
            participle: "shone",
            meaning: "brillar"
        },
        shoot:{
            past: "shot",
            participle: "shot",
            meaning: "disparar"
        },
        show:{
            past: "showed",
            participle: "shown",
            meaning: "mostrar"
        },
        shrink:{
            past: "shrank",
            participle: "shrunk",
            meaning: "reducir"
        },
        shut:{
            past: "shut",
            participle: "shut",
            meaning: "cerrar"
        },
        sing:{
            past: "sang",
            participle: "sung",
            meaning: "cantar"
        },
        sink:{
            past: "sank",
            participle: "sunk",
            meaning: "hundirse"
        },
        sit:{
            past: "sat",
            participle: "sat",
            meaning: "sentarse"
        },
        slay:{
            past: "slew",
            participle: "slai",
            meaning: "matar"
        },
        sleep:{
            past: "slept",
            participle: "slept",
            meaning: "dormir"
        },
        slide:{
            past: "slid",
            participle: "slid",
            meaning: "deslizar"
        },
        sling:{
            past: "slung",
            participle: "slung",
            meaning: "arrojar"
        },
        slink:{
            past: "slunk",
            participle: "slunt",
            meaning: "escabullirse"
        },
        slit:{
            past: "slit",
            participle: "slit",
            meaning: "rajar"
        },
        smell:{
            past: "smelt",
            participle: "smelt",
            meaning: "oler"
        },
        sneak:{
            past: "snuck",
            participle: "snuck",
            meaning: "moverse con cuidado"
        },
        sow:{
            past: "sowed",
            participle: "sown",
            meaning: "sembrar"
        },
        speak:{
            past: "spoke",
            participle: "spoken",
            meaning: "hablar"
        },
        speed:{
            past: "sped",
            participle: "sped",
            meaning: "acelerar"
        },
        spell:{
            past: "spelt",
            participle: "spelt",
            meaning: "deletrear"
        },
        spend:{
            past: "spent",
            participle: "spent",
            meaning: "gastar"
        },
        spill:{
            past: "spilt",
            participle: "spilt",
            meaning: "derramar"
        },
        spin:{
            past: "spun",
            participle: "spun",
            meaning: "dar vueltas"
        },
        spit:{
            past: "spat",
            participle: "spat",
            meaning: "escupir"
        },
        split:{
            past: "split",
            participle: "split",
            meaning: "dividir"
        },
        spoil:{
            past: "spoilt",
            participle: "spoilt",
            meaning: "arruinar"
        },
        spread:{
            past: "spread",
            participle: "spread",
            meaning: "extender"
        },
        spring:{
            past: "sprang",
            participle: "sprung",
            meaning: "saltar"
        },
        stand:{
            past: "stood",
            participle: "stood",
            meaning: "pararse"
        },
        steal:{
            past: "stole",
            participle: "stolen",
            meaning: "robar"
        },
        stick:{
            past: "stuck",
            participle: "stuck",
            meaning: "pegar"
        },
        sting:{
            past: "stung",
            participle: "stung",
            meaning: "picar"
        },
        stink:{
            past: "stank",
            participle: "stunk",
            meaning: "apestar"
        },
        stride:{
            past: "strode",
            participle: "stridden",
            meaning: "dar zancadas"
        },
        strike:{
            past: "struck",
            participle: "striken",
            meaning: "golpear"
        },
        string:{
            past: "strung",
            participle: "strung",
            meaning: "atar"
        },
        strive:{
            past: "strove",
            participle: "striven",
            meaning: "esforzarse"
        },
        swear:{
            past: "swore",
            participle: "sworn",
            meaning: "jurar"
        },
        sweat:{
            past: "sweat",
            participle: "sweat",
            meaning: "sudar"
        },
        sweep:{
            past: "swept",
            participle: "swept",
            meaning: "barrer"
        },
        swell:{
            past: "swelled",
            participle: "swollen",
            meaning: "hinchase"
        },
        swim:{
            past: "swam",
            participle: "swum",
            meaning: "nadar"
        },
        swing:{
            past: "swung",
            participle: "swung",
            meaning: "balacear"
        },
        take:{
            past: "took",
            participle: "taken",
            meaning: "tomar"
        },
        teach:{
            past: "taught",
            participle: "taught",
            meaning: "enseñar"
        },
        tear:{
            past: "tore",
            participle: "torn",
            meaning: "desgarrar"
        },
        tell:{
            past: "told",
            participle: "told",
            meaning: "decir"
        },
        think:{
            past: "thought",
            participle: "thought",
            meaning: "pensar"
        },
        thrive:{
            past: "throve",
            participle: "thriven",
            meaning: "prosperar"
        },
        throw:{
            past: "threw",
            participle: "thrown",
            meaning: "arrojar"
        },
        thrust:{
            past: "thrust",
            participle: "thrust",
            meaning: "empujar con fuerza"
        },
        tread:{
            past: "trod",
            participle: "trodden",
            meaning: "pisar"
        },
        undergo:{
            past: "underwent",
            participle: "undergone",
            meaning: "sufrir"
        },
        understand:{
            past: "understood",
            participle: "understood",
            meaning: "entender"
        },
        undertake:{
            past: "undertook",
            participle: "undertaken",
            meaning: "emprender"
        },
        upset:{
            past: "upset",
            participle: "upset",
            meaning: "enfadar"
        },
        wake:{
            past: "woke",
            participle: "woken",
            meaning: "despertar"
        },
        wear:{
            past: "wore",
            participle: "worn",
            meaning: "vestir"
        },
        weave:{
            past: "wove",
            participle: "woven",
            meaning: "tejer"
        },
        wed:{
            past: "wed",
            participle: "wed",
            meaning: "casarse"
        },
        weep:{
            past: "wept",
            participle: "wept",
            meaning: "llorar"
        },
        wet:{
            past: "wet",
            participle: "wet",
            meaning: "mojar"
        },
        win:{
            past: "won",
            participle: "won",
            meaning: "ganar"
        },
        wind:{
            past: "wound",
            participle: "wound",
            meaning: "envolver"
        },
        withdraw:{
            past: "withdrew",
            participle: "withdrawn",
            meaning: "sacar"
        },
        withhold:{
            past: "withheld",
            participle: "withheld",
            meaning: "ocultar"
        },
        withstand:{
            past: "withstood",
            participle: "withstood",
            meaning: "resistir"
        },
        wring:{
            past: "wrung",
            participle: "wrung",
            meaning: "escurrir"
        },
        write:{
            past: "wrote",
            participle: "written",
            meaning: "escribir"
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

    resultText += keepCorrect ? "keep: Correct!<br>" : "keep: Incorrect.<br>";
    
    // Verificar 'kneel'
    const kneelPast = document.getElementById('kneel-past');
    const kneelParticiple = document.getElementById('kneel-participle');
    const kneelMeaning = document.getElementById('kneel-meaning');

    let kneelCorrect = checkInput(kneelPast, verbs.kneel.past) &&
                       checkInput(kneelParticiple, verbs.kneel.participle) &&
                       checkInput(kneelMeaning, verbs.kneel.meaning);

    resultText += kneelCorrect  ? "kneel: Correct!<br>" : "kneel: Incorrect.<br>";
    
    // Verificar 'knit'
    const knitPast = document.getElementById('knit-past');
    const knitParticiple = document.getElementById('knit-participle');
    const knitMeaning = document.getElementById('knit-meaning');

    let knitCorrect = checkInput(knitPast, verbs.knit.past) &&
                       checkInput(knitParticiple, verbs.knit.participle) &&
                       checkInput(knitMeaning, verbs.knit.meaning);

    resultText += knitCorrect  ? "knit: Correct!<br>" : "knit: Incorrect.<br>";
    
    // Verificar 'know'
    const knowPast = document.getElementById('know-past');
    const knowParticiple = document.getElementById('know-participle');
    const knowMeaning = document.getElementById('know-meaning');

    let knowCorrect = checkInput(knowPast, verbs.know.past) &&
                       checkInput(knowParticiple, verbs.know.participle) &&
                       checkInput(knowMeaning, verbs.know.meaning);

    resultText += knowCorrect  ? "know: Correct!<br>" : "know: Incorrect.<br>";
    
    // Verificar 'lay'
    const layPast = document.getElementById('lay-past');
    const layParticiple = document.getElementById('lay-participle');
    const layMeaning = document.getElementById('lay-meaning');

    let layCorrect = checkInput(layPast, verbs.lay.past) &&
                       checkInput(layParticiple, verbs.lay.participle) &&
                       checkInput(layMeaning, verbs.lay.meaning);

    resultText += layCorrect  ? "lay: Correct!<br>" : "lay: Incorrect.<br>";
    
    // Verificar 'lead'
    const leadPast = document.getElementById('lead-past');
    const leadParticiple = document.getElementById('lead-participle');
    const leadMeaning = document.getElementById('lead-meaning');

    let leadCorrect = checkInput(leadPast, verbs.lead.past) &&
                       checkInput(leadParticiple, verbs.lead.participle) &&
                       checkInput(leadMeaning, verbs.lead.meaning);

    resultText += leadCorrect  ? "lead: Correct!<br>" : "lead: Incorrect.<br>";
    
    
    // Verificar 'lean'
    const leanPast = document.getElementById('lean-past');
    const leanParticiple = document.getElementById('lean-participle');
    const leanMeaning = document.getElementById('lean-meaning');

    let leanCorrect = checkInput(leanPast, verbs.lean.past) &&
                       checkInput(leanParticiple, verbs.lean.participle) &&
                       checkInput(leanMeaning, verbs.lean.meaning);

    resultText += leanCorrect  ? "lean: Correct!<br>" : "lean: Incorrect.<br>";
    
    // Verificar 'leap'
    const leapPast = document.getElementById('leap-past');
    const leapParticiple = document.getElementById('leap-participle');
    const leapMeaning = document.getElementById('leap-meaning');

    let leapCorrect = checkInput(leapPast, verbs.leap.past) &&
                       checkInput(leapParticiple, verbs.leap.participle) &&
                       checkInput(leapMeaning, verbs.leap.meaning);

    resultText += leapCorrect  ? "leap: Correct!<br>" : "leap: Incorrect.<br>";
    
    // Verificar 'learn'
    const learnPast = document.getElementById('learn-past');
    const learnParticiple = document.getElementById('learn-participle');
    const learnMeaning = document.getElementById('learn-meaning');

    let learnCorrect = checkInput(learnPast, verbs.learn.past) &&
                       checkInput(learnParticiple, verbs.learn.participle) &&
                       checkInput(learnMeaning, verbs.learn.meaning);

    resultText += learnCorrect  ? "learn: Correct!<br>" : "learn: Incorrect.<br>";
    
    // Verificar 'leave'
    const leavePast = document.getElementById('leave-past');
    const leaveParticiple = document.getElementById('leave-participle');
    const leaveMeaning = document.getElementById('leave-meaning');

    let leaveCorrect = checkInput(leavePast, verbs.leave.past) &&
                       checkInput(leaveParticiple, verbs.leave.participle) &&
                       checkInput(leaveMeaning, verbs.leave.meaning);

    resultText += leaveCorrect  ? "leave: Correct!<br>" : "leave: Incorrect.<br>";
    
    // Verificar 'lend'
    const lendPast = document.getElementById('lend-past');
    const lendParticiple = document.getElementById('lend-participle');
    const lendMeaning = document.getElementById('lend-meaning');

    let lendCorrect = checkInput(lendPast, verbs.lend.past) &&
                       checkInput(lendParticiple, verbs.lend.participle) &&
                       checkInput(lendMeaning, verbs.lend.meaning);

    resultText += lendCorrect  ? "lend: Correct!<br>" : "lend: Incorrect.<br>";
    
    
    // Verificar 'let'
    const letPast = document.getElementById('let-past');
    const letParticiple = document.getElementById('let-participle');
    const letMeaning = document.getElementById('let-meaning');

    let letCorrect = checkInput(letPast, verbs.let.past) &&
                       checkInput(letParticiple, verbs.let.participle) &&
                       checkInput(letMeaning, verbs.let.meaning);

    resultText += letCorrect  ? "let: Correct!<br>" : "let: Incorrect.<br>";
    
    // Verificar 'lie'
    const liePast = document.getElementById('lie-past');
    const lieParticiple = document.getElementById('lie-participle');
    const lieMeaning = document.getElementById('lie-meaning');

    let lieCorrect = checkInput(liePast, verbs.lie.past) &&
                       checkInput(lieParticiple, verbs.lie.participle) &&
                       checkInput(lieMeaning, verbs.lie.meaning);

    resultText += lieCorrect  ? "lie: Correct!<br>" : "lie: Incorrect.<br>";
    
    // Verificar 'light'
    const lightPast = document.getElementById('light-past');
    const lightParticiple = document.getElementById('light-participle');
    const lightMeaning = document.getElementById('light-meaning');

    let lightCorrect = checkInput(lightPast, verbs.light.past) &&
                       checkInput(lightParticiple, verbs.light.participle) &&
                       checkInput(lightMeaning, verbs.light.meaning);

    resultText += lightCorrect  ? "light: Correct!<br>" : "light: Incorrect.<br>";
    
    // Verificar 'lose'
    const losePast = document.getElementById('lose-past');
    const loseParticiple = document.getElementById('lose-participle');
    const loseMeaning = document.getElementById('lose-meaning');

    let loseCorrect = checkInput(losePast, verbs.lose.past) &&
                       checkInput(loseParticiple, verbs.lose.participle) &&
                       checkInput(loseMeaning, verbs.lose.meaning);

    resultText += loseCorrect  ? "lose: Correct!<br>" : "lose: Incorrect.<br>";
    
    // Verificar 'make'
    const makePast = document.getElementById('make-past');
    const makeParticiple = document.getElementById('make-participle');
    const makeMeaning = document.getElementById('make-meaning');

    let makeCorrect = checkInput(makePast, verbs.make.past) &&
                       checkInput(makeParticiple, verbs.make.participle) &&
                       checkInput(makeMeaning, verbs.make.meaning);

    resultText += makeCorrect  ? "make: Correct!<br>" : "make: Incorrect.<br>";
    
    // Verificar 'mean'
    const meanPast = document.getElementById('mean-past');
    const meanParticiple = document.getElementById('mean-participle');
    const meanMeaning = document.getElementById('mean-meaning');

    let meanCorrect = checkInput(meanPast, verbs.mean.past) &&
                       checkInput(meanParticiple, verbs.mean.participle) &&
                       checkInput(meanMeaning, verbs.mean.meaning);

    resultText += meanCorrect  ? "mean: Correct!<br>" : "mean: Incorrect.<br>";
    
    // Verificar 'meet'
    const meetPast = document.getElementById('meet-past');
    const meetParticiple = document.getElementById('meet-participle');
    const meetMeaning = document.getElementById('meet-meaning');

    let meetCorrect = checkInput(meetPast, verbs.meet.past) &&
                       checkInput(meetParticiple, verbs.meet.participle) &&
                       checkInput(meetMeaning, verbs.meet.meaning);

    resultText += meetCorrect  ? "meet: Correct!<br>" : "meet: Incorrect.<br>";
    
    // Verificar 'melt'
    const meltPast = document.getElementById('melt-past');
    const meltParticiple = document.getElementById('melt-participle');
    const meltMeaning = document.getElementById('melt-meaning');

    let meltCorrect = checkInput(meltPast, verbs.melt.past) &&
                       checkInput(meltParticiple, verbs.melt.participle) &&
                       checkInput(meltMeaning, verbs.melt.meaning);

    resultText += meltCorrect  ? "melt: Correct!<br>" : "melt: Incorrect.<br>";
    
    // Verificar 'mislead'
    const misleadPast = document.getElementById('mislead-past');
    const misleadParticiple = document.getElementById('mislead-participle');
    const misleadMeaning = document.getElementById('mislead-meaning');

    let misleadCorrect = checkInput(misleadPast, verbs.mislead.past) &&
                       checkInput(misleadParticiple, verbs.mislead.participle) &&
                       checkInput(misleadMeaning, verbs.mislead.meaning);

    resultText += misleadCorrect  ? "mislead: Correct!<br>" : "mislead: Incorrect.<br>";
    
    
    // Verificar 'mistake'
    const mistakePast = document.getElementById('mistake-past');
    const mistakeParticiple = document.getElementById('mistake-participle');
    const mistakeMeaning = document.getElementById('mistake-meaning');

    let mistakeCorrect = checkInput(mistakePast, verbs.mistake.past) &&
                       checkInput(mistakeParticiple, verbs.mistake.participle) &&
                       checkInput(mistakeMeaning, verbs.mistake.meaning);

    resultText += mistakeCorrect  ? "mistake: Correct!<br>" : "mistake: Incorrect.<br>";
    
    // Verificar 'misunderstand'
    const misunderstandPast = document.getElementById('misunderstand-past');
    const misunderstandParticiple = document.getElementById('misunderstand-participle');
    const misunderstandMeaning = document.getElementById('misunderstand-meaning');

    let misunderstandCorrect = checkInput(misunderstandPast, verbs.misunderstand.past) &&
                       checkInput(misunderstandParticiple, verbs.misunderstand.participle) &&
                       checkInput(misunderstandMeaning, verbs.misunderstand.meaning);

    resultText += misunderstandCorrect ? "misunderstand: Correct!<br>" : "misunderstand: Incorrect.<br>";
    
    // Verificar 'mow'
    const mowPast = document.getElementById('mow-past');
    const mowParticiple = document.getElementById('mow-participle');
    const mowMeaning = document.getElementById('mow-meaning');

    let mowCorrect = checkInput(mowPast, verbs.mow.past) &&
                       checkInput(mowParticiple, verbs.mow.participle) &&
                       checkInput(mowMeaning, verbs.mow.meaning);

    resultText += mowCorrect  ? "mow: Correct!<br>" : "mow: Incorrect.<br>";
    
    // Verificar 'overhear'
    const overhearPast = document.getElementById('overhear-past');
    const overhearParticiple = document.getElementById('overhear-participle');
    const overhearMeaning = document.getElementById('overhear-meaning');

    let overhearCorrect = checkInput(overhearPast, verbs.overhear.past) &&
                       checkInput(overhearParticiple, verbs.overhear.participle) &&
                       checkInput(overhearMeaning, verbs.overhear.meaning);

    resultText += overhearCorrect  ? "overhear: Correct!<br>" : "overhear: Incorrect.<br>";
    
    // Verificar 'overtake'
    const overtakePast = document.getElementById('overtake-past');
    const overtakeParticiple = document.getElementById('overtake-participle');
    const overtakeMeaning = document.getElementById('overtake-meaning');

    let overtakeCorrect = checkInput(overtakePast, verbs.overtake.past) &&
                       checkInput(overtakeParticiple, verbs.overtake.participle) &&
                       checkInput(overtakeMeaning, verbs.overtake.meaning);

    resultText += overtakeCorrect  ? "overtake: Correct!<br>" : "overtake: Incorrect.<br>";
    
    // Verificar 'pay'
    const payPast = document.getElementById('pay-past');
    const payParticiple = document.getElementById('pay-participle');
    const payMeaning = document.getElementById('pay-meaning');

    let payCorrect = checkInput(payPast, verbs.pay.past) &&
                       checkInput(payParticiple, verbs.pay.participle) &&
                       checkInput(payMeaning, verbs.pay.meaning);

    resultText += payCorrect  ? "pay: Correct!<br>" : "pay: Incorrect.<br>";
    
    // Verificar 'prove'
    const provePast = document.getElementById('prove-past');
    const proveParticiple = document.getElementById('prove-participle');
    const proveMeaning = document.getElementById('prove-meaning');

    let proveCorrect = checkInput(provePast, verbs.prove.past) &&
                       checkInput(proveParticiple, verbs.prove.participle) &&
                       checkInput(proveMeaning, verbs.prove.meaning);

    resultText += proveCorrect  ? "prove: Correct!<br>" : "prove: Incorrect.<br>";
    
    // Verificar 'put'
    const putPast = document.getElementById('put-past');
    const putParticiple = document.getElementById('put-participle');
    const putMeaning = document.getElementById('put-meaning');

    let putCorrect = checkInput(putPast, verbs.put.past) &&
                       checkInput(putParticiple, verbs.put.participle) &&
                       checkInput(putMeaning, verbs.put.meaning);

    resultText += putCorrect  ? "put: Correct!<br>" : "put: Incorrect.<br>";
    
    // Verificar 'quit'
    const quitPast = document.getElementById('quit-past');
    const quitParticiple = document.getElementById('quit-participle');
    const quitMeaning = document.getElementById('quit-meaning');

    let quitCorrect = checkInput(quitPast, verbs.quit.past) &&
                       checkInput(quitParticiple, verbs.quit.participle) &&
                       checkInput(quitMeaning, verbs.quit.meaning);

    resultText += quitCorrect  ? "quit: Correct!<br>" : "quit: Incorrect.<br>";

    // Verificar 'read'
    const readPast = document.getElementById('read-past');
    const readParticiple = document.getElementById('read-participle');
    const readMeaning = document.getElementById('read-meaning');

    let readCorrect = checkInput(readPast, verbs.read.past) &&
                       checkInput(readParticiple, verbs.read.participle) &&
                       checkInput(readMeaning, verbs.read.meaning);

    resultText += readCorrect  ? "read: Correct!<br>" : "read: Incorrect.<br>";

    // Verificar 'rid'
    const ridPast = document.getElementById('rid-past');
    const ridParticiple = document.getElementById('rid-participle');
    const ridMeaning = document.getElementById('rid-meaning');

    let ridCorrect = checkInput(ridPast, verbs.rid.past) &&
                       checkInput(ridParticiple, verbs.rid.participle) &&
                       checkInput(ridMeaning, verbs.rid.meaning);

    resultText += ridCorrect  ? "rid: Correct!<br>" : "rid: Incorrect.<br>";

    // Verificar 'ride'
    const ridePast = document.getElementById('ride-past');
    const rideParticiple = document.getElementById('ride-participle');
    const rideMeaning = document.getElementById('ride-meaning');

    let rideCorrect = checkInput(ridePast, verbs.ride.past) &&
                       checkInput(rideParticiple, verbs.ride.participle) &&
                       checkInput(rideMeaning, verbs.ride.meaning);

    resultText += rideCorrect  ? "ride: Correct!<br>" : "ride: Incorrect.<br>";

    // Verificar 'ring'
    const ringPast = document.getElementById('ring-past');
    const ringParticiple = document.getElementById('ring-participle');
    const ringMeaning = document.getElementById('ring-meaning');

    let ringCorrect = checkInput(ringPast, verbs.ring.past) &&
                       checkInput(ringParticiple, verbs.ring.participle) &&
                       checkInput(ringMeaning, verbs.ring.meaning);

    resultText += ringCorrect  ? "ring: Correct!<br>" : "ring: Incorrect.<br>";

    // Verificar 'rise'
    const risePast = document.getElementById('rise-past');
    const riseParticiple = document.getElementById('rise-participle');
    const riseMeaning = document.getElementById('rise-meaning');

    let riseCorrect = checkInput(risePast, verbs.rise.past) &&
                       checkInput(riseParticiple, verbs.rise.participle) &&
                       checkInput(riseMeaning, verbs.rise.meaning);

    resultText += riseCorrect  ? "rise: Correct!<br>" : "rise: Incorrect.<br>";

    // Verificar 'run'
    const runPast = document.getElementById('run-past');
    const runParticiple = document.getElementById('run-participle');
    const runMeaning = document.getElementById('run-meaning');

    let runCorrect = checkInput(runPast, verbs.run.past) &&
                       checkInput(runParticiple, verbs.run.participle) &&
                       checkInput(runMeaning, verbs.run.meaning);

    resultText += runCorrect  ? "run: Correct!<br>" : "run: Incorrect.<br>";

    // Verificar 'saw'
    const sawPast = document.getElementById('saw-past');
    const sawParticiple = document.getElementById('saw-participle');
    const sawMeaning = document.getElementById('saw-meaning');

    let sawCorrect = checkInput(sawPast, verbs.saw.past) &&
                       checkInput(sawParticiple, verbs.saw.participle) &&
                       checkInput(sawMeaning, verbs.saw.meaning);

    resultText += sawCorrect  ? "saw: Correct!<br>" : "saw: Incorrect.<br>";

    // Verificar 'say'
    const sayPast = document.getElementById('say-past');
    const sayParticiple = document.getElementById('say-participle');
    const sayMeaning = document.getElementById('say-meaning');

    let sayCorrect = checkInput(sayPast, verbs.say.past) &&
                       checkInput(sayParticiple, verbs.say.participle) &&
                       checkInput(sayMeaning, verbs.say.meaning);

    resultText += sayCorrect  ? "say: Correct!<br>" : "say: Incorrect.<br>";

    // Verificar 'see'
    const seePast = document.getElementById('see-past');
    const seeParticiple = document.getElementById('see-participle');
    const seeMeaning = document.getElementById('see-meaning');

    let seeCorrect = checkInput(seePast, verbs.see.past) &&
                       checkInput(seeParticiple, verbs.see.participle) &&
                       checkInput(seeMeaning, verbs.see.meaning);

    resultText += seeCorrect  ? "see: Correct!<br>" : "see: Incorrect.<br>";

    // Verificar 'seek'
    const seekPast = document.getElementById('seek-past');
    const seekParticiple = document.getElementById('seek-participle');
    const seekMeaning = document.getElementById('seek-meaning');

    let seekCorrect = checkInput(seekPast, verbs.seek.past) &&
                       checkInput(seekParticiple, verbs.seek.participle) &&
                       checkInput(seekMeaning, verbs.seek.meaning);

    resultText += seekCorrect  ? "seek: Correct!<br>" : "seek: Incorrect.<br>";

    // Verificar 'sell'
    const sellPast = document.getElementById('sell-past');
    const sellParticiple = document.getElementById('sell-participle');
    const sellMeaning = document.getElementById('sell-meaning');

    let sellCorrect = checkInput(sellPast, verbs.sell.past) &&
                       checkInput(sellParticiple, verbs.sell.participle) &&
                       checkInput(sellMeaning, verbs.sell.meaning);

    resultText += sellCorrect  ? "sell: Correct!<br>" : "sell: Incorrect.<br>";

    // Verificar 'send'
    const sendPast = document.getElementById('send-past');
    const sendParticiple = document.getElementById('send-participle');
    const sendMeaning = document.getElementById('send-meaning');

    let sendCorrect = checkInput(sendPast, verbs.send.past) &&
                       checkInput(sendParticiple, verbs.send.participle) &&
                       checkInput(sendMeaning, verbs.send.meaning);

    resultText += sendCorrect  ? "send: Correct!<br>" : "send: Incorrect.<br>";

    // Verificar 'set'
    const setPast = document.getElementById('set-past');
    const setParticiple = document.getElementById('set-participle');
    const setMeaning = document.getElementById('set-meaning');

    let setCorrect = checkInput(setPast, verbs.set.past) &&
                       checkInput(setParticiple, verbs.set.participle) &&
                       checkInput(setMeaning, verbs.set.meaning);

    resultText += setCorrect  ? "set: Correct!<br>" : "set: Incorrect.<br>";

    // Verificar 'sew'
    const sewPast = document.getElementById('sew-past');
    const sewParticiple = document.getElementById('sew-participle');
    const sewMeaning = document.getElementById('sew-meaning');

    let sewCorrect = checkInput(sewPast, verbs.sew.past) &&
                       checkInput(sewParticiple, verbs.sew.participle) &&
                       checkInput(sewMeaning, verbs.sew.meaning);

    resultText += sewCorrect  ? "sew: Correct!<br>" : "sew: Incorrect.<br>";

    // Verificar 'shake'
    const shakePast = document.getElementById('shake-past');
    const shakeParticiple = document.getElementById('shake-participle');
    const shakeMeaning = document.getElementById('shake-meaning');

    let shakeCorrect = checkInput(shakePast, verbs.shake.past) &&
                       checkInput(shakeParticiple, verbs.shake.participle) &&
                       checkInput(shakeMeaning, verbs.shake.meaning);

    resultText += shakeCorrect  ? "shake: Correct!<br>" : "shake: Incorrect.<br>";

    // Verificar 'shave'
    const shavePast = document.getElementById('shave-past');
    const shaveParticiple = document.getElementById('shave-participle');
    const shaveMeaning = document.getElementById('shave-meaning');

    let shaveCorrect = checkInput(shavePast, verbs.shave.past) &&
                       checkInput(shaveParticiple, verbs.shave.participle) &&
                       checkInput(shaveMeaning, verbs.shave.meaning);

    resultText += shaveCorrect  ? "shave: Correct!<br>" : "shave: Incorrect.<br>";

    // Verificar 'shear'
    const shearPast = document.getElementById('shear-past');
    const shearParticiple = document.getElementById('shear-participle');
    const shearMeaning = document.getElementById('shear-meaning');

    let shearCorrect = checkInput(shearPast, verbs.shear.past) &&
                       checkInput(shearParticiple, verbs.shear.participle) &&
                       checkInput(shearMeaning, verbs.shear.meaning);

    resultText += shearCorrect  ? "shear: Correct!<br>" : "shear: Incorrect.<br>";

    // Verificar 'shed'
    const shedPast = document.getElementById('shed-past');
    const shedParticiple = document.getElementById('shed-participle');
    const shedMeaning = document.getElementById('shed-meaning');

    let shedCorrect = checkInput(shedPast, verbs.shed.past) &&
                       checkInput(shedParticiple, verbs.shed.participle) &&
                       checkInput(shedMeaning, verbs.shed.meaning);

    resultText += shedCorrect  ? "shed: Correct!<br>" : "shed: Incorrect.<br>";

    // Verificar 'shine'
    const shinePast = document.getElementById('shine-past');
    const shineParticiple = document.getElementById('shine-participle');
    const shineMeaning = document.getElementById('shine-meaning');

    let shineCorrect = checkInput(shinePast, verbs.shine.past) &&
                       checkInput(shineParticiple, verbs.shine.participle) &&
                       checkInput(shineMeaning, verbs.shine.meaning);

    resultText += shineCorrect  ? "shine: Correct!<br>" : "shine: Incorrect.<br>";

    // Verificar 'shoot'
    const shootPast = document.getElementById('shoot-past');
    const shootParticiple = document.getElementById('shoot-participle');
    const shootMeaning = document.getElementById('shoot-meaning');

    let shootCorrect = checkInput(shootPast, verbs.shoot.past) &&
                       checkInput(shootParticiple, verbs.shoot.participle) &&
                       checkInput(shootMeaning, verbs.shoot.meaning);

    resultText += shootCorrect  ? "shoot: Correct!<br>" : "shoot: Incorrect.<br>";

    // Verificar 'show'
    const showPast = document.getElementById('show-past');
    const showParticiple = document.getElementById('show-participle');
    const showMeaning = document.getElementById('show-meaning');

    let showCorrect = checkInput(showPast, verbs.show.past) &&
                       checkInput(showParticiple, verbs.show.participle) &&
                       checkInput(showMeaning, verbs.show.meaning);

    resultText += showCorrect  ? "show: Correct!<br>" : "show: Incorrect.<br>";

    // Verificar 'shrink'
    const shrinkPast = document.getElementById('shrink-past');
    const shrinkParticiple = document.getElementById('shrink-participle');
    const shrinkMeaning = document.getElementById('shrink-meaning');

    let shrinkCorrect = checkInput(shrinkPast, verbs.shrink.past) &&
                       checkInput(shrinkParticiple, verbs.shrink.participle) &&
                       checkInput(shrinkMeaning, verbs.shrink.meaning);

    resultText += shrinkCorrect  ? "shrink: Correct!<br>" : "shrink: Incorrect.<br>";

    // Verificar 'shut'
    const shutPast = document.getElementById('shut-past');
    const shutParticiple = document.getElementById('shut-participle');
    const shutMeaning = document.getElementById('shut-meaning');

    let shutCorrect = checkInput(shutPast, verbs.shut.past) &&
                       checkInput(shutParticiple, verbs.shut.participle) &&
                       checkInput(shutMeaning, verbs.shut.meaning);

    resultText += shutCorrect  ? "shut: Correct!<br>" : "shut: Incorrect.<br>";

    // Verificar 'sing'
    const singPast = document.getElementById('sing-past');
    const singParticiple = document.getElementById('sing-participle');
    const singMeaning = document.getElementById('sing-meaning');

    let singCorrect = checkInput(singPast, verbs.sing.past) &&
                       checkInput(singParticiple, verbs.sing.participle) &&
                       checkInput(singMeaning, verbs.sing.meaning);

    resultText += singCorrect  ? "sing: Correct!<br>" : "sing: Incorrect.<br>";

    // Verificar 'sink'
    const sinkPast = document.getElementById('sink-past');
    const sinkParticiple = document.getElementById('sink-participle');
    const sinkMeaning = document.getElementById('sink-meaning');

    let sinkCorrect = checkInput(sinkPast, verbs.sink.past) &&
                       checkInput(sinkParticiple, verbs.sink.participle) &&
                       checkInput(sinkMeaning, verbs.sink.meaning);

    resultText += sinkCorrect  ? "sink: Correct!<br>" : "sink: Incorrect.<br>";

    // Verificar 'sit'
    const sitPast = document.getElementById('sit-past');
    const sitParticiple = document.getElementById('sit-participle');
    const sitMeaning = document.getElementById('sit-meaning');

    let sitCorrect = checkInput(sitPast, verbs.sit.past) &&
                       checkInput(sitParticiple, verbs.sit.participle) &&
                       checkInput(sitMeaning, verbs.sit.meaning);

    resultText += sitCorrect  ? "sit: Correct!<br>" : "sit: Incorrect.<br>";

    // Verificar 'slay'
    const slayPast = document.getElementById('slay-past');
    const slayParticiple = document.getElementById('slay-participle');
    const slayMeaning = document.getElementById('slay-meaning');

    let slayCorrect = checkInput(slayPast, verbs.slay.past) &&
                       checkInput(slayParticiple, verbs.slay.participle) &&
                       checkInput(slayMeaning, verbs.slay.meaning);

    resultText += slayCorrect  ? "slay: Correct!<br>" : "slay: Incorrect.<br>";

    // Verificar 'sleep'
    const sleepPast = document.getElementById('sleep-past');
    const sleepParticiple = document.getElementById('sleep-participle');
    const sleepMeaning = document.getElementById('sleep-meaning');

    let sleepCorrect = checkInput(sleepPast, verbs.sleep.past) &&
                       checkInput(sleepParticiple, verbs.sleep.participle) &&
                       checkInput(sleepMeaning, verbs.sleep.meaning);

    resultText += sleepCorrect  ? "sleep: Correct!<br>" : "sleep: Incorrect.<br>";

    // Verificar 'slide'
    const slidePast = document.getElementById('slide-past');
    const slideParticiple = document.getElementById('slide-participle');
    const slideMeaning = document.getElementById('slide-meaning');

    let slideCorrect = checkInput(slidePast, verbs.slide.past) &&
                       checkInput(slideParticiple, verbs.slide.participle) &&
                       checkInput(slideMeaning, verbs.slide.meaning);

    resultText += slideCorrect  ? "slide: Correct!<br>" : "slide: Incorrect.<br>";

    // Verificar 'sling'
    const slingPast = document.getElementById('sling-past');
    const slingParticiple = document.getElementById('sling-participle');
    const slingMeaning = document.getElementById('sling-meaning');

    let slingCorrect = checkInput(slingPast, verbs.sling.past) &&
                       checkInput(slingParticiple, verbs.sling.participle) &&
                       checkInput(slingMeaning, verbs.sling.meaning);

    resultText += slingCorrect  ? "sling: Correct!<br>" : "sling: Incorrect.<br>";

    // Verificar 'slink'
    const slinkPast = document.getElementById('slink-past');
    const slinkParticiple = document.getElementById('slink-participle');
    const slinkMeaning = document.getElementById('slink-meaning');

    let slinkCorrect = checkInput(slinkPast, verbs.slink.past) &&
                       checkInput(slinkParticiple, verbs.slink.participle) &&
                       checkInput(slinkMeaning, verbs.slink.meaning);

    resultText += slinkCorrect  ? "slink: Correct!<br>" : "slink: Incorrect.<br>";

    // Verificar 'slit'
    const slitPast = document.getElementById('slit-past');
    const slitParticiple = document.getElementById('slit-participle');
    const slitMeaning = document.getElementById('slit-meaning');

    let slitCorrect = checkInput(slitPast, verbs.slit.past) &&
                       checkInput(slitParticiple, verbs.slit.participle) &&
                       checkInput(slitMeaning, verbs.slit.meaning);

    resultText += slitCorrect  ? "slit: Correct!<br>" : "slit: Incorrect.<br>";

    // Verificar 'smell'
    const smellPast = document.getElementById('smell-past');
    const smellParticiple = document.getElementById('smell-participle');
    const smellMeaning = document.getElementById('smell-meaning');

    let smellCorrect = checkInput(smellPast, verbs.smell.past) &&
                       checkInput(smellParticiple, verbs.smell.participle) &&
                       checkInput(smellMeaning, verbs.smell.meaning);

    resultText += smellCorrect  ? "smell: Correct!<br>" : "smell: Incorrect.<br>";

    // Verificar 'sneak'
    const sneakPast = document.getElementById('sneak-past');
    const sneakParticiple = document.getElementById('sneak-participle');
    const sneakMeaning = document.getElementById('sneak-meaning');

    let sneakCorrect = checkInput(sneakPast, verbs.sneak.past) &&
                       checkInput(sneakParticiple, verbs.sneak.participle) &&
                       checkInput(sneakMeaning, verbs.sneak.meaning);

    resultText += sneakCorrect  ? "sneak: Correct!<br>" : "sneak: Incorrect.<br>";

    // Verificar 'sow'
    const sowPast = document.getElementById('sow-past');
    const sowParticiple = document.getElementById('sow-participle');
    const sowMeaning = document.getElementById('sow-meaning');

    let sowCorrect = checkInput(sowPast, verbs.sow.past) &&
                       checkInput(sowParticiple, verbs.sow.participle) &&
                       checkInput(sowMeaning, verbs.sow.meaning);

    resultText += sowCorrect  ? "sow: Correct!<br>" : "sow: Incorrect.<br>";

    // Verificar 'speak'
    const speakPast = document.getElementById('speak-past');
    const speakParticiple = document.getElementById('speak-participle');
    const speakMeaning = document.getElementById('speak-meaning');

    let speakCorrect = checkInput(speakPast, verbs.speak.past) &&
                       checkInput(speakParticiple, verbs.speak.participle) &&
                       checkInput(speakMeaning, verbs.speak.meaning);

    resultText += speakCorrect  ? "speak: Correct!<br>" : "speak: Incorrect.<br>";

    // Verificar 'speed'
    const speedPast = document.getElementById('speed-past');
    const speedParticiple = document.getElementById('speed-participle');
    const speedMeaning = document.getElementById('speed-meaning');

    let speedCorrect = checkInput(speedPast, verbs.speed.past) &&
                       checkInput(speedParticiple, verbs.speed.participle) &&
                       checkInput(speedMeaning, verbs.speed.meaning);

    resultText += speedCorrect  ? "speed: Correct!<br>" : "speed: Incorrect.<br>";

    // Verificar 'spell'
    const spellPast = document.getElementById('spell-past');
    const spellParticiple = document.getElementById('spell-participle');
    const spellMeaning = document.getElementById('spell-meaning');

    let spellCorrect = checkInput(spellPast, verbs.spell.past) &&
                       checkInput(spellParticiple, verbs.spell.participle) &&
                       checkInput(spellMeaning, verbs.spell.meaning);

    resultText += spellCorrect  ? "spell: Correct!<br>" : "spell: Incorrect.<br>";

    // Verificar 'spend'
    const spendPast = document.getElementById('spend-past');
    const spendParticiple = document.getElementById('spend-participle');
    const spendMeaning = document.getElementById('spend-meaning');

    let spendCorrect = checkInput(spendPast, verbs.spend.past) &&
                       checkInput(spendParticiple, verbs.spend.participle) &&
                       checkInput(spendMeaning, verbs.spend.meaning);

    resultText += spendCorrect  ? "spend: Correct!<br>" : "spend: Incorrect.<br>";

    // Verificar 'spill'
    const spillPast = document.getElementById('spill-past');
    const spillParticiple = document.getElementById('spill-participle');
    const spillMeaning = document.getElementById('spill-meaning');

    let spillCorrect = checkInput(spillPast, verbs.spill.past) &&
                       checkInput(spillParticiple, verbs.spill.participle) &&
                       checkInput(spillMeaning, verbs.spill.meaning);

    resultText += spillCorrect  ? "spill: Correct!<br>" : "spill: Incorrect.<br>";

    // Verificar 'spin'
    const spinPast = document.getElementById('spin-past');
    const spinParticiple = document.getElementById('spin-participle');
    const spinMeaning = document.getElementById('spin-meaning');

    let spinCorrect = checkInput(spinPast, verbs.spin.past) &&
                       checkInput(spinParticiple, verbs.spin.participle) &&
                       checkInput(spinMeaning, verbs.spin.meaning);

    resultText += spinCorrect  ? "spin: Correct!<br>" : "spin: Incorrect.<br>";

    // Verificar 'spit'
    const spitPast = document.getElementById('spit-past');
    const spitParticiple = document.getElementById('spit-participle');
    const spitMeaning = document.getElementById('spit-meaning');

    let spitCorrect = checkInput(spitPast, verbs.spit.past) &&
                       checkInput(spitParticiple, verbs.spit.participle) &&
                       checkInput(spitMeaning, verbs.spit.meaning);

    resultText += spitCorrect  ? "spit: Correct!<br>" : "spit: Incorrect.<br>";

    // Verificar 'split'
    const splitPast = document.getElementById('split-past');
    const splitParticiple = document.getElementById('split-participle');
    const splitMeaning = document.getElementById('split-meaning');

    let splitCorrect = checkInput(splitPast, verbs.split.past) &&
                       checkInput(splitParticiple, verbs.split.participle) &&
                       checkInput(splitMeaning, verbs.split.meaning);

    resultText += splitCorrect  ? "split: Correct!<br>" : "split: Incorrect.<br>";

    // Verificar 'spoil'
    const spoilPast = document.getElementById('spoil-past');
    const spoilParticiple = document.getElementById('spoil-participle');
    const spoilMeaning = document.getElementById('spoil-meaning');

    let spoilCorrect = checkInput(spoilPast, verbs.spoil.past) &&
                       checkInput(spoilParticiple, verbs.spoil.participle) &&
                       checkInput(spoilMeaning, verbs.spoil.meaning);

    resultText += spoilCorrect  ? "spoil: Correct!<br>" : "spoil: Incorrect.<br>";

    // Verificar 'spread'
    const spreadPast = document.getElementById('spread-past');
    const spreadParticiple = document.getElementById('spread-participle');
    const spreadMeaning = document.getElementById('spread-meaning');

    let spreadCorrect = checkInput(spreadPast, verbs.spread.past) &&
                       checkInput(spreadParticiple, verbs.spread.participle) &&
                       checkInput(spreadMeaning, verbs.spread.meaning);

    resultText += spreadCorrect  ? "spread: Correct!<br>" : "spread: Incorrect.<br>";

    // Verificar 'spring'
    const springPast = document.getElementById('spring-past');
    const springParticiple = document.getElementById('spring-participle');
    const springMeaning = document.getElementById('spring-meaning');

    let springCorrect = checkInput(springPast, verbs.spring.past) &&
                       checkInput(springParticiple, verbs.spring.participle) &&
                       checkInput(springMeaning, verbs.spring.meaning);

    resultText += springCorrect  ? "spring: Correct!<br>" : "spring: Incorrect.<br>";

    // Verificar 'stand'
    const standPast = document.getElementById('stand-past');
    const standParticiple = document.getElementById('stand-participle');
    const standMeaning = document.getElementById('stand-meaning');

    let standCorrect = checkInput(standPast, verbs.stand.past) &&
                       checkInput(standParticiple, verbs.stand.participle) &&
                       checkInput(standMeaning, verbs.stand.meaning);

    resultText += standCorrect  ? "stand: Correct!<br>" : "stand: Incorrect.<br>";

    // Verificar 'steal'
    const stealPast = document.getElementById('steal-past');
    const stealParticiple = document.getElementById('steal-participle');
    const stealMeaning = document.getElementById('steal-meaning');

    let stealCorrect = checkInput(stealPast, verbs.steal.past) &&
                       checkInput(stealParticiple, verbs.steal.participle) &&
                       checkInput(stealMeaning, verbs.steal.meaning);

    resultText += stealCorrect  ? "steal: Correct!<br>" : "steal: Incorrect.<br>";

    // Verificar 'stick'
    const stickPast = document.getElementById('stick-past');
    const stickParticiple = document.getElementById('stick-participle');
    const stickMeaning = document.getElementById('stick-meaning');

    let stickCorrect = checkInput(stickPast, verbs.stick.past) &&
                       checkInput(stickParticiple, verbs.stick.participle) &&
                       checkInput(stickMeaning, verbs.stick.meaning);

    resultText += stickCorrect  ? "stick: Correct!<br>" : "stick: Incorrect.<br>";

    // Verificar 'sting'
    const stingPast = document.getElementById('sting-past');
    const stingParticiple = document.getElementById('sting-participle');
    const stingMeaning = document.getElementById('sting-meaning');

    let stingCorrect = checkInput(stingPast, verbs.sting.past) &&
                       checkInput(stingParticiple, verbs.sting.participle) &&
                       checkInput(stingMeaning, verbs.sting.meaning);

    resultText += stingCorrect  ? "sting: Correct!<br>" : "sting: Incorrect.<br>";

    // Verificar 'stink'
    const stinkPast = document.getElementById('stink-past');
    const stinkParticiple = document.getElementById('stink-participle');
    const stinkMeaning = document.getElementById('stink-meaning');

    let stinkCorrect = checkInput(stinkPast, verbs.stink.past) &&
                       checkInput(stinkParticiple, verbs.stink.participle) &&
                       checkInput(stinkMeaning, verbs.stink.meaning);

    resultText += stinkCorrect  ? "stink: Correct!<br>" : "stink: Incorrect.<br>";

    // Verificar 'stride'
    const stridePast = document.getElementById('stride-past');
    const strideParticiple = document.getElementById('stride-participle');
    const strideMeaning = document.getElementById('stride-meaning');

    let strideCorrect = checkInput(stridePast, verbs.stride.past) &&
                       checkInput(strideParticiple, verbs.stride.participle) &&
                       checkInput(strideMeaning, verbs.stride.meaning);

    resultText += strideCorrect  ? "stride: Correct!<br>" : "stride: Incorrect.<br>";

    // Verificar 'strike'
    const strikePast = document.getElementById('strike-past');
    const strikeParticiple = document.getElementById('strike-participle');
    const strikeMeaning = document.getElementById('strike-meaning');

    let strikeCorrect = checkInput(strikePast, verbs.strike.past) &&
                       checkInput(strikeParticiple, verbs.strike.participle) &&
                       checkInput(strikeMeaning, verbs.strike.meaning);

    resultText += strikeCorrect  ? "strike: Correct!<br>" : "strike: Incorrect.<br>";

    // Verificar 'string'
    const stringPast = document.getElementById('string-past');
    const stringParticiple = document.getElementById('string-participle');
    const stringMeaning = document.getElementById('string-meaning');

    let stringCorrect = checkInput(stringPast, verbs.string.past) &&
                       checkInput(stringParticiple, verbs.string.participle) &&
                       checkInput(stringMeaning, verbs.string.meaning);

    resultText += stringCorrect  ? "string: Correct!<br>" : "string: Incorrect.<br>";

    // Verificar 'strive'
    const strivePast = document.getElementById('strive-past');
    const striveParticiple = document.getElementById('strive-participle');
    const striveMeaning = document.getElementById('strive-meaning');

    let striveCorrect = checkInput(strivePast, verbs.strive.past) &&
                       checkInput(striveParticiple, verbs.strive.participle) &&
                       checkInput(striveMeaning, verbs.strive.meaning);

    resultText += striveCorrect  ? "strive: Correct!<br>" : "strive: Incorrect.<br>";

    // Verificar 'swear'
    const swearPast = document.getElementById('swear-past');
    const swearParticiple = document.getElementById('swear-participle');
    const swearMeaning = document.getElementById('swear-meaning');

    let swearCorrect = checkInput(swearPast, verbs.swear.past) &&
                       checkInput(swearParticiple, verbs.swear.participle) &&
                       checkInput(swearMeaning, verbs.swear.meaning);

    resultText += swearCorrect  ? "swear: Correct!<br>" : "swear: Incorrect.<br>";

    // Verificar 'sweat'
    const sweatPast = document.getElementById('sweat-past');
    const sweatParticiple = document.getElementById('sweat-participle');
    const sweatMeaning = document.getElementById('sweat-meaning');

    let sweatCorrect = checkInput(sweatPast, verbs.sweat.past) &&
                       checkInput(sweatParticiple, verbs.sweat.participle) &&
                       checkInput(sweatMeaning, verbs.sweat.meaning);

    resultText += sweatCorrect  ? "sweat: Correct!<br>" : "sweat: Incorrect.<br>";

    // Verificar 'sweep'
    const sweepPast = document.getElementById('sweep-past');
    const sweepParticiple = document.getElementById('sweep-participle');
    const sweepMeaning = document.getElementById('sweep-meaning');

    let sweepCorrect = checkInput(sweepPast, verbs.sweep.past) &&
                       checkInput(sweepParticiple, verbs.sweep.participle) &&
                       checkInput(sweepMeaning, verbs.sweep.meaning);

    resultText += sweepCorrect  ? "sweep: Correct!<br>" : "sweep: Incorrect.<br>";

    // Verificar 'swell'
    const swellPast = document.getElementById('swell-past');
    const swellParticiple = document.getElementById('swell-participle');
    const swellMeaning = document.getElementById('swell-meaning');

    let swellCorrect = checkInput(swellPast, verbs.swell.past) &&
                       checkInput(swellParticiple, verbs.swell.participle) &&
                       checkInput(swellMeaning, verbs.swell.meaning);

    resultText += swellCorrect  ? "swell: Correct!<br>" : "swell: Incorrect.<br>";
    

    // Verificar 'swim'
    const swimPast = document.getElementById('swim-past');
    const swimParticiple = document.getElementById('swim-participle');
    const swimMeaning = document.getElementById('swim-meaning');

    let swimCorrect = checkInput(swimPast, verbs.swim.past) &&
                       checkInput(swimParticiple, verbs.swim.participle) &&
                       checkInput(swimMeaning, verbs.swim.meaning);

    resultText += swimCorrect  ? "swim: Correct!<br>" : "swim: Incorrect.<br>";

    // Verificar 'swing'
    const swingPast = document.getElementById('swing-past');
    const swingParticiple = document.getElementById('swing-participle');
    const swingMeaning = document.getElementById('swing-meaning');

    let swingCorrect = checkInput(swingPast, verbs.swing.past) &&
                       checkInput(swingParticiple, verbs.swing.participle) &&
                       checkInput(swingMeaning, verbs.swing.meaning);

    resultText += swingCorrect  ? "swing: Correct!<br>" : "swing: Incorrect.<br>";

    // Verificar 'take'
    const takePast = document.getElementById('take-past');
    const takeParticiple = document.getElementById('take-participle');
    const takeMeaning = document.getElementById('take-meaning');

    let takeCorrect = checkInput(takePast, verbs.take.past) &&
                       checkInput(takeParticiple, verbs.take.participle) &&
                       checkInput(takeMeaning, verbs.take.meaning);

    resultText += takeCorrect  ? "take: Correct!<br>" : "take: Incorrect.<br>";

    // Verificar 'teach'
    const teachPast = document.getElementById('teach-past');
    const teachParticiple = document.getElementById('teach-participle');
    const teachMeaning = document.getElementById('teach-meaning');

    let teachCorrect = checkInput(teachPast, verbs.teach.past) &&
                       checkInput(teachParticiple, verbs.teach.participle) &&
                       checkInput(teachMeaning, verbs.teach.meaning);

    resultText += teachCorrect  ? "teach: Correct!<br>" : "teach: Incorrect.<br>";

    // Verificar 'tear'
    const tearPast = document.getElementById('tear-past');
    const tearParticiple = document.getElementById('tear-participle');
    const tearMeaning = document.getElementById('tear-meaning');

    let tearCorrect = checkInput(tearPast, verbs.tear.past) &&
                       checkInput(tearParticiple, verbs.tear.participle) &&
                       checkInput(tearMeaning, verbs.tear.meaning);

    resultText += tearCorrect  ? "tear: Correct!<br>" : "tear: Incorrect.<br>";

    // Verificar 'tell'
    const tellPast = document.getElementById('tell-past');
    const tellParticiple = document.getElementById('tell-participle');
    const tellMeaning = document.getElementById('tell-meaning');

    let tellCorrect = checkInput(tellPast, verbs.tell.past) &&
                       checkInput(tellParticiple, verbs.tell.participle) &&
                       checkInput(tellMeaning, verbs.tell.meaning);

    resultText += tellCorrect  ? "tell: Correct!<br>" : "tell: Incorrect.<br>";

    // Verificar 'think'
    const thinkPast = document.getElementById('think-past');
    const thinkParticiple = document.getElementById('think-participle');
    const thinkMeaning = document.getElementById('think-meaning');

    let thinkCorrect = checkInput(thinkPast, verbs.think.past) &&
                       checkInput(thinkParticiple, verbs.think.participle) &&
                       checkInput(thinkMeaning, verbs.think.meaning);

    resultText += thinkCorrect  ? "think: Correct!<br>" : "think: Incorrect.<br>";

    // Verificar 'thrive'
    const thrivePast = document.getElementById('thrive-past');
    const thriveParticiple = document.getElementById('thrive-participle');
    const thriveMeaning = document.getElementById('thrive-meaning');

    let thriveCorrect = checkInput(thrivePast, verbs.thrive.past) &&
                       checkInput(thriveParticiple, verbs.thrive.participle) &&
                       checkInput(thriveMeaning, verbs.thrive.meaning);

    resultText += thriveCorrect  ? "thrive: Correct!<br>" : "thrive: Incorrect.<br>";

    // Verificar 'throw'
    const throwPast = document.getElementById('throw-past');
    const throwParticiple = document.getElementById('throw-participle');
    const throwMeaning = document.getElementById('throw-meaning');

    let throwCorrect = checkInput(throwPast, verbs.throw.past) &&
                       checkInput(throwParticiple, verbs.throw.participle) &&
                       checkInput(throwMeaning, verbs.throw.meaning);

    resultText += throwCorrect  ? "throw: Correct!<br>" : "throw: Incorrect.<br>";

    // Verificar 'thrust'
    const thrustPast = document.getElementById('thrust-past');
    const thrustParticiple = document.getElementById('thrust-participle');
    const thrustMeaning = document.getElementById('thrust-meaning');

    let thrustCorrect = checkInput(thrustPast, verbs.thrust.past) &&
                       checkInput(thrustParticiple, verbs.thrust.participle) &&
                       checkInput(thrustMeaning, verbs.thrust.meaning);

    resultText += thrustCorrect  ? "thrust: Correct!<br>" : "thrust: Incorrect.<br>";

    // Verificar 'tread'
    const treadPast = document.getElementById('tread-past');
    const treadParticiple = document.getElementById('tread-participle');
    const treadMeaning = document.getElementById('tread-meaning');

    let treadCorrect = checkInput(treadPast, verbs.tread.past) &&
                       checkInput(treadParticiple, verbs.tread.participle) &&
                       checkInput(treadMeaning, verbs.tread.meaning);

    resultText += treadCorrect  ? "tread: Correct!<br>" : "tread: Incorrect.<br>";

    // Verificar 'undergo'
    const undergoPast = document.getElementById('undergo-past');
    const undergoParticiple = document.getElementById('undergo-participle');
    const undergoMeaning = document.getElementById('undergo-meaning');

    let undergoCorrect = checkInput(undergoPast, verbs.undergo.past) &&
                       checkInput(undergoParticiple, verbs.undergo.participle) &&
                       checkInput(undergoMeaning, verbs.undergo.meaning);

    resultText += undergoCorrect  ? "undergo: Correct!<br>" : "undergo: Incorrect.<br>";

    // Verificar 'understand'
    const understandPast = document.getElementById('understand-past');
    const understandParticiple = document.getElementById('understand-participle');
    const understandMeaning = document.getElementById('understand-meaning');

    let understandCorrect = checkInput(understandPast, verbs.understand.past) &&
                       checkInput(understandParticiple, verbs.understand.participle) &&
                       checkInput(understandMeaning, verbs.understand.meaning);

    resultText += understandCorrect  ? "understand: Correct!<br>" : "understand: Incorrect.<br>";
    
    // Verificar 'undertake'
    const undertakePast = document.getElementById('undertake-past');
    const undertakeParticiple = document.getElementById('undertake-participle');
    const undertakeMeaning = document.getElementById('undertake-meaning');

    let undertakeCorrect = checkInput(undertakePast, verbs.undertake.past) &&
                       checkInput(undertakeParticiple, verbs.undertake.participle) &&
                       checkInput(undertakeMeaning, verbs.undertake.meaning);

    resultText += undertakeCorrect  ? "undertake: Correct!<br>" : "undertake: Incorrect.<br>";
    
    // Verificar 'upset'
    const upsetPast = document.getElementById('upset-past');
    const upsetParticiple = document.getElementById('upset-participle');
    const upsetMeaning = document.getElementById('upset-meaning');

    let upsetCorrect = checkInput(upsetPast, verbs.upset.past) &&
                       checkInput(upsetParticiple, verbs.upset.participle) &&
                       checkInput(upsetMeaning, verbs.upset.meaning);

    resultText += upsetCorrect  ? "upset: Correct!<br>" : "upset: Incorrect.<br>";
    
    // Verificar 'wake'
    const wakePast = document.getElementById('wake-past');
    const wakeParticiple = document.getElementById('wake-participle');
    const wakeMeaning = document.getElementById('wake-meaning');

    let wakeCorrect = checkInput(wakePast, verbs.wake.past) &&
                       checkInput(wakeParticiple, verbs.wake.participle) &&
                       checkInput(wakeMeaning, verbs.wake.meaning);

    resultText += wakeCorrect  ? "wake: Correct!<br>" : "wake: Incorrect.<br>";
    
    // Verificar 'wear'
    const wearPast = document.getElementById('wear-past');
    const wearParticiple = document.getElementById('wear-participle');
    const wearMeaning = document.getElementById('wear-meaning');

    let wearCorrect = checkInput(wearPast, verbs.wear.past) &&
                       checkInput(wearParticiple, verbs.wear.participle) &&
                       checkInput(wearMeaning, verbs.wear.meaning);

    resultText += wearCorrect  ? "wear: Correct!<br>" : "wear: Incorrect.<br>";
    
    // Verificar 'weave'
    const weavePast = document.getElementById('weave-past');
    const weaveParticiple = document.getElementById('weave-participle');
    const weaveMeaning = document.getElementById('weave-meaning');

    let weaveCorrect = checkInput(weavePast, verbs.weave.past) &&
                       checkInput(weaveParticiple, verbs.weave.participle) &&
                       checkInput(weaveMeaning, verbs.weave.meaning);

    resultText += weaveCorrect  ? "weave: Correct!<br>" : "weave: Incorrect.<br>";
    
    // Verificar 'wed'
    const wedPast = document.getElementById('wed-past');
    const wedParticiple = document.getElementById('wed-participle');
    const wedMeaning = document.getElementById('wed-meaning');

    let wedCorrect = checkInput(wedPast, verbs.wed.past) &&
                       checkInput(wedParticiple, verbs.wed.participle) &&
                       checkInput(wedMeaning, verbs.wed.meaning);

    resultText += wedCorrect  ? "wed: Correct!<br>" : "wed: Incorrect.<br>";
    
    // Verificar 'weep'
    const weepPast = document.getElementById('weep-past');
    const weepParticiple = document.getElementById('weep-participle');
    const weepMeaning = document.getElementById('weep-meaning');

    let weepCorrect = checkInput(weepPast, verbs.weep.past) &&
                       checkInput(weepParticiple, verbs.weep.participle) &&
                       checkInput(weepMeaning, verbs.weep.meaning);

    resultText += weepCorrect  ? "weep: Correct!<br>" : "weep: Incorrect.<br>";
    
    // Verificar 'wet'
    const wetPast = document.getElementById('wet-past');
    const wetParticiple = document.getElementById('wet-participle');
    const wetMeaning = document.getElementById('wet-meaning');

    let wetCorrect = checkInput(wetPast, verbs.wet.past) &&
                       checkInput(wetParticiple, verbs.wet.participle) &&
                       checkInput(wetMeaning, verbs.wet.meaning);

    resultText += wetCorrect  ? "wet: Correct!<br>" : "wet: Incorrect.<br>";
    
    // Verificar 'win'
    const winPast = document.getElementById('win-past');
    const winParticiple = document.getElementById('win-participle');
    const winMeaning = document.getElementById('win-meaning');

    let winCorrect = checkInput(winPast, verbs.win.past) &&
                       checkInput(winParticiple, verbs.win.participle) &&
                       checkInput(winMeaning, verbs.win.meaning);

    resultText += winCorrect  ? "win: Correct!<br>" : "win: Incorrect.<br>";
    
    // Verificar 'wind'
    const windPast = document.getElementById('wind-past');
    const windParticiple = document.getElementById('wind-participle');
    const windMeaning = document.getElementById('wind-meaning');

    let windCorrect = checkInput(windPast, verbs.wind.past) &&
                       checkInput(windParticiple, verbs.wind.participle) &&
                       checkInput(windMeaning, verbs.wind.meaning);

    resultText += windCorrect  ? "wind: Correct!<br>" : "wind: Incorrect.<br>";
           
    // Verificar 'withdraw'
    const withdrawPast = document.getElementById('withdraw-past');
    const withdrawParticiple = document.getElementById('withdraw-participle');
    const withdrawMeaning = document.getElementById('withdraw-meaning');

    let withdrawCorrect = checkInput(withdrawPast, verbs.withdraw.past) &&
                       checkInput(withdrawParticiple, verbs.withdraw.participle) &&
                       checkInput(withdrawMeaning, verbs.withdraw.meaning);

    resultText += withdrawCorrect  ? "withdraw: Correct!<br>" : "withdraw: Incorrect.<br>";
    
    // Verificar 'withhold'
    const withholdPast = document.getElementById('withhold-past');
    const withholdParticiple = document.getElementById('withhold-participle');
    const withholdMeaning = document.getElementById('withhold-meaning');

    let withholdCorrect = checkInput(withholdPast, verbs.withhold.past) &&
                       checkInput(withholdParticiple, verbs.withhold.participle) &&
                       checkInput(withholdMeaning, verbs.withhold.meaning);

    resultText += withholdCorrect  ? "withhold: Correct!<br>" : "withhold: Incorrect.<br>";
    
    // Verificar 'withstand'
    const withstandPast = document.getElementById('withstand-past');
    const withstandParticiple = document.getElementById('withstand-participle');
    const withstandMeaning = document.getElementById('withstand-meaning');

    let withstandCorrect = checkInput(withstandPast, verbs.withstand.past) &&
                       checkInput(withstandParticiple, verbs.withstand.participle) &&
                       checkInput(withstandMeaning, verbs.withstand.meaning);

    resultText += withstandCorrect  ? "withstand: Correct!<br>" : "withstand: Incorrect.<br>";
    
    // Verificar 'wring'
    const wringPast = document.getElementById('wring-past');
    const wringParticiple = document.getElementById('wring-participle');
    const wringMeaning = document.getElementById('wring-meaning');

    let wringCorrect = checkInput(wringPast, verbs.wring.past) &&
                       checkInput(wringParticiple, verbs.wring.participle) &&
                       checkInput(wringMeaning, verbs.wring.meaning);

    resultText += wringCorrect  ? "wring: Correct!<br>" : "wring: Incorrect.<br>";
    
    // Verificar 'write'
    const writePast = document.getElementById('write-past');
    const writeParticiple = document.getElementById('write-participle');
    const writeMeaning = document.getElementById('write-meaning');

    let writeCorrect = checkInput(writePast, verbs.write.past) &&
                       checkInput(writeParticiple, verbs.write.participle) &&
                       checkInput(writeMeaning, verbs.write.meaning);

    resultText += writeCorrect  ? "write: Correct!<br>" : "write: Incorrect.<br>";

    document.getElementById('result').innerHTML = resultText;
}
