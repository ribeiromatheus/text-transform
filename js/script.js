var txaText = document.getElementById('txaText'),
    txaNewText = document.getElementById('txaNewText'),
    btnUpper = document.getElementById('btnUpper'),
    btnLower = document.getElementById('btnLower'),
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

function toUpperLower() {
    let text = txaText.value, i = 0, ans = "";

    while (i < text.length) {
        if (i % 2 == 0) ans += text[i].toUpperCase();
        else ans += text[i].toLocaleLowerCase();
        i++;
    }

    return displayText(ans);
}

function displayText(text) {
    return txaNewText.value = text;
}