// Calcular a área de um retângulo
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o comprimento do retângulo: ", (comprimento) => {
  rl.question("Digite a altura do retângulo: ", (altura) => {
    let area = parseFloat(comprimento) * parseFloat(altura);
    console.log(`A área do retângulo é ${area}`);
    rl.close();
  });
});
