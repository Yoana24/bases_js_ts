
function salutate2(nomen: string) { //siempre has de saber si es un string o un numero
    return `Hola &{ nomen }`; 

} 

//Esto de arriba es una funcion. Ahora la vamos a convertir en una función de flecha:

const salutate = (nomen: string): string => {return `Hola ${ nomen }`}

const usuarios = (uid: string): {uid: string, nomen: string} => ({ //Se añaden unos paréntesis para que no se confunda con una función, sino que dentro hay un objeto
    return {
        uid: 'upv-02',
        nombre: 'Yoas'
    }
})

const uid = (uid: string) =>{
    uid //aquí por ejemplo, no sale uid: uid porque es igual. Ejemplo: cuando una funcion tiene l mismo nombre que otra cosa en java que a veces da error
}

const primos: {id: number, nomen: string} = [ //esto es una lista de objetos con sus valores.
    {
        id: 1,
        nomen: 'Yowi',
        profile: 'artist'
    },

    {
        id: 2,
        nomen: 'Stely',
        profile: 'programmer'
    }
];

const familia = primos = primos.find( item => item.id === 1 ) //asi encuentra el que tiene los items que dices