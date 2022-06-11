/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let esRojo = false;

  // Generate random number
  function randomNumber() {
    const arr = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randN = Math.floor(Math.random() * arr.length);

    let numeroS = document.querySelector(".numero");
    if (esRojo == true) {
      numeroS.style.color = "red";
    }
    numeroS.innerHTML = arr[randN];

    return arr[randN];
  }

  // Generate random suit
  function randomSuit() {
    const array = ["♦", "♥", "♠", "♣"];
    let randS = Math.floor(Math.random() * array.length);

    let topS = document.querySelector(".top-s");
    let bottomS = document.querySelector(".bottom-s");
    if (array[randS] == "♦" || array[randS] == "♥") {
      topS.style.color = "red";
      bottomS.style.color = "red";
      esRojo = true;
    }
    topS.innerHTML = array[randS];
    bottomS.innerHTML = array[randS];

    return array[randS];
  }

  randomSuit();
  randomNumber();
};
