"use strict";
/**
 * Class is the blueprints for the objects constructed at the runtime.
 * Every object of type Account will have its own copy of properties.
 * var, let are not used in the class for properties/variable.
 * For specifying the scope use public, private not let and var
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(holderName, balance) {
        // throw new Error("Cannot create the object");
        this.createAccountNumber();
        this.validateHolderName(holderName);
        // this.validateMinimumBalance(minimumBalance);
        this.validateBalance(balance);
    }
    get accountId() {
        return this._accountId;
    }
    get holderName() {
        return this._holderName;
    }
    set holderName(holderName) {
        this.validateHolderName(holderName);
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        this.validateBalance(balance);
    }
    deposit(amount) {
        if (amount > 0)
            this._balance += amount;
    }
    // Validation Codes
    createAccountNumber() {
        this._accountId = Math.round(Math.random() * 999999 + Math.pow(10, 6));
    }
    validateHolderName(holderName) {
        if (holderName != null && holderName.length >= 5)
            this._holderName = holderName;
        else if (holderName == null)
            throw new Error("Holder Name is Null");
        else
            throw new Error("Length of holder name is less than 5");
    }
    // private  validateMinimumBalance(minimumBalance:number){
    //     if(minimumBalance>0)
    //         this._minimumBalance = minimumBalance;
    //     else 
    //         throw new Error("minimum balance should be greater than zero");
    // }
    validateBalance(balance) {
        if (balance >= 0)
            this._balance = balance;
        else
            throw new Error("Account balance must be greater than minimum balance");
    }
}
exports.Account = Account;
