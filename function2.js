

var x = 10; // local to anonymous function

function multiplyNumbers(num1)
{   
    firstname = 'bob'; //global variable
    var multiple = 5; // local to multiply number

    {
        var z = 100; // it is function level scope
    }

    {
        let z =100; // it is only acceesible within the block.
    }


    for(i = 1; i<=num1; i++)
    {
       // var res = i*multiple; // It is acceessible for the whole function.
        let res = i * multiple; // it is block scope means accessible within the for loop only
        console.log("res = ",res);
    }

//    console.log("res = ",res);
    console.log("firstname = ", firstname);
    console.log("x = ", x);
    console.log("value of multilpe",multiple);

    return multiple*num1;
}


var result = multiplyNumbers(10);
console.log("result = ", result);
//console.log("res = ", res);
console.log("firstname = ", firstname);
console.log("x = ", x);
//console.log("value of multilpe",multiple);
//console.log("num1 = ", num1);