const persona = { // Va a ser un prototype
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 54353445,
        lat: 14.43243,
        lng: 34.06455,
    }
};

console.log(persona);
// console.table(persona); Para verlo como forma de tabla

// Para clonar
const persona2 = persona; // Tiene el mismo espacio en memoria
persona2.nombre = 'Peter';

console.log(persona); // Se modificaria como peter
console.log(persona2);

const persona3 = {...persona}; // Para hacer un clon perfectamente, antes se modifico por Peter
persona3.nombre = 'Hugh';
console.log(persona);
console.log(persona3);