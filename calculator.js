const prompt = require('prompt-sync')();

/*
add()
multiply()
sub()
div()

run this in nodejs as well as browser.

add button click --> add()
*/

function addition(num1, num2){return num1 + num2;}
function substract(num1, num2){return num1-num2;}
function multiply(num1, num2){return num1 * num2;}
function division(num1, num2){return num1/num2;}

var num1 = prompt("Enter value one: ");
var num2 = prompt("Enter value two: ");

console.log(addition(Number(num1),Number(num2)));
console.log(substract(num1,num2));
console.log(multiply(num1,num2));
console.log(division(num1, num2));