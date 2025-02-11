
//Las promesas es como codigo asíncrono, que tu app está esperando que le lleguen
//datos de algun sitio y tú le dices que cuando lleguen los datos los guarde. Automáticamente
//Y hay 2 maneras: 1: que lleguen los datos y los guarde mientras tu app sigue funcionado
// 2: o que durante ese proceso se pause un momento. Es la que haremos nosotros:

import { Heroes } from "../Data/Personas";
import { idPropietarios, obtenerInfoPorProfesion } from "./07_imp_exp";

new Promise( (resolve, reject) => { //es un objeto con una funcion (resolve)
    resolve('Mi amigo cumplió'); 
    reject('No me pagó :(')
}).then(msg => console.log(msg))  ; //then es en el caso de que haya salido bien
//el msg se recibe lo ultimo porque primero ejecuta lo demás, ya luego el dato de la promesa

//las promesas pueden ir bien o que salgan mal: resolve bien y reject mal

const funcionAsincrona = (id: number): Promise<Heroes> =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const funcion = idPropietarios(id);

            if (funcion) {
                resolve(heros as Heroes)
            } else{
                reject(`Heroe: #${ id} no ha sido encontrado`)
            }

           // heros ? resolve(heros as Heroes): reject(`Heroe: #${ id} no ha sido encontrado`)
           // esto se hace en una linea que es lo mismo que lo de arriba
        }, 1500)
    })
}  //esta funcion está devolviendo el id de los datos que hemos traido y nos lo dará según lo que busquemos
// en el caso que no se cumpla, el reject, cargará el mensaje que hemos puesto

obtenerInfoPorProfesion(100).then(Heros => console.log('El nombre es ${heros.nomen}'))
.catch(msg => console.log(msg));
