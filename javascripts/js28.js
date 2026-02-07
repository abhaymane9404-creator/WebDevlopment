// const square = (n) => n*n 

let id = setInterval( () => {
    console.log("hellowworld");
},2000);

setTimeout (() =>{
    clearInterval(id);
},10000)