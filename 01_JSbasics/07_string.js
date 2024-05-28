console.log("hello"+" world"+" kasie hai aap log")//this is not a good way of string concatenation

//advanced way of concatenating a string
// use ==>backticks==>yaha pe string  interpolation ==>yaha pe ham place holder banate hai eske ander ham variable ko directly inject kar dete hai

const name="akankshaGupta"
const report =84.6

console.log(`Hello Everybody my name is ${name} and my Btech percentage is ${report}%`);



//STRING DECLARATION BY OBJECTS

const name1=new String("Akanksha");
console.log(name1);
console.log(name1[0]);

console.log(name1.length);
console.log(name1.toLocaleLowerCase());
console.log(name1.toUpperCase());  //ye hamare original value ko change nahi karta hai

console.log(name1.__proto__); //ye hame object de dega empty

//want to see ki kis index pe kaqun sa character hai 
console.log(name1.charAt(7));


//want to see ki kaun sa chaarcter ki index pe hai
console.log(name1.indexOf('a'));

//divide in substring if i choose 0 to 4 then it take string at index 0,1,2,3 not include index 4 
const newString=name.substring(0,4);
console.log(newString);

//slice me ham -ve value bhi de sakte hai
const newString1=name.slice(0,4);
console.log(newString1);

const newString2=name.slice(-8,-4);
console.log(newString2);

// Return value
// A new string representing str stripped of whitespace from both its beginning and end.
//  Whitespace is defined as white space characters plus line terminators.

//substring and slice en dono se ham ek particular string ka part nikalte hai jisme hamme starting and end index given hota hai.
//but dono me difference ye hai ki , substring -ve values pe kaam nahi karta hai but slicing -ve vlaues pe peeche se kaam karna suru kar deta hai


//trin and replace method

//trimStart(),trimEnd()

const newStringOne ="  akanksha      "  //agar hamme string se faltu ke starting  space and end space  ko hatana hota hai to ham trim() function ka use karet hai

console.log(newStringOne);
console.log(newStringOne.trim());



//replace ==>eska use karte hai kisi value ko kisi dusre value se replace karne ko
// syntax==>  .replace(incorrectValue, correctValue)
// 

const url="https://akanksha.2125cs1153.kiet.edu"
console.log(url.replace('.kiet','@kiet'))


//ham esse kuch puch sakte hai
// 
// want to know ki url me akanaksha hai ya nahi
console.log(url.includes('akanksha')); //true


//string ko array me split kar do based on '-'

// split(separator)
// split(separator, limit)

const namee="akanksha-gupta-section-6A"
console.log(namee.split('-'));

