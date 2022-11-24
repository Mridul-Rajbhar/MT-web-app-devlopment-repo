// type AddFn = (a: number, b:number) => number;

interface AddFn {
    (a: number, b:number): number;
}

interface Named{
    readonly name?: string;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person implements Greetable{
    name?: string;
    
    constructor(n?: string){
        if(n)
            this.name = n;
    }
    greet(phrase: string):void{
        if(this.name)
            console.log(`${phrase} ${this.name}`)
    }
}

let person1: Greetable;
person1 = new Person("");
person1.greet("The name is ");