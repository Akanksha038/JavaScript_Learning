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


