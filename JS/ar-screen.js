

window.addEventListener('load', setup);
let tri, hex, sq, cir, userPrompt, canvas, isTouch = true;
const collectedGems = new Set();
function setup() {
  userPrompt = document.querySelector(".screenPrompt");
  tri = document.querySelector("#tri");
  sq = document.querySelector("#sq");
  cir = document.querySelector("#cir");
  hex = document.querySelector("#hex");
  canvas = document.querySelector(".a-canvas");
  isTouch = isTouchDevice();
  console.log(canvas, isTouch)

}


function findGemInstruction(){ // can be used to remind user how to use gem
  userPrompt.innerHTML = `<img class="prompt-gif" src="./assets/Phone.gif" alt="">`
  // side effect that affects other code :(
  // setTimeout(() => {
  //   userPrompt.classList.add("hide-elem")
  // }, "4000")
  setTimeout(() => {
    // userPrompt.innerHTML = ""
    userPrompt.classList.remove('hide-elem')
  }, "8000")
}
function gemStateChanger(currentGem) {
  if (collectedGems.has(currentGem)){ 
    console.log("already collected");
  }
  else {
    collectedGems.add(currentGem)
    switch (currentGem){
      case 'tri':
        tri.innerHTML = `<img src="./assets/gems/triangle-closed.png" alt="">`;
        break;
      case 'cir':
        cir.innerHTML = `<img src="./assets/gems/circle-closed.png" alt="">`;
        break;
      case 'sq':
        sq.innerHTML = `<img src="./assets/gems/square-closed.png" alt="">`;
        break;
      case 'hex':
        hex.innerHTML = `<img src="./assets/gems/hex-closed.png" alt="">`;
        break;
    }
  }
}

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

/**
 * The code below adds interactivity to the gem collection
 */
AFRAME.registerComponent('registerevents', {
  init: function () {
      var marker = this.el;
      isMarkerVisible = false;
      let currentGem;
      // Make the element emit events when found and when lost.
      marker.setAttribute('emitevents', 'true');

      marker.addEventListener('markerFound', function(e) {
          let markerId = marker.id;
          console.log('markerFound',e,  markerId);
          isMarkerVisible = true;
          currentGem = markerId;
          isTouch ? canvas.addEventListener('touchstart', handleGemFound) : canvas.addEventListener('click', handleGemFound);
          
          
      });
      marker.addEventListener('markerLost', function(e) {
          let markerId = marker.id;
          console.log('markerLost', e, markerId);
          currentGem =  "";
          isMarkerVisible = false;
          isTouch ? canvas.removeEventListener('touchstart', handleGemFound) : canvas.removeEventListener('click', handleGemFound);
  
      });
      function handleGemFound(){
          gemStateChanger(currentGem);
          console.log(userPrompt)
          if (collectedGems.size >= 4) {
            userPrompt.innerHTML = `<img class="prompt-gif" src="./assets/congrats-gems.png" alt="">`
            window.location.replace("https://people.rit.edu/mo1439/capstone-II/HTML/dragAnddrop.html");

          }
      }
      function handleGemLost(){
          console.log("GEM LOST");
      }
      function handleRotation(event) {
          if (isMarkerVisible) {
          el.object3D.rotation.y +=
              event.detail.positionChange.x * rotationFactor;

          el.object3D.rotation.x +=
              event.detail.positionChange.y * rotationFactor;
          }
      } 
  }
});

ARjs.Source.prototype.copyElementSizeTo = function (otherElement){

  if (window.innerWidth > window.innerHeight) {
    //landscape
    otherElement.style.width = this.domElement.style.width;
    const height = parseInt(otherElement.style.width) * 3/4;
    otherElement.style.height = height + 'px';
    otherElement.style.marginLeft = 0;
    otherElement.style.marginTop = ((window.innerHeight- height)/2) + 'px';
  } else {
    //portrait
    otherElement.style.height = this.domElement.style.height;
    const width = parseInt(otherElement.style.height) * 4/3;
    otherElement.style.width = width + 'px';
    otherElement.style.marginLeft = ((window.innerWidth- width)/2) + 'px';
    otherElement.style.marginTop = 0;
  }
}