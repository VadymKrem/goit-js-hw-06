let counterValue = 0;

const buttons = {
    inc: document.querySelector("[data-action='increment']"),
    decr: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value")
}
console.log(buttons)

buttons.span.textContent = counterValue;
const increment = () => {
  counterValue ++;
 buttons.span.textContent = counterValue;
};

const decrement = () => {
  counterValue --;
 buttons.span.textContent = counterValue;
};

buttons.inc.addEventListener("click", increment);
buttons.decr.addEventListener("click", decrement);



