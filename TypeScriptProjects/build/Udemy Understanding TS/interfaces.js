// type AddFn = (a: number, b:number) => number;
class Person {
    constructor(n) {
        if (n)
            this.name = n;
    }
    greet(phrase) {
        if (this.name)
            console.log(`${phrase} ${this.name}`);
    }
}
let person1;
person1 = new Person("");
person1.greet("The name is ");
