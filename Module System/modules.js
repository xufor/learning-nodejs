// a module in JavaScript is just a file containing related code

// prints current module info
// console.log(module);

// function add(x, y) {
//   return x + y;
// }

// we can either do this, this is the RECOMMENDED WAY
// module.exports = {
//     add,
// }

// or we can do
// module.exports.add = (a, b) => a + b;

// moreover we can omit module altogether and add values to exports directly
exports.add = (a, b) => a + b;


// console.log(module);
