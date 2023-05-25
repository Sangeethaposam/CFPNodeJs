//DataTypes :
// Numbers:
let length = 16;
let breadth = 7;
console.log(length);
console.log(breadth);

// Strings:
let color = "Yellow";
let Name = "geetha";
console.log(color);
console.log(Name);

// Booleans
let x = true;
let y = false;
console.log(x);
console.log(y);

//BigInt
let z = BigInt("12345657890123445565677");
console.log(z);

//Undefined
let a;
console.log(a);

//Null
let b = null;
console.log(b);

//Symbol : * ES6 introduced a new primitive data type called Symbol.
//         * Symbols are immutable (cannot be changed) and are unique.
const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1 === value2) //output:false.Because two symbols have same description,so they are different.
// Symbol() function to create a Symbol
const e = Symbol()
typeof e; // Symbol
//pass an optional string as its description
const d = Symbol('hey');
console.log(d); // output:Symbol(hey)
//To access the description of a symbol, we use the . operator
const f = Symbol('hey');
console.log(f.description); // output:hey

//Object : Object values are written as name : value pairs.
//         Objects are mutable: They are addressed by reference, not by value
const person = {firstName:"sangeetha", lastName:"reddy"};
console.log(person);
