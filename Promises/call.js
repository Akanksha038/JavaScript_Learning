// console.log('checking');

// function getDataFromInternet(sucessCallback){
//     console.log('ye pehle hi execute ho jayega');

//     setTimeout(()=>{ //itne second pure hone ke baad kaam ko execute karna 
//         console.log('Got data from internet');
//         sucessCallback(); //ye closer form kar liya hai  apne parent ke sath
        

//     },2000);

//     //set timeout ke ander jo bhi cheeze likhi hui hai ya phir jo phi function call likha hai wo 2sec ke baad execute hoga 
//     console.log('ye line no. 4 wale data ke execute hone ke just baad execute ho jayega ye 2 sec ka wait nahi karega =>data fetching successful');
    
// }
// getDataFromInternet(()=>{

//     console.log('Data is successfully Fetched');

// }
// );




function getDataFromInternet(sucessCallback){
    console.log('Getting Data From Internet');

    setTimeout(()=>{ 
        // console.log();
        sucessCallback('NEW CHAPPAN BHOG'); //ye closer form kar liya hai  apne parent ke sath
        },2000);
    }

    function setDataToDB(sucessCallback)
    {
        console.log('Sending Data to DB');
    
        setTimeout(()=>{ 
            
            sucessCallback('db_row_25'); 
            },2000);
        }

        function sendResponseTouser(sucessCallback)
    {
        console.log('Send response to user');
    
        setTimeout(()=>{ 
            
            sucessCallback(); 
            },2000);
        }






getDataFromInternet((data)=>
    {

    console.log(`Data from internet is ${data}`);
    setDataToDB((id)=>{
        console.log(`data is saved in your DB with id ${id}`);
        sendResponseTouser(()=>
    {
        console.log(`Response is send to user`);

    })
        

    })


    

}
);