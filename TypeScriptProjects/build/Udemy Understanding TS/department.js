class Department {
    constructor(_id, _name) {
        this._id = _id;
        this._name = _name;
        this._employees = [];
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this._employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this._employees.length);
        console.log(this._employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(_id, _name, _admins) {
        super(_id, _name);
        this._admins = _admins;
    }
    describe() {
        console.log(`IT Department id: ${this._id} `);
    }
}
class AccountingDepartment extends Department {
    constructor(_id, reports) {
        super(_id, 'Accounting');
        this.reports = reports;
    }
    static getInstance() {
        if (AccountingDepartment.instance)
            return this.instance;
        this.instance = new AccountingDepartment("ACC_1001", []);
    }
    get mostRecentReport() {
        if (this._lastReport)
            return this._lastReport;
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("No value found");
        this.addReport(value);
        this._lastReport = value;
    }
    addReport(text) {
        this.reports.push(text);
    }
    addEmployee(name) {
        if (name === 'Max')
            return;
        this._employees.push(name);
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log("Accounting department ID: ", this._id);
    }
}
const employee1 = Department.createEmployee("Max");
console.log(employee1);
const ItDept1 = new ITDepartment("DP_1001", "IT Deparment", []);
ItDept1.addEmployee('Mridul');
ItDept1.addEmployee('Jack');
ItDept1._admins[0] = "Max";
ItDept1._admins[1] = "Jill";
console.log(ItDept1);
ItDept1.printEmployeeInformation();
var accountInstance = AccountingDepartment.getInstance();
console.log(accountInstance.mostRecentReport);
// console.log(AccDepartment1.mostRecentReport);
// AccDepartment1.mostRecentReport = '';
