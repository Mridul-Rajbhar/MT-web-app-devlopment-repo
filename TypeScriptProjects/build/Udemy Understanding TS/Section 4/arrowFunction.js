const userName = "Max";
const add = (a = 1, b) => a + b;
// console.log(add(6));
const printOutput = output => console.log(output);
// printOutput(12);
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', 'Drawing'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const obj = { name: "Mtidul", age: 22 };
const keyVal = Object.assign({}, obj);
console.log(keyVal);
const addRest = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(addRest(12, 34, 22 / 7, 65));
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1, hobby2, remainingHobbies);
const person = {
    firstName: "Mridul",
    age: 22
};
const { firstName, age } = person;
console.log(firstName, age);
