//Promises: It is a java script object that links producing code and consuming code.
//          Producing code is code that can take some time.
//          Consuming code must wait for the result.
//          Resolve for value,Reject for error.
//Example 1:
const myPromise = new Promise((resolve, reject) => {
    const result = 0.6;
    
    if (result > 0.5) {
      resolve(result);
    } else {
      reject("Promise rejected!");
    }
  });
  
  myPromise.then((value) => {
    console.log("Promise resolved with value: " + value);
  }).catch((error) => {
    console.log("Promise rejected with error: " + error);
  });
// EXAMPLE 2:
const myProm = new Promise((resolve, reject) => {
    const age = 19;
    if (age >= 18) {
      resolve("eligible for voting");
    } else {
      reject("not eligible for voting");
    }
  });
  myProm.then((value) => {
    console.log("Promise resolved: " + value);
  }).catch((error) => {
    console.log("Promise rejected: " + error);
  }); 
// Example 3: Here i created a promise that resolves after certain time.
function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
  wait(2000) // Wait for 2 seconds
    .then(() => {
      console.log("Promise resolved!");
    });
// Example 4:
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error: Failed to fetch data");
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
//Example 5: chaining Promises :several asynchronous function calls and executing 
//           them in a synchronized manner one after another using. then() method.
const firstPromise = new Promise((resolve, reject) => {
    resolve("First promise resolved");
  });
  const secondPromise = firstPromise.then((value) => {
    return "Second promise resolved after: " + value;
  });
  secondPromise.then((value) => {
    console.log(value);
  });

