// Calcular a área de um quadrado
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor do lado do quadrado: ", (lado) => {
  let area = Math.pow(parseFloat(lado), 2);
  console.log(`A área do quadrado é ${area}`);
  rl.close();
});
