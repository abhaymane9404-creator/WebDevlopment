let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let h4 = document.querySelector("h4");

function changecolor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}


btn.addEventListener("click", changecolor); 

h3.addEventListener("click", changecolor);

p.addEventListener("click", changecolor);

h4.addEventListener("click", changecolor);
