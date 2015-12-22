var seuilMobile = "(min-width: 801px)";

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    var i, c;
    for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookieAndRedirect() {
    var deviceType = getCookie("deviceType");
    document.getElementById("deviceDetection").innerHTML = "Detected device : " + deviceType;
    displayAllSizes();
    if (deviceType !== "") {
        if (deviceType === "mobile") {
            redirectToMobileHomePage();
        }
    } else {
        if (window.matchMedia(seuilMobile).matches) {
            setCookie("deviceType", "desktop", 30);
        } else {
            setCookie("deviceType", "mobile", 30);
            redirectToMobileHomePage();
        }
    }
}

function redirectToMobileHomePage() {
    window.location = "./mobile/homepage.html";
}

function redirectToDesktopHomePage() {
    setCookie("deviceType", "desktop", 30);
    window.location = "../homepage.html";
}

function displayAllSizes() {
    document.getElementById("deviceDetection").innerHTML += "<br/>screen.width : " + screen.width;
    document.getElementById("deviceDetection").innerHTML += "<br/>screen.availWidth : " + screen.availWidth;
    document.getElementById("deviceDetection").innerHTML += "<br/>window.outerWidth : " + window.outerWidth;
    document.getElementById("deviceDetection").innerHTML += "<br/>window.innerWidth : " + window.innerWidth;
    document.getElementById("deviceDetection").innerHTML += "<br/>document.body.clientWidth : " + document.body.clientWidth;
    document.getElementById("deviceDetection").innerHTML += "<br/>document.body.offsetWidth : " + document.body.offsetWidth;                      
}