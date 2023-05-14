const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsId = document.getElementById('ingredients');
console.log(ingredientsId)

ingredients.forEach((ingredient) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add("item");
  ingredientsId.append(ingredientRef)
})


// #способ как в лекции работает
// const ingredientsId = document.getElementById('ingredients');
// console.log(ingredientsId)
// let ingredientItem = ingredients.map(item => `<li>${item}</li>`).join('\n');

// ingredientsId.innerHTML = ingredientItem







