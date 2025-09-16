// Cadastro de cliente
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cliente = {};

rl.question("Nome Completo: ", (nome) => {
  cliente.nome = nome;
  rl.question("Data de Nascimento: ", (nasc) => {
    cliente.nascimento = nasc;
    rl.question("Cidade/País de Origem: ", (origem) => {
      cliente.origem = origem;
      rl.question("Endereço completo: ", (endereco) => {
        cliente.endereco = endereco;
        rl.question("País onde reside: ", (pais) => {
          cliente.pais = pais;
          rl.question("Data do Cadastro: ", (cadastro) => {
            cliente.cadastro = cadastro;
            rl.question("Escolaridade (Ensino Básico/Fundamental/Superior): ", (esc) => {
              cliente.escolaridade = esc;
              console.log("\n=== Dados do Cliente ===");
              console.log(cliente);
              rl.close();
            });
          });
        });
      });
    });
  });
});
