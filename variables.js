
//All the data is sotred in the heap memory
x = 10 //global scope means it is stored in global memory
var y  = 20; //local scope of anonymous function

const pi = 3.1415396; // const value cannot be changed.
console.log(y, x);

function add(a, b)
{
    return a+b;
}

var num1 = 10;
var num2 = 20;
var sum = add(num1, num2);

console.log("Sum of two numbers is: ", sum);

