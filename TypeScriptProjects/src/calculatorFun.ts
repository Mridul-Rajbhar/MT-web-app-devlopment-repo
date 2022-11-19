// var num1: string;

function add(num1: number, num2: number){
 var sum:number =  0;
 sum = num1 + num2;
 return sum;   
}

function substract(num1: number, num2:number)
{
    var diff: number = 0;
    diff = num1 - num2;
    return diff;
}

//add("john", "jill");

var returnValue = add(100.2, 89.56);
console.log("Sum of the two numbers: ", returnValue);

var returnSubsValue = substract(100.2, 89.56);
console.log("Difference of the two numbers: ", returnSubsValue);