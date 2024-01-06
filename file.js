buttons = document.querySelectorAll('button')
symbols = document.querySelectorAll('.symbol')

let firstNumber = 0
let secondNumber = 0
let operator 
let number = true
let pack = []

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

function operate(pack){
    numberOne = parseFloat(pack[0])
    numberTwo = parseFloat(pack[1])
    numerator = pack[2]
    if (numerator == "div"){
        result = divide(numberOne, numberTwo)
    } else if (numerator == "times") {
        result = multiply(numberOne, numberTwo)
    } else if (numerator == "plus") {
        result = add(numberOne, numberTwo)
    } else if (numerator == "minus") {
        result = subtract(numberOne, numberTwo)
    }
    console.log(result)
    return result
} 

function assemble(selected){
    if (selected.id == 'equals') {
        pack.push(firstNumber, secondNumber, operator)
        console.log(pack)
        number = true
        result = operate(pack)
        pack = []
        firstNumber = 0
        secondNumber = 0
        return result
    }
    if (selected.getAttribute('class') == 'symbol'){
       operator = selected.id
       console.log(`operator: ${operator}`)
       number = false
    }
    if (selected.getAttribute('class') == 'number'){
        if (number == true) {
            firstNumber += "" + selected.innerHTML
            console.log(`first: ${firstNumber}`)
        } else {
            secondNumber += "" + selected.innerHTML
            console.log(`second: ${secondNumber}`)
        }
    }
} 

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        selected = e.target
        if (selected.id == "clear") {
            pack = []
            console.log(`pack: ${pack}`)
        }
        result = assemble(selected)

        /*
        if (pack.length < 3){
            assemble(selected)
        } else {
            operate(pack)
            pack = []
            console.log(`reset: ${pack}`)
        }
        */

        
        /*
        note- have a cycle where 'clear' or a new result restarts it
         clear gives starting point of zero and result makes first number result
         assemble(selected)
        */
    
        /*
        selected = e.target.innerHTML
        firstNumber += "" + selected 
        console.log(firstNumber)
        assemble(selected) */
    });
});