// ================================
// TABLERO DEL JUEGO
// ================================

const board = [
    "", "", "",
    "", "", "",
    "", "", ""
];

// ================================
// COMBINACIONES GANADORAS
// ================================

const winningCombinations = [

    // Horizontales
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Verticales
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonales
    [0, 4, 8],
    [2, 4, 6]

];

// ================================
// VERIFICAR GANADOR
// ================================

function checkWinner() {

    for (const combination of winningCombinations) {

        const [a, b, c] = combination;

        if (

            board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]

        ) {

            highlightWinningCells(
                combination
            );

            return board[a];
        }
    }

    if (!board.includes("")) {

        return "EMPATE";
    }

    return null;
}

// ================================
// RESALTAR GANADORES
// ================================

function highlightWinningCells(
    combination
) {

    combination.forEach(index => {

        document
            .querySelector(
                `[data-index="${index}"]`
            )
            .classList.add(
                "winner-cell"
            );

    });

}

// ================================
// LIMPIAR GANADORES
// ================================

function clearWinningCells() {

    document
        .querySelectorAll(
            ".cell"
        )
        .forEach(cell => {

            cell.classList.remove(
                "winner-cell"
            );

        });

}

// ================================
// REINICIAR TABLERO
// ================================

function resetBoard() {

    for (

        let i = 0;

        i < board.length;

        i++

    ) {

        board[i] = "";

    }

    clearWinningCells();
}

// ================================
// OBTENER TABLERO
// ================================

function getBoard() {

    return board;
}

// ================================
// VALIDAR CELDA VACÍA
// ================================

function isCellEmpty(index) {

    return board[index] === "";
}

// ================================
// COLOCAR JUGADA
// ================================

function placeMove(
    index,
    player
) {

    if (

        isCellEmpty(index)

    ) {

        board[index] =
            player;

        return true;
    }

    return false;
}