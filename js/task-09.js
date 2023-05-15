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
  const fnctRandomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = fnctRandomColor;
  nameColorHex.textContent = fnctRandomColor;
}

// функція зміни кольору записана в змінну, бо викликається двіччі, вона повинна бути в функції changeColorFunction