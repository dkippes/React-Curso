// No es recomendado, se pude poner "saludar = 30" y se remplaza la funcion por un numero
// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar = function(nombre) { // Es mas recomendado
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Goku'));
console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Krilin'));

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

console.log(getUser());