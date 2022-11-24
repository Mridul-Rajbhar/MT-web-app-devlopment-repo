abstract class Department{
    static fiscalYear:number = 2020;

    protected _employees: string[] = [];

    constructor(protected readonly _id: string ,private _name: string){
       console.log(Department.fiscalYear)
    }

    static createEmployee(name: string){
        return {name: name};
    }

    abstract describe(): void;
    
    addEmployee(employee: string){
        this._employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this._employees.length);
        console.log(this._employees);
    }
}

class ITDepartment extends Department{
    constructor(_id: string, _name: string, public _admins: string[]){
        super(_id, _name);
    }

    describe() {  
        console.log(`IT Department id: ${this._id} `);
    }
}


class AccountingDepartment extends Department{

    private _lastReport: string;

    private static instance: AccountingDepartment;

    private constructor(_id: string, private reports:string[]){
        super(_id, 'Accounting');
    }

    static getInstance(){
        if(AccountingDepartment.instance)
            return this.instance;
        this.instance = new AccountingDepartment("ACC_1001", []);
    }

    get mostRecentReport(){
        if(this._lastReport)
            return this._lastReport;   
        throw new Error("No report found");
    }

    set mostRecentReport(value: string){
        if(!value)
            throw new Error("No value found");
        this.addReport(value);
        this._lastReport = value;
    }

    addReport(text: string){
        this.reports.push(text);
    }

    addEmployee(name: string){
        if(name === 'Max')return;
        this._employees.push(name);
    }

    printReports(){
        console.log(this.reports);
    }

    describe(){
        console.log("Accounting department ID: ", this._id);
    }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1);

const ItDept1= new ITDepartment("DP_1001","IT Deparment",[]);
ItDept1.addEmployee('Mridul');
ItDept1.addEmployee('Jack');
ItDept1._admins[0] = "Max";
ItDept1._admins[1] = "Jill";

console.log(ItDept1);
ItDept1.printEmployeeInformation();

var accountInstance =  AccountingDepartment.getInstance();
console.log(accountInstance.mostRecentReport);

// console.log(AccDepartment1.mostRecentReport);
// AccDepartment1.mostRecentReport = '';
