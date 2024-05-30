// Javascript , date object define a single moment in time in a platform independent format  
//ye moment define hai from january 1st 1970 and yaha se hi jinti nhi dates declare declare karo calculate hoti hai
//ye dates useually milisecond me calculate hoti hai so jab bhi ham date object declare kaege to ek bahut log si string aati hai wo kuch milisceond time hai january 1st 1970 se lekar and esse comapre karna easy rehta hai mili second me 
// lekin phir bhi ye itna aasan nahi hai esliye 
//JS Khud hi kehta hai ki TC39 INKA CONSORTIUM HAI JAVASCRIPT KA JISME JITNE BHI NEW FEATURES AATE HAI jaise fetch aaya , promises aaye wo sab yahi organisation define karta hai
//yaha pe inhone ek **************API suggest kari hai ==> Temporal name se , waise already DATE ki API hai hamare pass but usko use karna thoda sa complex hai to wo yaha pe ye use karte hai and bol rahe haiaage future me jo hamara proposal hai wo es tarah se hai ki DATE Jo time hai wo ek long -standing pain point hai ECMAScript ka.
//enka temporal object ko ek global API banane ka proposal hai enka , jaise ki math hai , kitna easily ham math.random() use kar lete hai , math.floor() likhan ye sab kitna aasan hai essi tarah se
//DATE KO BHI   use kar payenge, to aage jakar ye fully capable ho jayega and saare browser me implement kar diya jayega
//to agar ham ye likhe ==> Temporal.Now.instant()==>to ye hamme system ka exact time de dega

// Temporal.Now.timeZone()==> ye hamme curent system ka time zone de degaand aaise bahut se method hai jo Tempral API me define hai but ye abhi proposal hai
//esse ham dekh sakte hai on==>   https://tc39.es/proposal-temporal/docs/index.html



// Temporal.Now
// Temporal.Now.instant() - get the current system exact time
// Temporal.Now.timeZoneId() - get the current system time zone
// Temporal.Now.zonedDateTime(calendar) - get the current date and wall-clock time in the system time zone and specified calendar
// Temporal.Now.zonedDateTimeISO() - get the current date and wall-clock time in the system time zone and ISO-8601 calendar
// Temporal.Now.plainDate(calendar) - get the current date in the system time zone and specified calendar
// Temporal.Now.plainDateISO() - get the current date in the system time zone and ISO-8601 calendar
// Temporal.Now.plainTimeISO() - get the current wall-clock time in the system time zone and ISO-8601 calendar
// Temporal.Now.plainDateTime(calendar) - get the current system date/time in the system time zone, but return an object that doesn't remember its time zone so should NOT be used to derive other values (e.g. 12 hours later) in time zones that use Daylight Saving Time (DST).
// Temporal.Now.plainDateTimeISO() - same as above, but return the DateTime in the ISO-8601 calendar



// but abhi ki kahanai me hamme exixting tarike se date sikhni hogi


//Dates

let myDate=new Date()
console.log(myDate); // eska output to readable bhi nahi hai

//chalo aab cnvert karte hai in otherdatatype for reading purpose
let myDate1=new Date()
console.log(myDate1.toString());

console.log(myDate1.toDateString());

console.log(myDate1.toISOString());
console.log(myDate1.toLocaleString());

console.log(myDate1.toLocaleDateString());
console.log(myDate1.toTimeString());
console.log(myDate1.toLocaleTimeString());


//************************interview me


console.log(typeof(myDate1)); //object

///declaration of own date in JS

let myownDeclareDate=new Date(2024,4,30);
// console.log(myownDeclareDate.toLocaleString());


console.log(myownDeclareDate.toDateString());

let myownDeclareDate1=new Date(2024,4,30, 6,33);
console.log(myownDeclareDate1.toLocaleString());

//specially  YY MM DD format me chahiye


let my_date=new Date("2023-01-14");
console.log(my_date.toLocaleString());

//dd--mm-yy

let my_date1=new Date("11-05-2003");
console.log(my_date1.toLocaleString());
console.log(my_date1.toString());


//time stamp ==>exact time dekhne ke liye jab ham quizez define karege js me,poles wegrah me ham time stamp use karege

let MyTimestamp=Date.now();

console.log(MyTimestamp);// ye kuch aaisa output dega   1717076656270 mili sec  ye 1970 yr se lekar abhi tak ka mili second me value hai


// hamare dwara created date se  hamme 1st january 1970 se value de dega

console.log(my_date1.getTime()); //ye hame mili sec me value de dega  1067990400000 and esse and just uppar wale time ko ham compare kar sakte hai

//ess mili sec ko seconds me convert karna hai
console.log(Date.now());// ess Date.now() ko second me convert karn ahai to we devide 1000 and decimal value ko remove karne ke liye we do =>math.floor

console.log(Math.floor(Date.now()/1000)); //YE SECONDS ME TIME DEGA


// other methods jo date ke sath milte hai
// js me month 0 se start hote hai

let newDate=new Date();
console.log("it print  month by JS ")
console.log(newDate.getMonth());
console.log("print exact month")
//exact month ke liye we write +1
console.log(newDate.getMonth()+1);


//most important mehtodof date //{ press ctrl+space to bahut se method dekhneko milege}
newDate.toLocaleDateString('default',{
    weekday: "long",
})



const now = new Date();
// const formattedDate = now.toISOString().split('T')[0];
// console.log(formattedDate);


const parts = now.toISOString().split('T');
console.log(parts); // Example output: ["2024-05-30", "12:34:56.789Z"]





let date=new Date();
let formatdate=date.toISOString();
console.log(formatdate);

//2. How do you format a date as YYYY-MM-DD in JavaScript?

let date1 = new Date();                   // Create a new Date object representing the current date and time
let isoString = date1.toISOString();      // Convert the Date object to an ISO string
console.log(isoString);                  // Example output: '2024-05-30T15:26:12.345Z'

let parts1 = isoString.split('T');        // Split the ISO string at the 'T' character
console.log(parts1);                      // Example output: ['2024-05-30', '15:26:12.345Z']

let formattedDate = parts1[0];            // Select the first part (date part)
console.log(formattedDate);              // Example output: '2024-05-30'
