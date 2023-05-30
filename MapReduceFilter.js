// map() : Creates a new array with the result of calling a function for each array element.
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}
console.log(newArr);//[ 650, 440, 120, 40 ]
//reduce():	Reduce the values of an array to a single value (going left-to-right).
const nums = [175, 50, 25];
let num = nums.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}
console.log(num);//100

//filter():Creates a new array with every element in an array that pass a test.
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(result);//[32,33,40]
