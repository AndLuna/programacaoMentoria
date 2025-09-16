// Calcular a área de um círculo
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o raio do círculo: ", (raio) => {
  let area = Math.PI * Math.pow(parseFloat(raio), 2);
  console.log(`A área do círculo é ${area}`);
  rl.close();
});
