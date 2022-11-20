import { retornaArreglo } from "../../base/07-deses-arr";

describe("Prueba en desestructuración", () => {
  test("Debe de retornar un array con un string y un número", () => {
    const [letras, numeros] = retornaArreglo();
    expect(typeof letras).toBe("string");
    expect(letras).toBe("ABC");

    expect(typeof numeros).toBe("number");
    expect(numeros).toBe(123);
  });
});
