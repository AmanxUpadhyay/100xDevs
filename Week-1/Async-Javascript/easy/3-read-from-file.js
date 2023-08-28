/*
TODO: Write a program to read a file using async/await.
*/

const fs = require("fs");

async function readFile() {
  const file = await fs.promises.readFile("./3-read-from-file.md", "utf8");
  console.log(file);
}

readFile();
