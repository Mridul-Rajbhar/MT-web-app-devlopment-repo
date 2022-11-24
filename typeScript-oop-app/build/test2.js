"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPerson = void 0;
var test1_1 = require("./test1");
console.log("test 2");
var x1 = test1_1.x;
console.log(x1);
function printPerson() {
    var p1 = new test1_1.Person();
    p1.id = 100;
    p1.name = "Mridul";
    console.log(p1);
}
exports.printPerson = printPerson;
printPerson();
console.log((0, test1_1.add)(3, 4));
