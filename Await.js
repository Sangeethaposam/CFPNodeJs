//ASYNC & AWAIT : async and await make promises easier to write.
//                async makes a function return a promise.
//                await makes a function wait for a promise.
// EXAMPLE 1:
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("welcome to java script ");
    });
    let prom = await myPromise;
    console.log(prom);
  }
  myDisplay(); 
  // EXAMPLE 2: 
  const getData = async() => {
    let y = await "Hello World";
    console.log(y);
}
getData();
  // EXAMPLE 3:
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function example() {
    console.log('Before delay');
    await delay(2000); // Wait for 2 seconds
    console.log('After delay');
  }
   example();
// EXAMPLE 4:
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});
// async function
async function asyncFunc() {
    // wait until the promise resolves 
    let result = await promise; 
    console.log(result);
    console.log('hello');
}
asyncFunc();
// EXAMPLE 5:
function resolveEx() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveEx();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();