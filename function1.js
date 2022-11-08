//objects in JavaScript

function convertStringToUpperCase(name)
{
    console.log("Data type of name variable: ", typeof name);
    if(typeof name != String)
        return "not a string";
    return name.toUpperCase();
}

// var str1 = convertStringToUpperCase("john");

// console.log("type of: ", typeof str1);
// console.log("Value of the data type: ", str1);


// var str2 = convertStringToUpperCase("john doe");
// console.log("Value of the data type: ", str2);

// var str3 = convertStringToUpperCase(100);
// console.log("Value of the data type: ", str3);


// var str3 = convertStringToUpperCase(true);
// console.log("Value of the data type: ", str3);


var str3 = convertStringToUpperCase(null);
console.log("Value of the data type: ", str3);


