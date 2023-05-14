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
    console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
 });

