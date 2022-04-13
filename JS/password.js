let passwordCorrect = false;

document.getElementById('reward').onclick = function () { changePage() };

function changePage() {
 if (checkPassword()) {
    window.location.href = "./../HTML/waterQrCode.html";
 }
}

function checkPassword() {
    if (passwordCorrect == true) {
        document.getElementById('reward').style.visibility = 'visible';
        return true;
    } else {
        document.getElementById('reward').style.visibility = 'hidden';
        return false;
    }
}