let userInput1: unknown;
let userName: string;
let userInput2: any;

userInput1 = 5;
userInput1 = "Mridul";

userInput2 = 10;
userName = userInput2;
userInput2 = "Rajbhar";


function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code};
}

const result = generateError("An error occurred!", 500);
console.log(result);