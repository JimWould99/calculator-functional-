let buttons = document.querySelectorAll(".number");
let symbols = document.querySelectorAll(".symbol");
let equals = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");
let section = document.querySelector("#display");

/*
note- Can add decimals and backspace as final
*/

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let first = true;
let output = false;

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function operate() {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  if (operator == "÷") {
    result = divide(firstNumber, secondNumber);
  } else if (operator == "×") {
    result = multiply(firstNumber, secondNumber);
  } else if (operator == "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator == "−") {
    result = subtract(firstNumber, secondNumber);
  }

  output = true;
  first = true;
  firstNumber = result.toFixed(6);
  display();
  operator = "";
  secondNumber = "";
}

function clear() {
  operator = "";
  firstNumber = 0;
  secondNumber = "";
  output = true;
  first = true;
}

function display() {
  if (firstNumber.length > 14) {
    section.setAttribute("style", "font-size: 35px");
  } else if (firstNumber.length > 10) {
    section.setAttribute("style", "font-size: 45px");
  } else {
    section.setAttribute("style", "font-size: 55px");
  }
  if (output) {
    section.textContent = parseFloat(firstNumber);
  } else {
    section.textContent = parseFloat(firstNumber) + operator;
    if (secondNumber !== "") {
      section.textContent += parseFloat(secondNumber);
    }
  }
}

symbols.forEach((symbols) => {
  symbols.addEventListener("click", function (e) {
    selected = e.target;
    console.log("clicked symbol");
    if (selected.textContent == operator || secondNumber !== "") {
      console.log("condition");
      return;
    }
    operator = selected.textContent;
    first = false;
    output = false;
    console.log(`operator: ${operator}`);
    console.log(`secondnumb: ${secondNumber}`);
    display();
  });
});

equals.addEventListener("click", function (e) {
  if (secondNumber != "") {
    operate();
  }
});

clearButton.addEventListener("click", function (e) {
  clear();
  display();
});

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    selected = e.target;
    if (output && first) {
      clear();
      firstNumber = parseInt(selected.textContent);
      output = false;
      display();
      return;
    }
    if (first) {
      firstNumber += selected.textContent;
    } else {
      secondNumber += selected.textContent;
    }

    display();
  });
});
