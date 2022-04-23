let resultContainer = document.getElementById('qr-reader-results');
let h1tab = document.getElementById('qr-reader');
let lastResult, countResults = 0;
let videos = {
    Fire: "Fire-Ani-SOUND.mp4",
    earth: "Earth-Ani-SOUND.mp4",
    air: "Wind-Ani-SOUND.mp4",
    water: "Ice-Ani-SOUND.mp4"
}


function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;
        // Handle on success condition with the decoded message.
        console.log(`Scan result ${decodedText}`, decodedResult, h1tab);
        // h1tab.style.visibility = "visible"
        h1tab.innerHTML = ` <video autoplay="true" loop="true" src="./../Media/swordVids/${videos[decodedText]}"></video>`;
    }
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: {width: 300, height: 300} });
html5QrcodeScanner.render(onScanSuccess);


// let resultContainer = document.getElementById('qr-reader-results');
// let h1tab = document.getElementById('qr-reader');
// let lastResult, countResults = 0;



// function onScanSuccess(decodedText, decodedResult) {
//     if (decodedText !== lastResult) {
//         ++countResults;
//         lastResult = decodedText;
//         // Handle on success condition with the decoded message.${videos[decodedText]}
//         console.log(`Scan result ${decodedText}`, decodedResult, h1tab, videos[decodedText]);
//         // h1tab.style.visibility = "visible"
//         h1tab.innerHTML = `<iframe class="fullScreen" src="https://www.youtube.com/embed/oT_XIgJoKE0?mute=1&controls=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         `;
//     }
// }

// let html5QrcodeScanner = new Html5QrcodeScanner(
//     "qr-reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess);