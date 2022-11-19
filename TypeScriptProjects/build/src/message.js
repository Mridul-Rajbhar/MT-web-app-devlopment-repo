console.log("Welcome to TypeScript");
function generateRandomNumber(val) {
    return Math.round(val);
}
//let result  = generateRandomNumber("mridul");
let result = generateRandomNumber(true);
console.log(result);
result = generateRandomNumber(111.5);
if (result > 100)
    console.log("result: ", result);
console.log("round number is: ", generateRandomNumber(5.5));
