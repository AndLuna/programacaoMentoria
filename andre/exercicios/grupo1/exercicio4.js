// Calcular o quadrado de um número
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (num) => {
  let quadrado = Math.pow(parseFloat(num), 2);
  console.log(`O quadrado de ${num} é ${quadrado}`);
  rl.close();
});
