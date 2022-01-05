let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImages = "dice" + randomNumber1 + ".png";
let randomImagesSource = "images/" + randomDiceImages;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImages2 = "dice" + randomNumber2 + ".png";
let randomImagesSource2 = "images/" + randomDiceImages2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesSource2);

function diceGame(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins";
  } else document.querySelector("h1").innerHTML = "Match Draw";
}
console.log(diceGame(randomNumber1, randomNumber2));

// refresh page
function refreshPage() {
  window.location.reload();
}
