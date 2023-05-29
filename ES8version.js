//ES8 FEATURES:
//1.async, await :
//An async function is a function declared with the async keyword, and the await the keyword is permitted within it.
//   The async and await keywords enable asynchronous.
//   Avoiding the need to explicitly configure promise chains.
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("welcome to java script ");
    });
    let prom = await myPromise;
    console.log(prom);
    console.log("hi");
  }
  myDisplay();

//2.Object.values():
//   Returns all the values of the Object’s own properties, excluding inherited values.
const exampleValues = {a: 1, b: 2, c: 3, d:4};
console.log(Object.values(exampleValues)); // [1, 2, 3, 4]

const exampleKeys = {a: 1, b: 2, c: 3, d:4};
console.log(Object.keys(exampleKeys));//[ 'a', 'b', 'c', 'd' ]

//3.Object.entries()
//Returns the enumerable key, the value of the incoming object itself.
const exampleObj = {a: 1, b: 2, c: 3, d:4};
console.log(Object.entries(exampleObj)); // [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
// Usually used with for
for (const [key, value] of Object.entries(exampleObj)) {
	console.log(`key: ${key}, value: ${value}`);
}
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3
// key: d, value: 4

//4.String padStart() & padEnd()

/*You can add other content to the beginning or end of the string and fill it to the specified length.
In the past, these functions are usually introduced with universal auxiliary kits (such as lodash) and had them together.
Native syntax now provides direct:

String.padStart(fillingLength, FillingContent);
// If the content to be filled is too much and exceeds the "filling length", it will be filled from the far left to the upper limit of the length, and the excess part will be truncated
The most commonly used situation should be the amount, fill in the specified length, and add 0 if it is insufficient.*/

// padStart
console.log('100'.padStart(5, 0)); // 00100
// If the content to be padded exceeds the "padding length". Then fill in from the left to the upper limit of the length
console.log('100'.padStart(5, '987')); // 98100

// padEnd
console.log('100'.padEnd(5, 9)); // 10099
// If the content to be padded exceeds the "padding length". Then fill in from the right to the upper limit of the length
console.log('100'.padEnd(5, '987')); // 10098

//5.Trailing commas : Allow commas at the end of function parameter lists

console.log([
    "foo",
+   "baz",
    "bar",
-   "baz",
  ]);

//6.Object.getOwnPropertyDescriptors() :
//Get your own Descriptor. General development business requirements are usually not used.
const obj = {
    foo: 123,
    get bar() { return 'abc' }
  };
   
  console.log(Object.getOwnPropertyDescriptors(obj));

//7.SharedArrayBuffer:
//SharedArrayBuffer is a fixed-length raw binary data buffer, similar to ArrayBuffer.
//Can be used to create data on shared memory. Unlike ArrayBuffer, SharedArrayBuffer cannot be detached.
/**
 * @param length size，unit byte
 * @returns {SharedArrayBuffer} the default value is 0。
 */
let length = 2;
const sab = new SharedArrayBuffer(length);
// console.log(sab);
// 8.Atomics object
//Atomics object, which provides a set of static methods to perform atomic operations on SharedArrayBuffer.
//All properties and functions of Atomics are static, just like Math.
//Syntax :Atomics.add(typedArray, index, value)
/*Parameters:
typedArray : It's an shared array integer that we are going to modify.
Index :The index in the array where we are going to add a new value.
value : It is nothing but the number we are going to add.
Returned value : Atomics.add() returns the old value at the given position(typedArray[index]).*/
var buffer = new SharedArrayBuffer(25);
var arr = new Uint8Array(buffer);
arr[0] = 6;
   // Displaying the return value of the Atomics.add() method
   console.log(Atomics.add(arr, 0, 2));
   console.log(Atomics.load(arr, 0));
