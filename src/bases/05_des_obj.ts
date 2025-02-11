
const persona ={ //esto es un objeto con sus valores
    nomen: 'Yowi',
    aetas: 22,
    profile: 'artist',
    profesion: '3d modeling',
    sector: 'interiorismo'
}

interface Profesional { //Con una interfaz creas que sólo se puedan poner este tipo de valores. En nombre no podrás meter numero.
    nomen: string;
    aetas: number;
    profile: string;
    profesion: string;
    sector?: string; //esto es un valor opcional.
}

//  DESUSTRURACIÓN DE OBJETOS 
const { nomen, aetas, sector = 'Estudiante' } = persona; //esto es como si hubiera guardado 2 variables en una. Puedes sacar las variables que quieras, no todas.

// Como el sector es opcional, para que no cargue una palabra automática como "No contestado", haces que haga = "estudiante" y sale eso. 

const crearPersona = (args: any) => ({ //cuando devuelves un objeto se han de poner paréntesis sí o sí
    id: 46016,
    nombre: args.nomen,
    aetas: args.aetas,
    profile: args.profile,
    profesion: args.profesion
}) 