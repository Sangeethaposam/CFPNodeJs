// //Synchronous vs Asynchronous
// //Synchronous : Every statement of the the code executed one by one.
// //              So,basically we have to wait until the earlier statement to get executed.
// console.log("welcome");
// console.log("to");
// console.log("java");
// console.log("script");
//Asynchronous : It allows the program to be executed immediately. 
function f1(){
setTimeout(() => {
console.log("Hi");
},5000);
}
function f2(){
console.log("welcome");
console.log("to");
}function f3(){
console.log("java");
console.log("script");
}
function main(){
    console.log("main");
    f2();
    setTimeout(f1,2000);
    f3();
}
main();



