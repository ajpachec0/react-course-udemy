import { getHeroeById } from "./bases/08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //
    const MiHeroe = getHeroeById(2);
    //console.log(MiHeroe);
    // console.log("2 segundos despues");
    resolve(MiHeroe);
    //reject("No se pudo encontrar el heroe");
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log("Heroe", heroe.name);
  })
  .catch((err) => console.warn(err));
 */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //
      const MiHeroe = getHeroeById(id);
      //console.log(MiHeroe);
      // console.log("2 segundos despues");

      MiHeroe ? resolve(MiHeroe) : reject("No se pudo encontrar el heroe");

      //reject("No se pudo encontrar el heroe");
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
