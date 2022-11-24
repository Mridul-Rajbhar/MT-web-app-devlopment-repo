class Employee {
    constructor(employeeId, firstName, lastName) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Manager extends Employee {
}
var m1 = new Manager(1000, "john", "doe");
m1.employeeId = 2000;
m1.firstName = "jill";
m1.lastName = "deo";
console.log(m1);
