"use strict"; // if i write this word=>use strict theN it treat all JS Code as newer version of JS
// alert( 3+3)//it give error because we are using nodejs not browser
//alert() statement 
//agar ham console pe ye likhe alert(3+3)=>to ye hamme output me ek popup dega jo  6 ans dega but agar ham ye same alert(3+3) kisi js ki file me likhe and usse terminal pe run kare with the help of node then ye error dega aaisa kyu
// console pe run esliye ho raha hai kyuki console pe likha har code ek document me hai and ye run ho raha hai kyuki js ka engine browser me chipa hai 
//but node me alert ko use karne ka diffenent syntax hai esse direct use nahi kar sakte


//TC39 and MDN used for documentation


let name="bndsdf"
let age=18
let isLoggedIn=false

//number=>2 to power 53
//bigint===>JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number. 
//string ==>""
//boolean=> true/false
//null =>this is an standalone value =>representation of an empty value  => suppose there is temperature variable jisme ham 0 value nahi dal sakte kyuki 0 to khud ek temperature hai so we insert NULL

//undefined==>variable declared but assigned any value to this variable

//symbol=>eska mostly used ham react pe karege kisi companents me uniquesness find karne ke liye

console.log(typeof(44555));

console.log(typeof(null));
console.log(typeof(undefined));