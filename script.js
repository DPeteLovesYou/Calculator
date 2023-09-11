let a;
let b;
let operator;

function operate(a, b, operator) {
  if (operator == "+") {
    return add(a,b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  } else if (operator == "sqr") {
    return square(a);
  }
}

document.querySelectorAll(".numberButton").forEach(function(element) {
  element.addEventListener('click', numClick)
});

function numClick() {
  let btnText = this.textContent;
  console.log(btnText);
}

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