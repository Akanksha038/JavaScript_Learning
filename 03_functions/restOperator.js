// The rest operator in JavaScript is a powerful feature that allows you to work with functions and arrays more flexibly. It can be used in function parameters and array destructuring. Here's an overview of how it works:


// Rest Operator in Function Parameters
// When used in function parameters, the rest operator allows you to represent an indefinite number of arguments as an array. 
// It is denoted by three dots (...) followed by the name of the array that will hold the rest of the arguments.

// function calculateCartPrice(...num1){
//     console.log(num1);
// }

// calculateCartPrice(100,200,300,500,800,9000,75625);   //[100, 200,  300,500, 800, 9000,75625]



function calculateCartPrice(val1,val2,...num1){
    console.log(num1);                               //[ 300, 500, 800, 9000, 75625 ]
}

calculateCartPrice(100,200,300,500,800,9000,75625);   


//Objects ko function me pass
function greet(person) {
    console.log(`Hello, ${person.name}! . My age is ${person.age}`);
  }
  
  const user = {
    name: 'John',
    age: 30
  };
  
  greet(user); // Output: Hello, John!.My age is 30
  
