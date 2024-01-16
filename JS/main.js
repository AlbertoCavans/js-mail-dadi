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
const linkToDiceGAme = document.getElementById("linkToDiceGAme");

/* ACTIONS */
submitData.addEventListener("click", function () {
  const sentEmail = emailInput.value;
  let verifiedMail = false;

  for (let i = 0; i < arrayMails.length; i++) {
    const observedMail = arrayMails[i];

    if (sentEmail == observedMail) verifiedMail = true;
  }
  console.log(verifiedMail);

  if (verifiedMail == false) {
    accessByEmail.innerText = "Verifica Email: accesso negato.";
  } else {
    accessByEmail.innerText = "Verifica Email: accesso approvato.";

    linkToDiceGAme.innerText = "Gioca a dadi contro il computer";
  }
});
