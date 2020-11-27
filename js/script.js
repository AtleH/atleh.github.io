document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
window.addEventListener("load", pageFullyLoaded, false);

function theDomHasLoaded(e) {
    var d = new Date(Date.now());
    var day = d.getDate();
    console.log(day);
    document.getElementById("hatch").innerHTML = day;
    console.log("theDomHasLoaded");
}

function pageFullyLoaded(e) {
    console.log("pageFullyLoaded")
}