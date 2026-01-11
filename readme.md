# Validação de login

## Descrição

- Você está desenvolvendo o sistema de login de um app interno da empresa.

---

## Objetivo

- O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

> Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

---

## Exemplo de entrada:

```js
const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";
```

---

## Saída esperada:

```txt
Tentativa 1 inválida.
Tentativa 2 inválida.
Acesso permitido!
```

---

## Caso atinja o número total de tentativas:

```txt
Acesso bloqueado. Número máximo de tentativas atingido.
```

---
