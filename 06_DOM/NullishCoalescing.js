// Nullish Coalescing Operator (??) kya hai?
// JavaScript mein, nullish coalescing operator (??) ko use karke aap ek default value de sakte hain agar aapki pehli value 
// null ya undefined ho. Yani agar pehli value null ya undefined hai, to operator right-hand side wali value return karega. Warna left-hand side wali value hi return karega.

// syntax:
// let result = value1 ?? value2;

let name = null;
let defaultName = 'John Doe';

let userName = name ?? defaultName;
console.log(userName); // Output: John Doe

//Yahaan name null hai, isliye defaultName return hoti hai.


let age;
let defaultAge = 25;

let userAge = age ?? defaultAge;
console.log(userAge); // Output: 25


//Yahaan age undefined hai, isliye defaultAge return hoti hai.




//When the value is not null or undefined:

let score = 0;
let defaultScore = 10;

let finalScore = score ?? defaultScore;
console.log(finalScore); // Output: 0


//Yahaan score 0 hai jo null ya undefined nahi hai, isliye score hi return hoti hai.
