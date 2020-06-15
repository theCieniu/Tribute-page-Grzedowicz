const quoteToggle = document.getElementById("quote-toggle");
console.log(quoteToggle);
const buttonToggle = document.getElementById("toggle-button");
const blockquote = document.getElementById("quote");

/*
let englishQuote = document.createElement("blockquote");
let enP1 = document.createElement("p")
enP1.createTextNode()
let polishQuote = "";
*/

quoteToggle.addEventListener("click", () => {
  buttonToggle.classList.toggle("toggle-change");
  if (buttonToggle.classList[0] == "toggle-change") {
    blockquote.innerHTML =
      '<blocquote class="quote-en"><p> Big, black bird similar to a raven is sitting on a girder under the ceiling and blinking with white eyelid covering eye black as agate.</p><p>– Your name is Nevermore. – I said to him. – And you stay with me.</p><p>– Nevermore! – He cawed. Never more!</p><p>– Finally you said that. – I nodd with satisfaction.</p></blocquote>';
  } else {
    blockquote.innerHTML =
      '<blocquote class="quote-pl" lang="pl"><p>Na belce pod sufitem siedzi ogromny, czarny ptak podobny do kruka i błyska na mnie białą powieką na czarnym jak agat oku.</p><p>– Nazywasz się Nevermore – mówię mu. – I zostajesz ze mną.</p><p>– Nevermore! – Kracze. Nigdy już!</p><p>– Nareszcie to powiedziałeś. – Przytakuję z satysfakcją.</p></blocquote>';
  }
});
