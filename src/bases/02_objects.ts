
export const persona = { //Un objeto siempre tiene estas llaves y dentro tiene: clave y valor. Le vas poniendo los datos que quieras.
cognomen: 'Ilianova',
aetas: 23,
ubiHabitat: { //Esto es un objeto dentro de otro objeto

    urbs: 'Madrid',
    zip: 46015,
    lat: 123456,
    lng: 7890
  }
}  // as const --> Si no quieres que se cambie absolutamente nada

persona.aetas = 19; //-> así se accede a las variables. La variable puede cambiar pero la constante no.
// No da error porque puedes cambiar las variables. El constante es persona, eso es lo que no peude cambiar. Pero sus atributos si.


const persona2 = {...persona}
persona2.cognomen = 'Ilieva';

