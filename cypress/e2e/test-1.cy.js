/// <reference types="cypress" />;

describe("Carga la pagina principa;", () => {
  it("Carga la pagina principal", () => {
    cy.visit("/");

    //verificar el elemento y su texto
    cy.contains(
      "[data-cy=titulo-principal]",
      "Administrador de Pacientes de Veterinaria"
    );

    //verificar que exista
    cy.get("[data-cy=titulo-principal]").should("exist");

    // verificar que existe un elemento y contenga un texto
    cy.get("[data-cy=titulo-principal]")
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");

    // texto citas
    // verificar que existe el texto de citas
    cy.get("[data-cy=titulo-citas]")
      .invoke("text")
      .should("equal", "No hay citas, comienza creando una cita");

    // verificar que existe el texto de citas y que NO sea igual a ....
    cy.get("[data-cy=titulo-citas]")
      .invoke("text")
      .should("not.equal", "otro titulo de citas");
  });
});
