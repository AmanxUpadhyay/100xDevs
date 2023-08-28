/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();
  while (Date.now() < start + seconds * 1000) {}

  console.log(`I slept for ${seconds} seconds!`);
}

console.log("I'm awake! (2-sleep-completely.js)");
sleep(3);
