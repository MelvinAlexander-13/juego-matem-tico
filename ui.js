function renderStats(){

    document.getElementById(
        "scoreX"
    ).textContent = stats.x;

    document.getElementById(
        "scoreO"
    ).textContent = stats.o;

    document.getElementById(
        "scoreDraw"
    ).textContent = stats.draw;
}

function updateTurnText(text){

    document.getElementById(
        "turnText"
    ).textContent = text;
}

function showWinnerModal(
    icon,
    title,
    message
){

    document.getElementById(
        "winnerIcon"
    ).textContent = icon;

    document.getElementById(
        "winnerTitle"
    ).textContent = title;

    document.getElementById(
        "winnerMessage"
    ).textContent = message;

    document.getElementById(
        "winnerModal"
    ).classList.add(
        "show"
    );
}

function hideWinnerModal(){

    document.getElementById(
        "winnerModal"
    ).classList.remove(
        "show"
    );
}