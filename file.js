let buttons = document.querySelectorAll('.number')
let symbols = document.querySelectorAll('.symbol')
let equals = document.querySelector('#equals')
let clearButton = document.querySelector('#clear')
let section = document.querySelector('#display')

let firstNumber = ''
let secondNumber =''
let operator = ''
let result = ''
let first = true
let output = false

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

function operate(){

    console.log('operate')
  
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)

   if (operator == "÷"){
    result = divide(firstNumber, secondNumber)
} else if (operator == "×") {
    result = multiply(firstNumber, secondNumber)
} else if (operator == "+") {
    result = add(firstNumber, secondNumber)
} else if (operator == "−") {
    result = subtract(firstNumber, secondNumber)
} 

output = true
first = true
firstNumber = result.toFixed(6)
display()
operator = ''
secondNumber = ''

console.log(`result: ${result}`)
}

function clear(){
    operator = ''
    firstNumber = 0
    secondNumber = ''
    output = true
    first = true
}


function display(){
    if (firstNumber.length > 14) {
       section.setAttribute('style', 'font-size: 35px')
    }
    else if (firstNumber.length > 10) {
        section.setAttribute('style', 'font-size: 45px')
    } else {
        section.setAttribute('style', 'font-size: 55px')
    }
    if (output) {
        section.textContent = parseFloat(firstNumber)
    } else {
        section.textContent = parseFloat(firstNumber) + operator 
        if (secondNumber !== '') {
            section.textContent += parseFloat(secondNumber)
        }
    }
}

symbols.forEach((symbols) => {
    symbols.addEventListener('click', function(e){
        selected = e.target
        console.log('clicked symbol')
        if (selected.textContent == operator || secondNumber !== '') {
            console.log('condition')
            return
        }
        operator = selected.textContent
        first = false
        output = false
        console.log(`operator: ${operator}`)
        console.log(`secondnumb: ${secondNumber}`)
        display()
    })
})

equals.addEventListener('click', function(e){
    console.log('equals')
    if (secondNumber != '') {
        operate()
    }
})

clearButton.addEventListener('click', function(e){
    clear()
    display()
})


buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        selected = e.target
        if (output && first) {
            clear()
            firstNumber = parseInt(selected.textContent)
            output = false
            display()
            return
        }
        if (first) {
            firstNumber += selected.textContent 
        } else {
            secondNumber += selected.textContent
        }

        display()

        /*
        note; display when showing result
        if (selected.getAttribute('class') == 'symbol' && operatorNumb) {
            first = false
            reset = false
            operator = selected.innerHTML
            operatorNumb = false
            console.log(`first: ${firstNumber}`)
            console.log(`second: ${secondNumber}`)
            console.log(`symmol works`)
            return
        }
        if (first == true && selected.getAttribute('class') == 'number') {
            firstNumber += selected.innerHTML
            console.log(`first, second: ${firstNumber}`)
        } else if (!first && selected.getAttribute('class') == 'number') {
            secondNumber += selected.innerHTML
            console.log(`second: ${secondNumber}`)
        }
        */
    });
});

/*
redo note:
1. need event listers for all three types: buttons, symbols, equals and clear
2. dont need to hold seperate variables for two numbers (display one same) and similarly dont need two numbers
can just have one number and operator will insert inbetween 
3. dont need to seperate display value series and numbers in javascipt

note- can just look at current code and find where to simplify
idea- can put all input into one string. then display breaks it based on symbol for display




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