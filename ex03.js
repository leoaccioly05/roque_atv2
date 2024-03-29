let dataDeNascimento = prompt("Por favor, insira sua data de nascimento no formato DD/MM/AAAA");

let partesDaData = dataDeNascimento.split("/");
let dataNascimento = new Date(partesDaData[2], partesDaData[1] - 1, partesDaData[0]);
let dataAtual = new Date();

let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
let m = dataAtual.getMonth() - dataNascimento.getMonth();

if (m < 0 || (m === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
    idade--;
}

if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}