const myCity = 
{
    city: "mumbai",
    popular: true
}

myCity.country = "INDIA";
console.log(myCity);

delete myCity.country;
//Bracket Notation

console.log(myCity["city"]);
const countryPropertyName = "country";
myCity[countryPropertyName] = "Mumbai";

console.log(myCity);
