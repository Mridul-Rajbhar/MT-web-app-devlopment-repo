"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SavingAcc_1 = require("./SavingAcc");
const CurrentAcc_1 = require("./CurrentAcc");
var johnSavingAccount = new SavingAcc_1.SavingAcc("John Dsoza", 2000, 20000);
console.log(johnSavingAccount);
johnSavingAccount.withdraw(2000);
console.log(johnSavingAccount);
johnSavingAccount.deposit(2000);
console.log(johnSavingAccount);
var johnCurrentAccount = new CurrentAcc_1.CurrentAcc("John D'soza");
