import { genRandNumber } from "./getRandNumber.js";
import { compare } from "./compare.js";

let randNr = genRandNumber(1, 100);
console.log("A kitalálandó szám: " + randNr);

let result = compare(99, randNr);

document.querySelector(".checkBtn").addEventListener("click", check);

let tries = 5;
document.getElementById("guesses").textContent =
  "Próbálkozási lehetőségek száma: " + tries;

function check() {
  if (tries > 1) {
    let guess = parseInt(document.getElementById("inputArea").value);
    document.getElementById("result").textContent = compare(guess, randNr);
    tries--;
    document.getElementById("guesses").textContent =
      "Próbálkozási lehetőségek száma: " + tries;
    return;
  }

  document.getElementById("guesses").textContent =
    "Nincs több próbálkozási lehetőség!";
  document.querySelector(".checkBtn").disabled = true;
}
