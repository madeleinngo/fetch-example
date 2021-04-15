setup();

function setup() {
  getQuote();
}

function getQuote() {
  fetch("https://api.taylor.rest")
    .then(response => response.json())
    .then(data => updateQuote(data.quote));
}

function updateQuote(src) {
let p = document.querySelector("p");
  p.innerText = src;
}
