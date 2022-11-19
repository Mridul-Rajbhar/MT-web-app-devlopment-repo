function printMessage(role: string):string{
    return (role=="admin")?"Hello Admin welcome":(role=="professor"?"Hello Professor welcome":"No login permitted for you");
}

console.log(printMessage("admin"));
console.log(printMessage("professor"));
console.log(printMessage("teacher"));