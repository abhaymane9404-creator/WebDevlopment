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
.then( () => {
    console.log("data 1 saved");
    return savedb("Abhay 2");      // readavble able format nothing else               
} )               
// savedb("abhay2 datasaved "); return this line up 
.then( ()=> {
    console.log("data 2 saved");
})
.catch(() => {
    console.log("promise was rejected");
});
