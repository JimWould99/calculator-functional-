buttons = document.querySelectorAll('button')
symbols = document.querySelectorAll('.symbol')

let firstNumber = "0"
let secondNumber = "0"
let operator
let start = true
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

function operate(numberOne, numberTwo, numerator){
   numberOne = parseFloat(firstNumber)
   numberTwo = parseFloat(secondNumber)
   let result
   if (numerator == "div"){
    result = divide(numberOne, numberTwo)
} else if (numerator == "times") {
    result = multiply(numberOne, numberTwo)
} else if (numerator == "plus") {
    result = add(numberOne, numberTwo)
} else if (numerator == "minus") {
    result = subtract(numberOne, numberTwo)
} 
   console.log(`result: ${result}`)
   secondNumber = "0"
   firstNumber = result
   operator = "none"
   console.log(`newfirst: ${firstNumber}`)
} 




buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        selected = e.target
        /*if (selected.getAttribute('class') == 'number') {
            start = true
        } */
        if (selected.id == "equals") {
            console.log(`final: ${firstNumber}`)
            operate(firstNumber, secondNumber, operator)
        }
        if (selected.getAttribute('class') == 'symbol') {
            operator = selected.id
            console.log('switch')
            console.log(operator)
        }
        if (selected.getAttribute('class') == 'number' && operator == "none") {
                firstNumber += selected.innerHTML
                console.log(`firstNumber: ${firstNumber}`)
            } else {
                secondNumber += selected.innerHTML
                console.log(`secondNumber: ${secondNumber}`)
            }
    });


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