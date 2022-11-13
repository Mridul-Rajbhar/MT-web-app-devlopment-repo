//example: Create object and modify its properties

/*
let myObject;
myObject = {
    a: 10,
    b: "abc"
};

console.log(myObject);

delete myObject.b;

console.log(myObject);

console.log(myObject.a);
*/

// challenge 1

/*
let myPost = {}
myPost.postTitle="Object is reference type"
myPost.postLikes = 0
myPost.shared = false
console.log(myPost);
myPost.postLikes = 1;
console.log(myPost);
delete myPost.shared;
console.log(myPost);
*/

//Example 2: "const" for object declaration

// const myObject = {}
// myObject.a = true;
// console.log(myObject);

// Challenge 2
/*
let myObject = {};
myObject.a = 10;
let copyOfMyObject = myObject;
copyOfMyObject.b = false;

console.log(myObject);
console.log(copyOfMyObject);
*/

//Example 3: Bracket Notation

/*
let myObject = {
    a: true,
    b: null,
    c: 25
};

console.log(myObject["a"]);
console.log(myObject["b"]);
const propertyName = "c";
console.log(myObject[propertyName]);
console.log(myObject["propertyName"]);
myObject["new"+"Proprty"+"Name"] = "Value for dynamicall computed propertyName";
console.log(myObject);
*/

//Exmaple 4 ----------------

// const myObject = {
//     a: 3,
//     b: true
// };

// console.log(myObject.c);

// console.log(myObject.absentPreperty);


//challenge 3: ---------------

// let objectWithNestedObject = {};
// objectWithNestedObject.nestedObject= {};
// objectWithNestedObject.nestedObject.a = null;

// const newPropertyName = "b";

// objectWithNestedObject.nestedObject[newPropertyName] = true;
// console.log(objectWithNestedObject);

