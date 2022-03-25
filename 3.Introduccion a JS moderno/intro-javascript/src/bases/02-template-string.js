const nombre = 'Diego';
const apellido = 'Kippes';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} = ${ 1 + 1 }`;
console.log(nombreCompleto);

function getSaludo(nombre) { // Va a ser undefined si no se especifica
    return 'Hola Mundo, soy ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);