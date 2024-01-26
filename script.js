/*(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
Bonus:
effettuare dei controlli per capire se l'utente ha inserito 
correttamente il numero di km e l'età (ovvero se sono effettivamente 
dei numeri e non testo a caso)
(modificato)*/

const kilometers = Number(prompt("Salve!! Per iniziare col tuo biglietto, potresti dirmi i kilometri del viaggio??"));

document.getElementById("kilometri").innerHTML = `${kilometers}`;

const age = Number(prompt("Eppoi, mi servirebbe la tua età??"));

document.getElementById("eta").innerHTML = `${age}`;

const pricexkm = 0.21;

const saleminor = pricexkm * `${kilometers}` * 20 / 100;

const saleelderly = pricexkm * `${kilometers}` * 40 / 100;



const priceregular = `${kilometers}` * `${pricexkm}`;

const priceminor = `${kilometers}` * `${pricexkm}` - `${saleminor}`;

document.getElementById("minorenni").innerHTML = `${priceminor}`;



const priceelderly = `${kilometers}` * `${pricexkm}` - `${saleelderly}`;

document.getElementById("anziani").innerHTML = `${priceelderly}`;

const minor = priceelderly.toFixed(2)

const elderly = priceelderly.toFixed(2)

const regular = priceelderly.toFixed(2)





if (age <= 17) {
    document.getElementById("prezzo").innerHTML = `${minor}`;
} else if (age >= 65) {
    document.getElementById("prezzo").innerHTML = `${elderly}`;
} else {
    document.getElementById("prezzo").innerHTML = `${regular}`;
}