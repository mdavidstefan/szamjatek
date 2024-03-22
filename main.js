import { genRandNumber } from "./getRandNumber.js";
import { compare } from "./compare.js";

let randNr = genRandNumber(1, 100);
console.log(randNr);

let result = compare(99, randNr);
console.log(result);

document.querySelector(".checkBtn").addEventListener("click", check);

let tries = 5;  
document.getElementById("life").textContent = "Próbálkozási lehetőségek száma: " + tries

function check() {
  if (tries > 0) {
    let guess = document.getElementById("inputArea").value;
    document.getElementById("resultgi").textContent = compare(guess, randNr);
    tries--;
    document.getElementById("life").textContent == "Próbálkozási lehetőségek száma: " + tries
    return;
  }
  document.getElementById("life").textContent ==
    "Nincs több próbálkozási lehetőség!";
  document.querySelector(".checkBtn").classList.toggle("disabled");
}
