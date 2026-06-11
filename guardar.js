// ================================
// CARGAR ESTADÍSTICAS
// ================================

let stats = loadStats();

// ================================
// ACTUALIZAR ESTADÍSTICAS
// ================================

function updateStats(winner){

    if(winner === "X"){

        stats.x++;

    }
    else if(winner === "O"){

        stats.o++;

    }
    else if(winner === "EMPATE"){

        stats.draw++;

    }

    saveStats(stats);

    renderStats();

}

// ================================
// REINICIAR ESTADÍSTICAS
// ================================

function resetStats(){

    stats = {

        x:0,

        o:0,

        draw:0

    };

    saveStats(stats);

    renderStats();

}

// ================================
// OBTENER ESTADÍSTICAS
// ================================

function getStats(){

    return stats;

}