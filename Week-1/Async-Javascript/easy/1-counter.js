/*
TODO: Function Intervals: It should go up as time goes by in intervals of 1 second.
*/

function counter(n) {
  let counter = n;
  const intervalId = setInterval(() => {
    console.log(counter);
    counter += 1;
  }, 1000);
  return intervalId;
}

const result = counter(1);
