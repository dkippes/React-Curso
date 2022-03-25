// Variables y Constances
const nombre = 'Diego';
let apellido = 'Kippes';
let valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true) { // Fuera de scope se puede usar el mismo nombre
    let valorDado = 6;
    console.log(valorDado);
}

console.log(valorDado);
