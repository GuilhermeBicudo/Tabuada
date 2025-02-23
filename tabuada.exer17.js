// Função ouvinte do botão mostrar
function Mostrar() {
  // Criado os conteúdos de referências para o HTML
  const num = parseInt(document.getElementById("num").value);
  const res = document.querySelector("div.res");
  // Lógica do programa
  //Se não inserir valores corretos retorna essa mensagem abaixo.
  if (isNaN(num)) {
    alert("Insira valores válidos!");
    return;
  }
  //Inicializa a variável para a multiplicação e o loop.
  let m = 0;
  //Limpa o conteúdo anterior da div res para evitar que os valores se repitam na tela.
  res.innerHTML = "";
  // Lógica usando a estrutura de repetição while.
  while (m <= 10) {
    res.innerHTML += `<br>A multiplacação de <strong>${num}</strong> x <strong>${m}</strong> é <strong>${
      num * m
    }</strong>.`;
    m++;
  }
}
// Função ouvinte do botão resetar
function Resetar() {
  const res = document.querySelector("div.res");
  res.innerHTML = "";
}
