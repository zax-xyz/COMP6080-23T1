describe("app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should log in successfully", () => {
    const username = "admin";
    const password = "password";

    cy.get('input[name="username"]').focus().type(username);
    cy.get('input[name="password"]').focus().type(password);
    cy.get('button[type="submit"]').click();

    cy.get("p").then(p => {
      expect(p.text()).to.contain("logged in");
    });
  });

  it("should fail to log in", () => {
    const username = "admin";
    const password = "password123";

    cy.get('input[name="username"]').focus().type(username);
    cy.get('input[name="password"]').focus().type(password);
    cy.get('button[type="submit"]').click();

    cy.get("p").then(p => {
      expect(p.text()).to.contain("not logged in :(");
    });
  });
});
