
const numeriArray: number[] = [1,2,3,4]; //esto es el tipado para una lista. number[] es una lista
numeriArray.push(6);

console.log(numeriArray);

const numeriArray2 = [...numeriArray]; //va entre corchetes y 3 puntos porque no duplica la lista

numeriArray2.push(7) //añades este 

//la propiedad MAP transforma los valores de una lista con otros valores

const cambioLista = numeriArray.map( (valor) => {
    return valor * 200
 } )

 console.log(cambioLista)