let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".square");
let buttons = document.querySelectorAll("#btn-container");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// CONTADOR DE JOGADAS
let player1 = 0;
let player2 = 0;

// VERIFICA QUEM VAI JOGAR
function checkEl(player1, player2) {
  if (player1 == player2) {
    // x
    el = x;
  } else {
    // o
    el = o;
  }
  return el;
}

// EVENTO DE CLIQUE NAS BOXES
for (let i = 0; i < boxes.length; i++) {
  // QUANDO CLICA NA BOX
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    // VERIFICA SE JA TEM X OU O
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);
      // COMPUTAR JOGADA
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
    }
  });
}
