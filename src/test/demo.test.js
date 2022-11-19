describe("- Pruebas en el archivo demo.text.js", () => {
  test("debe de ser iguales los strings", () => {
    const isActive = true;

    // 1. Inicialización
    const mensaje = "hola mundo";

    // 2. Estimulo
    const mensaje2 = "hola mundo";

    expect(mensaje).toBe(mensaje2);
    expect(isActive).toBe(true);
  });
});
