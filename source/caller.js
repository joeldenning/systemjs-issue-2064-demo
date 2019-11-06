
import name from './callee.js';
// Please do not use `typeof` keyword, it's a bug in babel.
console.log(name); // Expect a string but got a Module object.