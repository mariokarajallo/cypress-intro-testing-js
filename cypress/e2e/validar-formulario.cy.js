/// <reference types="cypress" />;

describe("Valida un formulario", () => {
  it("submit al formulario y mostrar la alerta de error", () => {
    cy.visit("/");

    //accion submit de cypress
    cy.get("[data-cy=cy-formulario]").submit();

    // seleccionar la alerta al enviar campos vacios
    cy.get("[data-cy='titulo-alerta']")
      .invoke("text")
      .should("equal", "Todos los campos son obligatorios");

    // seleccionar la alerta y verificar clase de alerta
    cy.get("[data-cy='titulo-alerta']").should("have.class", "alert-danger");
  });
});
