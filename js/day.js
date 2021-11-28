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
        q1: 'Fest i familien. Men hvilken anledning er dette?',
        q2: 'Hvem laga marsipankaka?',
        q3: 'Hvem hjalp til på kjøkkenet'
    },
    { // 2
        q1: 'Anne har vært på en del fotballturer - både i Norge og utlandet. Men hvor er dette?',
        q2: 'Med hvilket lag?',
        q3: 'Hva var hovedfargene på fotballdrakten til Augsburg-jentene?'
    },
    { // 3
        q1: 'Atle på tur alene uten damene sine, hvor er han her?',
        q2: 'Og hvem er han sammen med - altså ikke hesten, men resten av gjengen som ikke er med på bildet?',
        q3: 'Hva heter kirka her (som er litt viktig for Atle og Ingrid)?'
    },
    { // 4
        q1: 'Ny fest i familien - hvilken anledning?',
        q2: 'Hvem hjalp til på kjøkkenet ved denne festen?',
        q3: 'A propos fest - hva slags bunad har damene på Reistad?'
    },
    { // 5
        q1: 'Enda en familiefest - men hva eller hvem feirer vi her?',
        q2: 'Anne med gitar i bakgrunnen - hva heter gitarlæreren hennes som fikk trillinger?',
        q3: 'med en skuespiller på Trøndelag Teater som heter?'
    },
    { // 6
        q1: 'Ingrid har også vært alene på tur. Hvor er hun her?',
        q2: 'Hvem har laget "Nesevise" - siden Ingrids tur(er) gjaldt nesen?  ',
        q3: 'Hvem har en nese som vokser når han lyver?'
    },
    { // 7
        q1: 'Hvor er Anne her?',
        q2: 'Hvorfor er hun her?',
        q3: 'Ikke helt det samme kanskje - men hva heter Norges store stjerne på 400 m hekk?'
    },
    { // 8
        q1: 'Anne var på tur igjen våren 2013, men ikke fotball denne gangen. Hvor var hun da?',
        q2: 'Hvorfor var hun på tur?',
        q3: 'Hvor er bildet tatt (altså hvilken by er dette)?'
    },
    { // 9
        q1: 'Ingeborg var på flere turer i 2010. Dette er fra vårturen. Hvor er dette bildet tatt?',
        q2: 'Hva slags dag er forbundet med bl.a. denne kirkegården?',
        q3: 'Når var denne dagen?'
    },
    { // 10
        q1: 'Atle og Ingrid var på tur i 2015. Hvor?',
        q2: 'Hvor er dette bildet tatt?',
        q3: 'Har Atle og Ingrid vært på tur sammen utenom Europa, viss ja - hvor?'
    },
    { // 11
        q1: 'Anne hadde besøk av ei jente fra Frankrike mens hun gikk på ungdomskola. Hva het hun?',
        q2: 'Hvor er bildet tatt?',
        q3: 'Hvor mange ganger har Ingeborg og Anne vært i Frankrike?'
    },
    { // 12
        q1: 'Nytt familieselskap - men hva eller hvem feirer vi her?',
        q2: 'Blant gjestene er Marit og Inge - hva heter dattera deres?',
        q3: 'Anne er fotograf, men hvor er Ingeborg?'
    },
    { // 13
        q1: 'Dette er fra den siste utenlandsturen vi var på sammen. I hvilket land var vi?',
        q2: 'Hva het byen?',
        q3: 'Vi var i det samme landet en gang tidligere også, hvor var vi da?'
    },
    { // 14
        q1: 'Dette er fra den andre turen Ingeborg var på i 2010 - hvor var hun da (to byer)?',
        q2: 'Hvor er bildet tatt?',
        q3: 'Hva heter hovedstaden i Tjekkia?'
    },
    { // 15
        q1: 'Ingeborg hadde fransk gjenvisitt - to trivelige gutter. Hva het de?',
        q2: 'Hvor kom de fra - sånn ca?',
        q3: 'De skulle egentlig ha kommet tidligere, men turen måtte forskyves. Hvorfor?'
    },
    { // 16
        q1: 'Her er det litt kaotisk i Smiskaret 11, med oppussing av kjøkken. Når gjorde vi det?',
        q2: 'Ingeborg var ikke hjemme da - hvor var hun?',
        q3: 'Når ble huset her i Smiskaret 11 bygd?'
    },
    { // 17
        q1: 'Nå blir det litt dyreliv - dette er Fia som var en flatcoated retriver. Men hvilke hunder har Astrid og Olaf?',
        q2: 'Hva heter hunderasen som holder til på Reistad nå?',
        q3: 'Hva slags hunderase hadde May Trude da hun kom til Reistad og som de også hadde før de fikk småhundene?'
    },
    { // 18
        q1: 'Her er Demi som hadde en eier før oss. Hva het hun?',
        q2: 'Nina og Rune har hatt flere hunder av samme rase. Hvilken?',
        q3: 'Hva heter hunden til Gunn Berit'
    },
    { // 19
        q1: 'Friken var mye på tur vår/sommer 2017. Nevn tre staller/steder han var da',
        q2: 'Nevn tre staller/rideskoler der Ingeborg har ridd eller hatt hest',
        q3: 'Hva het hun som Ingeborg kjøpte Friken fra?'
    },
    { // 20
        q1: 'Sannelig er Anne på enda en fotballtur - hvor er dette?',
        q2: 'Hvilket lag er hun med her? ',
        q3: 'Hvem ble seriemester i fotball for damer i 2021?'
    },
    { // 21
        q1: 'Så er Ingeborg på Øvrevoll igjen. Men når var det?',
        q2: 'I hvilken kommune ligger Øvrevoll?',
        q3: 'og i hvilket fylke?'
    },
    { // 22
        q1: 'Her feirer vi også et jubileum, men hvilket?',
        q2: 'Når vi snakker om jubileum - når feiret Trondheim 1000 årsjubileet sitt?',
        q3: 'Hvem står på sokkel på torget i Trondheim?'
    },
    { // 23
        q1: 'UKM - både Ingeborg og Anne har deltatt. Her spiller Anne i band, men hvilket instrument spiller hun?',
        q2: 'Anne deltok også noen år senere, men da alene. Hvilken låt deltok hun med da?',
        q3: 'Hva deltok Ingeborg med?'
    },
    { // 24
        q1: 'Julestemning - Atle og Ingrid var i London og opplevde at julegrana ble tent. Hvor står den og hva er spesielt med den for en nordmann?',
        q2: 'Vi var også i London på en norsk festdag for noen år siden - hvilken?',
        q3: 'Da var det samtidig en britisk festdag - hvilken?'
    },   
];
