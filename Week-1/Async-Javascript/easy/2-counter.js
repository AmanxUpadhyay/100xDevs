/*
TODO: Without using setInterval, try to code a counter in Javascript.
*/

function counter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
    setTimeout(increment, 1000);
  }

  increment();
}

counter();
