function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateCollection = document.querySelector('[data-create]');
const btnDestroyCollection = document.querySelector('[data-destroy]');
const inputQuantityEl = document.querySelector('input');
const containerForBoxes = document.querySelector('#boxes');
console.log(btnCreateCollection)
console.log(btnDestroyCollection)
console.log(inputQuantityEl)
console.log(containerForBoxes)

btnCreateCollection.addEventListener('click', createCollection)
function createCollection() {
  const amount = inputQuantityEl.value;
  const boxesCollection = createBoxes(amount);
  
  containerForBoxes.append(...boxesCollection);
}

btnDestroyCollection.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const newBoxes = [];

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');

    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    newBoxes.push(newBox);
  }
  return newBoxes
}

function destroyBoxes() {
  containerForBoxes.innerHTML = '';
}