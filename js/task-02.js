const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// способ не подошел, необїодимо коллекцию вставить за 1 действие
// const ingredientsId = document.getElementById('ingredients');
// console.log(ingredientsId)

// ingredients.forEach((ingredient) => {
//   const ingredientRef = document.createElement("li");
//   ingredientRef.textContent = ingredient;
//   ingredientRef.classList.add("item");
//   ingredientsId.append(ingredientRef)
// })


// #способ как в лекции работает
// const ingredientsId = document.getElementById('ingredients');
// console.log(ingredientsId)
// let ingredientItem = ingredients.map(item => `<li>${item}</li>`).join('\n');

// ingredientsId.innerHTML = ingredientItem

const ingredientsEl = document.getElementById('ingredients');

const ingredientsList = ingredients.map(item => {
  const newItem = document.createElement('li');
  newItem.textContent = item;
  newItem.classList.add('item');
  return newItem;
});

ingredientsEl.append(...ingredientsList);



