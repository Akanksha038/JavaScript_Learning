// JavaScript mein control flow ka matlab hai ki program kaise execute hota hai, line by line ya condition ke hisaab se. Control flow statements ko use karke aap apne code ka flow control kar sakte hain.

// 1. Conditional Statements (if, else if, else)
// if statement:

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}




// if-else statement:
let age1 = 16;

if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


// if-else if-else statement:

let score = 85;

if (score >= 90) {
  console.log("Grade A");
} 
else if (score >= 80) {
  console.log("Grade B");
} 
else if (score >= 70) {
  console.log("Grade C");
} 
else {
  console.log("Fail");
}



//2. Switch Statement
// Switch statement ko use karke aap multiple conditions ko check kar sakte hain:

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Tuesday







