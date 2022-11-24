/**
 * Class is the blueprints for the objects constructed at the runtime.
 * Every object of type Account will have its own copy of properties.
 * var, let are not used in the class for properties/variable. 
 * For specifying the scope use public, private not let and var
 */


export abstract class Account {
    private _accountId: number;
    private _holderName: string;
    // protected _minimumBalance:number;
    protected _balance: number;

    public constructor(holderName: string, balance: number){
        // throw new Error("Cannot create the object");
        this.createAccountNumber();
        this.validateHolderName(holderName);
        // this.validateMinimumBalance(minimumBalance);
        this.validateBalance(balance);
    }

    public get accountId(){
        return this._accountId;
    }

    public get holderName(){
        return this._holderName;
    }
    public set holderName(holderName: string){
        this.validateHolderName(holderName);
    }

    public get balance(){
        return this._balance;}
    public set balance(balance: number){
        this.validateBalance(balance);} 


    // public get minimumBalance(){
    //     return this._minimumBalance;}
    // public set minimumBalance(minimumBalance : number){
    //     this._minimumBalance = minimumBalance;}

    
    public abstract withdraw(amount: number): void;
    
    public deposit(amount:number):void{
        if(amount > 0)
            this._balance += amount;
    }

    // Validation Codes
    private createAccountNumber(){
        this._accountId =Math.round(Math.random()*999999 + Math.pow(10, 6));
    }

    private validateHolderName(holderName: string){
        if(holderName != null && holderName.length >= 5)
            this._holderName = holderName;
        else if(holderName == null)
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

    private validateBalance(balance: number){
        if(balance >= 0)
            this._balance  = balance;
        else
            throw new Error("Account balance must be greater than minimum balance");
    }
}