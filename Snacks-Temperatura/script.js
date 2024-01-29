const Celsius = Number(prompt("Inserisci gradi Celsius per ottenerli Fahrenheit??"));
document.getElementById("temperatura").innerHTML = `${Celsius}`;

const cToFahr = Celsius * 9 / 5 + 32;

const Fahrenheit = Celsius + cToFahr
document.getElementById("temperatura").innerHTML = `${Fahrenheit}`;

