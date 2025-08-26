function generateNumber() {
  const min = Math.ceil(document.querySelector(".min").value); // pega o valor mínimo
  const max = Math.floor(document.querySelector(".max").value); // pega o valor máximo
  const result = Math.floor(Math.random() * (max - min + 1)) + min; // gera o número

  //Seleciona o <p> e insere o resultado
  const resposta = document.querySelector("p");
  resposta.innerText = `O número sorteado foi: ${result}`;
}
