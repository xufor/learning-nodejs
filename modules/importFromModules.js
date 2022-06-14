const { add } = require('./modules');

console.log(add(5, 6));

console.log(require.extensions); // prints default extensions to be considered if no extension provided