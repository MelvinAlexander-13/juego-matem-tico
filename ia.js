// ======================================
// IA FÁCIL
// ======================================

function computerMoveEasy(){

    const emptyCells = [];

    board.forEach((cell,index)=>{

        if(cell === ""){

            emptyCells.push(index);
        }

    });

    if(emptyCells.length === 0){

        return;
    }

    const randomIndex =
        emptyCells[
            Math.floor(
                Math.random() *
                emptyCells.length
            )
        ];

    placeComputerMove(
        randomIndex
    );
}

// ======================================
// IA MEDIA
// ======================================

function computerMoveMedium(){

    let move =
        findWinningMove("O");

    if(move !== -1){

        placeComputerMove(move);

        return;
    }

    move =
        findWinningMove("X");

    if(move !== -1){

        placeComputerMove(move);

        return;
    }

    computerMoveEasy();
}

// ======================================
// IA DIFÍCIL
// ======================================

function computerMoveHard(){

    let move =
        findWinningMove("O");

    if(move !== -1){

        placeComputerMove(move);

        return;
    }

    move =
        findWinningMove("X");

    if(move !== -1){

        placeComputerMove(move);

        return;
    }

    if(board[4] === ""){

        placeComputerMove(4);

        return;
    }

    const corners =
        [0,2,6,8];

    const availableCorners =
        corners.filter(
            index =>
                board[index] === ""
        );

    if(
        availableCorners.length > 0
    ){

        const randomCorner =
            availableCorners[
                Math.floor(
                    Math.random() *
                    availableCorners.length
                )
            ];

        placeComputerMove(
            randomCorner
        );

        return;
    }

    const sides =
        [1,3,5,7];

    const availableSides =
        sides.filter(
            index =>
                board[index] === ""
        );

    if(
        availableSides.length > 0
    ){

        const randomSide =
            availableSides[
                Math.floor(
                    Math.random() *
                    availableSides.length
                )
            ];

        placeComputerMove(
            randomSide
        );

            return;
    }

    computerMoveEasy();
}

// ======================================
// BUSCAR JUGADA GANADORA
// ======================================

function findWinningMove(player){

    for(
        const combo
        of winningCombinations
    ){

        const [a,b,c] =
            combo;

        const values = [

            board[a],
            board[b],
            board[c]

        ];

        const playerCount =
            values.filter(
                value =>
                    value === player
            ).length;

        const emptyCount =
            values.filter(
                value =>
                    value === ""
            ).length;

        if(

            playerCount === 2 &&
            emptyCount === 1

        ){

            if(board[a] === ""){

                return a;
            }

            if(board[b] === ""){

                return b;
            }

            if(board[c] === ""){

                return c;
            }
        }
    }

    return -1;
}

// ======================================
// COLOCAR MOVIMIENTO IA
// ======================================

function placeComputerMove(index){

    board[index] = "O";

    const cell =
        document.querySelector(
            `[data-index="${index}"]`
        );

    cell.textContent = "O";

    cell.classList.add(
        "player-o"
    );
}