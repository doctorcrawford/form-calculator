// Calculator functions

function add(num1, num2){
  return num1 + num2

}

function subtract(num1, num2){
  return num1 - num2

}

function multiply(num1, num2){
  return num1 * num2

}

function divide(num1, num2){
  return num1 / num2

}
// Calculator functions end

// Grab user input

function getCalc(event){
  // stops page refresh
  event.preventDefault();

  // Get necessary DOM nodes
  const form = document.getElementById('num-form');

  const number1 = parseInt(document.querySelector('#number1').value);

  const number2 = parseInt(document.querySelector('#number2').value);

  const operator = document.querySelector('#opval').value;

  // console.log(`Your number 1 is: ${number1}`)
  // console.log(`Your number 2 is: ${number2}`)
  // console.log(`Your operator is: ${operator}`)

  
  let result 
  if (operator === "add") {
    result = add(number1, number2);
  } else if (operator === "subtract") {
    result = subtract(number1, number2);
  } else if (operator === "multiply") {
    result = multiply(number1, number2);
  } else if (operator === "divide") {
    result = divide(number1, number2);
  } else if (operator === "select") {
    result = "Please select an operator!"
  }

 document.getElementById('display').innerText = result


}

//
window.addEventListener("load", function() {
  document.getElementById("num-form").addEventListener("submit", getCalc);
})



