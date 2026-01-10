const tempoMinimo = 5;
const temperaturaIdealAcancadaEm = 3;

for (let i = 1; i <= tempoMinimo; i++) {

    console.log(`Aquecendo... segundo ${i}`);

    if (i === temperaturaIdealAcancadaEm) {
        console.log(`Temperatura ideal atingida.`);
    }

}

console.log(`Tempo total de aquecimento: ${tempoMinimo} segundos`);
