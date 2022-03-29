/* draggable element 

https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/

mobile:
https://medium.com/@deepakkadarivel/drag-and-drop-dnd-for-mobile-browsers-fc9bcd1ad3c5
*/

let squareFilled = false;
let triangleFilled = false;
let circleFilled = false;
let hexagonFilled = false;

completeButton();
tryAgainButton();


let deviceWidth = document.getElementById("container").offsetWidth;
let deviceHeight = document.getElementById("container").offsetHeight;

//slot positions
let squareSlot = document.getElementById('squareSlot');
let triangleSlot = document.getElementById('triangleSlot');
let circleSlot = document.getElementById('circleSlot');
let hexagonSlot = document.getElementById('hexagonSlot');

let squareSlotWidth = squareSlot.offsetWidth;
let triangleSlotWidth = triangleSlot.offsetWidth;
let circleSlotWidth = circleSlot.offsetWidth;
let hexagonSlotWidth = hexagonSlot.offsetWidth;

squareSlot.style.left = (deviceWidth / 2 - squareSlotWidth / 2) + "px";
triangleSlot.style.left = (deviceWidth / 2 - triangleSlotWidth / 2) + "px";
circleSlot.style.left = (deviceWidth / 2 - circleSlotWidth / 2) + "px";
hexagonSlot.style.left = (deviceWidth / 2 - hexagonSlotWidth / 2) + "px";

squareSlot.style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 4) + "px";
triangleSlot.style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 3) + "px";
circleSlot.style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 2) + "px";
hexagonSlot.style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 1) + "px";

//gem positions
let squareGem = document.getElementById('squareGem');
let triangleGem = document.getElementById('triangleGem');
let circleGem = document.getElementById('circleGem');
let hexagonGem = document.getElementById('hexagonGem');

let squareGemWidth = squareGem.offsetWidth;
let triangleGemWidth = triangleGem.offsetWidth;
let circleGemWidth = circleGem.offsetWidth;
let hexagonGemWidth = hexagonGem.clientWidth;

squareGem.style.left = (deviceWidth / 2 - squareGemWidth / 2) + "px";
triangleGem.style.left = (deviceWidth / 2 - triangleGemWidth / 2) + "px";
circleGem.style.left = (deviceWidth / 2 - circleGemWidth / 2) + "px";
hexagonGem.style.left = (deviceWidth / 2 - hexagonGemWidth / 2) + "px";

squareGem.style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 4) + "px";
triangleGem.style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 3) + "px";
circleGem.style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 2) + "px";
hexagonGem.style.top = (deviceHeight - deviceHeight / 8 - (deviceHeight / 6) * 1) + "px";

//onload
window.onload = function () {
    //Square
    squareGem.addEventListener('touchmove', function (e) {
        let squareTouchLocation = e.targetTouches[0];
        squareGem.style.left = squareTouchLocation.pageX + 'px';
        squareGem.style.top = squareTouchLocation.pageY + 'px';
    })

    //Triangle
    triangleGem.addEventListener('touchmove', function (e) {
        let triangleTouchLocation = e.targetTouches[0];
        triangleGem.style.left = triangleTouchLocation.pageX + 'px';
        triangleGem.style.top = triangleTouchLocation.pageY + 'px';
    })

    //Circle
    circleGem.addEventListener('touchmove', function (e) {
        let circleTouchLocation = e.targetTouches[0];
        circleGem.style.left = circleTouchLocation.pageX + 'px';
        circleGem.style.top = circleTouchLocation.pageY + 'px';
    })

    //Hexagon
    hexagonGem.addEventListener('touchmove', function (e) {
        let hexagonTouchLocation = e.targetTouches[0];
        hexagonGem.style.left = hexagonTouchLocation.pageX + 'px';
        hexagonGem.style.top = hexagonTouchLocation.pageY + 'px';
    })

}

//Square
squareGem.addEventListener('touchend', function (e) {
    let squareSlotX = parseInt(squareSlot.style.left);
    let squareSlotY = parseInt(squareSlot.style.top);

    let squareGemX = parseInt(squareGem.style.left);
    let squareGemY = parseInt(squareGem.style.top);

    let squareSlotXBound = squareSlotX + squareSlotWidth;
    let squareSlotYBound = squareSlotY + squareSlotWidth;

    let squareGemXBound = squareGemX + squareGemWidth / 2;
    let squareGemYBound = squareGemY + squareGemWidth / 2;

    if (squareGemXBound >= squareSlotX && squareGemXBound <= squareSlotXBound && squareGemYBound >= squareSlotY && squareGemYBound <= squareSlotYBound) {
        console.log("square true");
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

    let triangleSlotXBound = triangleSlotX + triangleSlotWidth;
    let triangleSlotYBound = triangleSlotY + triangleSlotWidth;

    let triangleGemXBound = triangleGemX + triangleGemWidth / 2;
    let triangleGemYBound = triangleGemY + triangleGemWidth / 2;

    if (triangleGemXBound >= triangleSlotX && triangleGemXBound <= triangleSlotXBound && triangleGemYBound >= triangleSlotY && triangleGemYBound <= triangleSlotYBound) {
        console.log("triangle true");
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

    let circleSlotXBound = circleSlotX + circleSlotWidth;
    let circleSlotYBound = circleSlotY + circleSlotWidth;

    let circleGemXBound = circleGemX + circleGemWidth / 2;
    let circleGemYBound = circleGemY + circleGemWidth / 2;

    if (circleGemXBound >= circleSlotX && circleGemXBound <= circleSlotXBound && circleGemYBound >= circleSlotY && circleGemYBound <= circleSlotYBound) {
        console.log("circle true");
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

    let hexagonSlotXBound = hexagonSlotX + hexagonSlotWidth;
    let hexagonSlotYBound = hexagonSlotY + hexagonSlotWidth;

    let hexagonGemXBound = hexagonGemX + hexagonGemWidth / 2;
    let hexagonGemYBound = hexagonGemY + hexagonGemWdth / 2;

    if (hexagonGemXBound >= hexagonSlotX && hexagonGemXBound <= hexagonSlotXBound && hexagonGemYBound >= hexagonSlotY && hexagonGemYBound <= hexagonSlotYBound) {
        console.log("hexagon true");
    } else {
        console.log("hexagon false");
    }

})

// /* draggable element */
// const itemSquare = document.querySelector('.itemSquare');
// itemSquare.addEventListener('dragstart', dragStart);

// const itemTriangle = document.querySelector('.itemTriangle');
// itemTriangle.addEventListener('dragstart', dragStart);

// const itemCircle = document.querySelector('.itemCircle');
// itemCircle.addEventListener('dragstart', dragStart);

// const itemHexagon = document.querySelector('.itemHexagon');
// itemHexagon.addEventListener('dragstart', dragStart);

// function dragStart(e) {
//     e.dataTransfer.setData('text/plain', e.target.id);
//     setTimeout(() => {
//         e.target.classList.add('hide');
//     }, 0);
// }


// /* drop targets */
// const squares = document.querySelectorAll('.square');
// squares.forEach(square => {
//     square.addEventListener('dragenter', dragEnter)
//     square.addEventListener('dragover', dragOver);
//     square.addEventListener('dragleave', dragLeave);
//     square.addEventListener('drop', drop);
// });

// const triangles = document.querySelectorAll('.triangle');
// triangles.forEach(triangle => {
//     triangle.addEventListener('dragenter', dragEnter)
//     triangle.addEventListener('dragover', dragOver);
//     triangle.addEventListener('dragleave', dragLeave);
//     triangle.addEventListener('drop', drop);
// });

// const circles = document.querySelectorAll('.circle');
// circles.forEach(circle => {
//     circle.addEventListener('dragenter', dragEnter)
//     circle.addEventListener('dragover', dragOver);
//     circle.addEventListener('dragleave', dragLeave);
//     circle.addEventListener('drop', drop);
// });

// const hexagons = document.querySelectorAll('.hexagon');
// hexagons.forEach(hexagon => {
//     hexagon.addEventListener('dragenter', dragEnter)
//     hexagon.addEventListener('dragover', dragOver);
//     hexagon.addEventListener('dragleave', dragLeave);
//     hexagon.addEventListener('drop', drop);
// });

// function dragEnter(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }

// function dragOver(e) {
//     e.preventDefault();
//     e.target.classList.add('drag-over');
// }

// function dragLeave(e) {
//     e.target.classList.remove('drag-over');
// }

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    console.log("id" + id);
    console.log("class" + e.path[1].className);

    if (id == 'squareGem' && (e.path[1].className == 'drop-targetsSquare' || e.path[1].className == 'square')) {
        // let element = document.getElementsByClassName('triangle');
        // element.style.backgroundColor = "black";
        squareFilled = true;
        console.log('square');
        console.log(squareFilled);
    }

    if (id == 'triangleGem' && (e.path[1].className == 'drop-targetsTriangle' || e.path[1].className == 'triangle')) {
        // let element = document.getElementsByClassName('triangle');
        // element.style.backgroundColor = "black";
        triangleFilled = true;
        console.log('tri');
        console.log(triangleFilled);
    }

    if (id == 'circleGem' && (e.path[1].className == 'drop-targetsCircle' || e.path[1].className == 'circle')) {
        // let element = document.getElementsByClassName('triangle');
        // element.style.backgroundColor = "black";
        circleFilled = true;
        console.log('circle');
        console.log(circleFilled);
    }

    if (id == 'hexagonGem' && (e.path[1].className == 'drop-targetsHexagon' || e.path[1].className == 'hexagon')) {
        // let element = document.getElementsByClassName('triangle');
        // element.style.backgroundColor = "black";
        hexagonFilled = true;
        console.log('hex');
        console.log(hexagonFilled);
    }

    completeButton();
    tryAgainButton();

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');

    //replace slot-image with stone-in-slot image
}

/** Buttons */

function completeButton() {
    if (squareFilled == true && triangleFilled == true && circleFilled == true && hexagonFilled == true) {
        document.getElementById('complete').style.visibility = 'visible';
        //document.getElementById('container').style.background-image = url("../media/ddImages/BackCrystal-Default.png");
    } else {
        document.getElementById('complete').style.visibility = 'hidden';
    }
}

function tryAgainButton() {
    if (document.getElementById('complete').style.visibility == 'visible') {
        document.getElementById('tryAgain').style.visibility = 'hidden';
    } else {
        document.getElementById('tryAgain').style.visibility = 'visible';
    }
}

document.getElementById('tryAgain').onclick = function () { refreshPage() };

function refreshPage() {

    location.reload();

}