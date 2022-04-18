

window.addEventListener('load', setup);
let tri, hex, sq, cir;
const collectedGems = new Set();
function setup() {
  tri = document.querySelector("#tri");
  sq = document.querySelector("#sq");
  cir = document.querySelector("#cir");
  hex = document.querySelector("#hex");
}

function gemStateChanger(currentGem) {
  if (collectedGems.has(currentGem)){ 
    console.log("already collected");
  }
  else {
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
          console.log('COLLECTED', currentGem);
          gemStateChanger(currentGem);
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