// just importing sayHi will execute all the functions in the module
const { sayHi } = require('./cachedModule');

// we can see the cached 
console.log(require.cache);

// but importing sayBye wont execute the functions again
// that's bcoz node caches the modules, once loaded
let { sayBye } = require('./cachedModule');

// if we do the following
// this will only only change the definition in this module
// if the same function is imported in other module, this altered definition will not reflect there  

sayBye = function() {
    console.log("Bye! Altered!")
}

sayBye();