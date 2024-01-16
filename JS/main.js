/* LINKS TO HTML */
const emailInput = document.getElementById("emailInput");
const arrayMails = [
  "pincopallo1@gmail.com",
  "pincopallo2@gmail.com",
  "pincopallo3@gmail.com",
  "pincopallo4@gmail.com",
];
const submitData = document.getElementById("submitData");
const accessByEmail = document.getElementById("accessByEmail");

/* ACTIONS */
submitData.addEventListener("click", function () {
  const sentEmail = emailInput.value;
  let verifiedMail = false;

  for (let i = 0; i < arrayMails.length; i++) {
    const observedMail = arrayMails[i];

    if (sentEmail == observedMail) verifiedMail = true;
  }
  console.log(verifiedMail);

  /*  if ((verifiedMail = false)) {
    accessByEmail.innertext = "Verifica Email: accesso negato.";
  } else if ((verifiedMail = true)) {
    accessByEmail.innertext = "Verifica Email: accesso approvato.";
  } */ /* non funziona */
  accessByEmail.innerText = verifiedMail
    ? "Verifica email: Accesso permesso"
    : "Verifica email: Accesso negato";
});
