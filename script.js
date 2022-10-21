//pergunta quantas cartas estarao no jogo
let numcartas = prompt("quantas cartas?");
//certifica que apenas um valor par entre 4 e 14 sera selecionado
while(numcartas%2 !== 0 || numcartas < 4 || numcartas > 14 || typeof numcartas === String){
    numcartas = prompt("o numero de cartas tem que ser par e maior que 4!")
}

//array dos tipos de carta
let tipos = ["tripletsparrot.gif",
               "tripletsparrot.gif",
               "unicornparrot.gif",
               "unicornparrot.gif",
               "revertitparrot.gif",
               "revertitparrot.gif",
               "metalparrot.gif",
               "metalparrot.gif",
               "fiestaparrot.gif",
               "fiestaparrot.gif",
               "explodyparrot.gif",
               "explodyparrot.gif",
               "bobrossparrot.gif",
               "bobrossparrot.gif"];

//embaralha o array
function embaralha(array) {
     for (let i = numcartas - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
  }
}
//coloca as cartas dentro do ul
function distribui(num){
  for (let index = 0; index < num; index++) {
    const elemento = document.querySelector("ul");
    elemento.innerHTML = elemento.innerHTML + `
    <li>
    <img class = "virada" src="./imagens/${tipos[index]}" alt="virada" />
    <img class="naovirada" src="./imagens/back.png" alt="não virada" />
    </li>`;
  }
}
//chama as funçoes anteriores
embaralha(tipos);
distribui(numcartas);

const cartinha = document.querySelectorAll("li"); //seleciona todos os li
let cartavirada = false; //true se uma carta foi virada
let carta1, carta2; //primeira e segunda carta selecionada
let jogadas = 0; //vezes que clicou em uma carta
let pares = numcartas/2; //pares ainda desvirados
//remove ou adiciona a classe vira
function viracarta() {
  if(this.classList.contains('vira')){
    return;
  }
  this.classList.add('vira');
  jogadas++;
  if (cartavirada === false) {
    cartavirada = true;
    carta1 = this;
  }
  else{
  carta2 = this;
  cartavirada = false;
  verificapar();
  }
}
//checa se as cartas são iguais
function verificapar(){
  if (carta1.innerHTML === carta2.innerHTML) {
    parvirado();
  } 
    else {
      setTimeout(desvira, 1000);
    }
}
//deixa o par virado permanentemente
function parvirado() {
    carta1.removeEventListener('click', viracarta);
    carta2.removeEventListener('click', viracarta);
    pares--;
    if (pares === 0) {
      alert("Você ganhou em "+ jogadas + " jogadas!");
    }
}
//desvira as cartas
function desvira(){
    carta1.classList.remove('vira');
    carta2.classList.remove('vira');
}
//chama a funçao viracarta ao clicar em qualquer li
cartinha.forEach(cartinha => cartinha.addEventListener('click', viracarta));


