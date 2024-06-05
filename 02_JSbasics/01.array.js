//1..array==> array written in square bracket
// 2..array ek object hai, esme single variable ke ander ham 
//3..collection of multiple objects ko store kar dete hai

//4..important==> javascript ke array resizeable hota hai
// 5..yyani ek baar declare karne ke baad ham aur elements add kar sakte hai
// 6..esme ham mix data type ko store karke rakh sakte hai

//7..array ko access karne ke liye ham indexing ka use kar dete hai index==> 0 to size-1

//8..JavaScript me ham jab bhi copy operation karege to esme ===> shallow copies hoti hai


// 9..shallow copy me properties same reference share karte hai yaani jo copy me changes honge wo main me bhi changes reflect honge


//20. Deep copy wo copy hoti hai jisme properties same reference share nahi karti ahi

//array ke ander prototype access milta hai and ek aur property length ki milti hai



const myArr=[0,1,2,3,4,5];
console.log(myArr);

//Array methos
// 1=>push(element)==>element ko last position pe push karega
//2=> pop(element)==>element ko last position se remove karega
myArr.push(6);
console.log(myArr);

myArr.pop();
console.log("after pop =>"+myArr);

//unshift(element)=>element ko 1st position pe insert karne ke liye , agar apke pass 10000 element hai array me and aap 1st position pe insert karna chahte hai to esse overload system pe badh jayega
myArr.unshift(7);
console.log("after unshift of 7 =>"+myArr);

//shift()=> ye array ke 1st element ko left side me shift karta hai matlb array ke 1st element  ko remove karta hai

myArr.shift();
console.log("after shift =>"+myArr);
myArr.shift();
console.log("after shift =>"+myArr);

//includes(element)=> ye batata hai element array me present hai ya nahi, and ye ans boolean me i.e. true and false me deta hai
myArr.includes(4)
console.log("my array inludes 4 or not? =>"+myArr.includes(4));

//// indexOf(element)=> ye element ki index ko batata hai , ye integer me index ko as a output dega

console.log("index of element 5 =>"+myArr.indexOf(5));

//array  ko string me convert kane ke liye we use=>join()

const newArray=myArr.join();
console.log("type of myArray=>"+typeof(myArr));
console.log("VALUES OF myArray=>" +myArr);

console.log("type of newArray after applying join()=>"+typeof(newArray));
console.log("VALUES OF newArray=>"+ newArray);


//slice & splice

//slice():
// The slice() method in JavaScript extracts a section of an array 
// and returns a new array containing the selected elements, without 
// modifying the original array.
//Syntax:

// array_name.slice(s, e)
//

let element=[1,2,3,4,5,6,7,8,9]
let new_ele=element.slice(0,8);
console.log("after slice from 0 to 8=>"+ new_ele);
console.log("original array after slice==> "+element);

//splice():
// The splice() method in JavaScript is used to change the contents of 
// an array by removing or replacing existing elements and/or adding 
// new elements in place, modifying the original array.

// Syntax:

// array_name.splice(i, n, item 1, item 2, .....item n)

let new_ele2=element.splice(0,5)

console.log("after splicing from 0 to 5=>"+new_ele2);
console.log("original array after slice==> "+element);



// example of splice


// Example: In this example, The splice() method in JavaScript inserts
//  new elements (‘ambassador’, ‘BMW’, ‘Audi’) into the cars array 
//  at index 2 without removing any elements

let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
console.log("original array of cars==> " + cars);
cars.splice(0,2, 'ambassedor', 'BMW', 'Audi');
console.log("after splicing in cars=>  cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi') ", cars);

