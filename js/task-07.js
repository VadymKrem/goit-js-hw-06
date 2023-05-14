let inputEl = document.getElementById("font-size-control");
let textSpan = document.getElementById("text");

inputEl.addEventListener('input', onChangeSizeInput);

function onChangeSizeInput (event) {
    textSpan.style.fontSize = inputEl.value + 'px';
};

// изменил событие с change на input