const persona = {
  nombre: "Leo",
  apellido: "Messi",
  edad: 33,
  direccion: {
    ciudad: "Barcelona",
    zip: 123456,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

console.log(persona);

const persona2 = { ...persona };

persona2.nombre = "Antonio";

console.log(persona2);
