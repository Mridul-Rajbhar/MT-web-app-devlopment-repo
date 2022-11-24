function add(n1: number, n2: number): number{
    return n1 + n2;
}

function printResult(num: number): void{
    console.log("result: ", num);
    return;
}
// console.log(printResult(4));

let combineValues: (a:number,b:number)=>number;

combineValues = add;

function addAndHandle(n1:number, n2:number, cb:(num:number)=>void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(50, 20, (result) => {
    console.log(result);
});

addAndHandle(50, 20, (result) => {
    console.log(result - 50);
});


