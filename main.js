var btn = document.getElementById("btn");
var light = document.getElementById("light");

function toggleBtn() {
    btn.classList.toggle("active"); // Remove the dot here
    light.classList.toggle("on");
}

btn.addEventListener("click", toggleBtn); // Add an event listener to the button
