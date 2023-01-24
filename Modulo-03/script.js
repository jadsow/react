var valoresRecebidos = [];

const botaoEnviar = document.querySelector("#enviar");
const table = document.querySelector("#tabela");
const containerLoader = document.querySelector(".containerLoader");
const boxLoader = document.querySelector(".box-loader");

function carregamento() {
  boxLoader.classList.add("box-load");
  containerLoader.classList.add("preLoader");
  setTimeout(encerrarCarregamento, 1000)
}

function encerrarCarregamento() {
    boxLoader.classList.remove("box-load")
    containerLoader.classList.remove('preLoader')
}

function listarTabela() {
  let tr = table.insertRow();

  let tdNome = tr.insertCell();
  let tdSobrenome = tr.insertCell();
  let tdIdade = tr.insertCell();

  tdNome.innerText = this.valoresRecebidos.nome;
  tdSobrenome.innerText = this.valoresRecebidos.sobrenome;
  tdIdade.innerText = this.valoresRecebidos.idade;
}

botaoEnviar.addEventListener("click", function (e) {
  e.preventDefault();

  valoresRecebidos.nome = document.querySelector("#nome").value;
  valoresRecebidos.sobrenome = document.querySelector("#sobrenome").value;
  valoresRecebidos.idade = document.querySelector("#idade").value;

  carregamento();
  setTimeout(listarTabela, 1000);
});
