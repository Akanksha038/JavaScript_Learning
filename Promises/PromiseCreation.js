function getDataFromInternet(successCallBack){
    console.log('Getting data from internet');
    successCallBack('NEW CHAPPAN BHOG');
    
}

getDataFromInternet((data)=>{
    console.log(`Data is got: ${data}`);
    });



    //this samefunction using promise
    function getDatafromInternetUsingPromise(){
        let promise=new Promise((resolve,reject)=>{
            console.log('Getting data from internet using Promise');
            for(let i=0;i<100;i++){
                // console.log(i);
            }
            // resolve('FAMOUS Sweet shop =>new Chappan Bhog');
            reject('Internet Timeout');
        })

        return promise;

    }


    //.then promise ka execution start kar deta hai
   // Execution of the promise
getDatafromInternetUsingPromise()
.then((data) => {
    console.log(`Data is fetched: ${data}`);
})

//if reject call then it can be gandle by using catch


.catch((error) => {
    console.log(`Failed to fetch data: ${error}`);
})

//for resource cleanup
.finally(()=>{
    console.log('Sucessfully execution ');
});