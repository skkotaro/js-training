let obj1 = {x: 1};
obj1.y = 2;
let obj2 = {x: 1, y: 2};
console.log(obj1 === obj2);

export function equals(obj1, obj2) {
     const obj1Values = Object.values(obj1);
     const obj2Values = Object.values(obj2);
    if (obj1Values.length !== obj2Values.length) {
        return false;
    }
    for (let i=0; i < obj1Values.length; i++) {
        if (obj1Values[i] !== obj2Values[i]) {
            return false;
        }
    }
    return true;
}