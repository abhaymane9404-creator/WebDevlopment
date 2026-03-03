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
    console.log("promise was resolved");
} )
.catch(() => {
    console.log("promise was rejected");
});
