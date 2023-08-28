/*
TODO: Read a file, remove all the extra spaces and write it back to the same file.
*/

const fs = require("fs");
const fileName = "./testFile.txt";

async function readFile() {
  const file = await fs.promises.readFile(fileName, "utf8");
  return file;
}

function removeExtraSpaces(file) {
  return file.replace(/\s+/g, " ").trim();
}

async function writeFile(file) {
  const fileWritten = await fs.promises.writeFile(fileName, file, "utf8");
  console.log("File was cleaned and written");
}

async function cleanFile() {
  const file = await readFile();
  const cleanedFile = removeExtraSpaces(file);
  const afterCleanResult = `Before Cleaning the File: \n${file}\n\nAfter Cleaning the File: \n${cleanedFile}`;
  await writeFile(afterCleanResult);
}

cleanFile();
