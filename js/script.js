var now = new Date(Date.now());
const firstCalendarDay = new Date(now.getFullYear(), 11, 1);
const lastCalendarDay = new Date(now.getFullYear(), 11, 24);

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
    previous = Math.max(1, previous);
    setHatchNumber(previous);

}

function nextDay() {
    console.log("next");
    var hatch = getHatchNumber();
    var next = Number(hatch) + 1;
    next = Math.min(24, next);
    setHatchNumber(next);
}

function openHatch() {
    console.log("open hatch");
}

function onLoad(e) {
    var d = new Date(Date.now());
    var day = d.getDate();
    if (d < firstCalendarDay) { day = 1}
    if (d > lastCalendarDay) { day = 24}

    var hatch = document.getElementById("hatch");
    setHatchNumber(day);
    hatch.innerHTML = day;
    hatch.onclick = (e) => {console.log("open");}
    document.getElementById("prev").onclick = prevDay;
    document.getElementById("next").onclick = nextDay;
    document.getElementById("hatch").onclick = openHatch;
}

