/**
    Array is a collection on data stored in continous memory location
 */
var names = [];
names = ['mridul', 'alex', 'don'];
names[3] = "anna";
names[4] = "peter";
console.log("1st element: ", names[0]);
console.log("2nd element: ", names[1]);
console.log("3rd element: ", names[2]);
console.log("4rd element: ", names[3]);
console.log("5rd element: ", names[4]);
console.log(names.length);
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}
