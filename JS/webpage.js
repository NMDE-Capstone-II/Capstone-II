
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

function instructional(evt, stepNum) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(stepNum).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById("defaultOpen").click();

}
