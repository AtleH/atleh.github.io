document.addEventListener("DOMContentLoaded", onLoad, false);

function getHatchNumber () {
    return hatch = document.getElementById("hatch").innerText;
}

function setHatchNumber (day) {
    document.getElementById("hatch").innerText = day;
}

function prevDay() {
    console.log("prev");
    var hatch = getHatchNumber();
    var previous = Number(hatch) - 1;
    setHatchNumber(previous);

}

function nextDay() {
    console.log("next");
    var hatch = getHatchNumber();
    var next = Number(hatch) + 1;
    setHatchNumber(next);
}

function openHatch() {
    console.log("open hatch");
}

function onLoad(e) {
    var d = new Date(Date.now());
    var day = d.getDate();
    var hatch = document.getElementById("hatch");
    setHatchNumber(day);
    hatch.innerHTML = day;
    hatch.onclick = (e) => {console.log("open");}
    document.getElementById("prev").onclick = prevDay;
    document.getElementById("next").onclick = nextDay;
    document.getElementById("hatch").onclick = openHatch;
}

