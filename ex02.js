let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite = Number(prompt("Adivinhe um número entre 1 e 100"));

while(palpite !== numeroSecreto) {
    if(palpite > numeroSecreto) {
        alert("Seu palpite é muito alto!");
    } else if(palpite < numeroSecreto) {
        alert("Seu palpite é muito baixo!");
    }
    palpite = Number(prompt("Tente novamente"));
}

alert("Parabéns! Você adivinhou o número!");