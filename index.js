const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";

for (let i = 0; i < tentativas.length; i++) {
    if (tentativas[i] === senhaCorreta) {
        console.log("Acesso permitido");
        break;
    } else {
        console.log(`Tentativa ${i + 1} inválida`);
    }

    if (i === tentativas.length - 1) {
        console.log("Acesso bloqueado. Número máximo de tentativas atingido");
    }
}
