let valorSaque = Number(prompt("Insira o valor que deseja sacar"));

if (valorSaque % 10 === 0) {
    alert("Saque realizado com sucesso");
} else {
    alert("Valor inválido. Digite um valor múltiplo de 10");
}