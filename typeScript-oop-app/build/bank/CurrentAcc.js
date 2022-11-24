"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAcc = void 0;
var Account_1 = require("./Account");
var CurrentAcc = /** @class */ (function (_super) {
    __extends(CurrentAcc, _super);
    function CurrentAcc(holderName, minimumBalance, balance) {
        var _this = _super.call(this, holderName, balance) || this;
        _this._overDraft = 500;
        _this._minimumBalance = minimumBalance;
        return _this;
    }
    Object.defineProperty(CurrentAcc.prototype, "minimumBalance", {
        get: function () {
            return this._minimumBalance;
        },
        set: function (value) {
            this._minimumBalance = value;
        },
        enumerable: false,
        configurable: true
    });
    CurrentAcc.prototype.withdraw = function (amount) {
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
    };
    CurrentAcc.prototype.deposit = function (amount) {
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
    };
    return CurrentAcc;
}(Account_1.Account));
exports.CurrentAcc = CurrentAcc;
