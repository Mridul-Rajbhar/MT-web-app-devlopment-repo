const userName = "Max";

const add = (a:number=1, b:number)=> a+b;
// console.log(add(6));

const printOutput: (a: number | string) => void =
output => console.log(output);
// printOutput(12);

const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking', 'Drawing']
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const obj = {name: "Mtidul", age: 22}
const keyVal = {...obj};
console.log(keyVal);

const addRest = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue)=>{
        return curResult + curValue;
    }, 0);
}
console.log(addRest(12,34,22/7,65));

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1, hobby2, remainingHobbies);

const person = {
    firstName: "Mridul",
    age: 22
}
const {firstName, age} = person;
console.log(firstName, age);