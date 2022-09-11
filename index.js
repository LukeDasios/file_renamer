require("dotenv").config();
const fs = require("fs-extra");

const PLAZA_CODE = process.env.PLAZA_CODE;
const TENANTS = JSON.parse(process.env.TENANTS).sort();
const TYPE = process.env.TYPE;
const DATE = process.env.DATE;

const dir = ".././input";
const files = fs.readdirSync(dir);
let i = 0;

for (const file of files) {
  if (file === ".DS_Store") continue;
  const oldDirName = `.././input/${file}`;
  let new_name = `${PLAZA_CODE} - ${TENANTS[i]} - ${TYPE} - ${DATE}`;
  const newDirName = `.././input/${new_name}`;
  i++;

  // rename the directory
  fs.rename(oldDirName, newDirName, (err) => {
    if (err) {
      throw err;
    }

    console.log("Naming Done!");
  });

  // Move the directory
  fs.move(`.././input/${new_name}/`, `.././output/${new_name}/`, (err) => {
    if (err) return console.error(err);
  });

  console.log("DONE!");
}
