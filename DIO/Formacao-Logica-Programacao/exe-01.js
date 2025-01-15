let nome = "Anderson";
let xp = 0;
let nivel;
if (xp <= 1000) {
    nivel = "Ferro";
} else if (1001 <= xp <= 2000) {
    nivel = "Bronze";
} else if (2001 <= xp <= 5000) {
    nivel = "Prata";
} else if (5001 <= xp <= 7000) {
    nivel = "Ouro";
} else if (7001 <= xp <= 8000) {
    nivel = "Platina";
} else if (8001 <= xp <= 9000) {
    nivel = "Ascendente";
} else if (9001 <= xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}
console.log(`O Herói de nome **${nome}** está no nível **${nivel}**`)