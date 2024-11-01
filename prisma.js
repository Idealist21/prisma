
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    this.innerHTML = "THANKS FOR WATCHING!";
    this.style.transition = "all 15s";
    this.style.backgroundColor = "purple";
    this.style.fontSize = "130px";
    this.style.color = "violet";
    this.style.padding = "50px";
});