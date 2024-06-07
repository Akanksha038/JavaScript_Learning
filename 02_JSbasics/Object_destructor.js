// Destructuring Objects


// When you destructure an object, you can extract properties from the object into variables.

// Example object
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 25
  };
  
  // Destructuring assignment
  const { firstname, lastname } = person;
  
  console.log(firstname); // John
  console.log(lastname);  // Doe


  //You can also assign the extracted values to variables with different names.

  const{firstname:fname,lastname:lname}=person
  console.log(fname);// John
  console.log(lname);// Doe


  //react me kuch method hote hai

//   react me curley bracket me jo comapny likha hai wo destructring ki ja rahi hai

// const navbar=({company})=>{

// }
// navbar(company="hitesh")
  