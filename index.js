#!/usr/bin/env node

let ip = require('ip')
let clipboardy = require('clipboardy')

let main = () => {
  let address = ip.address()
  console.log(address)
  clipboardy.writeSync(address)
  console.log('Copied.')
}

main()
