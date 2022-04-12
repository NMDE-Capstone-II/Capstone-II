let onSword = false;

checkPage();

console.log(onSword);

document.getElementById('toSword').onclick = function () { changeImage() };
document.getElementById('toQr').onclick = function () { changeImage() };

// document.getElementById('download').onclick = function () { downloadImage() };

function checkPage() {
    if (onSword == false) {
        document.getElementById('toSword').style.visibility = 'visible';
        document.getElementById('toQr').style.visibility = 'hidden';
        document.getElementById('download').style.visibility = 'hidden';
    } else {
        document.getElementById('toSword').style.visibility = 'hidden';
        document.getElementById('toQr').style.visibility = 'visible';
        document.getElementById('download').style.visibility = 'visible';
    }
}

function changeImage() {
    if (onSword == false) {
        //change image to Sword

        //fire
        if (document.URL.includes("fireQrCode.html")) {
            document.getElementById('QrCode').innerHTML = `<img class = "qrImage" src="./../Media/cards/fireSword.png" alt="Fire Sword"></img>`;
        }
        //earth
        else if (document.URL.includes("earthQrCode.html")) {
            document.getElementById('QrCode').innerHTML = `<img class = "qrImage" src="./../Media/cards/earthSword.png" alt="Earth Sword"></img>`;
        }
        //air
        else if (document.URL.includes("airQrCode.html")) {
            document.getElementById('QrCode').innerHTML = `<img class = "qrImage" src="./../Media/cards/airSword.png" alt="Air Sword"></img>`;
        }
        //water
        else {
            document.getElementById('QrCode').innerHTML = `<img class = "qrImage" src="./../Media/cards/waterSword.png" alt="Water Sword"></img>`;
        }
        document.getElementById('QrCode').style.marginTop = "0vh";

        onSword = true;
        checkPage();
        console.log(onSword);
    } else {
        //change image to Qr

        //fire (1)
        if (document.URL.includes("fireQrCode.html")) {
            document.getElementById('QrCode').innerHTML = `<img class = "swordImage" src="./../Media/QRCodes/fireAnimation.png" alt="Fire Qr Code">`;
        }
        //earth (2)
        else if (document.URL.includes("earthQrCode.html")) {
            document.getElementById('QrCode').innerHTML = `<img class = "swordImage" src="./../Media/QRCodes/earthAnimation.png" alt="Earth Qr Code">`;
        }
        //air (3)
        else if (document.URL.includes("airQrCode.html")) {
            document.getElementById('QrCode').innerHTML = `<img class = "swordImage" src="./../Media/QRCodes/airAnimation.png" alt="Air Qr Code">`;
        }
        //water (4)
        else {
            document.getElementById('QrCode').innerHTML = `<img class = "swordImage" src="./../Media/QRCodes/waterAnimation.png" alt="Water Qr Code">`;
        }

        document.getElementById('QrCode').style.marginTop = "10vh";

        onSword = false;
        checkPage();
        console.log(onSword);
    }
}