/* draggable element 

https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/

*/

let squareFilled = false;
let triangleFilled = false;
let circleFilled = false;
let hexagonFilled = false;

showButton();

/* draggable element */
const itemSquare = document.querySelector('.itemSquare');
itemSquare.addEventListener('dragstart', dragStart);

const itemTriangle = document.querySelector('.itemTriangle');
itemTriangle.addEventListener('dragstart', dragStart);

const itemCircle = document.querySelector('.itemCircle');
itemCircle.addEventListener('dragstart', dragStart);

const itemHexagon = document.querySelector('.itemHexagon');
itemHexagon.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', drop);
});

const triangles = document.querySelectorAll('.triangle');
triangles.forEach(triangle => {
    triangle.addEventListener('dragenter', dragEnter)
    triangle.addEventListener('dragover', dragOver);
    triangle.addEventListener('dragleave', dragLeave);
    triangle.addEventListener('drop', drop);
});

const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    circle.addEventListener('dragenter', dragEnter)
    circle.addEventListener('dragover', dragOver);
    circle.addEventListener('dragleave', dragLeave);
    circle.addEventListener('drop', drop);
});

const hexagons = document.querySelectorAll('.hexagon');
hexagons.forEach(hexagon => {
    hexagon.addEventListener('dragenter', dragEnter)
    hexagon.addEventListener('dragover', dragOver);
    hexagon.addEventListener('dragleave', dragLeave);
    hexagon.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    console.log(id);
    console.log(e.path[1].className);

    // if (1 == 1) {
    //     let element = document.getElementsByClassName('triangle');
    //     console.log(element);
    //     element.style.color = "black";
    // }

    if (id == 'itemSquare' && e.path[1].className == 'drop-targetsSquare') {
        // let element = document.getElementsByClassName('triangle');
        // element.style.backgroundColor = "black";
        squareFilled = true;
        console.log('square');
        console.log(squareFilled);
    }

    if (id == 'itemTriangle' && e.path[1].className == 'drop-targetsTriangle') {
        // let element = document.getElementsByClassName('triangle');
        // element.style.backgroundColor = "black";
        triangleFilled = true;
        console.log('tri');
        console.log(triangleFilled);
    }

    if (id == 'itemCircle' && e.path[1].className == 'drop-targetsCircle') {
        // let element = document.getElementsByClassName('triangle');
        // element.style.backgroundColor = "black";
        circleFilled = true;
        console.log('circle');
        console.log(circleFilled);
    }

    if (id == 'itemHexagon' && e.path[1].className == 'drop-targetsHexagon') {
        // let element = document.getElementsByClassName('triangle');
        // element.style.backgroundColor = "black";
        hexagonFilled = true;
        console.log('hex');
        console.log(hexagonFilled);
    }

    showButton();

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}

function showButton() {
    if (squareFilled == true && triangleFilled == true && circleFilled == true && hexagonFilled == true) {
        document.getElementById('complete').style.visibility = 'visible';
        console.log('visible');
    } else {
        document.getElementById('complete').style.visibility = 'hidden';
    }
}