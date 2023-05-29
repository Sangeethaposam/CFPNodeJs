//ECMAScript: The ecma specification is made up of parties,including browser vendors,
//            who meet to push js proposals.
//ES6: Features introduced in ES6.
 /*1.Class.
 2.Module.
 3.Arrow Function.
 4.Function parameter default value.
 5.Template literal.
 6.Destructuring assignment.
 7.Spread Operator.
 8.Object Property Shorthand.
 9.Promise.
 10.let,CONST to replace var.*/

//1. Class:JavaScript is a language that uses the prototype chain.
//      In the early days, concepts similar to OO were made through the prototype chain. 
//      The writing is quite complicated. CLASS finally launched in ES6.
//Class Declaration:
class Polygon {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  console.log(new Polygon(5, 15).area);
  //Class Expression
const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    area() {
      return this.height * this.width;
    }
  }; 
console.log(new Rectangle(6, 10).area());

//2. Module :Each module has its own namespace to avoid conflicts, use import and export to import and export.
//   Basically treats a .js file as a module.

//3.Arrow function
// () => {…}, short for function.
const add = (a, b) => {return a + b};
const res = add(1, 2); 
console.log(res);// 3
// If the syntax is simple, `{}` and `return` can be omitted. It will look neater
const minus = (a, b) => a - b;
const res1 = minus(3, 1); 
console.log(res1);// 2

//4. Function parameter default value:
// If the function does not pass parameters, the default value is used.
function multiply(height , width = 5) { 
     return height * width;
}
console.log(multiply(50));//output : 250
console.log(multiply(50,2));//output : 100

//5.Template literal : $ symbol is used for literal
// The composition of long strings, in the past, was concatenated through +.
// With template strings, it’s much easier to read.
const firstName = 'sangeetha';
const lastName = 'reddy';
// not use template literal
const names = 'My name is ' + firstName + ', ' + lastName;// output : My name is sangeetha, reddy
console.log(names);
// use template literal
const nameWithLiteralString = `My name is ${firstName}, ${lastName}`;
const string = "My name is ${firstName}, ${lastName}";
console.log(nameWithLiteralString);//output : My name is sangeetha, reddy
console.log(string);//output : My name is ${firstName}, ${lastName}

//6. Destructuring assignment :Allow JavaScript to easily get content from arrays and objects.
// Arrays
const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
//skipping certain values
const [first,,,,last] = arr;
console.log(first); // 1
console.log(last); // 5

// Objects can also be destructurized and assigned
const student = { 
    fname: 'sangeetha', 
    age: 22,
};
const {fname, age} = student;
console.log(fname); // "sangeetha"
console.log(age); // "22"

//7.Spread operator :
//... spread operator, Array can be expanded, if it is an Object, it will be expanded according to key-value.
//Array:
const students = ['Geetha', 'Sangeetha']; 
const people = ['Sumi', ...students, 'Nani', 'Reddy'];
console.log(people); // ['Sumi','Geetha', 'Sangeetha' , 'Nani', 'Reddy']
//Object:
var obj1 = {
  fname : "sangeetha",
  age  : 22
}
var obj2 = {
  fname : "geetha",
  lname : "reddy",
  city  : 'AP'
}
var obj3 = {...obj1,...obj2};//fname is twice so it will take only one fname.
console.log(obj3);//{ fname: 'geetha', age: 22, lname: 'reddy', city: 'AP' }

//8.Object property shorthand
//The value can be omitted if the field names that make up the object 
//    are the same as the variables in the preceding paragraphs. looks more streamlined.
const name = 'Sangeetha', ag = 25, city = 'Kurnool';
// Before ES6, we must write like this
const customer = {
    name: name,
    ag: ag,
    city: city
} 
console.log(customer);// {name: 'Sangeetha', ag: 25, city: 'Kurnool'}
// After ES6, we can do it
const newCustomer = {
    name,
    ag,
    city
} 
console.log(newCustomer);// {name: 'Sangeetha', ag: 25, city: 'Kurnool'}

//9. Promise
// The promise is a solution to asynchronous (non-synchronous) writing, 
// which is more elegant than the original callback writing.
const waitSecond = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});
waitSecond.then( () => {
  console.log('hello World after 1 second.'); 
  // output this line after 1 second
  return waitSecond;
}).then( () => {
  console.log('Hell World after 2 sceond.');
  // output this line after 2second
})

//10.let, const to replace var:
//  let: general variable,can be modified variable,but not declared variable once again.
// const: Once declared, its contents cannot be modified.

let a = 10;
console.log(a); 

console.log(b);// ReferenceError: Cannot access 'b' before initialization
let b = 20;