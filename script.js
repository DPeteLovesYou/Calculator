let displayText = document.querySelector('.displayText');
let displayValue = "0";

function operate() {
  let equationArr = displayValue.split(" ");
  let a = Number(equationArr[0]);
  let b = Number(equationArr[2]);

  if (equationArr[2]) {
  if (equationArr[1] == "+") {
    displayValue = add(a, b);
  } else if (equationArr[1] == "-") {
    displayValue = subtract(a, b);
  } else if (equationArr[1] == "*") {
    displayValue = multiply(a, b);
  } else if (equationArr[1] == "÷" && equationArr[2] == "0") {
    displayValue = "NO!!";
  } else if (equationArr[1] == "÷") {
    displayValue = divide(a, b);
  }
  }

  displayValue = displayValue.toString();
  updateDisplay(displayValue);
}

document.querySelectorAll(".numberButton").forEach(function(element) {
  element.addEventListener('click', numClick)
});

function numClick() {
  let btnText = this.textContent;

  if (displayValue == "Thank you!!" || displayValue == "0" || displayValue == "NO!!") {
    displayValue = btnText
    updateDisplay(displayValue);
  } else {
    displayValue += btnText;
    updateDisplay(displayValue);
  }
}

document.querySelectorAll(".operatorButton").forEach(function(element) {
  element.addEventListener('click', opClick)
});

function opClick() {
  let equationArr = displayValue.split(" ");
  let btnText = this.textContent;

  if (displayValue == "Thank you!!" || displayValue == "NO!!") {
    displayValue = "0";
    updateDisplay(displayValue);
    return;
  }

  if (equationArr[1] == undefined) {
    displayValue += ` ${btnText} `;
  } else if (equationArr[2] == '') {
    return;
  } else {
    operate();
    if (displayValue == "NO!!") {
      return
    }
    displayValue += ` ${btnText} `;
  }
  updateDisplay(displayValue);
}

function updateDisplay(displayValue) {
  displayText.textContent = `${displayValue}`;
}

document.querySelector("#evaluate").addEventListener(`click`, operate)

document.querySelector("#compliment").addEventListener('click', () => {
  displayValue = "Thank you!!";
  updateDisplay(displayValue);
})

document.querySelector("#clear").addEventListener('click', () => {
  displayValue = "0";
  updateDisplay(displayValue);
})

document.querySelector("#backSpace").addEventListener('click', () => {
  displayValue = displayValue.slice(0, -1);
  updateDisplay(displayValue);
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