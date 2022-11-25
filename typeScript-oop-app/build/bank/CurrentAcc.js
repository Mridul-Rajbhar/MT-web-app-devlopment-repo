"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAcc = void 0;
const Account_1 = require("./Account");
class CurrentAcc extends Account_1.Account {
    get minimumBalance() {
        return this._minimumBalance;
    }
    set minimumBalance(value) {
        this._minimumBalance = value;
    }
    constructor(holderName, minimumBalance, balance) {
        super(holderName, balance);
        this._overDraft = 500;
        this._minimumBalance = minimumBalance;
    }
    withdraw(amount) {
        var amountRemaining = amount - this._balance;
        console.log("amount remaining: ", amountRemaining);
        if ((amount <= 0) || (amountRemaining > this._overDraft))
            throw new Error("No balance in current acc");
        else {
            this._balance -= amount;
            if (amountRemaining <= this._overDraft) {
                this._overDraft -= amountRemaining;
                this.balance = 0;
                console.log("overDraft: ", this._overDraft);
            }
        }
    }
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            if (this._overDraft < this._minimumBalance) {
                if (amount >= this._overDraft) {
                    this._overDraft = this._minimumBalance;
                }
                else {
                    this._overDraft += amount;
                }
            }
            console.log("Amount deposited total: ", this._balance);
        }
        else {
            throw new Error("Amount required greater than 0 for depositing");
        }
    }
}
exports.CurrentAcc = CurrentAcc;
