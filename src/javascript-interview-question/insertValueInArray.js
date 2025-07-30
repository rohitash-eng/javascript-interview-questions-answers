// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function insertData(arr, pos, newValue){
    if(pos > arr.length){
        console.log("Please enter value position");
        return arr;
    }
    // console.log("Insert",arr, pos, newValue);
    for(let i = arr.length-1; i >= pos; i-- ){
        arr[i+1] = arr[i];
    }
    arr[pos] = newValue;
    return arr;
}
const data = [10,20,30,40,50];
const res = insertData(data, 0, 200);
console.log("Try programiz.pro", res);