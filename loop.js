for (let i = 0; i < 5; i++) {
    console.log("Iteration number " + i);
  }

  
  let i = 0;
while (i < 5) {
  console.log("Iteration number " + i);
  i++;
}


let i = 0;
do {
  console.log("Iteration number " + i);
  i++;
} while (i < 5);



for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log("Iteration number " + i);
  }
  // Output: 0, 1, 2, 3, 4

  

//   6. Exception Handling (try, catch, finally)

try {
    let result = someUndefinedFunction();
  } catch (error) {
    console.log("An error occurred: " + error.message);
  } finally {
    console.log("This will run regardless of the error.");
  }
  