var resultContainer = document.getElementById('qr-reader-results');
var h1tab = document.getElementById('letsgo');
var lastResult, countResults = 0;


function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;
        // Handle on success condition with the decoded message.
        console.log(`Scan result ${decodedText}`, decodedResult, h1tab);
        h1tab.style.visibility = "visible"
        h1tab.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/zOI0tW3wZYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    }
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);