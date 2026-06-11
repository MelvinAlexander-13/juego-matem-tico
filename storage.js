// ================================
// GUARDAR ESTADÍSTICAS
// ================================

function saveStats(stats){

    localStorage.setItem(

        "tresEnRayaStats",

        JSON.stringify(stats)

    );

}

// ================================
// CARGAR ESTADÍSTICAS
// ================================

function loadStats(){

    try{

        const data =
            localStorage.getItem(
                "tresEnRayaStats"
            );

        if(data){

            const stats =
                JSON.parse(data);

            return {

                x:
                    stats.x || 0,

                o:
                    stats.o || 0,

                draw:
                    stats.draw || 0

            };

        }

    }catch(error){

        console.error(
            "Error cargando estadísticas:",
            error
        );

    }

    return {

        x:0,

        o:0,

        draw:0

    };

}

// ================================
// RESETEAR ESTADÍSTICAS
// ================================

function clearStats(){

    localStorage.removeItem(
        "tresEnRayaStats"
    );

}