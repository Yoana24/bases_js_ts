

export interface Heroes {
    id: number;
    nombre: string;
    editorial: 'DC' | 'Marvel';
}  //En las interfaces si que se pone punto y coma, no solo coma como en los objetos
// y en editorial tambien puedes en vez de decir "string" le dices concretamente cuales son

export type Editoriales = 'DC' | 'Marvel';

const heroum = [
    {
        id: 1,
        nomen: 'Batman',
        dominus: 'DC'
    },
    {
        id: 2,
        nomen: 'Spiderman',
        dominus: 'Marvel'
    },
    {
        id: 3,
        nomen: 'Superman',
        dominus: 'DC'
    },
    {
        id: 4,
        nomen: 'Flash',
        dominus: 'DC'
    },
    {
        id: 5,
        nomen: 'Wolverine',
        dominus: 'Marvel'
    },
  ]; //esto es una lista porque tiene [] y de objetos porque están  entre {}

 export const propietarios = ['DC', 'Marvel'] //cuando le pones export delante, puedes exportar esta lista en otro doc. Sin esto delante, no se puede

 //Esto es la exportacion normal. Ahora nos enseña la que es por defecto:

 export default propietarios; 