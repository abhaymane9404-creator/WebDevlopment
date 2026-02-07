let btns = document.querySelectorAll("button"); 

for (let btn of btns) {
    //btn.onclick = sayhello;
    // btn.onclick= sayname;

    btn.addEventListener("click", sayhello);
btn.addEventListener("click", sayname);


}

function sayhello(){
 alert("hello!!");
}
function sayname() {
    alert("thats me only");
}