const inputValue = document.getElementById("input-value");
const addButton = document.getElementById("btn-add");
const subtractButton = document.getElementById("btn-subtract");
const divideButton = document.getElementById("btn-divide");
const multiplyButton = document.getElementById("btn-multiply");
const equalButton = document.getElementById("btn-equal");

const result = document.getElementById("resultValue");

function finalResult(value) {
  result.textContent = value;
}

function cleanInput() {
  inputValue.value = "";
}
