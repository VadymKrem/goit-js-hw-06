// const quantityItemEl = document.querySelectorAll("li.item");
// console.log('Number of categories:', quantityItemEl.length);

// quantityItemEl.forEach((itemEl) => {
//     console.log('Category:', itemEl.querySelector('h2').textContent);
//     console.log('Elements:', itemEl.querySelectorAll('li').length);
// });

// const listItemsEl = document.querySelector("#categories");
// const quantityItemEl = document.querySelectorAll("li.item");

// console.log(`Number of categories: ${listItemsEl.children.length}`);

// quantityItemEl.forEach((itemEl) => {
//     const titleEl = itemEl.querySelector('h2').textContent;
//     const quantityItems = itemEl.querySelectorAll('li').length;
//     console.log(`Category: ${titleEl}`);
//     console.log(`Elements: ${quantityItems}`);
// });

const listItemsEl = document.querySelector("#categories");
console.log(`Number of categories: ${listItemsEl.children.length}`);

const categories = document.querySelectorAll('.item');

categories.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
    console.log('')
})