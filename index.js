let saldoDeVitorias;
let nivel;

function calcularSaldoDeVitorias(vitorias, derrotas) {
saldoDeVitorias = vitorias - derrotas;
return;
};

function calcularnivel() {
    if(saldoDeVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
}

calcularSaldoDeVitorias(110, 1);
calcularnivel();

console.log(`O herói tem o saldo de ${saldoDeVitorias} está no nível de ${nivel}`)