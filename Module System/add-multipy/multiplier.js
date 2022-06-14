function multiply(a) {
    return function(b) {
        if(b) {
            return multiply(a*b);
        }
        return a;
    }
}

module.exports = {
    multiply
}