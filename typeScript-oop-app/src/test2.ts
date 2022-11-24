import {add,Person, x} from "./test1"

console.log("test 2");
var x1 = x;
console.log(x1);

export function printPerson(){
    var p1 = new Person();
    p1.id = 100;
    p1.name = "Mridul";
    console.log(p1);
}

printPerson();
console.log(add(3,4));

