function add(...values) {
    return values.reduce((prev, curr) => prev + curr, 0);   
}

module.exports = {
    add
}