const cells =
    document.querySelectorAll(".cell");

const difficultySelect =
    document.getElementById(
        "difficulty"
    );

const playAgainBtn =
    document.getElementById(
        "playAgainBtn"
    );

let currentPlayer = "X";

let gameOver = false;

renderStats();

cells.forEach(cell => {

    cell.addEventListener(
        "click",
        handleCellClick
    );

});

function handleCellClick(event){

    if(gameOver){

        return;
    }

    if(currentPlayer !== "X"){

        return;
    }

    const index =
        parseInt(
            event.target.dataset.index
        );

    makeMove(index);
}

function makeMove(index){

    if(gameOver){

        return;
    }

    if(board[index] !== ""){

        return;
    }

    board[index] =
        currentPlayer;

    cells[index].textContent =
        currentPlayer;

    if(currentPlayer === "X"){

        cells[index].classList.add(
            "player-x"
        );

    }else{

        cells[index].classList.add(
            "player-o"
        );

    }
    // ======================================
// SONIDO DE VICTORIA
// ======================================

function playVictorySound(){

    const audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();

    const oscillator =
        audioContext.createOscillator();

    const gainNode =
        audioContext.createGain();

    oscillator.connect(
        gainNode
    );

    gainNode.connect(
        audioContext.destination
    );

    oscillator.type =
        "triangle";

    oscillator.frequency.setValueAtTime(
        523.25,
        audioContext.currentTime
    );

    oscillator.frequency.linearRampToValueAtTime(
        659.25,
        audioContext.currentTime + 0.15
    );

    oscillator.frequency.linearRampToValueAtTime(
        783.99,
        audioContext.currentTime + 0.30
    );

    gainNode.gain.setValueAtTime(
        0.2,
        audioContext.currentTime
    );

    gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.5
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.5
    );
}

    const result =
        checkWinner();

    if(result){

        finishGame(result);

        return;
    }

    currentPlayer =
        currentPlayer === "X"
        ? "O"
        : "X";

    updateTurnText(
        "Turno de " +
        currentPlayer
    );

    if(currentPlayer === "O"){

        setTimeout(() => {

            computerTurn();

        }, 500);

    }
}

function computerTurn(){

    if(gameOver){

        return;
    }

    const difficulty =
        difficultySelect.value;

    if(difficulty === "easy"){

        computerMoveEasy();

    }
    else if(difficulty === "medium"){

        computerMoveMedium();

    }
    else{

        computerMoveHard();

    }

    const result =
        checkWinner();

    if(result){

        finishGame(result);

        return;
    }

    currentPlayer = "X";

    updateTurnText(
        "Turno de X"
    );
}

function finishGame(result){

    gameOver = true;

    if(result === "EMPATE"){

        updateTurnText(
            "Empate"
        );

        showWinnerModal(
            "🤝",
            "Empate",
            "Nadie ganó esta ronda."
        );
    }
    else if(result === "X"){

        updateTurnText(
            "Ganó X"
        );

        showWinnerModal(
            "🏆",
            "¡Felicidades!",
            "Has derrotado a la computadora."
        );
    }
    else if(result === "X"){

    updateTurnText(
        "Ganó X"
    );

    playVictorySound();

    showWinnerModal(
        "🏆",
        "¡FELICIDADES!",
        "Has derrotado a la computadora."
    );
}
}

document
.getElementById(
    "restartBtn"
)
.addEventListener(
    "click",
    restartGame
);

playAgainBtn.addEventListener(
    "click",
    () => {

        hideWinnerModal();

        restartGame();

    }
);

function restartGame(){

    board.fill("");

    cells.forEach(cell => {

        cell.textContent = "";

        cell.classList.remove(
            "player-x"
        );

        cell.classList.remove(
            "player-o"
        );

    });

    currentPlayer = "X";

    gameOver = false;

    updateTurnText(
        "Turno de X"
    );

    hideWinnerModal();
}