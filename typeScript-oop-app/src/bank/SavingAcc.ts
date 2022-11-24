import {Account} from "./Account"

export class SavingAcc extends Account{

    private _minimumBalance: number;
    public get minimumBalance(): number {
        return this._minimumBalance;
    }
    public set minimumBalance(value: number) {
        this._minimumBalance = value;
    }


    public constructor(holderName: string, minimumBalance:number, balance:number){
        super(holderName, balance);
        this._minimumBalance = minimumBalance;
    }


    public withdraw(amount: number){
        if( ((this._balance-this._minimumBalance) > amount) && (amount > 0))
            this._balance -= amount;
        else 
            throw new Error("Not enough balance");
    }

    public deposit(amount: number):void{
        if(amount > 0){
        this._balance += amount;
        console.log("Amount deposited total: " , this._balance);
        }
        else{
            throw new Error("Amount required greater than 0 for depositing");
        }
    }
}
