
const initialState ={
    recetas : [],
    copia :[],
}


function rootRecucer(state = initialState, {type, payload}){
    
    switch(type){

        case 'TRAER_RECETAS':
            return {
                ...state,
                recetas: payload,
                copia: payload
            }

        case 'FILTRO_POR_RECETA':
            return {
                ...state,
                recetas: state.recetas.filter(e => e.dietas.includes(payload.toLowerCase()))
            }
        case 'RENOVAR': 
            return {
                ...state,
                recetas: state.copia
            }
        case 'FILTRO_NOMBRE_RECETA':
            return {
                ...state,
                recetas: payload,
            }
            case 'MENOR_A_MAYOR':
            return {
                ...state,
                recetas: state.recetas.slice().sort((a, b) => a.nivel - b.nivel)
            }
            case 'MAYOR_A_MENOR':
            return {
                ...state,
                recetas: state.recetas.slice().sort((a, b) => b.nivel - a.nivel)
            }
            case 'ORDEN_ALFABETICO':
                return {
                    ...state,
                    recetas: state.recetas.slice().sort((a, b) => a.nombre.localeCompare(b.nombre)),
            }
            case 'ORDEN_ALFABETICO_Z_A':
                return {
                    ...state,
                    recetas: state.recetas.slice().sort((a, b) => b.nombre.localeCompare(a.nombre)),
            }
            default: return state;
    }
};
export default rootRecucer;
