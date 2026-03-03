function  savedb(data) {
    return new Promise ((resolve, reject) => {
        let internetspeed = Math.floor(Math.random() * 10) + 1;
        if (internetspeed > 4) {
            resolve("sucess : data is saved") ;
        } else {
            reject("failure : weak connection");
        }
    })
}
savedb ("Abhay")
.then( (result) => {
    console.log("data 1 saved");
    console.log("result of promise: ", result);
    return savedb("Abhay 2");      
} )
.then( (result) => {
    console.log("data 2 saved");
    console.log("result of promise: ",result);
    return savedb("Abhay 2");      
} )

.then( (result) => {
    console.log("data 3 saved");
    console.log("result of promise: ",result);
         
} )
.catch( (error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error) ;    
} )

               
 