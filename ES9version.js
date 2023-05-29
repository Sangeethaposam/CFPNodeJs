//ES9version features.
//1.await in loop
//In an async function, it is sometimes necessary to use an asynchronous (non-synchronous) function in a synchronous for-loop.
async function process(array) {
  for (const i of array) {
    await doSomething(i);
  }
}
async function process(array) {
  array.forEach(async i => {
    await doSomething(i);
  });
}
// The above code will not output the desired result as expected
// The for-loop itself is still synchronous and will execute 
// the entire for-loop before the asynchronous functions in the loop are completed,
// and then execute the asynchronous functions in it one by one.
// ES9 adds asynchronous iterators, allowing await to be used with for-loops to perform asynchronous operations step by step.

async function process(array) {
  for await (const i of array) {
    doSomething(i);
  }
}
//2. promise.finally()
//The part of Promise that will be executed later whether it succeeds (.then()) or fails (.catch()).

function process() {
  process1()
  .then(process2)
  .then(process3)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log(`it must execut no matter success or fail`);
  });
}
process();
process1();

//3. Rest, Spread
//In ES2015, the Rest indefinite length parameters… can be converted into an array and passed in.
function restParams(p1, p2, ...p3) {
    console.log(p1); // 1
    console.log(p2); // 2
    console.log(p3); // [3, 4, 5]
}
restParams(1, 2, 3, 4, 5);
//And the spread is the opposite of the rest, converting the array into a separate parameter.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);
//For example, Math.max() returns the maximum value in the incoming number.
const values = [19, 90, -2, 6, 25];
console.log( Math.max(...values) ); // 90
// Can also be used in function input parameters
function restObjectInParam({ a, ...r }) {
    console.log(a); // 1
    console.log(r); // {b: 2, c: 3}
}

restObjectInParam({
  a: 1,
  b: 2,
  c: 3
});

//4. RegExp groups :RegExp can return matching packets
const regExpDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match      = regExpDate.exec('2023-02-07');
console.log(match);
/*output:[
  '2023-02-07',
  '2023',
  '02',
  '07',
  index: 0,
  input: '2023-02-07',
  groups: undefined
]*/
const year       = match[1]; // 2023
const month      = match[2]; // 02
const day        = match[3]; // 07
console.log(year);
console.log(month);
console.log(day);

//5.Regexp lookahead Negative : TBD

//6.Regexp dotAll
//.Represents matching any symbol except entering. 
//After adding the "s" flag it is allowed to match enter.

console.log(/hello.world/.test('hello\nworld'));  // false
console.log(/hello.world/s.test('hello\nworld')); // true
