import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Se hará una prueba asíncrónica haciendo uso de Promesas y Jest", () => {
  test("Retorno de un heroe con funcion async", (done) => {
    let idEval = 1;

    getHeroeByIdAsync(idEval).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("Retorno de error al consultar un heroe inexistente", (done) => {
    let idEval = 20;

    getHeroeByIdAsync(idEval).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
