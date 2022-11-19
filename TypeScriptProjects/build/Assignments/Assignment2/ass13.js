class Operation {
    constructor(value) {
        this.value = value;
    }
    currentValue() {
        return this.value;
    }
    substract(operand) {
        return this.value - operand;
    }
    divide(operand) {
        return this.value / operand;
    }
}
let op1 = new Operation(8);
console.log(op1.currentValue());
console.log(op1.divide(4));
console.log(op1.substract(5));
