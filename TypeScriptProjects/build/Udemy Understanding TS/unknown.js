let userInput1;
let userName;
let userInput2;
userInput1 = 5;
userInput1 = "Mridul";
userInput2 = 10;
userName = userInput2;
userInput2 = "Rajbhar";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("An error occurred!", 500);
console.log(result);
