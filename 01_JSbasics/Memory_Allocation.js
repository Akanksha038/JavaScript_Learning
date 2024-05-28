// two type of memeory ==> stack and heap 

// primitive Data_types usese stack memory and
// heap memory used by Non-premitive data types 



// example of primitive data type in stack memory
let myShopname="New Chhappan Bhog";

let anothername=myShopname

anothername="Maa Ki ladli:)"
console.log(anothername);
console.log(myShopname);



// example of non-primitive data type in heap memory

let userone={
    email:"abc@gmail.com",
    upi: "userone@ybl"

}

let usertwo={
    email:"xyz@gmail.com",
    upi: "usertwo@ybl"

}
console.log(userone.email);
console.log(userone.upi);
console.log(usertwo.email);
console.log(usertwo.upi);
