const favmovie = "avatar"

let guess = prompt("guess my favourite movie");

while(  (guess != favmovie) && (guess != "quit") ) {
    guess = prompt("wrong guess. please try again");
}

if(guess == favmovie){
    console.log("congrats!! you won.");
} else{
    console.log("you quit")
}

