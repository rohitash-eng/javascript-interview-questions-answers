// This is a simple currying function that takes 
// two arguments and returns a function.
function curryingAdd(a) {
    return function curryingB(b){
        return a + b;
    }
}
console.log(curryingAdd(10)(20));

// concatenate two array using concat function
let Arr1 = [1, 2];
let Arr2 = [3, 2];
let mergedArray = Arr1.concat(Arr2);
// console.log(mergedArray); // Output: [1, 2, 3, 2]

const addByOne = (x)=> x+1;
const multiplyByTwo = (x) => x*2;
const square =(x)=> x*x;

function pipes(...fns) {
		return function(input) {
    	return fns.reduce((acc, fn)=> fn(acc), input)
    }
}


const r = pipes(addByOne, multiplyByTwo, square )(5)
console.log(r)

