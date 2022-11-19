class Operation{
   private value: number;

    constructor(value: number){
        this.value = value;
    }

    currentValue(): number{
        return this.value;
    }

    substract(operand): number{
        return this.value - operand;
    }

    divide(operand):number{
        return this.value/operand;
    }
}

let op1: Operation = new Operation(8);
console.log(op1.currentValue());
console.log(op1.divide(4));
console.log(op1.substract(5));
