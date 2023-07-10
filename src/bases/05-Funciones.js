// functions en js

const saludar = function saludar(nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar);

console.log(saludar2("Messi"));

console.log(saludar3("Ojo"));

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();
console.log(user);

// Tarea

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Alejandro");
console.log(usuarioActivo);

// Solucion
export const getUserOnline = (name) => ({
  uid: "ABC123",
  username: name,
});

const userOnline = getUserOnline("Wesfrogh");
console.log(userOnline);
