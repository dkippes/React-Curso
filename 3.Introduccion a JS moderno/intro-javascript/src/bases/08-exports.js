// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
import heroes, {owners} from '../data/heroes';

export const getHeroeById = (id) => heroes.find((h) => h.id === id);

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter((h) => h.owner === owner);

// console.log(getHeroesByOwner('DC'));