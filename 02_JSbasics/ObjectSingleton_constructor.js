//let suppose we amke tinder app

const tinderuser=new Object() //this is singleton object


const tinderuser123={}//this is not a singleton object

const tinderuser1 = new Object(); // Creates an empty object using the Object constructor

//Ye tareeka Object constructor use karta hai empty object banane ke liye.
//Isse singleton object nahi banta automatically.
//Singleton ek design pattern hai jo ensure karta hai ki ek class ka sirf ek hi instance bane.
//

const tinderuser12 = {}; // Object literal syntax use karke empty object banaya

//Ye shortcut hai empty object banane ka.
//Ye concise aur readable hai.
//Ye bhi singleton object nahi banata automatically.
//


// Singleton Pattern in JavaScript
// Agar aapko ek sach-much ka singleton banana hai, toh aapko ensure karna padega ki sirf ek hi instance bane.



//*****************some other patterns in object */

const object1={}
object1.email="xyz@gmail.com",
object1.fullname={
    userFullname:
    {
        firstname:"akanksha",
        lastname:"gupta"
    }
}


console.log(object1);  //  {
                            //  email: 'xyz@gmail.com',
                            //  fullname: { userFullname: { firstname: 'akanksha', lastname: 'gupta' } }
                            // }

console.log(object1.fullname.userFullname);//{ firstname: 'akanksha', lastname: 'gupta' }


//suppose agar fullname exist nahi karta to ham ? write karte hai


//combining array and objects 

const obj1={
    1: "a",
    2:"b"
}

const obj2={
    3: "a",
    4:"b"
}

//combine

const obj3={obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);


// for comn=bining we use assign() function
//JavaScript mein aap Object.assign() function ka use karke do ya zyada objects ko combine kar sakte hain.

const obj=Object.assign(obj1,obj2);
console.log(obj);
  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


  //we can also give {}, it not compulson but it's a good way

  const obj5=Object.assign({},obj1,obj2);
  console.log(obj5);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



  //by using spread operator

  const spread={...obj1,...obj2}
  console.log(spread); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


  //jab database se object aayega to array og objects ke form me aayega

  const user=[

    { 

    },
    {

    },
  ];
  user[1].email;  //.email esliye kiya because ye ek object hai


  const name={
    name1:"akab",
    age: 20
  }

  console.log(Object.keys(name)); //[ 'name1', 'age' ]

  console.log(Object.values(name));//[ 'akab', 20 ]

  //entries()  =>ye ek ek key value ko array me bana deta hai

  //saari KEYS KO ek array me and saari values ko ek array me


  console.log(Object.entries(name));   //[ [ 'name1', 'akab' ], [ 'age', 20 ] ]



  console.log(name.hasOwnProperty("age")); //true ==>ye check karta hai ki object me ye age wali property exist kart hai ya nahi
