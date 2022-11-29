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
        q1: 'I år blir det spørsmål knyttet til bilder fra 2022 - to per måned. Her er Atle og de unge Byåsendamene på kveldsskitur i januar. Hvor gikk turen?',
        q2: 'Nevn tre topper i Bymarka med «heia» i navnet.',
        q3: 'Hva heter vannet ved Grønlia?'
    },
    { // 2
        q1: 'Atle og Demi på en av de mange skiturene sine. Når ble Demi født?',
        q2: 'Hun er en korthåret vorstehhund, tilhører FCI-gruppe 7 som har navnet?',
        q3: 'Puddel tilhører FCI-gruppe 9, hva kalles den gruppen?'
    },
    { // 3
        q1: 'Her er Ingeborg, Atle og Demi (og Ingrid) på bursdagstur i Bymarka (3. februar). Men hvor er bildet tatt?',
        q2: 'Siden bildet er tatt på ei bru, er det naturlig å spørre om navn på elver/bekker i Bymarka. Nevn to.',
        q3: 'Hvor får Trondheim og Malvik kommuner drikkevannet fra?'
    },
    { // 4
        q1: 'Demi og Ingrid på tur i snøen i februar. Hvor er bildet tatt?',
        q2: '9. februar var en stor dag. Hva skjedde da?',
        q3: 'OL ble arrangert i februar - hvor?'
    },
    { // 5
        q1: 'I mars fikk Ingeborg endelig ri på Friken igjen. Hva er Frikens fulle navn?',
        q2: 'Friken er en islandshest og er av samme opprinnelse som de fire norske hesterasene. Nevn to av dem.',
        q3: 'Ei av døtrene til Märtha Louise driver med sprang på ganske høyt nivå. Hvem?'
    },
    { // 6
        q1: 'I mars var Atle, Demi og Ingrid ei helg på Bjørneggen. I hvilken kommune ligger Bjørneggen?',
        q2: 'Nevn tre TT-hytter i Sylan.',
        q3: 'Hva heter det høyeste fjellet i Sylan?'
    },
    { // 7
        q1: 'Damene i påskesol utenfor hytta. Standardspørsmål: Når er 1. påskedag? «Første søndag........» ',
        q2: 'Som kjent ligger hytta vår ved Børsjøen. Men det er flere vann i området rundt. Nevn tre.',
        q3: 'Hva heter det høyeste fjellet i Selbu?'
    },
    { // 8
        q1: 'Lørdag etter påske var Atle på tur sammen med Liv, Sveinung og Helge. Hva var anledningen?',
        q2: 'Hvor ca var de? Fjellområdet holder.',
        q3: 'Hva heter veien gjennom det fjellområdet?'
    },
    { // 9
        q1: 'Tradisjonell 17. mai-tur i marka. Husker dere hvor turen gikk?',
        q2: 'Mai har ofte mange fri- og/eller helligdager. Når er Kr. Himmelfartsdag i forhold til 1. påskedag?',
        q3: 'Hvorfor var 17. mai-feiringa i 2014 spesiell?'
    },
    { // 10
        q1: 'Atle, Ingrid og Demi var på besøk i Hafslo i slutten av mai. Marit og Bernt Erlend har flytta til Hafslo. Hvor jobber Marit?',
        q2: 'Hva heter toppen i nærheten av Hafslo på 808 moh som vi har vært oppe på flere ganger?',
        q3: 'Norges største isbre ligger bl.a. i Luster kommune. Hva heter den? '
    },
    { // 11
        q1: 'Billie er på besøk i Smiskaret for første gang - trur eg:) Hva er spesielt med pelsen til en puddel i forhold til f.eks. Demi og Fia?',
        q2: 'Hva heter hunden til Obelix?',
        q3: 'Enn hunden til Pondus?'
    },
    { // 12
        q1: 'Dårlig med passende bilder i juni, så da blir det et av Friken som hadde bursdag i mai. Hvor gammel ble han?',
        q2: 'Hva het hesten til Odin?',
        q3: 'Og hva var spesielt med han?'
    },
    { // 13
        q1: 'Børsjøen i juli, regn og surt, men tur ble det likevel. Hvor er bildet tatt?',
        q2: 'Hva heter parkeringsplassen ved enden av Børdalsveien?',
        q3: 'Hva heter hyttene som inngår i Norge på tvers (ser bort fra ev overnatting i Stjørdal)?'
    },
    { // 14
        q1: 'Dette er Ingeborg og Atle ved Schulzhytta på turen de hadde i sommer. Jeg har allerede spurt mye om Sylan, så nå flytter jeg til andre fjell. Vi har jo vært på mange fjellturer og overnatta på mange hytter. Men hva het hytta som ligger på en bre?',
        q2: 'I hvilket fjellområde ligger Dørålglupen?',
        q3: 'Hva heter Norges høyeste fjell?'
    },
    { // 15
        q1: 'Ingeborg feirer 30 årsdag. Der debuterte Else som gjest i familieselskap i Smiskaret. Når ble hun født?',
        q2: 'Hvilket stjernetegn blir det?',
        q3: 'Hvilket stjernetegn har Åsta, Helge og Andrea?'
    },
    { // 16
        q1: 'Ingrid tar en velfortjent (?) pust i bakken og en kanelsnurr. Atle og Demi er også med på turen. Hvor er dette?',
        q2: 'Hva heter bergnabben i Estenstadmarka som minner om Trolltunga?',
        q3: 'Og når vi er inne på berømte fjellformasjoner, hva heter Sunndalens svar på Prekestolen?'
    },
    { // 17
        q1: 'Atle og Ingrid var ei uke på ei gresk øy i september. Hva het den?',
        q2: 'Nevn to greske øyer der hele familien har feriert.',
        q3: 'Hva heter øya i Egeerhavet som er delt mellom Hellas og Tyrkia?'
    },
    { // 18
        q1: 'Her feirer vi bursdagen til Anne (hos Ingeborg). Ingrid kom heim fra Hellas søndag og for videre på hyttetur tirsdag. Hva var anledningen?',
        q2: 'Hyttetur = fjell, så da lurer jeg på: Hva heter fjellområdet der (Stor)sølnkletten og Breisjøsæter ligger?',
        q3: 'Hva heter «fjellovergangen» mellom Jøldalshytta og Trollheimshytta som vi har gått på føttene? '
    },
    { // 19
        q1: 'Anne, Billie og Demi på tur - Ingrid var også med. Men hvor er dette?',
        q2: 'Både Magnus og Johan hadde fødselsdag i oktober. Husker dere datoene?',
        q3: 'Hva er Oktoberfestivalen?'
    },
    { // 20
        q1: 'Ingeborg var på BET, Blakstad, i 4 uker. Hva betyr BET?',
        q2: 'I hvilken kommune ligger Blakstad?',
        q3: 'Det bor en berømt norsk familie i denne kommunen, hvem er det?'
    },
    { // 21
        q1: 'Atle og Ingrid var i Bergen noen dager først på november. Der møtte de Joar, Jeanette og Oskar. Hvor er dette bildet fra?',
        q2: 'I hvilket fylke ligger Bergen?',
        q3: 'Hvor mange fjell ligger rundt Bergen?'
    },
    { // 22
        q1: 'Vi arrangerte den tradisjonelle høstfesten ved Børsjøen 19. november. Hvem deltar der?',
        q2: 'Norge vant nok en gang EM i handball. Hvem ble kåret til turneringens mest verdifulle spiller?',
        q3: 'VM i fotball arrangeres også nå - i Qatar. Hva heter hovedstaden i Qatar?'
    },
    { // 23
        q1: 'Av naturlige årsaker har jeg ingen bilder fra desember 2022, så da må vi gå tilbake til i fjor. Da var det fine skøyteforhold, og dere var på flere fine turer. Hvor er dette bildet tatt?',
        q2: 'Da jeg vokste opp og fram til OL på Lillehammer, fulgte vi med på skøyter. Sånn er det ikke i dag. Kan dere navnet på tre skøyteløpere, aktive i dag, tidligere aktive, levende eller døde?',
        q3: 'Hva heter ishallen på Hamar med det spesielle utseendet som ble bygget til OL i 1994?'
    },
    { // 24
        q1: 'Kald fottur i nærområdet 1. juledag i fjor. Hvor er bildet tatt?',
        q2: 'Da jeg gikk på skolen, måtte vi pugge julesanger. Det slapp dere. Men i barnekirkekoret lærte dere (og jeg) nye julesanger, bl.a. «En krybbe var....». Husker dere første verset?',
        q3: 'Nyttårsfeiringa ved årsskiftet 1999/2000 var vi med på et spesielt arrangement (med koret). Hvor var vi?'
    },
];
