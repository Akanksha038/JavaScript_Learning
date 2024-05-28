//2types 

// Primitive==> it's always call by value ==>hamme data ka copy diya jata hai koi reference nahi diya jata
//and changes always done in copy data
//7 types :String , Number, boolean ,null,undefined,Symbol(kisi value ko unique bananen ke liye symbol ka use kiya jata hai==>used in Advanced JavaScript , specially jab ham advanced javascript karege to ek hi component ko kai jagah use karegebut kae baar aaisi requirment aa jati hai ki hamme pata karna hota hai ki ye jo button hai usse hamme unique banana hai to ham usko ek symbol ke ander wrap kar dete hai to qo unique ban jata hai  ) ,
// BigInt


// const score:number=100;==>this is typescript in js jisme ham const ki datatype bhi defined kar dete hai


    //2nd Data Types==>Non-Primitive , or reference type  memory me inka reference dena padta hai
    //Array, Objects , Functions


    const score=100;
    const scoreValue=100.3

    const id=Symbol('123' )

    const anotherId=Symbol('123')
    console.log(id===anotherId);  //false
    console.log(id==anotherId); //false

    const bigNumber=1234567891234567891234567n;
    console.log(bigNumber);


    //array
    const heros=["shaktiman"," yodha"];

    //object  ==> values ko key pair ke form me lete hai , key must bhi string and values will any type of datatype

    let myObj={
        name: "akanksha",
        age:22
    }

    console.log(myObj);


    //function

    const myFunction= function(){
        console.log("cbshbsb");

    }


//     //interviews ==> typeof() hamme kya deta hai
//    typeof(  Undefined )==>undefined

//    typeof(  Null )==> objet
//    typeof(  Boolean )==>boolean

//    typeof( Number )==>number

//    typeof( String )==>string

//    typeof( Object (native and does not implement [[Call]]) )==>	"object"

//    typeof(Object (native or host and does implement [[Call]])	 )==>
//     "function"

//    typeof(Object (host and does not implement [[Call]]) )==>Implementation-defined except may not be "undefined", "boolean", "number", or "string".




	

