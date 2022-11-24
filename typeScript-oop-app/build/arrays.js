var arr = [4, 3, 5, 3, 5, 23, 7, 4];
arr.forEach(function (element) {
    element = 1;
});
arr.forEach(function (element) {
    console.log(element);
});
var arr2 = [4, 5, 6, 7, 8];
var sqrArr = arr2.map(function (element) { return element * element; });
console.log(sqrArr);
var persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];
var fullName = persons.map(function (item) { return [item.firstname, item.lastname].join(" "); });
console.log(fullName);
var fruits = ['Mango', 'Apple', 'Banana'];
console.log(fruits.join(", ").toString());
