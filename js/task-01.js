const quantityItemEl = document.querySelectorAll("li.item");
console.log('Number of categories:', quantityItemEl.length);

quantityItemEl.forEach((itemEl) => {
    console.log('Category:', itemEl.querySelector('h2').textContent);
    console.log('Elements:', itemEl.querySelectorAll('li').length);
});


