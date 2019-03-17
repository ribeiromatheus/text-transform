var txaText = document.getElementById('txaText'),
    txaNewText = document.getElementById('txaNewText'),
    btnUpper = document.getElementById('btnUpper'),
    btnLower = document.getElementById('btnLower'),
    btnUpperLower = document.getElementById('btnUpperLower'),
    copy = document.getElementById('copy');

btnLower.addEventListener('click', toLower);
btnUpper.addEventListener('click', toUpper);
btnUpperLower.addEventListener('click', toUpperLower);
copy.addEventListener('click', copyText);

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

function copyText() {
    // Get the text field
    let copyTxt = txaNewText;

    // Select the text field
    copyTxt.select();

    // Copy the text inside the text field
    document.execCommand('copy');
}