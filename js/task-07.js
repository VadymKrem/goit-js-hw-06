let inputEl = document.getElementById("font-size-control");
let textSpan = document.getElementById("text");

inputEl.addEventListener('change', onChangeSizeInput);

function onChangeSizeInput (event) {
    textSpan.style.fontSize = inputEl.value + 'px';
};