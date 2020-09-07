import { SET_CITY } from "../actions";
/**
 * para hacer uso de reducer las funciones deben ser copias
 * nunca se debe modificar el stado inicial, lo que se hace es 
 * generar una nueva copia a partir de la accion que genera cambio en e
 * el estado.
 */
export const city = (state, action) =>{
    switch(action.type){
        case SET_CITY:
            return{...state, city: action.value}
        default:
            return state;
    }
}