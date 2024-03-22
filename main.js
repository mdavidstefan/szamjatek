import { genRandNumber } from "./getRandNumber.js";
import { compare } from "./compare.js";

let randNr = genRandNumber(1, 100);
console.log(randNr);

let result = compare(99, randNr);
console.log(result);
