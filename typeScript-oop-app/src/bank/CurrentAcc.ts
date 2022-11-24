import {Account} from "./Account"

export class CurrentAcc extends Account{
    private _overDraft:number;
    private _minimumBalance: number;
    public get minimumBalance(): number {
        return this._minimumBalance;
    }
    public set minimumBalance(value: number) {
        this._minimumBalance = value;
    }


    public constructor(holderName: string, minimumBalance:number,  balance:number){
        super(holderName, balance);
        this._overDraft = 500;
        this._minimumBalance = minimumBalance;
    }

    public withdraw(amount: number){
        var amountRemaining = amount - this._balance;
            console.log("amount remaining: ", amountRemaining);
            if((amount<=0) || (amountRemaining >this._overDraft))
                throw new Error("No balance in current acc");
            else{
                    this._balance -= amount;
                    if(amountRemaining<=this._overDraft){
                        this._overDraft -= amountRemaining;
                        this.balance = 0;
                        console.log("overDraft: ", this._overDraft);
                    }
                }
    }

    public deposit(amount: number):void{
        if(amount > 0){
        this._balance += amount;
        if(this._overDraft < this._minimumBalance)
        {
            if(amount >= this._overDraft){
                this._overDraft = this._minimumBalance;
            }
            else
            {
                this._overDraft += amount;
            }
        }
        console.log("Amount deposited total: " , this._balance);
        }
        else{
            throw new Error("Amount required greater than 0 for depositing");
        }
    }

}