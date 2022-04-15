/* draggable element 

https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/

mobile:
https://medium.com/@deepakkadarivel/drag-and-drop-dnd-for-mobile-browsers-fc9bcd1ad3c5
*/

let audio = document.getElementById('slotsAudio');

let squareFilledBool = false;
let triangleFilledBool = false;
let circleFilledBool = false;
let hexagonFilledBool = false;

let assembled = false;

completeButton();
tryAgainButton();

function ranomize(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


let deviceWidth = document.getElementById("container").offsetWidth;
let deviceHeight = document.getElementById("container").offsetHeight;

//slot positions
let squareSlot = document.getElementById('squareSlot');
let triangleSlot = document.getElementById('triangleSlot');
let circleSlot = document.getElementById('circleSlot');
let hexagonSlot = document.getElementById('hexagonSlot');

let slotWidth = squareSlot.offsetWidth;

let slotsArray=[squareSlot, triangleSlot, circleSlot, hexagonSlot];
ranomize(slotsArray);

slotsArray[0].style.left = (deviceWidth / 2 - slotWidth / 2) + "px";
slotsArray[1].style.left = (deviceWidth / 2 - slotWidth / 2) + "px";
slotsArray[2].style.left = (deviceWidth / 2 - slotWidth / 2) + "px";
slotsArray[3].style.left = (deviceWidth / 2 - slotWidth / 2) + "px";

slotsArray[0].style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 4) + "px";
slotsArray[1].style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 3) + "px";
slotsArray[2].style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 2) + "px";
slotsArray[3].style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 1) + "px";

//gem positions
let squareGem = document.getElementById('squareGem');
let triangleGem = document.getElementById('triangleGem');
let circleGem = document.getElementById('circleGem');
let hexagonGem = document.getElementById('hexagonGem');

let gemWidth = squareGem.offsetWidth;

let gemsArray = [squareGem, triangleGem, circleGem, hexagonGem]
ranomize(gemsArray);

gemsArray[0].style.left = (deviceWidth / 2 - deviceWidth / 7 * 2.5) + "px";
gemsArray[1].style.left = (deviceWidth / 2 + deviceWidth / 7) + "px";
gemsArray[2].style.left = (deviceWidth / 2 - deviceWidth / 7 * 3) + "px";
gemsArray[3].style.left = (deviceWidth / 2 + deviceWidth / 7 * 1.7) + "px";

gemsArray[0].style.top = (deviceHeight - deviceHeight / 12 - (deviceHeight / 6) * 4) + "px";
gemsArray[1].style.top = (deviceHeight - deviceHeight / 10 - (deviceHeight / 6) * 3) + "px";
gemsArray[2].style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 2) + "px";
gemsArray[3].style.top = (deviceHeight - deviceHeight / 6 - (deviceHeight / 6) * 1) + "px";

//onload
window.onload = function () {
    //Square
    squareGem.addEventListener('touchmove', function (e) {
        let squareTouchLocation = e.targetTouches[0];
        squareGem.style.left = squareTouchLocation.pageX - gemWidth/2 + 'px';
        squareGem.style.top = squareTouchLocation.pageY - gemWidth/2 + 'px';
    })

    //Triangle
    triangleGem.addEventListener('touchmove', function (e) {
        let triangleTouchLocation = e.targetTouches[0];
        triangleGem.style.left = triangleTouchLocation.pageX - gemWidth/2 + 'px';
        triangleGem.style.top = triangleTouchLocation.pageY - gemWidth/2 + 'px';
    })

    //Circle
    circleGem.addEventListener('touchmove', function (e) {
        let circleTouchLocation = e.targetTouches[0];
        circleGem.style.left = circleTouchLocation.pageX - gemWidth/2 + 'px';
        circleGem.style.top = circleTouchLocation.pageY - gemWidth/2 + 'px';
    })

    //Hexagon
    hexagonGem.addEventListener('touchmove', function (e) {
        let hexagonTouchLocation = e.targetTouches[0];
        hexagonGem.style.left = hexagonTouchLocation.pageX - gemWidth/2 + 'px';
        hexagonGem.style.top = hexagonTouchLocation.pageY - gemWidth/2 + 'px';
    })

}


//Square
squareGem.addEventListener('touchend', function (e) {
    let squareSlotX = parseInt(squareSlot.style.left);
    let squareSlotY = parseInt(squareSlot.style.top);

    let squareGemX = parseInt(squareGem.style.left);
    let squareGemY = parseInt(squareGem.style.top);

    let squareSlotXBound = squareSlotX + slotWidth;
    let squareSlotYBound = squareSlotY + slotWidth;

    let squareGemXBound = squareGemX + gemWidth / 2;
    let squareGemYBound = squareGemY + gemWidth / 2;

    if (squareGemXBound >= squareSlotX && squareGemXBound <= squareSlotXBound && squareGemYBound >= squareSlotY && squareGemYBound <= squareSlotYBound) {

        squareSlot.src = "./../Media/ddImages/filled/squareFilled.png";
        squareGem.style.visibility = 'hidden';
        squareSlot.style.width = '16vh';
        squareSlot.style.marginLeft = '-3vh';
        squareSlot.style.marginTop = '-3vh';

        audio.play();

        squareFilledBool = true;

        completeButton();
        tryAgainButton();

    } else {
        console.log("square false");
    }

})

//Triangle
triangleGem.addEventListener('touchend', function (e) {
    let triangleSlotX = parseInt(triangleSlot.style.left);
    let triangleSlotY = parseInt(triangleSlot.style.top);

    let triangleGemX = parseInt(triangleGem.style.left);
    let triangleGemY = parseInt(triangleGem.style.top);

    let triangleSlotXBound = triangleSlotX + slotWidth;
    let triangleSlotYBound = triangleSlotY + slotWidth;

    let triangleGemXBound = triangleGemX + gemWidth / 2;
    let triangleGemYBound = triangleGemY + gemWidth / 2;

    if (triangleGemXBound >= triangleSlotX && triangleGemXBound <= triangleSlotXBound && triangleGemYBound >= triangleSlotY && triangleGemYBound <= triangleSlotYBound) {

        triangleSlot.src = "./../Media/ddImages/filled/triangleFilled.png";
        triangleGem.style.visibility = 'hidden';
        triangleSlot.style.width = '16vh';
        triangleSlot.style.marginLeft = '-3vh';
        triangleSlot.style.marginTop = '-3vh';

        audio.play();

        triangleFilledBool = true;

        completeButton();
        tryAgainButton();

    } else {
        console.log("triangle false");
    }

})

//Circle
circleGem.addEventListener('touchend', function (e) {
    let circleSlotX = parseInt(circleSlot.style.left);
    let circleSlotY = parseInt(circleSlot.style.top);

    let circleGemX = parseInt(circleGem.style.left);
    let circleGemY = parseInt(circleGem.style.top);

    let circleSlotXBound = circleSlotX + slotWidth;
    let circleSlotYBound = circleSlotY + slotWidth;

    let circleGemXBound = circleGemX + gemWidth / 2;
    let circleGemYBound = circleGemY + gemWidth / 2;

    if (circleGemXBound >= circleSlotX && circleGemXBound <= circleSlotXBound && circleGemYBound >= circleSlotY && circleGemYBound <= circleSlotYBound) {

        circleSlot.src = "./../Media/ddImages/filled/circleFilled.png";
        circleGem.style.visibility = 'hidden';
        circleSlot.style.width = '16vh';
        circleSlot.style.marginLeft = '-3vh';
        circleSlot.style.marginTop = '-3vh';

        audio.play();

        circleFilledBool = true;

        completeButton();
        tryAgainButton();

    } else {
        console.log("circle false");
    }

})

//Hexagon
hexagonGem.addEventListener('touchend', function (e) {
    let hexagonSlotX = parseInt(hexagonSlot.style.left);
    let hexagonSlotY = parseInt(hexagonSlot.style.top);

    let hexagonGemX = parseInt(hexagonGem.style.left);
    let hexagonGemY = parseInt(hexagonGem.style.top);

    let hexagonSlotXBound = hexagonSlotX + slotWidth;
    let hexagonSlotYBound = hexagonSlotY + slotWidth;

    let hexagonGemXBound = hexagonGemX + gemWidth / 2;
    let hexagonGemYBound = hexagonGemY + gemWidth / 2;

    if (hexagonGemXBound >= hexagonSlotX && hexagonGemXBound <= hexagonSlotXBound && hexagonGemYBound >= hexagonSlotY && hexagonGemYBound <= hexagonSlotYBound) {

        hexagonSlot.src = "./../Media/ddImages/filled/hexagonFilled.png";
        hexagonGem.style.visibility = 'hidden';
        hexagonSlot.style.width = '16vh';
        hexagonSlot.style.marginLeft = '-3vh';
        hexagonSlot.style.marginTop = '-3vh';

        audio.play();

        hexagonFilledBool = true;

        completeButton();
        tryAgainButton();

    } else {
        console.log("hexagon false");
    }

})

/** Buttons */

let delayTimer = 3000; //3 second

function completeButton() {
    if (squareFilledBool == true && triangleFilledBool == true && circleFilledBool == true && hexagonFilledBool == true) {
        assembled = true;
        document.getElementById('container').style.backgroundImage = "url(./../Media/ddImages/screen/crystalBright.png)";

        setTimeout(function() {
            if(slotsArray[0] == squareSlot) {
                window.location.href = "./../HTML/earthQrCode.html";
            } else if (slotsArray[0] == triangleSlot) {
                window.location.href = "./../HTML/fireQrCode.html";
            } else if (slotsArray[0] == circleSlot) {
                window.location.href = "./../HTML/airQrCode.html";
            }else { //hexagon
                window.location.href = "./../HTML/waterQrCode.html";
            }

        }, delayTimer);

    } else {
        assembled = false;
    }
}

function tryAgainButton() {
    if (assembled == true) {
        document.getElementById('tryAgain').style.visibility = 'hidden';
    } else {
        document.getElementById('tryAgain').style.visibility = 'visible';
    }
}

document.getElementById('tryAgain').onclick = function () { refreshPage() };

function refreshPage() {

    location.reload();

}