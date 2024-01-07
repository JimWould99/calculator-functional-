buttons = document.querySelectorAll('button')
symbols = document.querySelectorAll('.symbol')

let firstNumber = 0
let secondNumber = 0
let operator = "none"
let result
let first = true
let reset = false

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

   if (numerator == "div"){
    result = divide(firstNumber, secondNumber)
} else if (numerator == "times") {
    result = multiply(firstNumber, secondNumber)
} else if (numerator == "plus") {
    result = add(firstNumber, secondNumber)
} else if (numerator == "minus") {
    result = subtract(firstNumber, secondNumber)
} 
  first = true
  reset = true
  secondNumber = 0
  firstNumber = result
  console.log(result) 
  return true
} 

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        selected = e.target
        console.log(first)
        if (selected.getAttribute('class') == 'symbol') {
            operator = selected.id
            first = false
            console.log(`operator: ${operator}`)
        }
        if (first && selected.getAttribute('class') == 'number' && reset == false) {
            firstNumber += selected.innerHTML
            console.log(`first: ${firstNumber}`)
        } else if (!first && selected.getAttribute('class') == 'number') {
            secondNumber += selected.innerHTML
            console.log(`second: ${secondNumber}`)
        }
        if (selected.id == "equals") {
            first = operate(firstNumber, secondNumber, operator)
        }
        if (selected.getAttribute('class') == 'number' && reset == true) {
            reset = false
            firstNumber = selected.innerHTML
            console.log(`first: (other) ${firstNumber}`)
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