var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "mridul",
    age: 30,
    hobbies: ['sports', 'art'],
    role: Role.ADMIN
};
// console.log(person.name);
// let names: string[] = [];
// // names[0] = "dinseh";
// names = ['mridul', 'rajbhar'];
// console.log(names);
// console.log(person.hobbies);
// for(const hobby of person.hobbies)
// {
//     console.log(hobby.toUpperCase());
// }
// let myTuple : [number, string];
// myTuple = [3, "mirdul"]; 
