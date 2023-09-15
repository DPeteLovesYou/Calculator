let displayText = document.querySelector('.displayText');
let displayValue = "";

// Create an array for the current operation
// array[0] will be the first number, [1] the operator, [2] the second num
// When number button is pressed, check if operator has been pressed yet (displayValue[1])
// If not, write number to displayValue[0], otherwise to displayValue[2]
// When number or operator button is pressed, call updateDisplay()


function operate() {
  let equationArr = displayValue.split(" ");
  let a = Number(equationArr[0]);
  let b = Number(equationArr[2]);

  if (equationArr[1] == "+") {
    displayValue = add(a, b);
  } else if (equationArr[1] == "-") {
    displayValue = subtract(a, b);
  } else if (equationArr[1] == "*") {
    displayValue = multiply(a, b);
  } else if (equationArr[1] == "÷") {
    displayValue = divide(a, b);
  }

  updateDisplay(displayValue);
}

document.querySelectorAll(".numberButton").forEach(function(element) {
  element.addEventListener('click', numClick)
});

function numClick() {
  let btnText = this.textContent;
  displayValue += btnText;
  updateDisplay(displayValue);
}

document.querySelectorAll(".operatorButton").forEach(function(element) {
  element.addEventListener('click', opClick)
});

function opClick() {
  let equationArr = displayValue.split(" ");
  let btnText = this.textContent;

  if (equationArr[1] == undefined) {
    displayValue += ` ${btnText} `;
  } else {
    operate();
    displayValue += ` ${btnText} `;
  }
  updateDisplay(displayValue);
}

function updateDisplay(displayValue) {
  displayText.textContent = `${displayValue}`;
}

document.querySelector("#evaluate").addEventListener(`click`, operate)

document.querySelector("#exponent").addEventListener('click', (a) => {
  
})

// MATH

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function square(a) {
  return a * a;
}