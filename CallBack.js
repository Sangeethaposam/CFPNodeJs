// // CallBack : 1. It is a function passed as an argument to another function.
// // EXAMPLE 1:
// function abc(a,b,callback){
//     console.log(a,b,callback);
//     callback();
// }
// function xyz(){
//     console.log("JavaScript");
// }
// abc("welcome","to",xyz);
// // 2. A CallBack function it is to be executed after another function has finished execution,hence the name callback.
// function abc(a,b,callback){
//    console.log(a,b,callback);//Output : Hi I am [Function (anonymous)]
//    callback(); //Output : Developer
// }
// abc("Hi","I am",()=>{
//     console.log("Developer");
// })
// //EXAMPLE 2:
// //SetTimeOut() : This method sets a timer which executes a function once the timer expired.
// //                For this we mainly used callback function.
// setTimeout(function(){
//           console.log("timer");
// },5000);
// function a(x){
//     console.log("hello");
//     x();
// }
// a(function x(){
//     console.log("JavaScript");
// });
// //EXAMPLE 3:
// const timeoutCallback = () => {
//     console.log("Hello");
//   };
  
//   setTimeout(timeoutCallback, 5000);
// //EXAMPLE 4: 
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }
// // callback function
// function callMe() {
//     console.log('I am callback function');
// }
// // passing function as an argument
// greet('Sangeetha', callMe);
// //EXAMPLE 5:
// function greet(name, myFunction) {
//     console.log('Hello world');
//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }
// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }
// // calling the function after 2 seconds
// setTimeout(greet, 5000, 'John', sayName);

//CallBackHell : The phenomenon which happens when we nest multiple callbacks within a function.
// * It is also called "Pyramid of the doom".
//* It makes code very difficult to read,understand and maintain.

asyncFunc1(function (message, result1) {
    if (message) {
      console.log('msg:', message);
    } else {
      asyncFunc2(result1, function (message, result2) {
        if (message) {
          console.log('msg:', message);
        } else {
          asyncFunc3(result2, function (message, result3) {
            if (message) {
              console.log('msg:', message);
            } else {
              console.log('Final result:', result3);
            }
          });
        }
      });
    }
  });

