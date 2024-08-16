// console.log("fetch.js");

// fetch('https://jsonplaceholder.typicode.com/users')
// //HANDLING
// // .then((response)=>response.json())   or// .then(function(response){
                                                 //   return response.json();
                                                                    // })

// // .then(akanksha=>akanksha.json())  //or .then((akanksha)=>akanksha.json())
// // .then((json)=>console.log(json))
// .then((gupta)=>console.log(gupta))  //other way of written => .then(function(gupta){
//                                                                 //  return gupta.json()})


console.log("fetch.js");

fetch('https://jsonplaceholder.typicode.com/users')
//HANDLING
.then(function(response){    //or // .then((response)=>response.json())
  return response.json();
})
 
.then((gupta)=>console.log(gupta))
.catch(error=>console.log(error));