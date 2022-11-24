import { SavingAcc } from "./SavingAcc"
import { CurrentAcc } from "./CurrentAcc"

var johnSavingAccount = new SavingAcc("John Dsoza", 2000, 20000);
console.log(johnSavingAccount);
johnSavingAccount.withdraw(2000);
console.log(johnSavingAccount);
johnSavingAccount.deposit(2000);
console.log(johnSavingAccount);


var johnCurrentAccount = new CurrentAcc("John D'soza", )