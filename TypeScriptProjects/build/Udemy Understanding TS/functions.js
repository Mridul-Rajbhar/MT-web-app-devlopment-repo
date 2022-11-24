function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("result: ", num);
    return;
}
// console.log(printResult(4));
let combineValues;
combineValues = add;
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(50, 20, (result) => {
    console.log(result);
});
addAndHandle(50, 20, (result) => {
    console.log(result - 50);
});
