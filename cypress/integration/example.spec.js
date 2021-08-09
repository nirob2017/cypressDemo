import example from "../fixtures/example.json";

it("Error login", () => {
  cy.visit("/").as("getPage");
  cy.get('input[id="login-button"').click();
  cy.get('h3[data-test="error"]')
    .contains("Epic sadface: Username is required")
    .should("be.visible");
});

it("Successfully login", () => {
  cy.visit("/").as("getPage");
  cy.get('input[id="user-name"]').type(example.userName);
  cy.get('input[id="password"]').type(example.password);
  cy.get('input[id="login-button"').click();
  cy.url().should("include", "/inventory.html");
});
