function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const nameColorHex = document.querySelector('.color');


btnChangeColor.addEventListener('click', changeColorFunction);

function changeColorFunction(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  nameColorHex.textContent = getRandomHexColor();
}