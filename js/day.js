var imageFolder = 'img/';

document.addEventListener("DOMContentLoaded", onLoad, false);


function onLoad(e) {
    var day = getQueryVariable('day');
    const caption = document.getElementById("caption");
    caption.innerText = 'Luke ' + day;
    var imageSource = imageFolder + String(day) + 'des.jpg';
    const image = document.getElementById("image");
    image.setAttribute('src', imageSource);
    const q1 = document.getElementById("q1");
    q1.innerText = content[day-1].q1;
    const q2 = document.getElementById("q2");
    q2.innerText = content[day-1].q2;
    const q3 = document.getElementById("q3");
    q3.innerText = content[day-1].q3;
};


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

var content = [
    { // 1
        q1: 'Som i fjor blir det spørsmål knyttet til bilder fra året som har gått - to bilder per måned. 1. nyttårsdag 2023 - Åsta, Else og Ingeborg: Når har Else bursdag?',
        q2: 'Når har Åsta bursdag? ',
        q3: 'Hvor bor Åsta, Johan og Else - holder med gata?'
    },
    { // 2
        q1: 'Det blir nok flere bilder av Demi fram til august. Demi var en korthåret vorsteh. Nevn to andre vorsteh-typer.',
        q2: 'Fia var en flat-coated retriever. Nevn tre andre retriever-typer.',
        q3: 'Da sier siste spørsmål seg selv - Billie er en dvergpuddel - nevn to andre puddeltyper.'
    },
    { // 3
        q1: 'Atle fylte 60 år 3. februar. Hva fikk han i gave fra Ingrid?',
        q2: 'Hva ønsket han seg i gave fra gjestene?',
        q3: 'Martine har også bursdag i februar - hvor gammel ble hun i 2023?'
    },
    { // 4
        q1: 'Litt dramatikk i stallen - Friken har kolikk og får en noe brutal, men effektiv behandling.Hva het hesten til Ida som måtte avlives i sommer?',
        q2: 'Muldyr er en krysning mellom hest og esel, men hvem er mor og hvem er far?',
        q3: 'Hva heter dyret der det er motsatt mor og far?'
    },
    { // 5
        q1: 'Ingeborg flytta inn i ny leilighet i Havstad Torg helt på slutten av mars. I 1. etasje holder Kompis til - vet du om andre Kompis-restauranter i Trondheim?',
        q2: 'Hvilken fotballklubb har hjemmebane på andre sida av Havstadveien?',
        q3: 'Hva heter borettslaget der Helge bor?'
    },
    { // 6
        q1: 'Anne og Atle var på sin tradisjonelle fjelltur i vinter også. Spesielt returen ble litt strabasiøs. Hvor er de her?',
        q2: 'For ikke å «spoile» spørsmål a, flytter jeg til et annet fjellområde. Nevn to hytter vi (alle fire) har bodd på i Jotunheimen.',
        q3: 'Enn i Rondane - to av hyttene vi har bodd på alle fire.'
    },
    { // 7
        q1: 'Det ble ingen familiepåske på hytta i år - av forskjellige årsaker. Det har skjedd tidligere år også, f.eks. i 2020. Hva var grunnen da? ',
        q2: 'Påska 2011 feira vi i utlandet, hvor var vi da?',
        q3: 'Etter påske i fjor hadde Anne og Atle en fantastisk tur i fjellet. Hvor gikk de?'
    },
    { // 8
        q1: 'Atle, Helge og Sveinung på skitur etter påske. Hvor gikk turen?',
        q2: 'Hva heter det høyeste fjellet i Trondheim (ingen sammenheng med bildet)?',
        q3: 'Så flytter vi oss til Malvikmarka - nevn fire vatn der.'
    },
    { // 9
        q1: 'Vi har kommet til mai, og Ingrid feirer bursdag. Hvor feira hun (eller vi) dagen hennes 3. mai?',
        q2: 'Ingrid er jo pensjonist nå, men kan du nevne tre steder hun har jobbet?',
        q3: 'Hva heter de fire klassekameratene Ingrid møter med ujamne mellomrom (Okkenhaugtreff)?'
    },
    { // 10
        q1: 'Her er damene i finstasen 17. mai i Smiskaret. Hvor feira vi 17. mai i 2005?',
        q2: 'Hvor feira Ingeborg 17. mai i 2014?',
        q3: 'Hvor feira Anne og Atle 17. mai i 2017? '
    },
    { // 11
        q1: 'Dette bildet er fra dugnadshelga på hytta i juni, Atle, Sveinung og Helga jobber på! Når er St.Hansaften?',
        q2: 'Når er Olsok?',
        q3: 'Når er Den internasjonale kvinnedagen?'
    },
    { // 12
        q1: 'Bildet er tatt i juli, men er det siste av Demi og Friken sammen, derfor måtte det bli med her! Vi hadde hunder på Reistad så lenge tilbake jeg kan huske. Hvilken rase?',
        q2: 'Hva het de?',
        q3: 'Hva heter May Trudes boxer?'
    },
    { // 13
        q1: 'Og så den største dagen i 2023 - 7. juli! Men når har Ingrid og Atle bryllupsdag? ',
        q2: 'Hvilket år gifta de seg?',
        q3: 'Hva heter det når et par har vært gift i 50 år?'
    },
    { // 14
        q1: 'Brudeparet spretter bryllupskaka. Men hva heter Norges «nasjonalkake»?',
        q2: 'Når vi er inne på Norges nasjonal-, hva er Norges nasjonalfugl?',
        q3: 'Og nasjonaldyret?'
    },
    { // 15
        q1: 'Demi døde 1. august, og dette er ett av de siste bildene av henne. Når fikk vi Demi - måned og år?',
        q2: 'Når døde Fia - måned og år?',
        q3: 'Når var Fia født?'
    },
    { // 16
        q1: 'To sterke karer som virker litt slitne her, men de fikk ovnen inn i hytta! Når er Helge født?',
        q2: 'Hvor jobber han?',
        q3: 'Hva betyr navnet Helge?'
    },
    { // 17
        q1: 'Ei fin helg og en nydelig kveld ved Børsjøen i september. Hvor mange dager er det i september?',
        q2: 'Når var høstjevndøgn (i år)?',
        q3: 'Hva er spesielt med høstjevndøgn (og vårjevndøgn)?'
    },
    { // 18
        q1: 'Anne fylte 29 år 26. september (og feira dagen 27. september). 27. september har to av søskenbarna mine (de er søsken) bursdag. Vet dere hvem det er?',
        q2: 'Bestemor hadde også bursdag i september, når var det?',
        q3: 'Morfar og bestefar hadde bursdag samme måned, hvilken? Ta gjerne med datoen også hvis du vet det. '
    },
    { // 19
        q1: 'Ingrid og Atle var på Mallorca ei uke først på oktober. Hvilket land tilhører Mallorca?',
        q2: 'For ikke å «spoile» spm a), flytter vi oss til et annet land i Europa. Nevn to greske øyer vi har feriert på sammen alle fire.',
        q3: 'Vi var på biltur i England i 2008. Nevn to av byene vi overnatta i der?'
    },
    { // 20
        q1: 'Dette blir jo helt feil måned - Atle, Helge, Liv og Sveinung var på Helgeland i august. Hva heter fjellområdet de var på tur lørdag?',
        q2: 'Hvem har skrevet bokserien med samme navn?',
        q3: 'Vi var bl.a. i Sandnessjøen på sykkeltur i 2004. Husker dere to av øyene vi var på?'
    },
    { // 21
        q1: 'En fin familietur i Bymarka tidlig i november. Så da blir det spørsmål fra Bymarka her. Fire sjøer/vatn vi har besøkt sammen i Bymarka inkl den vi besøkte.',
        q2: 'Og to topper vi har vært på sammen.',
        q3: 'Så tar vi med hytter også - to vi har vært på sammen.'
    },
    { // 22
        q1: 'Bildet er fra en tur Anne, Ingeborg, Billie og Friken hadde i Bymarka i november. I 2023 har det vært flere «skandaler» med inhabile statsråder. Nevn to som måtte gå.',
        q2: 'Hva heter mannen til Erna Solberg?',
        q3: 'Hvem er leder for Senterpartiet og finansminister?'
    },
    { // 23
        q1: 'Til slutt to bilder fra 2022. Dette er fra 1. søndag i advent. Noen dager senere feiret vi en runddag - hva var det?',
        q2: 'Dette blir jo lett for Anne, men tar det med likevel - hva heter mormor og morfar til Anne Mette?',
        q3: 'Og Ole - broren til Anne Mette - har to fornavn, hva er det andre?'
    },
    { // 24
        q1: 'Demi passer på julegavene! 4. juledag ble litt dramatisk for oss. Hva skjedde da?',
        q2: 'Litt mer alvor - siden det fortsatt er krig i Ukraina - hva heter presidenten der?',
        q3: 'Og så må vi en tur til Midtøsten - hva heter statsministeren i Israel?'
    },
];
