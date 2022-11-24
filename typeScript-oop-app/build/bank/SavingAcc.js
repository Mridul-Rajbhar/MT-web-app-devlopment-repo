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
exports.SavingAcc = void 0;
var Account_1 = require("./Account");
var SavingAcc = /** @class */ (function (_super) {
    __extends(SavingAcc, _super);
    function SavingAcc(holderName, minimumBalance, balance) {
        var _this = _super.call(this, holderName, balance) || this;
        _this._minimumBalance = minimumBalance;
        return _this;
    }
    Object.defineProperty(SavingAcc.prototype, "minimumBalance", {
        get: function () {
            return this._minimumBalance;
        },
        set: function (value) {
            this._minimumBalance = value;
        },
        enumerable: false,
        configurable: true
    });
    SavingAcc.prototype.withdraw = function (amount) {
        if (((this._balance - this._minimumBalance) > amount) && (amount > 0))
            this._balance -= amount;
        else
            throw new Error("Not enough balance");
    };
    SavingAcc.prototype.deposit = function (amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log("Amount deposited total: ", this._balance);
        }
        else {
            throw new Error("Amount required greater than 0 for depositing");
        }
    };
    return SavingAcc;
}(Account_1.Account));
exports.SavingAcc = SavingAcc;
