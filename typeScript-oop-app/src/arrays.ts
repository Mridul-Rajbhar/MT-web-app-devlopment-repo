let arr = [4,3,5,3,5,23,7,4]

arr.forEach(element => {
    element = 1;
});

arr.forEach(element => {
    console.log(element);
});

let arr2 = [4,5,6,7,8]
let sqrArr = arr2.map(element=>element*element);
console.log(sqrArr);

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

let fullName = persons.map(item => [item.firstname, item.lastname].join(" "));
console.log(fullName);

let fruits = ['Mango', 'Apple', 'Banana']
console.log( fruits.join(", ").toString());