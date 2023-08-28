/*
    TODO: Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

console.log("I'm active! (1-promisify-setTimeout.js)");
wait(3).then(() => console.log("Hello! I waited 3 seconds!"));
