let score="33"

//why it is good to always try to find type of variable
//kyuki kai baar ham frontend request se value lete hai to hamme pata nahi hoga ki value kis type ki hai
// so hamme kya likhna padega type janne ke liye when value comming from frontend request 
// const {score}=req.body

console.log(typeof score);

//aab es string datatype ko ham Number me convert karege
let valueInNumber=Number(score);
console.log(typeof valueInNumber);

// but suppose hamari string ye hai " abc123" and ham esse number me convert karege to kya ye ho jayega and eska data type kya aayega 
// to ye convert to easily ho jayega and eska datatype bhi number aayega lekin ham ham es number ki value dekhege to hamme NaN Dekhne ko milega which means not a number

// lets see

let name="ABC123"
console.table([typeof name,name]);

console.log("After conversion of name");

let number2=Number(name);
console.table([typeof number2,number2]);

console.log("null ke case me kya hoga if we convert this null into number");


let nullValue=null
console.table([typeof nullValue,nullValue]);

console.log("After conversion of nullValue");

let number3=Number(nullValue);
console.table([typeof number3,number3]);

console.log("Coversion of boolean dataType ");

let trueValue=true
console.table([typeof trueValue,trueValue]);

console.log("After conversion of trueValue");

let number4=Number(trueValue);
console.table([typeof number4,number4]);


console.log("Coversion of Undefined dataType ");

let undefinedValue=undefined
console.table([typeof undefinedValue,undefinedValue]);

console.log("After conversion of undefinedValue");

let number5=Number(undefinedValue);
console.table([typeof number5,number5]);



//"33"=> 33
//"33abc"=>NaN
//TRUE=> 1; FALSE=>0


console.log("Coversion of NUMBER AND STRING INTO BOOLEAN dataType ");

let ValuE=1
console.table([typeof ValuE,ValuE]);

console.log("After conversion of NUMBER INTO BOOLEAN");

let number6=Boolean(ValuE);
console.table([typeof number6,number6]);

//1=> TRUE; 0=>FALSE
// ""=> FALSE
//STRING=>TRUE




//************************* Operations ************* */
let value=3
let negValue=-value
console.log(negValue);

let str1="hello"

let str2=" Akanksha"
console.log(str1+str2);

console.log("1"+2);//=> 12
console.log(1+"2"); //=>12
console.log("1"+2+3); //=>123

console.log(1+2+"3");//=>33

console.log(+true); //1

console.log(+"");//0

