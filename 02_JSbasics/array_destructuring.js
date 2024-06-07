//Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects into distinct variables. 
//This syntax is introduced in ES6 (ECMAScript 2015) and 
//provides a more concise and readable way to assign values to variables from arrays and objects.


//Destructuring Arrays
//When you destructure an array, you can assign values from the array to variables in a single, concise statement.

// Example array
const array = [1, 2, 3, 4];

// Destructuring assignment
const [first, second, third] = array;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3



//You can also skip elements and use the rest operator (...) to gather the remaining elements.

const array1 = [1, 2, 3, 4, 5];

// Skip the first element and gather the rest
const [, , third1, ...rest] = array1;

console.log(third1); // 3
console.log(rest);  // [4, 5]
