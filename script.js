const BASH_TXT = `$(echo "{}"|base64 -d)`;

const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
    let text = input.value;
    if (text === '') output.value = '';
    else output.value = base64ToBash(textToBase64(text));
});
output.addEventListener('click', () => {
    copyToClipboard(output.value);
    output.style.backgroundColor = '#2aed11';
    setTimeout(() => {
        output.style.backgroundColor = '';
    }, 300);
});

function textToBase64(text) {
    return Base64.encode(text);
}
function base64ToBash(base64) {
    return BASH_TXT.replace('{}', base64);
}

function copyToClipboard(text) {
    let _ = document.createElement('input');
    _.value = text;
    _.select();
    _.setSelectionRange(0, text.length);
    navigator.clipboard.writeText(_.value);
}