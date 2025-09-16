// Perguntar nome de aluno e calcular média de 4 notas
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nome do aluno: ", (nome) => {
  rl.question("Digite a 1ª nota: ", (n1) => {
    rl.question("Digite a 2ª nota: ", (n2) => {
      rl.question("Digite a 3ª nota: ", (n3) => {
        rl.question("Digite a 4ª nota: ", (n4) => {
          let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
          console.log(`Aluno: ${nome}, Média: ${media}`);
          rl.close();
        });
      });
    });
  });
});
