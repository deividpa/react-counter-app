import { getSaludo } from "../../base/02-template-string";

describe("-Testing: 02-template-string", () => {
  test("1. getSaludo() debe retornar: 'hola {nombre}'", () => {
    const nombre = "david";

    const outSaludo = getSaludo(nombre);
    expect(outSaludo).toBe("Hola " + nombre);
  });
});
