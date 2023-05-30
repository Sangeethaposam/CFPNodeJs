// //Array Object:
// //The Array object is used to store multiple values in a single variable.
// //ArrayMethods:
let names = ["nani","sangeetha","navitha"];

// //1.at(): Returns an indexed element of an array
// console.log(names.at(2));//navitha

// //2.concat(): Joins arrays and returns an array with the joined arrays
// let initial = ["undala","posam"];
// console.log(names.concat(initial)); //[ 'nani', 'sangeetha', 'navitha', 'undala', 'posam' ]

// //3.constructor: Returns the function that created the Array object's prototype
// let text = names.constructor;
// console.log(text);//[Function: Array]

// //4.copyWithin():Copies array elements within the array, to and from specified positions.
// //               Copy the first two array elements to the last two array elements:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(2, 0));//[ 'Banana', 'Orange', 'Banana', 'Orange' ]
// //               Copy the first two array elements to the third and fourth position:

const newfruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(newfruits.copyWithin(2, 0, 2));//[ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]

// //5.entries(): Returns a key/value pair Array Iteration Object
// const nfruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = nfruits.entries();

// for (let x of f) {
//   console.log(x);
// }
// //[ 0, 'Banana' ]
// // [ 1, 'Orange' ]
// // [ 2, 'Apple' ]
// // [ 3, 'Mango' ]

// //6.every(): Checks if every element in an array pass a test
// // The every() method executes a function for each array element.
// // The every() method returns true if the function returns true for all elements.
// // The every() method returns false if the function returns false for one element.
// // The every() method does not execute the function for empty elements.
// // The every() method does not change the original array
// function isEven(element, index, array) {
//     return element % 2 == 0;
// }
// function func() {
//     let arr = [56, 92, 18, 88, 12];
//     // Check for even number
//     let value = arr.every(isEven);
//     console.log(value);//TRUE
// }
// func();

// //7.fill(): Fill the elements in an array with a static value.
// //Fill all the elements with a value:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("Kiwi"));//[ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]
// //Fill the last two elements:
// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit.fill("Kiwi", 2, 3));//[ 'Banana', 'Orange', 'Kiwi', 'Mango' ]

// //8.filter():Creates a new array with every element in an array that pass a test.
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);//[32,33,40]

// //9.find():Returns the value of the first element in an array that pass a test.
// const ages = [3, 10, 18, 20];
// function checkAge(age) {
//   return age > 18;
// }
// function myFunction() {
//   let check = ages.find(checkAge);
//   console.log(check);//20
// }
// myFunction();

// //10.findIndex():Returns the index of the first element in an array that pass a test.
// const ages = [3, 10, 18, 20];
// let checkIndex = ages.findIndex(checkAge);
// function checkAge(age) {
//   return age > 18;
// }
// console.log(checkIndex);//3

// //11.flat()	Concatenates sub-array elements.
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);//[ 1, 2, 3, 4, 5, 6 ]

// const myArr1 = [1, 2, [3, [4, 5, 6], 7], 8];
// const newArr1 = myArr1.flat(2);
// console.log(newArr1);//[
//     1, 2, 3, 4,
//     5, 6, 7, 8
//  // ]

// // 12.flatMap()	Maps all array elements and creates a new flat array.
// const myArr2 = [1, 2, 3, 4, 5, 6];
// const newArr2 = myArr2.flatMap((x) => x * 2);
// console.log(newArr2);//[ 2, 4, 6, 8, 10, 12 ]

// // 13. forEach()	Calls a function for each array element.
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));//a b c

// //14. from(): Creates an array from an object.
// let alp = Array.from("ABCDEFG")
// console.log(alp);//[
//     'A', 'B', 'C',
//     'D', 'E', 'F',
//     'G'
//  // ]

// //15. includes() :Check if an array contains the specified element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Mango");
// console.log(fruits.includes("Mango"));//true

// //16. indexOf(): Search the array for an element and returns its position.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.indexOf("Apple"));//2

// //17.isArray():	Checks whether an object is an array.
// // Check if an object is an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = Array.isArray(fruits);
// console.log(result);//true
// //Check if another datatype is an array:
// let text = "W3Schools";
// let results = Array.isArray(text);
// console.log(results);//false

// // 18.join():Joins all elements of an array into a string.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();
// console.log(text);//Banana,Orange,Apple,Mango
// //Another separator:
// let texts = fruits.join(" and ");
// console.log(texts);//Banana and Orange and Apple and Mango

// // 19.keys()	Returns a Array Iteration Object, containing the keys of the original array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// const key = Object.keys(fruits);
// let text = "";
// for (let x of keys) {
//   text += x + "<br>";
// }
// console.log(keys);//Object [Array Iterator] {}
// console.log(key);//[ '0', '1', '2', '3' ]

// //20. lastIndexOf()	Search the array for an element, starting at the end, and returns its position.
// const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
// let index = fruits.lastIndexOf("Apple");
// console.log(index);//5

// //21. length: Sets or returns the number of elements in an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length);//4

// //22.pop(): Removes the last element of an array, and returns that element.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop());
// console.log(fruits);

// //23. push(): Adds new elements to the end of an array, and returns the new length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi", "Lemon");
// console.log(fruits);//["Banana", "Orange", "Apple", "Mango","Kiwi", "Lemon"]

// //24. reduce():	Reduce the values of an array to a single value (going left-to-right).
// const numbers = [175, 50, 25];
// let num = numbers.reduce(myFunc);
// function myFunc(total, num) {
//   return total - num;
// }
// console.log(num);//100

// //25. reduceRight(): Reduce the values of an array to a single value (going right-to-left).
// const numbers = [175, 50, 25];
// let num = numbers.reduceRight(myFunc);
// function myFunc(total, num) {
//   return total - num;
// }
// console.log(num);//-200

// //26.reverse():	Reverses the order of the elements in an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits);//[ 'Mango', 'Apple', 'Orange', 'Banana' ]

// // 27.shift(): Removes the first element of an array, and returns that element.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);//[ 'Orange', 'Apple', 'Mango' ]

// //28.unshift(): Adds new elements to the beginning of an array, and returns the new length.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// console.log(fruits);//[ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ]

// //29.slice(): Selects a part of an array, and returns the new array.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);//[ 'Orange', 'Lemon' ]

// //30.each(): Checks if any of the elements in an array pass a test.
// const ages = [3, 10, 18, 20];
// let check = ages.each(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }
// console.log(check);//true

// //31.sort():Sorts the elements of an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// //32.splice():Adds/Removes elements from an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //Add
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);//[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
// //remove
// fruits.splice(2, 2);
// console.log(fruits);//[ 'Banana', 'Orange', 'Apple', 'Mango' ]

// //33.toString(): Converts an array to a string, and returns the result
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(text);//Banana,Orange,Apple,Mango

// //34.valueOf():	Returns the primitive value of an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits.valueOf();
// console.log(myArray);//[ 'Banana', 'Orange', 'Apple', 'Mango' ]