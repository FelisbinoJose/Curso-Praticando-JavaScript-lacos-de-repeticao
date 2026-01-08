import { createInterface } from 'readline';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Informe a senha: ', (senha) => {

    for (let contador = 0; contador < senha.length; contador++) {
        console.log(`Caractere ${contador + 1}: ${senha[contador]}`);

    }

    leitor.close();

})