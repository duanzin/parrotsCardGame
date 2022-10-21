//pergunta quantas cartas estarao no jogo
let numcartas = prompt("quantas cartas?");
//certifica que apenas um valor par entre 4 e 14 sera selecionado
while(numcartas%2 !== 0 || numcartas < 4 || numcartas > 14){
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
    elemento.innerHTML = elemento.innerHTML + `<div class="carta">
    <li class="naovirada">
    <img src="./imagens/back.png" alt="não virada" />
    </li>
    <li class="virada">
    <img src="./imagens/${tipos[index]}" alt="virada" />
    </li>
</div>`;
  }
}
embaralha(tipos);
distribui(numcartas);

