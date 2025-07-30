var numbers = [1,2,3,4,5];
const sum = numbers.reduce((previous, value) => {
    previous = previous + value;
    return previous;
});
console.log(sum);

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sumNext = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);
console.log(" To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.",sumNext); // 6

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = {};
for (const name of names) {
  const currCount = countedNames[name] ?? 0;
  countedNames[name] = currCount + 1;
}
console.log(countedNames);