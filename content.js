// Music Credit: Royalty Free Music from Bensound

let counter = 0;
let partyInterval;
let elementsDestroyed = false;
let sparkleParentDiv;
let sparkleChildDiv;
let danceFloor;
let partyColors =
    ["#DD4124", "#D65076", "#45B8AC", "#EFC050", "#5B5EA6",
        "#9B2335", "#88B04B", "#E08119", "#264E36", "#2A293E",
        "#FFD662", "#00539C", "#D69C2F", "#BFD641", "#008000",
        "#FF0000", "#00FF00", "#FFF000", "#0000FF", "#00FFFF",
        "#FFA500", "#00FA9A", "#800080", "#000000", "#FFFFFF",
        "#C0C0C0", "#A0522D", "#DB7093", "#FF69B4", "#87CEEB"];
let cat1;
let cat1animationInterval;
let cat2;
let cat2animationInterval;
let cat3;
let cat3animationInterval;
let cat4;
let cat4animationInterval;
let cat5;
let cat5animationInterval;
let previousColorIndex;
let currentColorIndex;
let dubstep;

// main function that will run when button is clicked (via popup.js)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message == "first click") {
        if (document.getElementById("cat12343453452340958203485023498520394852304958")) {
            sendResponse({ message: "close the window" });
        } else {
            // start an interval of our function "startTheParty" that changes the bg color
            partyInterval = setInterval(startTheParty, 100);
            sendResponse({ message: "party has started" });
        }
    }
    if (request.message == "second click") {
        // they clicked again to cancel the animation, let's do some things:
        // 1) destroy the cats
        // 2) clear the main funtion interval
        // 3) clear the cat intervals
        // 4) reset the counter
        if (elementsDestroyed === false) {
            document.body.removeChild(cat1);
            document.body.removeChild(cat2);
            document.body.removeChild(cat3);
            document.body.removeChild(cat4);
            document.body.removeChild(cat5);
            document.body.removeChild(danceFloor);
            document.body.removeChild(sparkleParentDiv);
            document.body.removeChild(dubstep);
            clearInterval(partyInterval);
            clearInterval(cat1animationInterval);
            clearInterval(cat2animationInterval);
            clearInterval(cat3animationInterval);
            clearInterval(cat4animationInterval);
            clearInterval(cat5animationInterval);
            sendResponse({ message: "close the window" });
            counter = 0;
            elementsDestroyed = true;
        }
    }
})

function getRandomColor() {
    if (currentColorIndex === previousColorIndex) {
        currentColorIndex = Math.floor(Math.random() * 30);
        getRandomColor();
    }
}

function sparkleTime() {
    let body = $('#starshine');
    let template = $('.template.shine');
    let stars = 500;
    let sparkle = 20;
    let size = 'small';

    let createStar = function () {
        template.clone().removeAttr('id').css({
            top: (Math.random() * 100) + '%',
            left: (Math.random() * 100) + '%',
            webkitAnimationDelay: (Math.random() * sparkle) + 's',
            mozAnimationDelay: (Math.random() * sparkle) + 's'
        }).addClass(size).appendTo(body);
    };

    for (var i = 0; i < stars; i++) {
        if (elementsDestroyed === false) {
            if (i % 2 === 0) {
                size = 'small';
            } else if (i % 3 === 0) {
                size = 'medium';
            } else {
                size = 'large';
            }
            createStar();
        } else {
            break;
        }
    }
}

// startTheParty: we do the bulk of our animation logic from here
function startTheParty() {

    if (counter === 0) {
        // make and insert dubstep element:
        dubstep = document.createElement("audio");
        dubstep.setAttribute("src", "https://www.bensound.com/bensound-music/bensound-dubstep.mp3");
        document.body.insertBefore(dubstep, document.body.firstElementChild);
        dubstep.currentTime = 4.8;
        dubstep.play();
        // make and insert cats:
        elementsDestroyed = false;
        cat1 = document.createElement("img");
        cat1.style.position = "fixed";
        cat1.style.top = "0px";
        cat1.style.left = "0px";
        cat1.style.width = "250px";
        cat1.style.zIndex = "2147483647";
        cat1.setAttribute("src", "https://i.imgur.com/vCDuiSh.png");
        cat1.setAttribute("id", "cat12343453452340958203485023498520394852304958");
        document.body.insertBefore(cat1, document.body.firstElementChild);
        cat2 = document.createElement("img");
        cat2.style.position = "fixed";
        cat2.style.top = "0px";
        cat2.style.left = "0px";
        cat2.style.width = "250px";
        cat2.style.zIndex = "2147483647";
        cat2.setAttribute("src", "https://i.imgur.com/blaq6N0.png");
        document.body.insertBefore(cat2, document.body.firstElementChild);
        cat3 = document.createElement("img");
        cat3.style.position = "fixed";
        cat3.style.top = "0px";
        cat3.style.left = "0px";
        cat3.style.width = "250px";
        cat3.style.zIndex = "2147483647";
        cat3.setAttribute("src", "https://i.imgur.com/vFHWJCX.png");
        document.body.insertBefore(cat3, document.body.firstElementChild);
        cat4 = document.createElement("img");
        cat4.style.position = "fixed";
        cat4.style.top = "0px";
        cat4.style.left = "0px";
        cat4.style.width = "250px";
        cat4.style.zIndex = "2147483647";
        cat4.setAttribute("src", "https://i.imgur.com/9O2FJOw.png");
        document.body.insertBefore(cat4, document.body.firstElementChild);
        cat5 = document.createElement("img");
        cat5.style.position = "fixed";
        cat5.style.top = "0px";
        cat5.style.left = "0px";
        cat5.style.width = "115px";
        cat5.style.zIndex = "2147483647";
        cat5.setAttribute("src", "https://i.imgur.com/4O1enc1.png");
        document.body.insertBefore(cat5, document.body.firstElementChild);
        // make and insert sparkle div (parent)
        sparkleParentDiv = document.createElement("div");
        sparkleParentDiv.setAttribute("id", "starshine");
        document.body.insertBefore(sparkleParentDiv, document.body.firstElementChild);
        // make and insert sparkle div (child)
        sparkleChildDiv = document.createElement("div");
        sparkleChildDiv.setAttribute("class", "template shine");
        sparkleParentDiv.appendChild(sparkleChildDiv);
        // make and insert dance floor
        danceFloor = document.createElement("div");
        danceFloor.style.width = "100%";
        danceFloor.style.height = "100%";
        danceFloor.style.opacity = "0.9";
        danceFloor.style.position = "fixed";
        danceFloor.style.zIndex = "2147483647";
        document.body.insertBefore(danceFloor, document.body.firstElementChild);
        // animate cats:
        animateCat(cat1);
        cat1animationInterval = setInterval(function () { animateCat(cat1); }, 2000);
        animateCat(cat2);
        cat2animationInterval = setInterval(function () { animateCat(cat2); }, 2000);
        animateCat(cat3);
        cat3animationInterval = setInterval(function () { animateCat(cat3); }, 2000);
        animateCat(cat4);
        cat4animationInterval = setInterval(function () { animateCat(cat4); }, 2000);
        animateCat(cat5);
        cat5animationInterval = setInterval(function () { animateCat(cat5); }, 2000);
        // assign initial color to dance floor
        currentColorIndex = Math.floor(Math.random() * 30);
        danceFloor.style.background = partyColors[currentColorIndex].toString();
        previousColorIndex = currentColorIndex;
        sparkleTime();
        counter++;
        return;
    }
    // get random colors for strobe light effect
    if (counter > 0 && counter < 100) {
        getRandomColor();
        danceFloor.style.background = partyColors[currentColorIndex].toString();
        previousColorIndex = currentColorIndex;
        counter++;
    }
    if (counter === 100) {
        // the party is over, let's do some things:
        // 1) destroy the cats
        // 2) clear the main function interval
        // 3) clear the cat intervals
        // 4) reset the counter
        if (elementsDestroyed === false) {
            document.body.removeChild(cat1);
            document.body.removeChild(cat2);
            document.body.removeChild(cat3);
            document.body.removeChild(cat4);
            document.body.removeChild(cat5);
            document.body.removeChild(danceFloor);
            document.body.removeChild(sparkleParentDiv);
            document.body.removeChild(dubstep);
            clearInterval(partyInterval);
            clearInterval(cat1animationInterval);
            clearInterval(cat2animationInterval);
            clearInterval(cat3animationInterval);
            clearInterval(cat4animationInterval);
            clearInterval(cat5animationInterval);
            counter = 0;
            elementsDestroyed = true;
        }
    }
}

function animateCat(cat) {
    cat.animate([
        // keyframes
        { top: cat.style.top },
        { top: getRandomTopPxValue(cat) }
    ], {
        // timing options
        duration: 1500,
        iterations: 1
    });
    cat.animate([
        // keyframes
        { left: cat.style.left },
        { left: getRandomLeftPxValue(cat) }
    ], {
        // timing options
        duration: 1500,
        iterations: 1
    });
    cat.animate([
        // keyframes
        { transform: "rotate(0deg)" },
        { transform: "rotate(20deg)" },
        { transform: "rotate(0deg)" },
        { transform: "rotate(-20deg)" },
        { transform: "rotate(0deg)" }
    ], {
        // timing options
        duration: 1500,
        iterations: 1
    });
}

function getRandomTopPxValue(cat) {
    let h = window.innerHeight - (cat.offsetHeight);
    let newTop = Math.floor(Math.random() * h);
    let newTopPx = newTop.toString() + "px";
    cat.style.top = newTopPx;
    return newTopPx;
}

function getRandomLeftPxValue(cat) {
    let w = window.innerWidth - (cat.offsetWidth);
    let nw = Math.floor(Math.random() * w);
    let nwStr = nw.toString() + "px";
    cat.style.left = nwStr;
    return nwStr;
}