//objects ko 2 tarah se declare karte hai //In JavaScript, you can declare objects in two ways:
//1==>Literals ki tarah 
//2==>Constructor ki tarah
//yaha pe singleton ka concept aata hai==>singleton ek design pattern hai 
//jisme ek class ya object ke program ko runtime ke samay instantiate kiya jata hai only once
// koi bhi constructor se jab ham banate hai to singlton banta hai , ye apne tarah ka ek hi object hai
//jab bhi ham literals ki tarah declare karte hai to singleton nahi banta hai//
//constructor se hamesha singleton banega

// literals and constructor dono se object hi banta hai but difference aata hai singleton ka

//***Object literals */
//object ke ander values ko key and value ke form me store karte hai

//esme key = string datatype ka hota hai
//value => koi bhi datatype ho sakta hai
//by using {}
const Object_literals={
    name:"Akanksha",
    age:22,
    color:"fair",
    isLoggedIn:"false",
    //last login ko array ki tarah de rahe hai
    lastLoginDay:["Monday","Saturday"]

}

//how to access object

// commonly used=>
    console.log(Object_literals.name); //Akanksha

// or
console.log(Object_literals["lastLoginDay"]); //[ 'Monday', 'Saturday' ]



//used symbol primitive datatype in object literals

//symbol declaration
const mySymbol=Symbol("key1");

const Object={
    [mySymbol]: "key1"
};

console.log(Object[mySymbol]);//key1

console.log(typeof([mySymbol]));


//Object.freeze(ObjectLiteralname)  ==>esme freez nahi chal raha hai sayad version ka kuch conflict hai


// Create an object
// const myObject = {
//     name: 'John',
//     age: 30
//   };
  
//   // Freeze the object
//   Object.freeze(myObject);
  
//   // Attempt to modify the object
//   myObject.age = 31; // This will not work
//   myObject.city = 'New York'; // This will not work
//   delete myObject.name; // This will not work
  
//   // Check the properties
//   console.log(myObject.age); // Output: 30
//   console.log(myObject.city); // Output: undefined
//   console.log(myObject.name); // Output: John
  
//   // Check if the object is frozen
//   console.log(Object.isFrozen(myObject)); // Output: true
  



  //Functions in Literals


  const person = {
    name: 'John',
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  person.greet(); // Output: Hello, my name is John.
  console.log(person.greet()); //Hello, my name is John.