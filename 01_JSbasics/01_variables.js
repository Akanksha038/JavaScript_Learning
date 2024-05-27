const accountId=144553 //it cant'be changeable
let accountEmail="akajdjn.com"
var accountPassword="12345"
//ye kaise eror nahi de raha hai city wala but not allowed
accountCity="Jaipur"  /*  aaise variable bhi declare kar sakte hai ye error to nahi dega but it's not preferable */

/*
 preferred not to use var==>because of using block scope and functional scope
*/

// accountId=2
accountEmail="hasvbb@gmail.com"
accountPassword="4552222"
accountCity="bfffn"
console.log(accountId);
console.log(accountCity);

//want to print all things at the same time and with in same console so write table
console.table([accountEmail,accountId,accountPassword,accountCity])
