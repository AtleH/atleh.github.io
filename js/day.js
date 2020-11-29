var imageFolder = 'img/';

document.addEventListener("DOMContentLoaded", onLoad, false);


function onLoad(e) {
    var day = getQueryVariable('day');
    const caption = document.getElementById("caption");
    caption.innerText = 'Luke ' + day;
    //var imageSource = imageFolder + String(day) + 'des.jpg';
    var imageSource = imageFolder + 'default.jpg';
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
        q1: 'Ingeborg 15 år – 2007. Siste år med tradisjonell sykkeltur. Hvor gikk turen?',
        q2: 'Stor familiebegivenhet i mai – hvilken?',
        q3: 'Hva er en velosiped?'
    },
    { // 2
        q1: 'Fortsatt 2007. Utenlandstur til sørlige strøk – både hovedstad, biltur og badeferie. Hvor reiste vi?',
        q2: 'Avslutningen på hyttepåska var litt spesiell i 2007 – hvordan?',
        q3: 'Hvor langt er et maratonløp?'
    },
    { // 3
        q1: '2008. Hvor ble dette bildet tatt? Tips: Ferietur',
        q2: 'Sykkelturen 2008 ble til en dagstur til fots. Hvor gikk vi?',
        q3: 'Fra hvilken by er handlingen i Anne Franks dagbok?'
    },
    { // 4
        q1: 'Fortsatt 2008. Fjellturen ble lang – med både fint vær og dårlig vær, men hvor?',
        q2: 'Sannelig ble det utenlandstur i år også, men hvor? Tips: Ingeborg feiret 16 årsdagen på ferieturen.',
        q3: 'Hvilken planet blir kalt den røde planeten?'
    },
    { // 5
        q1: '2009 - Fia – Sweet painted Lady: Når var hun fødd?',
        q2: 'Enn Demi?',
        q3: 'Hva kalles korsang uten akkompagnement?'
    },
    { // 6
        q1: 'Fortsatt 2009: Hvor i all verden er dette bildet tatt?',
        q2: 'Det ble fjelltur i år også – men vi endret rute underveis på grunn av været. Hvor gikk turen?',
        q3: 'Norgesferie ble det også – langs kysten fra Hafslo. Vi besøkte fire av de seks byene i Møre og Romsdal. Hva heter de og hva heter den siste?'
    },
    { // 7
        q1: '2010: Et avslutta kapittel for Anne. Hvor/når er dette bildet tatt?',
        q2: 'Atle og Ingrid hadde 20 års bryllupsdag. Men hva kalles det?',
        q3: 'Hva kalles 30 års bryllupsdag?'
    },
    { // 8
        q1: 'Fortsatt 2010: På sensommeren var det et større arrangement i Trondheim som vi damene var en del involvert i – spesielt Ingeborg. Hva var det?',
        q2: 'Ingeborg var ellers veldig aktiv dette året, med reiser både hit og dit og to utenlandsturer. Hvor gikk turene?',
        q3: 'Anne ga Ingeborg en spesiell bursdagsgave i 2010. Hva var det?'
    },
    { // 9
        q1: '2011: Ingeborg avslutta et kapittel i livet sitt i 2011. Hvor er dette bildet fra?',
        q2: 'Vi reiste langt i påskeferien – hvor?',
        q3: 'Hva er en Stradivarius?'
    },
    { // 10
        q1: 'Fortsatt 2011: Norgesferie i sommer. Hvor er dette bildet tatt?',
        q2: 'På heimturen kjørte vi gjennom to av de store turistattraksjonene i Norge. Hvor var vi da?',
        q3: 'Hva er crépe suzettes?'
    },
    { // 11
        q1: 'Vi har kommet til 2012. Anne spilte KM Futsal for første gang. Hvilket lag spilte hun for?',
        q2: 'Siste halvdel av 2012 ble et krevende år for Ingrid. Hvorfor?',
        q3: 'Hva er kallenavnet til golfspilleren Suzann Pedersen?'
    },
    { // 12
        q1: 'Sommeren 2012. Ingeborg avslutta året på Øvrevoll. Hva het sjefen hennes på Øvrevoll?',
        q2: 'To uker i «Syden». Hva het byen?',
        q3: 'Vi tok en biltur til nabolandet og en berømt by der også. Hva heter landet og byen?'
    },
    { // 13
        q1: 'Så er det 2013: Hva synger Anne her? Og hvorfor?',
        q2: 'Hvor var damene på ferie dette året?',
        q3: 'Hvem var president i USA før Bill Clinton?'
    },
    { // 14
        q1: 'Fortsatt 2013: Atle, Demi og Ingrid prøvde seg på en «tur» i Trondheim – Ingrid tryna så de fullførte ikke. Hva heter turen?',
        q2: 'Vi feira runddag i 2013 – hvem og alder?',
        q3: 'Og var gjester i konfirmasjon – hvem ble konfirmert?'
    },
    { // 15
        q1: 'Vi er i 2014: Dette bildet har jeg kalt «Hulepiken» - hvem er dette?',
        q2: 'Og hva er anledningen?',
        q3: 'Anne ble kretsmester på nyåret – hvilken tittel fikk hu?'
    },
    { // 16
        q1: 'Fortsatt 2014: Atle og Ingrid var i Hafslo en snartur denne sommeren – hva var anledningen?',
        q2: 'Utenlandsturen gikk til ei gresk øy som vi besøkte da Anne og Ingeborg var små. Hva heter den?',
        q3: 'Vi har en sterk sene bakerst i foten. Hvilken sagnhelt har gitt navnet til denne?'
    },
    { // 17
        q1: 'Så har vi kommet til 2015: To familiebegivenheter på våren – hva var de?',
        q2: 'Atle var utenlands uten damene sine i sommer – hvor da?',
        q3: 'Hva er egentlig osteoporose for slags sykdom?'
    },
    { // 18
        q1: 'Flere spørsmål fra 2015: Atle og Ingrid var på langtur på høsten 2015. Hvor var vi?',
        q2: 'Og hvorfor dro vi dit?',
        q3: 'Hva er en mastiff?'
    },
    { // 19
        q1: 'Og så er det 2016: Litt enkelt for Anne kanskje – men hvilken begivenhet er dette?',
        q2: 'Og så må vi gjøre det enkelt for Ingeborg også: Hva er det fulle navnet til Friken?',
        q3: 'Hva er en Sørgekåpe?'
    },
    { // 20
        q1: 'Fortsatt 2016: Anne er hjemme i Norge igjen og ivrig på fjelltur. Hvor gikk turen?',
        q2: 'Anne og Ingrid var på dametur på vårparten. Hvor gikk den turen?',
        q3: 'Og så var Atle og Ingrid på tur enda tidligere den våren – storby denne gangen. Hvor?'
    },
    { // 21
        q1: 'Og nå 2017: Ut på tur – aldri sur. Atle og Ingrid på vårtur til sydlige strøk. Hvor?',
        q2: 'Friken var også på reisefot denne sommeren. Hvor er bildet tatt?',
        q3: 'Anne var på langtur i sommer – hvor?'
    },
    { // 22
        q1: 'Mer 2017: 17. mai: Hvor er Anne her?',
        q2: 'Hele familien var på uteteater i august. Hva var det?',
        q3: 'Hva slags vesen er en karuss?'
    },
    { // 23
        q1: 'Og så endelig 2018: Huldra ved Børsjøen. Men hva er ei hulder?',
        q2: 'Hvem var Ingrid sammen med på Høvringen i høst?',
        q3: 'I hvilket fjellområde ligger Høvringen?'
    },
    { // 24
        q1: 'Enda mer 2018: Et høydepunkt i sommer. Hva og hvor?',
        q2: 'Hva heter de tre medlemmene i bandet?',
        q3: 'Hvem spilte finalen i VM fotball for herrer og hva ble resutatet?'
    }
];
