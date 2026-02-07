let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
    let color = getRandomColor();
    div.style.backgroundColor = color;
    h3.innerText = color;
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
