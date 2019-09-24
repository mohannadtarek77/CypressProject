class SignUp {
  getField(selector, text) {
    return cy.get(selector).type(text);
  }
  getRandomEmail(selector, gmailFormat, letterFormat) {
    var text = "";
    var possible = letterFormat;
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    cy.get(selector).type(text);
    cy.get(selector).type(gmailFormat);

    return text;
  }
  getEmail(selector, numberFormat, email, gmailFormat) {
    var text = "0";
    var possible = numberFormat;
    for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    email += text;
    cy.get(selector)
      .type(email)
      .type(gmailFormat);
  }
  getRandomNumber(selector, numberFormat) {
    var text = "0";
    var possible = numberFormat;
    for (var i = 0; i < 9; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    cy.get(selector).type(text);

    return text;
  }
  getSignUpButton(selector) {
    return cy.get(selector);
  }
  getCapitalLetters(letters) {
    return letters;
  }
  passwordHasUppercase(input) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] === input[i].toUpperCase()) {
        return true;
      }
    }
  }
  passwordHasLowerCase(input) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] === input[i].toLowerCase()) {
        return true;
      }
    }
  }
  passwordIsLongEnough(input) {
    for (var i = 0; i < input.length; i++) {
      if (input.length >= 8) {
        return true;
      }
    }
  }
  passwordHasSpecialCharacter(input, specialChars) {
    var specialCharacters = specialChars;
    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < specialCharacters.length; j++) {
        if (input[i] === specialCharacters[j]) {
          return true;
        }
      }
    }
  }
}
export default SignUp;
