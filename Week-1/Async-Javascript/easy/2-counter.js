/*
TODO: Function: Without using setInterval,try to code a counter in javascript that goes up as time goes by in intervals of 1 second.
*/

function counter(n) {
  let counter = n;
  setTimeout(() => {
    console.log(counter);
    counter += 1;
    counter(counter);
  }, 1000);
}

const result = counter(1);
