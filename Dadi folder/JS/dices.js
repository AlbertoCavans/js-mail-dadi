/* LINKS TO HTML */
const userRoll = document.getElementById("userRoll");
const pcRoll = document.getElementById("pcRoll");
const result = document.getElementById("result");

/* ACTIONS */

rollDices.addEventListener("click", function () {
  const playerNumber = Math.floor(Math.random() * 6 + 1);
  userRoll.innerText = playerNumber;
  const computerNumber = Math.floor(Math.random() * 6 + 1);
  pcRoll.innerText = computerNumber;

  let resultGame;
  if (playerNumber > computerNumber) {
    resultGame = "Hai vinto!";
  } else if (playerNumber < computerNumber) {
    resultGame = "Hai perso";
  } else {
    resultGame = "Hai pareggiato";
  }

  result.innerText = resultGame;
});
