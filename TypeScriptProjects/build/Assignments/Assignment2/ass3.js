function displayAnswer(num) {
    if (num < 0)
        return Math.pow(num, 3);
    else if (num > 0)
        return Math.pow(num, 2);
    else
        return "invalid input";
}
console.log("The result is: ", displayAnswer(2));
console.log("The result is: ", displayAnswer(-2));
console.log("The result is: ", displayAnswer(0));
