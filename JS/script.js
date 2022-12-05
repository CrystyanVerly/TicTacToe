let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".square");
let buttons = document.querySelectorAll("#btn-container");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let btnIA = document.querySelector("#against-ia");
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
        if (secondPlayer == btnIA) {
          // FUNÇÃO QUE INCREMENTA A JOGADA
          computerPLay();
          player2++;
        }
      } else {
        player2++;
      }
      // CHECA QUEM VENCEU
      checkWinCondition();
    }
  });
}

// VERIFICA SE SAO 2 PLAYER OU CONTRA IA

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    
    secondPlayer = btnIA;
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }
    setTimeout(function () {
      let container = document.querySelector(".container-velha");
      container.classList.remove("hide");
    }, 500);
  });
}

// DETECTA GANHADOR (8 possibilidades de vitória)
function checkWinCondition() {
  let b1 = document.getElementById("square_l1c1");
  let b2 = document.getElementById("square_l1c2");
  let b3 = document.getElementById("square_l1c3");
  let b4 = document.getElementById("square_l2c1");
  let b5 = document.getElementById("square_l2c2");
  let b6 = document.getElementById("square_l2c3");
  let b7 = document.getElementById("square_l3c1");
  let b8 = document.getElementById("square_l3c2");
  let b9 = document.getElementById("square_l3c3");

  // HORIZONTAL LINHA 1
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      // X VENCEU
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      // O VENCEU
      declareWinner("o");
    }
  }
  // HORIZONTAL LINHA 2
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      // X VENCEU
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      // O VENCEU
      declareWinner("o");
    }
  }
  // HORIZONTAL LINHA 3
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      // X VENCEU
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      // O VENCEU
      declareWinner("o");
    }
  }
  // VERTICAL COLUNA 1
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      // X VENCEU
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      // O VENCEU
      declareWinner("o");
    }
  }
  // VERTICAL COLUNA 2
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      // X VENCEU
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      // O VENCEU
      declareWinner("o");
    }
  }
  // VERTICAL COLUNA 3
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      // X VENCEU
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      // O VENCEU
      declareWinner("o");
    }
  }
  // DIAGONAL ESQUERDA PARA DIREITA
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      // X VENCEU
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      // O VENCEU
      declareWinner("o");
    }
  }
  // DIAGONAL DIREITA PARA ESQUERDA
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      // X VENCEU
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      // O VENCEU
      declareWinner("o");
    }
  }
  // DEU VELHA
  let counter = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }
  if (counter == 9) {
    declareWinner("Deu VELHA!");
  }
}

// LIMPA O JOGO, DECLARA O VENCEDOR E ATUALIZA O PLACAR
function declareWinner(winner) {
  let scoreboardX = document.querySelector(".scoreboard-1");
  let scoreboardO = document.querySelector(".scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "O jogador 1 venceu!";
  } else if (winner == "o") {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = "O jogador 2 venceu!";
  } else {
    msg = "Deu VELHA!";
  }
  // EXIBE MENSAGEM
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");
  // ESCONDE MENSAGEM
  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 1500);
  // ZERA A PARTIDA:
  player1 = 0;
  player2 = 0;
  // REMOVER O X e o O
  let boxesToRemove = document.querySelectorAll(".square div");
  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}
// EXECUTA  A LÓGICA DA JOGADA DO CPU
function computerPLay() {
  let cloneO = o.cloneNode(True);
  counter = 0;
  filled = 0;
  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
    // SÓ PREENCHE SE ESTIVER VAZIO O FILHO
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
    // CHECA QUANTAS ESTÃO PREENCHIDAS  
    } else {
      filled++;
    }
  }
  if(counter == 0 && filled < 9) {
    computerPLay();
  }
}
