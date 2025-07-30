const myArr = [[1,2],[3,4,[2,3]]];
// Polyfill of flat
const res = myArr.flat(); // default = 1
Array.prototype.customFlat = function(depth = 1){
    let newArr = [];
    let arr = this;
    function flatten(arr, depth){
        arr.forEach(element => {
            if(Array.isArray(element) && depth){
                flatten(element, depth-1);
            }else{
                newArr.push(element); 
            }
        });
    }
    flatten(this, depth);
    return newArr;
}
const testRes = myArr.customFlat(2);
console.log(testRes);

