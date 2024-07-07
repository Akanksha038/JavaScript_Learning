// 1.The primary purpose of an IIFE is to create a new scope. This prevents the pollution of the global scope.

(function() {
    var message = "Hello, World!";
    console.log(message); // "Hello, World!"
  })()
//   console.log(message); // ReferenceError: message is not defined
  


//2. In JavaScript, all variables and functions are by default in the global scope. By using an IIFE, you can keep your variables and functions in a local scope, avoiding name conflicts.
var myVar = 10;
(function() {
  var myVar = 20;
  console.log(myVar); // 20
})();
console.log(myVar); // 10



// 3.With IIFE, you can create private variables and methods that cannot be accessed from outside.



var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();
  console.log(counter.value()); // 0
  counter.increment();
  console.log(counter.value()); // 1
  counter.decrement();
  console.log(counter.value()); // 0
  


// 4.IIFE can be used to implement the module pattern, which helps in organizing and structuring the code.

var myModule = (function() {
    var privateVar = "I am private";
    function privateFunction() {
      console.log(privateVar);
    }
    return {
      publicFunction: function() {
        privateFunction();
      }
    };
  })();
  myModule.publicFunction(); // "I am private"
  





(function chai(){
    console.log(`hello world`)
})();


//arrow function in IIFE
(()=>{
    console.log(`Hii , I'm inside IIFE by using arrow function`);
})();



console.log(`Parameter with IIFE with arrow function`);

((name)=>{
    console.log(`Hello this is ${ name}`);

})("Akanksha");





// To write two IIFEs in the same file, you simply need to ensure each IIFE is properly structured and enclosed in parentheses. 

// First IIFE
(function() {
    var message = "Hello from the first IIFE!";
    console.log(message);
  })();
  
  // Second IIFE
  (function() {
    var message = "Hello from the second IIFE!";
    console.log(message);
  })();
  