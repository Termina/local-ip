#!/usr/bin/env node

import ip from "ip";
import clipboardy from "clipboardy";

let main = () => {
  let address = ip.address();
  console.log(address);
  clipboardy.writeSync(address);
  console.log("Copied.");
};

main();
