let resultValue;
let saveValue;

function getInputValue() {
  return inputValue.value;
}

function add() {
  const inputUserNumber = +getInputValue();
  resultValue = inputUserNumber;
  saveValue = "+";
  cleanInput();
}

function subtract() {
  const inputUserNumber = +getInputValue();
  resultValue = inputUserNumber;
  saveValue = "-";
  cleanInput();
}

function divide() {
  const inputUserNumber = +getInputValue();
  resultValue = inputUserNumber;
  saveValue = "/";
  cleanInput();
}

function multiply() {
  const inputUserNumber = +getInputValue();
  resultValue = inputUserNumber;
  saveValue = "*";
  cleanInput();
}

function writeOutput() {
  finalResult(String(resultValue));
}

function equal() {
  const inputUserNumber = +getInputValue();
  switch (saveValue) {
    case "+":
      resultValue += inputUserNumber;
      break;
    case "-":
      resultValue -= inputUserNumber;
      break;
    case "/":
      resultValue /= inputUserNumber;
      break;
    case "*":
      resultValue *= inputUserNumber;
      break;
  }
  writeOutput();
  cleanInput();
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
divideButton.addEventListener("click", divide);
multiplyButton.addEventListener("click", multiply);
equalButton.addEventListener("click", equal);
