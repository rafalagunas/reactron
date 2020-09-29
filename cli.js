#!/usr/bin/env node

const path = require("path");
const { execSync } = require("child_process");
var myArgs = process.argv.slice(2);

execSync(
  "mkdir " +
    myArgs[0] +
    " ; cd " +
    myArgs[0] +
    " ;git clone https://github.com/rafastaria/reactron.git ./",
  {
    stdio: [0, 1, 2], // we need this so node will print the command output
    cwd: path.resolve("./"), // path to where you want to save the file
  }
);
console.log(path.resolve("./" + myArgs[0]));
