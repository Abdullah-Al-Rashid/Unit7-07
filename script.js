// Temporarily stores user's input
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0
let negative = false

// Connect "Multiply" button to "calculate" function
document.getElementById('multiply').addEventListener('click', calculate)

function calculate () {
  // Stores inputted numbers as integers
  firstNum = document.getElementById('first').value
  secondNum = document.getElementById('second').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)
  answer = 0
  negative = false

  if (firstNum < 0) {
    negative = !negative
    firstNum = Math.abs(firstNum)
  }

  if (secondNum < 0) {
    negative = !negative
    secondNum = Math.abs(secondNum)
  }

  // Addition loops to complete multiplication operation
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }

  if (negative) {
    answer = 0 - answer
  }

  document.getElementById('answer').innerHTML = answer
}
