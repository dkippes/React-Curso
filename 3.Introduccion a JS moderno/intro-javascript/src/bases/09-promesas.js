// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
import {getHeroeById} from './bases/08-exports';
import heroes from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => { // Se hace una peticion
//         const heroe = getHeroeById(2);
//         resolve(heroe); // Le transfie al then
//         // reject('No se pudo encontrar el heroe');
//         // resolve();
//     }, 2000);
// });
//
// promesa.then((heroe) => {
//     console.log('heroe:', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Se hace una peticion
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe); // Le transfie al then
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(4)
    .then(h => console.log(h))
    .catch(e => console.warn(e));