// ******************push
// Purpose: To add one or more elements to the end of an array.
// Syntax: array.push(element1, ..., elementN)
//Modifies Original Array: The push method changes the original
//  array by adding the elements to its end.

let array = [1, 2, 3];
let arr=[4,5,6];
let newLength = array.push(arr);

console.log(array); // [ 1, 2, 3, [ 4, 5, 6 ] ]
console.log(newLength); //4





//other we useing concat method

// ***********************concat
// Purpose: To merge two or more arrays into a new array.
//Syntax: array.concat(value1, value2, ..., valueN)
//Does Not Modify Original Array: The concat method does not 
// change the existing arrays but instead returns a new array.



let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);

console.log(array1); // [1, 2, 3]
console.log(array2); // [4, 5, 6]
console.log(newArray); // [1, 2, 3, 4, 5, 6]


//concat se better and easy way to add 2 array
//****************spread operator

// The spread operator in JavaScript, represented by three dots (...), 
// is a powerful tool for expanding elements of an iterable 
// (like an array or a string) into individual elements. 

//uses of spread operator

//1==>
//     1. Array Manipulation
// a. Cloning Arrays
// The spread operator can create a shallow copy of an array.

let array12 = [1, 2, 3];
let array23 = [...array12];

console.log(array23); // [1, 2, 3]
console.log(array12 === array23); // false (different references)



// b. Combining Arrays
// It can also be used to merge multiple arrays.

let array_1 = [1, 2];
let array_2 = [3, 4];
let combinedArray = [...array_1, ...array_2];

console.log(combinedArray); // [1, 2, 3, 4]



// c. Adding Elements
// You can easily add new elements to an array at any position.

let array4 = [1, 2, 3];
let newArray4 = [0, ...array4, 4, 5];

console.log(newArray4); // [0, 1, 2, 3, 4, 5]



// 2. Function Arguments
// The spread operator can be used to pass an array 
// of arguments to a function that expects individual arguments.

function sum(a, b, c) {
    return a + b + c;
  }
  
  let numbers = [1, 2, 3];
  let result = sum(...numbers);
  
  console.log(result); // 6
  

//*********************flat */


  //flat(depth)==>  JavaScript mein flat method ka use arrays ko flatten 
//   karne ke liye hota hai. Matlab, agar aapke paas ek nested array hai,
//   toh flat method us array ko ek level tak flatten kar deta hai,
//matlab array ke ander array uske ander another array aaise nested array ko ek simple array me laa deta hai.


//Syntax
//array.flat(depth)==>depth me ham 1, 2,3 .. infinity tak de sakte hai ,depends on ki kitna nested hai

  const another_array=[1,2,3,[4,5,6,7],[9,10,11,12]]

  let new1=another_array.flat(Infinity)
  console.log("without flateen array" );
  console.log(another_array );
  console.log("with flatten array =>");  //[
                                            //    1, 2, 3,  4,  5,
                                            //    6, 7, 9, 10, 11,
                                            //     12
                                            // ]

  console.log(new1);


  //flat method empty slots ko bhi hata deta hai
  let arr4 = [1, 2, , 4, 5];
let flattenedArr4 = arr4.flat();
console.log(flattenedArr4); // [1, 2, 4, 5]







//esko data scrapping me bahut use karenge

// pehle puch lete hai bahi tere pass jo bhi hai wo array hai kya?

console.log(Array.isArray("Akanksha")); //false 

//kisi bhi type se array banane ke liye we used "from" keyword

console.log(Array.from("Akanksha")); 
                                    //  output   // [
                                        //     'A', 'k', 'a',
                                        //     'n','k', 's',
                                        //     'h','a'
                                        //  ]
                            
// ************intersting case for interview
// agar mai esko object me pass karu=>{name:"akanksha"}

console.log(Array.from({name:"akanksha"})); //output=> empty array==>[]
// ye hamme ek empty array  dega kyuki ye esko directlt convert nahi kar pata hai esliye hamme esse batana padega
// ki keys ka array banau ya sirf eske values ka array banau and agar ye nahi bana payega to hamesha empty array dega


//************array me convert karne ka ek aur tarika */

let score1=100;

let score2=300;
let score3=400;
console.log(Array.of(score1,score2,score3));//[ 100, 300, 400 ]


//Array.is, of, from ==>padh lena