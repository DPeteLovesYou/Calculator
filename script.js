let a;
let b;
let operator;
let displayText = document.querySelector('.displayText');
let displayValue = ['12', '-', '14'];
updateDisplay();

// Create an array for the current operation
// array[0] will be the first number, [1] the operator, [2] the second num
// When number button is pressed, check if operator has been pressed yet (displayValue[1])
// If not, write number to displayValue[0], otherwise to displayValue[2]
// When number or operator button is pressed, call updateDisplay()


function operate(displayValue) {
  if (displayValue[1] == "+") {
    return add(displayValue);
  } else if (displayValue[1] == "-") {
    return subtract(displayValue);
  } else if (displayValue[1] == "*") {
    return multiply(displayValue);
  } else if (displayValue[1] == "/") {
    return divide(displayValue);
  } else if (displayValue[1] == "sqr") {
    return square(displayValue);
  }
}

document.querySelectorAll(".numberButton").forEach(function(element) {
  element.addEventListener('click', numClick)
});

function numClick() {
  let btnText = this.textContent;
  console.log(btnText);
}

document.querySelectorAll(".operatorButton").forEach(function(element) {
  element.addEventListener('click', opClick)
});

function opClick() {
  let btnText = this.textContent;
  console.log(btnText);
}

function updateDisplay() {
  displayText.textContent = `${displayValue[0]} ${displayValue[1]} ${displayValue[2]}`
}

// MATH

function add(displayValue) {
  return displayValue[0] + displayValue[2];
}

function subtract(displayValue) {
  return displayValue[0] - displayValue[2];
}

function multiply(displayValue) {
  return displayValue[0] * displayValue[2];
}

function divide(displayValue) {
  return displayValue[0] / displayValue[2];
}

function square(displayValue) {
  return displayValue[0];
}