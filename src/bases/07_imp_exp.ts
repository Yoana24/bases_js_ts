
// IMPORT & EXPORTS
import Personas, { Editoriales } from "../Data/Personas"
import { persona } from "./02_objects";

export const idPropietarios = (id: number) => { //le digo entre comillas el dato que quiero filtrar de la lista
        return Personas.find((personaje => personaje.id === id) ?? {};
} //es una búsqueda de datos dentro de una página web
//Cuando alguien pone algo en el buscador pero no tenemos este valor o dato, 
//  ponemos ?? y seguido un objeto vacío {}
// de esta manera, la web no se cae pero tampoco enseña nada.

// VAMOS A FILTRAR DATOS AHORA

export const obtenerInfoPorProfesion(dominus: Editoriales) { 
    return Personas.filter (heros => heros.dominus === dominus)
} //Para cuando alguien busque y no pueda elegir escribir algo libremente y que de error
//entre parentesis escribes las opciones que pueden, en nuestro caso solo pueden 2 opciones: dc y marvel




