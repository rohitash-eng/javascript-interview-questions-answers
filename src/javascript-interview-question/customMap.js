const marks = [10,40,20,50];
// Polyfill of map
Array.prototype.customMap = function (callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        let res= callback(this[i], i, this);
        newArr.push(res);
    }
    return newArr;
}
const copyOfMap = marks.customMap((item, index, array) => item*2);
console.log('copyOfMap=', copyOfMap);