describe("Navigates to Sign Up", function() {
  it("Should Sign Up with full fields with random mails", function() {
    cy.visit(
      "https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
    );

    cy.get("#identifierId")
      .click()
      .type("mohannadtarek7@gmail.com");
    cy.get(".ZFr60d").click({ force: true });
    cy.get("input[name=password]").type("Mohannad_123", { force: true });
    cy.contains("التالي").click({ force: true });
  });
});
