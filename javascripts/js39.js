let form = document.querySelector("form");
form.addEventlistener("submit", function (event) {
    event.preventDefault();
     alert("form submitted");
});