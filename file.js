buttons = document.querySelectorAll('button')
symbols = document.querySelectorAll('.symbol')


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

function operate(numberOne, numberTwo, operator){
   
} 

function assemble(selected, fresh, firstNumber){
    first = true
    let secondNumber = "0"
    let operator 
    if (selected.getAttribute('class') == "symbol") {
        operator = selected.id
    }
    if (fresh) {
        if (first) {
            firstNumber += selected.innerHTML
            console.log(firstNumber)
        }
    }
    
} 

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        selected = e.target
        assemble(selected, true, 0)
        
        
    });
});

/*
note- need to reset for a new trio when click new number after result
contrast- need to keep first number if they click sign afterwards

plan-
 with buttons- determine whether clear/new or following from other calculation
 1. have a fresh equal true

*/