window.onload = () => {
  "use strict";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};

const pontosEquipe1 = document.getElementById("pontosEquipe1");
const pontosEquipe2 = document.getElementById("pontosEquipe2");
const micos = [
  "Passar em Baixo da Mesa",
  "Virar uma Estrelinha",
  "Tirar uma foto constrangedora",
  "Gravar um vídeo falando que perdeu pro ganhador",
];
const equipesRegistradas = [
  { nome: "Eles", vitorias: 0 },
  { nome: "Nós", vitorias: 0 },
];

const body = document.querySelector(".fullscreen");

// pontosEquipe1.textContent = initialValue;

function carregar() {
  const equipe1Buttons = document.querySelectorAll(".button1");
  const equipe2Buttons = document.querySelectorAll(".button2");

  equipe1Buttons.forEach((botao) => {
    botao.onclick = function soma() {
      let initialValue = parseInt(pontosEquipe1.textContent);

      var resultado = initialValue + parseInt(botao.value);
      if (resultado < 12) {
        pontosEquipe1.textContent = resultado;
      } else {
        pontosEquipe1.textContent = 12;

        const nosContent = nos.textContent;

        const verificaEquipe = equipesRegistradas.find(
          (p) => nosContent == p.nome
        );

        if (verificaEquipe) {
          equipesRegistradas.forEach((item) => {
            if (nosContent == item.nome) {
              item.vitorias++;
            }
          });
        } else {
          equipesRegistradas.push({
            nome: nos.textContent,
            vitorias: 1,
          });
        }
     var container = document.querySelector(".container");
        container.style.cssText = "filter: blur(10px)";

        body.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="champion">

        <div class="championCard">
          <h1>Parabéns!</h1>
          <p >A equipe <span style="color:#ff2424;">${nos.textContent}</span> foi a vencedora</p>
          <span class="mico" style="color:#ff2424;text-align:center;"></span>
          <img class="campeao" src="images/champion.svg" />
          <button class="botao_mico" onclick="gerarMico()">Gerar Mico</button>
          <button class="novo" onclick="novoJogo()">Novo Jogo</button>
        </div>
        </div>
        
        `
        );
      }
    };
  });

  equipe2Buttons.forEach((botao) => {
    botao.onclick = function soma() {
      let initialValue = parseInt(pontosEquipe2.textContent);

      var resultado = initialValue + parseInt(botao.value);
      if (resultado < 12) {
        pontosEquipe2.textContent = resultado;
      } else {
        pontosEquipe2.textContent = 12;

        const elesContent = eles.textContent;

        const verificaEquipe = equipesRegistradas.find(
          (p) => elesContent == p.nome
        );

        if (verificaEquipe) {
          equipesRegistradas.forEach((item) => {
            if (elesContent == item.nome) {
              item.vitorias++;
            }
          });
        } else {
          equipesRegistradas.push({
            nome: eles.textContent,
            vitorias: 1,
          });
        }

        var container = document.querySelector(".container");
        container.style.cssText = "filter: blur(10px)";

        body.insertAdjacentHTML(
          "afterbegin",
          `
  
          <div class="champion">

          <div class="championCard">
            <h1>Parabéns!</h1>
            <p >A equipe <span style="color:#ff2424;">${eles.textContent}</span> foi a vencedora</p>
            <span class="mico" style="color:#ff2424;text-align:center;"></span>
            <img class="campeao" src="images/champion.svg" />
            <button class="botao_mico" onclick="gerarMico()">Gerar Mico</button>
            <button class="novo" onclick="novoJogo()">Novo Jogo</button>
          </div>
          </div>
          
          `
        );
      }
    };
  });
}

carregar();

function mostrarEditar() {
  const editDiv = document.querySelector(".edit");
  var container = document.querySelector(".container");

  container.style.cssText = "filter: blur(10px)";

  editDiv.style.cssText = `display: flex; 
flex-direction: column;
align-items: center;
justify-content:center;
`;
}

function editar() {
  const editDiv = document.querySelector(".edit");
  var nos = document.getElementById("nos");
  var eles = document.getElementById("eles");
  var equipe1Name = document.getElementById("equipe1Name");
  var equipe2Name = document.getElementById("equipe2Name");
  var container = document.querySelector(".container");

  nos.textContent = equipe1Name.value;
  eles.textContent = equipe2Name.value;

  container.style.cssText = "filter: blur(0)";
  editDiv.style.display = "none";
}

function resetar() {
  const editDiv = document.querySelector(".edit");
  var nos = document.getElementById("nos");
  var eles = document.getElementById("eles");
  var container = document.querySelector(".container");

  nos.textContent = "Nós";
  eles.textContent = "Eles";
  editDiv.style.display = "none";
  container.style.cssText = "filter: blur(0)";
}

function zerarJogo() {
  pontosEquipe1.textContent = 0;
  pontosEquipe2.textContent = 0;
}

function gerarMico() {
  const mico = document.querySelector(".mico");

  const micoRandom = micos[Math.floor(Math.random() * micos.length)];
  mico.textContent = micoRandom;
}

function novoJogo() {
  const divChampion = document.querySelector(".champion");
  divChampion.remove();
  var container = document.querySelector(".container");
  container.style.cssText = "filter: blur(0)";

  pontosEquipe1.textContent = 0;
  pontosEquipe2.textContent = 0;
}

function mostrarVitorias() {
  var container = document.querySelector(".container");
  container.style.cssText = "filter: blur(10px)";
  const equipesOrganizadas = equipesRegistradas.sort(function (a, b) {
    if (a.vitorias < b.vitorias) return 1;
    if (a.vitorias > b.vitorias) return -1;
    return 0;
  });

  body.insertAdjacentHTML(
    "afterbegin",
    `
  
  <div class="placar">
  <div class="placarCard">
    <h1>Placar</h1>
    <ul class="lideres" id="listaLider"></ul>
    <button class='novo' onclick="sair()">Sair</button>
  </div>
  </div>
  
  
  `
  );

  equipesOrganizadas
    .slice(0, 5)
    .reverse()
    .forEach((equi) => {
      const lista = document.getElementById("listaLider");

      lista.insertAdjacentHTML(
        "afterbegin",
        `

<li>
<span class="vitorias">${equi.vitorias}</span>
<span>${equi.nome}</span>
</li>


`
      );
    });
}

function sair() {
  var container = document.querySelector(".container");
  container.style.cssText = "filter: opacity(100%)";
  const placar = document.querySelector(".placar");

  placar.remove();
}
