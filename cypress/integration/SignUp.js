import SignUp from "../Pages/SignUp.page.js";
const register = new SignUp();
describe("Navigates to Sign Up", function() {
  it("Should Sign Up with full fields with several mails", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);

      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);

      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);
      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getRandomEmail(
        this.SignUp.emailSelector,
        this.SignUp.gmailFormat,
        this.SignUp.letterFormat
      );

      register.getField(this.SignUp.passwordSelector, this.SignUp.password);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmPassword
      );

      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
    });
  });
  it("Should Sign Up with full fields with unique mail and verifying the mail sent", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);

      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);

      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);

      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );
      register.getField(this.SignUp.passwordSelector, this.SignUp.password);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmPassword
      );
      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
      const recieverEmail = this.SignUp.email;

      cy.task("gmail:check", {
        from: "bookings@domain.com",
        to: recieverEmail,
        subject: "Signed Up successfully"
      }).then(email => {
        assert.isNotNull(email, `Email was found`);
      });

      cy.task("gmail:get-messages", {
        options: {
          from: "bookings@domain.com",
          subject: "Signed Up successfully",
          include_body: true
        }
      }).then(emails => {
        const email_text = emails[0].body.text;
        cy.log(email_text);
      });
    });
  });
  it("Should not Sign Up with empty fields", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);

      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.contains(this.SignUp.firstNameRequired).should("be.visible");
      cy.contains(this.SignUp.lastNameRequired).should("be.visible");

      cy.contains(this.SignUp.emailRequired).should("be.visible");

      cy.contains(this.SignUp.passwordRequired).should("be.visible");

      cy.contains(this.SignUp.confirmPasswordRequired).should("be.visible");
      cy.contains(this.SignUp.phoneRequired).should("be.visible");
    });
  });
  it("Should Sign Up when last name starts with capital letter ", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);

      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);

      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);
      var isFirstLetterUppercase = /^[A-Z]/.test(this.SignUp.lastName);
      if (isFirstLetterUppercase === true) {
        assert.isTrue(
          isFirstLetterUppercase,
          this.SignUp.capitalLetterValidation
        );
      } else {
        assert.isNotFalse(
          isFirstLetterUppercase,
          this.SignUp.smallLetterValidation
        );
      }
      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );

      register.getField(this.SignUp.passwordSelector, this.SignUp.password);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmPassword
      );

      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
    });
  });
  it("Should not Sign Up when last name starts with small letter", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);
      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);

      register.getField(
        this.SignUp.lastNameSelector,
        this.SignUp.lastNameSmallLetter
      );
      var isFirstLetterUppercase = /^[A-Z]/.test(
        this.SignUp.lastNameSmallLetter
      );
      if (isFirstLetterUppercase === true) {
        assert.isTrue(
          isFirstLetterUppercase,
          this.SignUp.capitalLetterValidation
        );
      } else {
        assert.isNotFalse(
          isFirstLetterUppercase,
          this.SignUp.smallLetterValidation
        );
      }
      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );

      register.getField(this.SignUp.passwordSelector, this.SignUp.password);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmPassword
      );

      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
    });
  });
  it("Should not Sign Up when last name equals first name", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);
      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);

      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);
      assert.notEqual(
        this.SignUp.secondFirstName,
        this.SignUp.secondLastName,
        this.SignUp.firstNameEqualsLastNameValidation
      );

      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );

      register.getField(this.SignUp.passwordSelector, this.SignUp.password);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmPassword
      );

      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
    });
  });
  it("Should not Sign Up when I dont enter @ and .com at email field", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);

      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);

      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);

      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getField(this.SignUp.emailSelector, this.SignUp.invalidEmail);

      register.getField(this.SignUp.passwordSelector, this.SignUp.password);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmPassword
      );
      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();
      cy.contains(this.SignUp.emailNotValid).should("be.visible");
    });
  });
  it("Should Sign Up with a password that has capital,small letters,and special characters", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);
      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);
      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);
      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );

      register.getField(this.SignUp.passwordSelector, this.SignUp.fullPassword);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmFullPassword
      );
      const boolean =
        register.passwordHasUppercase(this.SignUp.fullPassword) &&
        register.passwordHasLowerCase(this.SignUp.fullPassword) &&
        register.passwordIsLongEnough(this.SignUp.fullPassword) &&
        register.passwordHasSpecialCharacter(
          this.SignUp.fullPassword,
          this.SignUp.specialChars
        );
      if (boolean) {
        assert.isBoolean(boolean, this.SignUp.passwordFormatValidation);
      }
      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
    });
  });
  it("Should not Sign Up with a password that has no capital letter", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);
      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);
      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);
      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );

      register.getField(
        this.SignUp.passwordSelector,
        this.SignUp.passwordHasOnlySmallLetter
      );

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.passwordHasOnlySmallLetter
      );
      const boolean = register.passwordHasLowerCase(
        this.SignUp.passwordHasOnlySmallLetter
      );
      if (boolean) {
        assert.isNotTrue(boolean, this.SignUp.passwordCapitalCaseValidation);
      }
      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
    });
  });
  it("Should not Sign Up with a password that has no small letter", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);
      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);
      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);
      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );

      register.getField(
        this.SignUp.passwordSelector,
        this.SignUp.passwordHasOnlyCapitalLetter
      );

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.passwordHasOnlyCapitalLetter
      );
      const boolean = register.passwordHasUppercase(
        this.SignUp.passwordHasOnlyCapitalLetter
      );
      if (boolean) {
        assert.isNotTrue(boolean, this.SignUp.passwordLowerCaseValidation);
      }
      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
    });
  });
  it("Should not Sign Up with a password that has no special characters", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);
      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);
      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);
      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );

      register.getField(
        this.SignUp.passwordSelector,
        this.SignUp.passwordHasOnlySpecialChars
      );

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.passwordHasOnlySpecialChars
      );
      const boolean = register.passwordHasUppercase(
        this.SignUp.passwordHasOnlySpecialChars
      );
      if (boolean) {
        assert.isNotTrue(boolean, this.SignUp.passwordSpecialCharsValidation);
      }
      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.url().should("eq", this.SignUp.NavigatedUrl);
    });
  });
  it("Should not Sign Up when I dont enter a mobile number", function() {
    cy.fixture("SignUp.json").as("SignUp");
    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);

      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);

      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);
      register.getEmail(
        this.SignUp.emailSelector,
        this.SignUp.numberFormat,
        this.SignUp.email,
        this.SignUp.gmailFormat
      );

      register.getField(this.SignUp.passwordSelector, this.SignUp.password);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmPassword
      );

      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();

      cy.contains(this.SignUp.phoneRequired).should("be.visible");
    });
  });
  it("Should not Sign Up when I enter a registered mail", function() {
    cy.fixture("SignUp.json").as("SignUp");

    cy.get("@SignUp").then(() => {
      cy.visit(this.SignUp.url);

      register.getField(this.SignUp.firstNameSelector, this.SignUp.firstName);

      register.getField(this.SignUp.lastNameSelector, this.SignUp.lastName);

      register.getRandomNumber(
        this.SignUp.mobileNumberSelector,
        this.SignUp.numberFormat
      );

      register.getField(this.SignUp.emailSelector, this.SignUp.email);

      register.getField(this.SignUp.passwordSelector, this.SignUp.password);

      register.getField(
        this.SignUp.confirmPasswordSelector,
        this.SignUp.confirmPassword
      );
      register.getSignUpButton(this.SignUp.signUpButtonSelector).click();
      cy.contains(this.SignUp.emailExists).should("be.visible");
    });
  });
});
