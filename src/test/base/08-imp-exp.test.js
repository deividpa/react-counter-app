import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", () => {
  test("Debe de retornar un Heroe por ID", () => {
    const idEval = 1;
    const heroe = getHeroeById(idEval);

    const heroeData = heroes.find((h) => {
      //console.log("Heroe: " + JSON.stringify(h));
      return h.id === idEval;
    });

    expect(heroe).toBe(heroeData);
  });

  test("Debe de retornar un undefined en caso de que no exista un heroe con dicho ID", () => {
    const idEval = 100;
    const heroe = getHeroeById(idEval);

    expect(heroe).toBe(undefined);
  });

  test("Debe de retornar un arreglo con los Heroes de DC", () => {
    const ownerEval = "DC";
    const heroesByOwner = getHeroesByOwner(ownerEval);

    const heroesResponse = heroes.filter((el) => {
      return el.owner === ownerEval;
    });

    expect(heroesByOwner).toEqual(heroesResponse);
  });

  test("Debe de retornar un arreglo con los Héroes de Marvel", () => {
    const ownerEval = "Marvel";
    const heroesByOwner = getHeroesByOwner(ownerEval);

    const heroesResponse = heroes.filter((el) => el.owner === ownerEval);

    expect(heroesByOwner).toEqual(heroesResponse);
  });

  test("Si no existe un owner, debe de retornar un arreglo vacío", () => {
    const ownerEval = "DCMarv";
    const heroesByOwner = getHeroesByOwner(ownerEval);

    // const heroesResponse = heroes.filter((el) => el.owner === ownerEval);

    expect(heroesByOwner).toEqual([]);
  });

  test("La longitud de heroes de Marvel debe ser igual a 2", () => {
    const ownerEval = "Marvel";
    const heroesByOwner = getHeroesByOwner(ownerEval);

    expect(heroesByOwner.length).toBe(2);
  });
});
