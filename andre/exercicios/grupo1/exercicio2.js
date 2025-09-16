// Perguntar o nome e idade
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o seu nome? ", (nome) => {
  rl.question("Quantos anos você tem? ", (idade) => {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
    rl.close();
  });
});
