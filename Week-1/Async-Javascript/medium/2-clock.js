/*
TODO: Can you make it so that it updates every second, and shows time in the following formats -- HH:MM::SS (Eg. 13:45:23) - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `Current Time: ${hours}:${minutes}:${seconds}`;
  console.log(time);
}

setInterval(clock, 1000);
