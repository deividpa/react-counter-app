import { getUser, getUsuarioActivo } from "./../../base/05-funciones";

describe("2. Prueba de funciones usando el toEqual", () => {
  test("2.1 getUser() debe retornar un objeto con dos atributos", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("2.2 getUserActivo() debe retornar un objeto con un nombre ingresado como parámetro de la funcion y un id", () => {
    const nombre = "David";

    const usuarioActivoTest = {
      uid: "ABC567",
      username: nombre,
    };

    const userActivo = getUsuarioActivo(nombre);

    expect(userActivo).toEqual(usuarioActivoTest);
  });
});
