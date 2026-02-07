let btns = document.All("button")
for (btn of btns) {
    btn.onclick = sayhello;
    btn.onnouseenter = function () {
        console.log("you entered a button")
    }
    console.dir(btn);
}
function sayhello() {
    alert("hello!"); 
}
//console.dir(btn);
//btn.onclick = function () {
  //  alert("pls check me ")
//}

