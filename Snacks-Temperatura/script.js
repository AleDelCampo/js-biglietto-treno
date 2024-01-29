const Celsius = Number(prompt("Inserisci gradi Celsius per ottenerli Fahrenheit??"));
document.getElementById("ehvirimmu").innerHTML = `${Celsius}`;

const cToFahr = Celsius * 9 / 5 + 32;

const Fahrenheit = Celsius + cToFahr
document.getElementById("ehvirimmu").innerHTML = `${Fahrenheit}`;

