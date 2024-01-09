buttons = document.querySelectorAll('button')
symbols = document.querySelectorAll('.symbol')
section = document.querySelector('#display')

let firstNumber = 0
let secondNumber = 0
let operator = "none"
let result
let first = true
let reset = false
let operatorNumb = true


function add(number1, number2){
    return number1 + number2
}

function subtract(number1, number2){
    return number1 - number2
}

function multiply(number1, number2){
    return number1 * number2
}

function divide(number1, number2){
    return number1 / number2
}

function operate(first, second, numerator){
  
    firstNumber = parseFloat(first)
    secondNumber = parseFloat(second)

   if (numerator == "÷"){
    result = divide(firstNumber, secondNumber)
} else if (numerator == "×") {
    result = multiply(firstNumber, secondNumber)
} else if (numerator == "+") {
    result = add(firstNumber, secondNumber)
} else if (numerator == "−") {
    result = subtract(firstNumber, secondNumber)
} 
  first = false
  reset = true
  operatorNumb = true
  secondNumber = 0
  firstNumber = result.toFixed(6)
  console.log(result) 
  return true
} 


function display(){
    section.innerHTML = parseFloat(firstNumber)
    return
} 

function displaySymbol(){
    section.innerHTML += operator
}

function displaySecond(){
    section.innerHTML = parseFloat(firstNumber) + operator + parseFloat(secondNumber)
    console.log(`called second`)
}

function displayAnswer(){
    section.innerHTML = parseFloat(firstNumber)
}


section.innerHTML = parseFloat(firstNumber)

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        selected = e.target
        console.log(first)
        if (selected.id == "clear") {
            console.log('clicked C')
            reset = true
            firstNumber = 0
            secondNumber = 0
            operator = "none"
            display()
        }
        if (reset && selected.getAttribute('class') == 'number') {
            firstNumber = selected.innerHTML
            console.log(`first, first: ${firstNumber}`)
            reset = false
            display() 
            return
        }
        if (reset && selected.getAttribute('class') == 'symbol' && operatorNumb) {
            first = false
            reset = false
            operator = selected.innerHTML
            operatorNumb = false
            console.log(`first: ${firstNumber}`)
            console.log(`second: ${secondNumber}`)
            console.log(`symmol works`)
            displaySymbol()
            return
        }
        if (selected.getAttribute('class') == 'symbol' && operatorNumb) {
            operator = selected.innerHTML
            first = false
            operatorNumb = false
            console.log(`operator: ${operator}`)
            displaySymbol()
        } 
        if (first == true && selected.getAttribute('class') == 'number') {
            firstNumber += selected.innerHTML
            console.log(`first, second: ${firstNumber}`)
            display() 
        } else if (!first && selected.getAttribute('class') == 'number') {
            secondNumber += selected.innerHTML
            console.log(`second: ${secondNumber}`)
            displaySecond()
        }
        if (selected.id == "equals") {
            first = operate(firstNumber, secondNumber, operator)
            displayAnswer()
        }
    });
});

/*
logic2;
need to somehow determine whether the input goes to the first number (replacing it).
or goes to the second number afterwards

1. condition1:
whole calculator resets from answer
2. condition2
full monty- input all three value
3. cond3
repeat from answer into number1,

condition1: 
if user presses a number after display is showing an answer- will update number and process entirely
condition2:
if there is an answer and operator is pressed- the answer is carried over
condition3:
changes from number  one to two by virtue of pressing operator

note- do not update the first number in operate into result. 
do this in specific branch of display and operator 

shape:
1. check first whether answer is true or false (if display is showing final calculation)
    1a. if answer is true and user clicks number 
        1c. answer changed to false, (number changed to new number clicked, not appended )
    1b. check whether answer is true and user clicks operator
        1b. numberone becomes the result number
    1.bb. answer true and 
 2. answer is false
    2a. if number and thing;true append to firstNumber
    2b. if operator then switch- thing;false
    2c. if number and false: append to secondNumber

    have global vairables for operator and two numbers

1. if there is an operator, 

*/















/*

 note- logic
 if start==true it is replaced with the next number user clicks
 first number starts as 0 by new round/clear
 pressing a multiplier will always lead to next click on number being the second number
 
 keep variables global to determine; need access by multiple functions
 1. have operations passing 
 2. have firstNumber start as 0 externally
 3. check within click its value to determine 3 conditions
 4. if start= true  keep adding to first number until they click operator,
 need condition to switch. this replaces 0 or prior result.
 5. need to have result become first number

 options:
 1. full monty: a. user puts first number b. symbol switchs it over c. finish seocnd number 
 d. press equals  (needs to clear either 0 prior or prior result)
 2. automatically second number- user presses symbol first and operates on default 0 or past result
 3. 
*/