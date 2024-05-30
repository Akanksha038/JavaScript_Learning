const score=400
console.log(score);

const balance=new Number(100)

console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(1)); //toFixed(point ke baad kitna precision chahiye)
//to fixed hamme point ke baad kaha tak value le jana hai wo batata hai


const otherNumber =23.9888;
console.log(otherNumber.toPrecision(3)); ///output=>24.0

//badde enumber ko indian number format me change karna '

const hundreds=100000000;
console.log(hundreds.toLocaleString());//OUTPUT IN US STANDARAD ==>100,000,000

// Want to convert in Indian Standarad

const hundredsIn=100000000;
console.log(hundredsIn.toLocaleString('en-IN'));//OUTPUT IN INDIAN STANDARAD ==>10,00,00,000

 //*******About maths  =>ye js library ke sath bydifault aati hai */
//  example=>Pi,  

console.log(Math.abs(-4));//4
console.log(Math.round(7.9));//8

//ceil==>ceiling matlab top ==>to top wali value choose karega
console.log(Math.ceil(4.4)); //5

// //floor ye lowest value lega
console.log(Math.floor(4.9));//4

console.log(Math.min(4,3,6,8)); //3

///////////************8888888 */

console.log(Math.random()); ///ye random values dega 0 and 1 ke beech me

// suppose hamme random value cahaiye 1 and 10 ke beech me to we use random()*10
// var x=console.log(Math.random()*10); //but ye hamme 0 bhi to de sakta hai like 0.123 aaisa kuch to 0 ko remove karne ke liye we add +1
console.log(Math.floor((Math.random()*10)+1)); // value in [1,9]


//min max definr karne ka

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)));// value in [1,10]

console.log(Math.floor(Math.random()*(max-min+1)) +min); //value in [10,19]


