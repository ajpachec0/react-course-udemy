/* import { heroes } from "./data/heroes";
 */
import { heroes } from "../data/heroes";

export const getHeroeById = (id) => {
  return heroes.find((ElMasCap) => ElMasCap.id === id);
};

//console.log(getHeroeById(5));

export const getHeroesByOwner = (owner) =>
  heroes.filter((dueno) => dueno.owner === owner);

// console.log(getHeroesByOwner("DC"));
