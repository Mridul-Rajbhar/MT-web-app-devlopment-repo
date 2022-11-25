function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Mridul" }, { age: 30 });
console.log(mergedObj);
mergedObj.age;
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " element";
    }
    return [element, descriptionText];
}
// console.log(countAndDescribe(9));
// function keyOffFunction<T extends object, U extends keyof T>
//     (ele1: T, ele2: U){
//         console.log(ele1, ele2);
// }
// keyOffFunction({name: "Mridul"}, "name");
class DataStorage {
    constructor() {
        this._data = [];
    }
    addItem(item) {
        this._data.push(item);
    }
    removeItem(item) {
        this._data.splice(this._data.indexOf(item), 1);
    }
    getItems() {
        return this._data;
    }
}
;
const textStorage = new DataStorage();
textStorage.addItem("mridul");
textStorage.addItem("rajbhar");
textStorage.addItem("ramesh");
