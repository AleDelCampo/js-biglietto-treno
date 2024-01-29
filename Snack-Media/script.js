const first = Number(prompt("Ciao!! Sono qui per calcolare la tua media!! Dimmi pure i tuoi 3 numeri."));
document.getElementById("media").innerHTML = `${first}`;

const second = Number(prompt("Il secondo??"));
document.getElementById("media").innerHTML = `${second}`;

const third = Number(prompt("Mentre, l'ultimo??"));
document.getElementById("media").innerHTML = `${third}`;

const sum = first + second + third;

const tot = sum / 3

const average = tot.toFixed(2)
document.getElementById("media").innerHTML = `${average}`;



