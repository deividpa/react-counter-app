import { getImagen } from "../../base/11-async-await";

describe("Pruebas con Async y Await", () => {
  test("1. Debe de retornar la url del gif", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });
});
