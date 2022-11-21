import { render, screen } from "@testing-library/react";
import React from "react";
import PrimeraApp from "../Components/PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  test("Debe de mostrar el mensaje: Mi primera app: David Pérez", () => {
    const saludoTest = "Mi primera app: David Pérez";

    let saludo = "David Pérez";

    render(<PrimeraApp saludo={saludo} />);

    expect(screen.getByText(saludoTest)).toBeInTheDocument();
  });
});
