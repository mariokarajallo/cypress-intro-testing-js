/// <reference types="cypress" />;

import { clear } from "console";

describe("Muestra los campos de la cita y edita", () => {
  it("carga el formulario", () => {
    cy.visit("/");
    //cargamos el nombre de la mascota
    cy.get("[data-cy=mascota-input]").type("Frodo");
    //cargamos el nombre de la propietario
    cy.get("[data-cy=propietario-input]").type("Javier");
    //cargamos el telefono
    cy.get("[data-cy=telefono-input]").type("111 333");
    //cargamos la fecha
    cy.get("[data-cy=fecha-input]").type("2023-06-14");
    //cargamos hora
    cy.get("[data-cy=hora-input]").type("10:30");
    //cargamos sintomas
    cy.get("[data-cy=sintomas-input]").type("Duerme mucho");

    //boton crear formulario
    cy.get("[data-cy=boton-crear]").click();

    // verificar que existe el titulo en seccion de citas
    cy.get("[data-cy=titulo-citas]")
      .invoke("text")
      .should("equal", "Administra tus Citas");

    // seleccionar la alerta al enviar campos
    cy.get("[data-cy='titulo-alerta']")
      .invoke("text")
      .should("equal", "Se agrego Correctamente");

    // seleccionar la alerta y verificar clase de alerta
    cy.get("[data-cy='titulo-alerta']").should("have.class", "alert-success");
  });

  it("edita el formulario", () => {
    cy.visit("/");
    //boton editar formulario
    cy.get("[data-cy=boton-editar]").click();

    // editar nombre mascota
    cy.get("[data-cy=mascota-input]").clear().type("Frodito");

    //boton guardar formulario
    cy.get("[data-cy=boton-crear]").click();

    // seleccionar la alerta/mensaje de editado correctamente y verificar que exista clase de alerta
    cy.get("[data-cy='titulo-alerta']").should("have.class", "alert-success");
  });
});
