#!/usr/bin/env node

const fs = require('fs')

// fs.readdir(path[, options], callback)
// cwd means Current Working Directory
fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    // error handling
    console.log(err)
  }

  console.log(filenames)
})
