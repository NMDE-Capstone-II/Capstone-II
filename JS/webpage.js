
function loaderIn() {
  // GSAP tween to stretch the loading screen across the whole screen
  return gsap.fromTo(loader,
    {
      rotation: 10,
      scaleX: 0,
      xPercent: -5
    },
    {
      duration: 0.8,
      xPercent: 0,
      scaleX: 1,
      rotation: 0,
      ease: 'power4.inOut',
      transformOrigin: 'left center'
    });
}

function loaderAway() {
  // GSAP tween to hide loading screen
  return gsap.to(loader, {
    duration: 0.8,
    scaleX: 0,
    xPercent: 5,
    rotation: -10,
    transformOrigin: 'right center',
    ease: 'power4.inOut'
  });
}

function titleAnimation() {
  //Intro animation for the title image
  gsap.from("#titleScreenImage", {
    duration: 2,
    y: 300,
    opacity: 0,
    scale: 0.5
  });

  gsap.to('#titleScreenImage', {
    fade: 360,
    duration: 1
  });



}

function titleButtonAnimation() {
  gsap.from("#titleButton", {
    duration: 7,
    y: 300,
    opacity: 0,
    scale: 0.5
  });


}


let instruction1 = true;

if (document.getElementById('onboardForward') != null) {
  document.getElementById('onboardForward').onclick = function () { onboardForwardClicked() };
}

function onboardForwardClicked() {
  instruction1 = false;
  changeDoc();
}

function onboardBackClicked() {
  instruction1 = true;
  changeDoc();
}

function changeDoc() {
  if (instruction1 == true) {
    document.getElementById('content').innerHTML =
      `<img id="onBoard1" src="./../Media/OnBoard1.png">
        <div id="textInContext">
          <p>Look for shapes that contain gems</p>
        </div>
      <img id="onboardForward" src="./../Media/buttons/ForwardButtonIcon.png">`

      document.getElementById('onboardForward').onclick = function () { onboardForwardClicked() };
      
  } else {
    document.getElementById('content').innerHTML =
      `<img id="onBoard1" src="./../Media/OnBoard2.png">
        <div id="textInContext">
          <p>Return power to the crystal once you scan all four gems</p>
        </div>
      <img id="onboardBack" src="./../Media/buttons/BackButtonIcon.png">`

      document.getElementById('onboardBack').onclick = function () { onboardBackClicked() };
  }
}

function onload() {
  window.location.reload()
}