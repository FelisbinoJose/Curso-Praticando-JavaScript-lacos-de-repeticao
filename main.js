import { createInterface } from 'readline';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const entradas = [];

function perguntar() {
    leitor.question('Informe o nome (digite "fim" para sair): ', (nome) => {
        if (nome.toLowerCase() === 'fim') {
            leitor.close();

            for (const nome of entradas) {
                console.log(`Nome: ${nome}`);
            }
            return;
        }

        entradas.push(nome);
        perguntar();
    });
}

perguntar();
