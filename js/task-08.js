const formEl = document.querySelector('.login-form')
console.log(formEl)

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
        return alert("please fill in all fields");
  }
  const formData = new FormData(event.currentTarget);
  const dataInput = Object.fromEntries(formData.entries());

  console.log(dataInput);
    
    // console.log(`email: ${email.value}, Password: ${password.value}`); вывод нужно через обьект
 });

