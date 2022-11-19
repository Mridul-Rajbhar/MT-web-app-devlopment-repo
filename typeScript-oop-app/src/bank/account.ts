/**
 * Class is the blueprints for the objects constructed at the runtime.
 * Every object of type Account will have its own copy of properties.
 * var, let are not used in the class for properties/variable. 
 * For specifying the scope use public, private not let and var
 */

class Account{
    public accountId: number;
    public holderName: string;
    public balance: number;

    // constructor(accountId: number, holderName: string, balance: number){
    //     this.accountId = accountId;
    //     this.holderName = holderName;
    //     this.balance = balance;
    // }

}

var account1 = new Account();
account1.accountId = 1000;
account1.holderName = "Mridul";
account1.balance = 19417;
console.log(account1);