
function hideAndShow(show, hide){
    document.getElementById(show).style.display='block';
    document.getElementById(hide).style.display='none';
    return false;
};

function titleAnimation(){
    //Intro animation for the title image
    gsap.from("#titleScreenImage", {
        duration: 2, 
        y: 300, 
        opacity: 0, 
        scale: 0.5
    });

    gsap.to('#titleScreenImage', {
        rotate: 360,
        duration: 2
    });
}

function titleButtonAnimation(){
    gsap.from("#titleButton", {
        duration: 2, 
        y: 300, 
        opacity: 0, 
        scale: 0.5
    });

    gsap.to('#titleButton', {
        rotate: 360,
        duration: 2
    });
}

