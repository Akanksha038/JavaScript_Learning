

//In JavaScript, the this keyword refers to the object that is currently executing the function 


const thisObject={
    username:"Akanksha",
    fun:function(){
        console.log(`${this.username}, Welcome to our website!`);
        console.log(this);  //ye hamme pura current context  ko print kar deta hai
    }
}

thisObject.fun();//Akanksha, Welcome to our website!  ==>ye current context ke ander ke username ki value ko print karta hai matlm upper jo block of code me variables hai wo kya vak=lues hold kar rahe hai

thisObject.username="sam"
thisObject.fun();//sam, Welcome to our website!

console.log(this);// empty parenthesis ==>{} 

    //but agar ham esse browser ke console pe print kare to kya hoga
   // ==>If you execute console.log(this) directly in a console or in a non-strict mode function, the output will depend on the environment. In a browser environment, it will likely log the window object because the global context is the window object.




   function logThis1() {
    console.log(this);
}

logThis1(); // Output depends on strict mode. In non-strict mode: Window object, In strict mode: undefined


function logThis() {
    let username="Hello buddy"
    console.log(this.username);
}

logThis();//undefined


//arrow function

//bus function keyword ko ham hata denge aur eske '()' baad ham => ye arrow laga denge

// let chai=()=>{
//     let username="bfdhbvd";
//     console.log(this);//{}
// }



// chai();


let chai1=()=>{
    let username="bfdhbvd";
    console.log(this.username);//undefined
}



chai1();


//let see all arrow function types and all