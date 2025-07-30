const ages = [3, 10, 18, 20];

const result = ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log('Return true if any one element is > 18 age rest return false');
console.log(result);
console.log('Ye loop aage nahi chalta jab condition met ho jaati hai');
