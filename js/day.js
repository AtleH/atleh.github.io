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
        q1: 'Hyttetur i januar. Hvilken rase er hundene til Ingeborg og Toralf?',
        q2: 'Apropos hunder - Hvilken rase er hunden til kronprinsparet?',
        q3: 'Hvilken rase er hunden til Trine m/fam?'
    },
    { // 2
        q1: 'Handball-EM i Trondheim tidlig i januar. Hvilke kamper såg vi?',
        q2: 'Apropos handball-EM - hvilken plass endte Norge på?',
        q3: 'Hva heter Trondheims store handball-sønn?'
    },
    { // 3
        q1: 'Bursdag Atle, 3. februar. Hvor feiret vi den (begge stedene)?',
        q2: 'Hvor gammel ble Martine 7. februar?',
        q3: 'Når har Kongen bursdag?'
    },
    { // 4
        q1: 'Anne brakk et bein i tommelen på ei fotballtrening i februar. Hva kalles bein i fingrene på fagspråket?',
        q2: 'Apropos Anne og fotball - nevn minst fem klubber som fotball-nomaden Anne har spilt på.',
        q3: 'Hva heter Rosenborgs svenske spiss (han som kom i vår)?'
    },
    { // 5
        q1: 'Damene på Word Cup i Skiskyting i mars 2009. Hvilket stort mesterskap skal Trondheim arrangere i 2025?',
        q2: 'Vi såg Jesus Christ Superstar på teatret i mars. Hvem spilte Jesus?',
        q3: 'Hvem har skrevet "Fruen fra havet"?'
    },
    { // 6
        q1: 'Tur på hytta i mars i år (like før Norge stengte). Hvor er Atle og Demi her?',
        q2: 'Hva heter de to første hyttene på Norge på tvers-ruta fra Stjørdal? (Atle og Anne har overnatta på den første, vi har alle vært innom (eller i alle fall i nærheten av) den andre.)',
        q3: 'Hva heter de tre hyttene som er en del av Trekanten i Trollheimen?'
    },
    { // 7
        q1: 'Påske på hytta i april 2012 - Hva gjør vi her?',
        q2: 'Dette var siste påska med Fia - hvor gammel var hun da hun døde?',
        q3: 'Bestemor døde våren 2012 - hvor gammel ble hun?'
    },
    { // 8
        q1: 'Anne og Atle hadde en dramatisk fjelltur påska 2017. Hvilken hytte er dette?',
        q2: 'Hva heter toppen nær denne hytta der Atle og Anne var 17. mai samme år?',
        q3: 'Anne og Atle var også på topptur sommeren 2018 i et fantastisk vær (et annet fjellområde) - hvilken topp var de på da?'
    },
    { // 9
        q1: 'Ingrid feiret 60 årsdag i mai 2015. May Trude og Ingrid Våge har også bursdager i mai - hvilke datoer er det?',
        q2: 'Apropos Ingrid Våge - hva heter de to søstrene og broren hennes?',
        q3: 'Hvorfor er 8. mai flaggdag i Norge?'
    },
    { // 10
        q1: '17. mai 2010 hadde vi fam Haugan-Hove på besøk. Hva heter Bernt Erlend til etternavn?',
        q2: 'Apropos etternavn - hva heter Jeanette til etternavn?',
        q3: 'Enda et apropos etternavn - enn Johan?'
    },
    { // 11
        q1: 'Ingrid og Atle feiret 30 års bryllupsdag 16. juni i år. Hva kalles 30 års bryllupsdag?',
        q2: 'Hvor lenge må man ha vært gift for å feire gullbryllup?',
        q3: 'Hvor feiret May Trude og Paul bryllupet sitt i 2008?'
    },
    { // 12
        q1: 'Familietur i Bymarka i juni - hvor tok vi rasten?',
        q2: 'Vi hadde også en flott topptur i Bymarka ei uke tidligere - hvor var vi da?',
        q3: 'Når er St.Hans-aften?'
    },
    { // 13
        q1: 'Juli og to uker på hytta - hvor er dette fine bildet av Demi tatt?',
        q2: 'Hvor mange ørret fikk vi til sammen de to ukene (+-3)?',
        q3: 'Hva er det offisielle fulle navnet på koronaviruset?'
    },
    { // 14
        q1: 'Atle, Demi og Ingrid på fjelltur i Trollheimen i slutten av juli - hvilke hytter bodde de på?',
        q2: 'Grete og Olav Terje har hytte i Trollheimen. Hva heter elva som ligger nær hytta (både navnet på ei turistforeningshytte, parkeringa og elva har navn med samme utgangspunkt)?',
        q3: 'Hvor foregår "Spelet om Heilag Olav"?'
    },
    { // 15
        q1: 'Ingeborg feiret dagen sin 3. august og var den eneste i familien som hadde gjester utenom oss selv. Hvem feiret hun sammen med på dagen?',
        q2: 'Joar har også geburtsdag i august - hvor gammel ble han 8. august 2020?',
        q3: 'Hvorfor ble 27 ungdommer innlagt på sykehus etter en ulovlig grottefest ved St.Hanshaugen i Oslo?'
    },
    { // 16
        q1: 'Sommeren 2012 var vi på den foreløpig siste utenlandsturen sammen alle fire - hvor var vi da (land og sted)?',
        q2: 'Hvor er bildet tatt (by og land)?',
        q3: 'Hva het landet som begge disse landene var en del av før krigene på slutten av 80- og begynnelsen av 90-tallet?'
    },
    { // 17
        q1: 'Hvor feiret Anne dagen sin 26. september?',
        q2: 'Åsta og Helge har også bursdag i september - hvor gamle ble de 8. september 2020?',
        q3: 'Hvem ble ny leder i Venstre etter Trine Skei Grande?'
    },
    { // 18
        q1: 'Ingrid og Demi på tur i september - hvor er bildet tatt?',
        q2: 'Nevn navnet på minst fem tjønner/vatn i Malvik-marka - utenom Stavsjøen.',
        q3: 'Hva heter berget der Sveberg skole hadde rasten sin på den tradisjonelle turen fra Bakken til Sveberg skole?'
    },
    { // 19
        q1: 'Ingrid og Demi på tur også i oktober - hvor er Demi her?',
        q2: 'Nevn tre hytter i Bymarka med servering?',
        q3: 'Hva heter den nye hesten til Ida? '
    },
    { // 20
        q1: 'I 2009 var vi på utenlandstur i høstferien - hvor (ei øy i Hellas)?',
        q2: 'I sommerferien samme år var vi på Vestlandsturné og besøkte (kjørte i det minste gjennom) tre byer i det som da het Sogn og Fjordane og minst fire i Møre og Romsdal- nevn minst 3 av disse? ',
        q3: 'Sogn og Fjordane og Hordaland ble slått sammen til et fylke 1.1.2020, hva heter det?'
    },
    { // 21
        q1: 'Bakedag for Liv og Ingrid i Langrennshalla i slutten av november - hva heter konfektkaka som de bruker å bake?',
        q2: 'Noe helt annet - men det har litt med Liv & fam å gjøre - nevn målet/sted for minst tre av sykkelturene våre (men gjerne alle)?',
        q3: 'Når vi først snakker om sykkel, hva het syklisten som Ingeborg og Anne laget plakat for da vi var i Frankrike og overvar en etappe av Tour de France?'
    },
    { // 22
        q1: 'Siden november er en dårlig måned for spennende bilder, har vi her noe helt annet. Hvor er vi - først og fremst land, men gjerne også sted?',
        q2: 'Hva heter hunden?',
        q3: 'Hva het nordmannen som ble dømt for og fengslet for spionasje mot Russland? Han ble benådet i november i 2019. '
    },
    { // 23
        q1: 'Desember-bilde nr 1 er fra jula 2007 - hvilken begivenhet er dette?',
        q2: 'Tre flotte unge damer - Ingeborg i midten, men hvem er de to andre?',
        q3: 'Hva heter søsknene til Sveinung?'
    },
    { // 24
        q1: 'Julaften på Brundalen - som et apropos til desember og jul. Vi flyttet hit til Smiskaret 11 like før jul - men hvilket år var det?',
        q2: 'Hvem spiller statsminister David i Love Actually?',
        q3: 'En annen film som ofte har gått i jula, er Flåklypa Grand Prix - hva heter moldvarp-/piggsvinfiguren som synes alt er "fali"?'
    },
];