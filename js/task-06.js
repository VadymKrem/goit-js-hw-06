let validInput = document.getElementById("validation-input");

let lengthInput = Number(validInput.getAttribute("data-length"));
console.log(lengthInput);


validInput.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    if (event.currentTarget.value.length === lengthInput){
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    }
    else {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    };
};


// еще способ строку в число
// let lengthInput = parseInt(quantityInput.getAttribute("data-length"), 10);
// console.log(lengthInput);