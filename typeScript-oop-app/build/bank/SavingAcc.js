"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAcc = void 0;
const Account_1 = require("./Account");
class SavingAcc extends Account_1.Account {
    get minimumBalance() {
        return this._minimumBalance;
    }
    set minimumBalance(value) {
        this._minimumBalance = value;
    }
    constructor(holderName, minimumBalance, balance) {
        super(holderName, balance);
        this._minimumBalance = minimumBalance;
    }
    withdraw(amount) {
        if (((this._balance - this._minimumBalance) > amount) && (amount > 0))
            this._balance -= amount;
        else
            throw new Error("Not enough balance");
    }
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log("Amount deposited total: ", this._balance);
        }
        else {
            throw new Error("Amount required greater than 0 for depositing");
        }
    }
}
exports.SavingAcc = SavingAcc;
