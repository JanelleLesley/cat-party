// Music Credit: Royalty Free Music from Bensound

let discoInterval = setInterval(discoParty, 500);
let clickTheCatImage = document.getElementById("clickTheCatImage");
let catEyes = document.getElementById("catEyes");
let faArrowUp = document.getElementById("faArrowUp");
let faVolumeDown = document.getElementById("faVolumeDown");
let warningHeading = document.getElementById("warningHeading");
let warningText = document.getElementById("warningText");
let catPartyText = document.getElementById("catPartyText");
let counter = 0;
let sound = document.getElementById("sound");
let howl = document.getElementById("howl");

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("img").addEventListener("click", myButtonFunction, false)

    function myButtonFunction() {
        if (counter === 0) {
            chrome.tabs.query({ currentWindow: true, active: true },
                function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, { message: "first click" }, function (response) {
                        if (chrome.runtime.lastError) {
                            clearInterval(discoInterval);
                            faArrowUp.style.transform = "rotate(-180deg)";
                            faArrowUp.style.color = "blue";
                            faVolumeDown.style.display = "none";
                            warningHeading.style.display = "none";
                            warningText.style.display = "none";
                            catPartyText.style.fontSize = "14px";
                            catPartyText.style.color = "blue";
                            catPartyText.style.margin = "30px 0px 0px";
                            catPartyText.innerHTML = "Something went meowfully wrong. Please try again on a different website.";
                            let d = new Date();
                            let newImage = 'https://i.imgur.com/qocBBjB.png?' + d.getMilliseconds();
                            clickTheCatImage.src = newImage;
                            howl.currentTime = 0.2;
                            howl.play();
                            counter++;
                        }
                        if (response && response.message === "close the window") {
                            window.close();
                        }
                        if (response && response.message === "party has started") {
                            clearInterval(discoInterval);
                            let d = new Date();
                            let newImage = 'https://i.imgur.com/fgG7Sn8.png?' + d.getMilliseconds();
                            clickTheCatImage.src = newImage;
                            faArrowUp.style.transform = "rotate(-100deg)";
                            catPartyText.innerHTML = "OH SNAP!";
                            faVolumeDown.style.display = "none";
                            warningHeading.style.display = "none";
                            warningText.style.marginTop = "80px";
                            warningText.innerHTML = "Music: www.bensound.com";
                            sound.currentTime = 0.25;
                            sound.play();
                            counter++;
                        }
                    });
                });
        } else {
            chrome.tabs.query({ currentWindow: true, active: true },
                function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, { message: "second click" }, function (response) {
                        if (chrome.runtime.lastError) {
                            window.close();
                        }
                        if (response && response.message === "close the window") {
                            window.close();
                        }
                    });
                });
        }

    }

})

function discoParty() {
    if (catPartyText.style.color === "red") {
        clickTheCatImage.style.width = "125px";
        catEyes.style.background = "lightgreen";
        faArrowUp.style.color = "blue";
        catPartyText.style.color = "blue";
        return;
    }
    if (catPartyText.style.color === "blue") {
        clickTheCatImage.style.width = "100px";
        catEyes.style.background = "yellow";
        faArrowUp.style.color = "red";
        catPartyText.style.color = "red";
        return;
    }
}