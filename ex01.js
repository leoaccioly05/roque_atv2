var peso = parseFloat(prompt("Por favor, digite seu peso em quilogramas:"));
var altura = parseFloat(prompt("Por favor, digite sua altura em metros:"));

var imc = peso / (altura * altura);

var categoria;

if (imc < 18.5) {
    categoria = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    categoria = "Excesso de peso";
} else if (imc >= 30.0 && imc <= 34.9) {
    categoria = "Obesidade grau I";
} else if (imc >= 35.0 && imc <= 39.9) {
    categoria = "Obesidade grau II";
} else {
    categoria = "Obesidade grau III";
}

alert("Seu IMC é " + imc.toFixed(2) + " e você está na categoria: " + categoria);