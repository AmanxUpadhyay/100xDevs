/*
TODO: Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");

async function writeFile() {
  const file = await fs.promises.writeFile(
    "./4-write-to-file.md",
    "## Write to a file \nUsing the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks. - File Written Again",
    "utf8"
  );
  console.log(file);
}

writeFile();
