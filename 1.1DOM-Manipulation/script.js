const button = document.getElementById("revealBtn");
const paragraph = document.getElementById("message");

button.addEventListener("click", function () {
    paragraph.textContent = "JavaScript is running!";
    button.textContent = "Done!";
});
