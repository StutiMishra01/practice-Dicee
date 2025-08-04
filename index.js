var person1 = Math.floor(Math.random() * 6) + 1;
var person2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + person1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + person2 + ".png");

if (person1 > person2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (person1 < person2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
