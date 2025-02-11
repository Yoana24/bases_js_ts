
//Desestructuración de listas

const personajes: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gotem']; //se ponen llaves cuadradas cuando es una lista de string

const [g, v, t, go] = personajes //entre las llaves tienes las variables que van por orden. La primera es g de goku y la 2a v de vegeta

//pero si yo quiero seleccionar el 2o, aunque ponga V no selecciona vegeta, sino goku, porque va por orden
//entonces si quiero seleccionar directamente el segundo, dejo un espacio

console.log( ,v) //aqui se ve que pongo un espacio

//cuando añades un elemento de más que no está en la const inicial:
// const [g, v, t, elementodemas = 'Yamoshi']
//le dices la variable = el nombre del elemento

const returnArray = () => {
    return[123, 'lista'];
}

const [numeros, listad] = returnArray(); //te devuelve