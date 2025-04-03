function testingTesting () {
    console.log("showAnswer");
}

// testingTesting() //calling the function

function quotient() {
    var firstNumber = num1.value
    var secondNumber = num2.value
    var quotient = firstNumber / secondNumber
    var answerGangan = "The answer is " + quotient
    showAnswer.innerHTML = answerGangan
}

function product() {
    var firstNumber = num1.value
    var secondNumber = num2.value
    var product = firstNumber * secondNumber
    var answerGangan = "The answer is " + product
    showAnswer.innerHTML = answerGangan
}

function sum() {
    var firstNumber = num1.value
    var secondNumber = num2.value
    var sum = parseInt(firstNumber) + parseInt(secondNumber)
    var answerGangan = "The answer is " + sum
    showAnswer.innerHTML = answerGangan
}

function subtract() {
    var firstNumber = num1.value
    var secondNumber = num2.value
    var difference = firstNumber - secondNumber
    var answerGangan = "The answer is " + difference
    showAnswer.innerHTML = answerGangan
}

function modulus() {
    var firstNumber = num1.value
    var secondNumber = num2.value
    var modulus = firstNumber % secondNumber
    var answerGangan = "The answer is " + modulus
    showAnswer.innerHTML = answerGangan
}

function exponent() {
    var firstNumber = num1.value
    var secondNumber = num2.value
    var exponent = (firstNumber ** secondNumber)
    var answerGangan = "The answer is " + exponent
    showAnswer.innerHTML = answerGangan
}