const Giocate = 3;
let User, Computer;
const PuntiComputer = 0, PuntiPC = 0;

for (let i = 0; i < Giocate; i++){
  Computer = Math.floor(Math.random() * 3);

  if (Computer == 0) {
    Computer = "f";
  } else if (Computer == 1){
    Computer = "s";
  } else {
    Computer = "c";
  }
  document.getElementById("risultato").innerHTML = `${Computer}`;

  User = prompt('ACCETTI LA SFIDA?? "f" per Forbice, "s" per Sasso, "c" per Carta. Fa la tua scelta');
  if (Computer == User) {
    document.getElementById("risultato").innerHTML = "Pareggio";
  } else if ((User == "s" && Computer == "f") 
     || (User == "f" && Computer == "c") 
     || (User == "c" && Computer == "s")) {
        document.getElementById("risultato").innerHTML = "Vittoria";
        
  } else {
    document.getElementById("risultato").innerHTML = "Sconfitta";
  }
}
