const { add, multiply } = require('./add-multipy');

// as observed above add and multiply is not imported from a js file
// but instead this is imported from index.js in add-multiply folder
// we can import from a folder directly if it has index.js

// its not recommended to use index.js anymore

console.log(add(1,2,3,4,5), multiply(1)(2)(3)(4)(5)());