let onQr = true;
let onPass = false;
let onSword = false;

console.log(onQr, onPass, onSword);


if (document.getElementById('continue') != null) {
    document.getElementById('continue').onclick = function () { continueClicked() };
}

function continueClicked() {
    onQr = false;
    onPass = true;
    onSword = false;

    console.log(onQr, onPass, onSword);
    changeDoc();
}

function unlockClicked() {
    onQr = false;
    onPass = false;
    onSword = true;

    console.log(onQr, onPass, onSword);
    changeDoc();
}

function backClicked() {
    if (onPass == true) {
        onQr = true;
        onPass = false;
        onSword = false;
    }

    if (onSword == true) {
        onQr = false;
        onPass = true;
        onSword = false;
    }

    console.log(onQr, onPass, onSword);
    changeDoc();
}

function playAgainClicked() {
    window.location.href = "./../HTML/index.html";
}

function changeDoc() {
    if (onSword == true) {
        //change page to Sword

        //fire
        if (document.URL.includes("fireQrCode.html")) {
            document.getElementById('content').innerHTML = `<img class = "qrImage" src="./../Media/cards/fireSword.png" alt="Fire Sword"></img>`;

            document.getElementById('ssButtons').innerHTML = `<img id="back" class ="ssButton" src = "./../Media/buttons/BackButtonIcon.png">
            <a href = "./../Media/cards/fireSword.png" download><img id="download" class ="ssButton" src = "./../Media/DownloadButton.png"></a>
            <img id="playAgain" class ="ssButton" src = "./../Media/buttons/PlayAgainButton.png">`
        }
        //earth
        else if (document.URL.includes("earthQrCode.html")) {
            document.getElementById('content').innerHTML = `<img class = "qrImage" src="./../Media/cards/earthSword.png" alt="Earth Sword"></img>`;

            document.getElementById('ssButtons').innerHTML = `<img id="back" class ="ssButton" src = "./../Media/buttons/BackButtonIcon.png">
            <a href = "./../Media/cards/earthSword.png" download><img id="download" class ="ssButton" src = "./../Media/DownloadButton.png"></a>
            <img id="playAgain" class ="ssButton" src = "./../Media/buttons/PlayAgainButton.png">`
        }
        //air
        else if (document.URL.includes("airQrCode.html")) {
            document.getElementById('content').innerHTML = `<img class = "qrImage" src="./../Media/cards/airSword.png" alt="Air Sword"></img>`;

            document.getElementById('ssButtons').innerHTML = `<img id="back" class ="ssButton" src = "./../Media/buttons/BackButtonIcon.png">
            <a href = "./../Media/cards/airSword.png" download><img id="download" class ="ssButton" src = "./../Media/DownloadButton.png"></a>
            <img id="playAgain" class ="ssButton" src = "./../Media/buttons/PlayAgainButton.png">`
        }
        //water
        else {
            document.getElementById('content').innerHTML = `<img class = "qrImage" src="./../Media/cards/waterSword.png" alt="Water Sword"></img>`;

            document.getElementById('ssButtons').innerHTML = `<img id="back" class ="ssButton" src = "./../Media/buttons/BackButtonIcon.png">
            <a href = "./../Media/cards/waterSword.png" download><img id="download" class ="ssButton" src = "./../Media/DownloadButton.png"></a>
            <img id="playAgain" class ="ssButton" src = "./../Media/buttons/PlayAgainButton.png">`
        }
        document.getElementById('content').style.marginTop = "5vh";
        document.getElementById('content').style.marginBottom = "5vh";

        document.getElementById('back').onclick = function () { backClicked() };
        document.getElementById('playAgain').onclick = function () { playAgainClicked() };

    } else if (onPass == true) {
        //change page to Pass

        document.getElementById('content').innerHTML = `<label for="password">Enter Password</label>
        <input type="text" id = "password"name="password">`;

        document.getElementById('ssButtons').innerHTML = `<img id="back" class ="ssButton" src = "./../Media/buttons/BackButtonIcon.png">
        <img id="unlock" src = "./../Media/buttons/UnlockButton.png">`

        console.log(document.getElementById('unlock'));

        let passwordCorrect = false;
        document.getElementById('unlock').style.visibility = 'hidden';

        let password = document.querySelector('#password');

        if (password.value != null) {
            document.querySelector("#password").onchange = function () { checkPassword(password) }
        }

        function checkPassword(password) {
            if (password.value == "MagiC") {
                document.getElementById('unlock').style.visibility = 'visible';
                passwordCorrect = true;
                console.log("password true");
            }
        }

        document.getElementById('content').style.marginTop = "25vh";
        document.getElementById('content').style.marginBottom = "35vh";

        document.getElementById('unlock').onclick = function () { unlockClicked() };
        document.getElementById('back').onclick = function () { backClicked() };

    } else {
        //change page to Qr

        //fire (1)
        if (document.URL.includes("fireQrCode.html")) {
            document.getElementById('content').innerHTML = `<img class = "swordImage" src="./../Media/QRCodes/fire-qr.png" alt="Fire Qr Code">`;
        }
        //earth (2)
        else if (document.URL.includes("earthQrCode.html")) {
            document.getElementById('content').innerHTML = `<img class = "swordImage" src="./../Media/QRCodes/earth-qr.png" alt="Earth Qr Code">`;
        }
        //air (3)
        else if (document.URL.includes("airQrCode.html")) {
            document.getElementById('content').innerHTML = `<img class = "swordImage" src="./../Media/QRCodes/air-qr.png" alt="Air Qr Code">`;
        }
        //water (4)
        else {
            document.getElementById('content').innerHTML = `<img class = "swordImage" src="./../Media/QRCodes/water-qr.png" alt="Water Qr Code">`;
        }

        document.getElementById('ssButtons').innerHTML = `<img id="continue" src = "./../Media/buttons/ContinueButton.png">`

        document.getElementById('content').style.marginTop = "15vh";
        document.getElementById('content').style.marginBottom = "15vh";

        document.getElementById('continue').onclick = function () { continueClicked() };

    }
}