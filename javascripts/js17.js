const max = prompt("Enter a max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the max number");
while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    if(guess == random) {
        console.log("congrats you guess the num right your random number is", random);
        break;
    } else if(guess < random) {
        guess = prompt("your guess was too small.please try again");
    } else  {
        guess = prompt("your guess was to big, please try again");
    } 
    

}