let ladoA = Number(prompt("Insira o comprimento do primeiro lado"));
let ladoB = Number(prompt("Insira o comprimento do segundo lado"));
let ladoC = Number(prompt("Insira o comprimento do terceiro lado"));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    if (ladoA === ladoB && ladoB === ladoC) {
        alert("O triângulo é equilátero");
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        alert("O triângulo é isósceles");
    } else {
        alert("O triângulo é escaleno");
    }
} else {
    alert("Os lados fornecidos não formam um triângulo válido");
}