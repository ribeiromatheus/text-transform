var txaText = document.getElementById('txaText'),
txaNewText = document.getElementById('txaNewText'),
btnUpper = document.getElementById('btnUpper'),
btnLower = document.getElementById('btnLower');
btnUpperLower = document.getElementById('btnUpperLower');

btnLower.addEventListener('click', toLower);
btnUpper.addEventListener('click', toUpper);
btnUpperLower.addEventListener('click', toUpperLower);

function toLower() {
    return displayText(txaText.value.toLowerCase());
}

function toUpper() {
    return displayText(txaText.value.toUpperCase());
}

function displayText(text) {
    return txaNewText.value = text;
}