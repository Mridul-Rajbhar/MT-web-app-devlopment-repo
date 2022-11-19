function combine(input1, input2, result) {
    if (typeof input1 === 'number' && typeof input2 === 'number')
        return input1 + input2;
    else
        return input1.toString() + input2.toString();
}
const combineNum = combine(12, 45, 'num');
// const combineNum = combine(12, 45, 'number');
// const combineStr = combine("Mridul ", "Rajbhar", 'string');
