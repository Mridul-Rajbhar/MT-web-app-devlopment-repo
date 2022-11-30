function merge<T extends object,U extends object>(objA: T, objB: U ){
    return Object.assign(objA, objB);
}
const mergedObj = merge({name: "Mridul"}, {age: 30});
console.log(mergedObj);
mergedObj.age;

interface Lengthy{
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = "Got no value";
    if(element.length === 1){
        descriptionText = "Got 1 element"
    }else if(element.length > 1){
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

class DataStorage<T extends string | boolean | number>{
    private _data: T[] = [];
    
    addItem(item: T){
        this._data.push(item);
    }

    removeItem(item: T){
        this._data.splice(this._data.indexOf(item), 1);
    }

    getItems(){
        return this._data;
    }
};

const textStorage = new DataStorage<string>();
textStorage.addItem("mridul");
textStorage.addItem("rajbhar");
textStorage.addItem("ramesh");