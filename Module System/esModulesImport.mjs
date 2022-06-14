import { add } from './esModulesExport.mjs';

console.log(add(5, 6));

function mul(x, y) {
    return x * y;
}

export { mul };