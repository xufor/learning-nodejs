const { add, multiply } = require('./custom-module');

// as observed above add and multiply is not imported from a js file
// but instead this is imported from index.js in custom-module folder
// we can import from a folder directly if it has index.js

console.log(add(1,2,3,4,5), multiply(1)(2)(3)(4)(5)());