//1.Array.prototype.includes()
//Used to determine whether the array contains the specified value, if so, return true; otherwise, return false.
//Like the previous usage of indexOf, it can be thought of as returning a boolean, which is more semantically clear.

const arr = [1, 2, 3, 4, 5];
// includes : Check if there is the number 3 in the array
if (arr.includes(3)) {
    console.log("true");
 }
// ... Equivalent to the previous writing of indexOf
arr.indexOf(3); // 2 (return array index position)
// If you want to write it in the if, you must add `> -1`, 
//which is not as clear as the include in ES7 in terms of semantics
if (arr.indexOf(3) > -1) { 
    console.log("true");
}
//split :  is used to split strings into sub-strings
 
   const str = "Welcome*to*JavaScript";
    let string = str.split("*");
    console.log(string);


//2. Exponentiation Operator

console.log(2**10); // 1024
// equal to
console.log(Math.pow(2, 10)); // 1024