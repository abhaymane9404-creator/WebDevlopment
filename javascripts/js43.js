function savedb(data,success,failure){
    let internetspeed = Math.floor(Math.random()*10)+ 1;
   if (internetspeed > 4){ 
   success();           // call back
   } else {
   failure();            // call back 
   }
}

savedb(" abhay mane data ", ()=>{      // this data is been saved 
    console.log("success : your data was saved " ); // sucees callback
    savedb(" hello world data 2 ", ()=> {        // 2nd data saved in data base 
        console.log("success 2 data saved 2");
    } , ()=> {
        console.log("failure 2 data not saved ")
    })
}, ()=> {
   console.log("failure : your data is not saved");  // failure callback 
 });
