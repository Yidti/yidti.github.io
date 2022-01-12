var play1 = Math.floor(Math.random()*6) + 1;
var play2 = Math.floor(Math.random()*6) + 1;

console.log(play1);
console.log(play2);

var image1 = "images/dice"+play1+".png";
var image2 = "images/dice"+play2+".png";


document.querySelectorAll(".dice img")[0].setAttribute('src',image1);
document.querySelectorAll(".dice img")[1].setAttribute('src',image2);


if (play1>play2) {
    document.querySelector("h1").innerHTML = "player1 win";
} else if (play1<play2) {
    document.querySelector("h1").innerHTML = "player2 win";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}