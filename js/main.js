// window.onload = () => {
//     "use strict";
//     if ("serviceWorker" in navigator) {
//         navigator.serviceWorker.register("./sw.js");
//     }
// };

const pontosEquipe1 = document.getElementById("pontosEquipe1");
const pontosEquipe2 = document.getElementById("pontosEquipe2");
const micos = ['Passar em Baixo da Mesa', 'Virar uma Estrelinha', 'Tirar uma foto constrangedora', 'Gravar um vídeo falando que perdeu pro ganhador', 'Novo Mico']
const body = document.querySelector('.fullscreen')



// pontosEquipe1.textContent = initialValue;

function carregar() {
  const equipe1Buttons = document.querySelectorAll(".button1");
  const equipe2Buttons = document.querySelectorAll(".button2");

  
  equipe1Buttons.forEach((botao) => {
    botao.onclick = function soma() {

        
      let initialValue = parseInt(pontosEquipe1.textContent);

      var resultado = initialValue + parseInt(botao.value);
if(resultado < 12){
    
      pontosEquipe1.textContent = resultado;}else{
        pontosEquipe1.textContent = 12;

        body.insertAdjacentHTML("afterbegin", `
        <div class="champion">

          <h1>Parabéns!</h1>
          <p >A equipe <span style="color:#ff2424;">${nos.textContent}</span> foi a vencedora</p>
          <span class="mico"></span>
          <img class="campeao" src="images/champion.svg" />
          <button class="botao_mico" onclick="gerarMico()">Gerar Mico</button>
          <button class="novo" onclick="novoJogo()">Novo Jogo</button>
        </div>
        
        
        
        `)


      }
    };
  });

  equipe2Buttons.forEach((botao) => {
   
    botao.onclick = function soma() {

        
      let initialValue = parseInt(pontosEquipe2.textContent);

      var resultado = initialValue + parseInt(botao.value);
if(resultado < 12){
      pontosEquipe2.textContent = resultado;}else{
        pontosEquipe2.textContent = 12;

        body.insertAdjacentHTML("afterbegin", `
  
        <div class="champion">

          <h1>Parabéns!</h1>
          <p >A equipe <span style="color:#ff2424;">${eles.textContent}</span> foi a vencedora</p>
          <span class="mico"></span>
          <img class="campeao" src="images/champion.svg" />
          <button class="botao_mico" onclick="gerarMico()">Gerar Mico</button>
          <button class="novo" onclick="novoJogo()">Novo Jogo</button>
        </div>
        
        
        
        `)


      }
    };
  });
}




function mostrarEditar(){


const editDiv = document.querySelector('.edit');
var container = document.querySelector('.container');

container.style.cssText = 'filter: opacity(30%)'

editDiv.style.cssText = `display: flex; 
flex-direction: column;
row-gap: 10px;
`


}


function editar(){
const editDiv = document.querySelector('.edit');
var nos = document.getElementById('nos')
var eles = document.getElementById('eles')
var equipe1Name = document.getElementById('equipe1Name')
var equipe2Name = document.getElementById('equipe2Name')
var container = document.querySelector('.container');

nos.textContent = equipe1Name.value
eles.textContent = equipe2Name.value


container.style.cssText = 'filter: opacity(100%)'
editDiv.style.display = 'none'


}

function resetar(){
    const editDiv = document.querySelector('.edit');
    var nos = document.getElementById('nos')
    var eles = document.getElementById('eles')
    var container = document.querySelector('.container');


    nos.textContent = "Nós"
    eles.textContent = "Eles"
    editDiv.style.display = 'none'
    container.style.cssText = 'filter: opacity(100%)'

}

function zerarJogo(){

pontosEquipe1.textContent = 0;
pontosEquipe2.textContent = 0;

console.log(Math.floor(Math.random() * 10 + 0))


}

function gerarMico(){

const mico = document.querySelector('.mico')


const micoRandom = micos[Math.floor(Math.random() * (micos.length))]
mico.textContent = micoRandom

console.log(micoRandom)


}

function novoJogo(){

const divChampion = document.querySelector('.champion')
divChampion.style.display = 'none'

pontosEquipe1.textContent = 0;
pontosEquipe2.textContent = 0;

nos.textContent = "Nós"
eles.textContent = "Eles"

}