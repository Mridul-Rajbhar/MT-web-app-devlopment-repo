
let num1: number;
let num2: null;
let num3: number | undefined;
num1 = 23;
num2 = null;
num3 = 1;

function show(n1: string | null)
{
    console.log(n1.toUpperCase());
}

// console.log(num1 + num2);
show(null);