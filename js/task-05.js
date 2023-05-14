let nameInput = document.getElementById("name-input");
console.log(nameInput)
let nameOutput = document.getElementById("name-output");
console.log(nameOutput)

nameInput.addEventListener("input", (event) => {
if (nameInput.value === '') {
               nameOutput.innerHTML = 'Anonymous';
            } else
            nameOutput.innerHTML = nameInput.value;
            
    })

// Вариант через oninput
// input.oninput = function () {
//     if (input.value === '') {
//        nameOutput.innerHTML = 'Anonymous';
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }

