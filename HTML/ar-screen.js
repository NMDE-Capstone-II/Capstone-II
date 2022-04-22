

window.addEventListener('load', setup);
let tri, hex, sq, cir, userPrompt;
const collectedGems = new Set();
function setup() {
  userPrompt = document.querySelector(".screenPrompt");
  tri = document.querySelector("#tri");
  sq = document.querySelector("#sq");
  cir = document.querySelector("#cir");
  hex = document.querySelector("#hex");
  findGemInstruction();

}


function findGemInstruction(){ // can be used to remind user how to use gem
  userPrompt.innerHTML = `<img class="prompt-gif" src="./assets/Phone.gif" alt="">`
  setTimeout(() => {
    userPrompt.classList.add("hide-elem")
  }, "4000")
  setTimeout(() => {
    userPrompt.innerHTML = ""
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
          window.addEventListener('click', handleGemFound);
          
      });
      marker.addEventListener('markerLost', function(e) {
          let markerId = marker.id;
          console.log('markerLost', e, markerId);
          currentGem =  "";
          isMarkerVisible = false;
          window.removeEventListener('click', handleGemFound);
  
      });
      function handleGemFound(){
          gemStateChanger(currentGem);
          userPrompt.innerHTML = `<img class="prompt-gif" src="./assets/congrats-gems.png" alt="">`
          console.log(userPrompt)
          // if (collectedGems.size >= 0) {
          // }
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