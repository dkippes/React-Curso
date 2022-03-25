// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado'
};

// const {nombre:nombre2, edad, clave} = persona;

// console.log(nombre2);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, edad, clave, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.5434,
            lng: -12.4534,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng} } = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);