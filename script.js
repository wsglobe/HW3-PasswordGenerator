//define global variables:
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '()', '_', '+', '~', '`', '|', '}', '{', '[]', '\',': ','; ',' ? ',' >< ',', ','.',' / ',' - ','='];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

alert("Let's generate your password!");

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  alert("Let's generate your password!");
  //ask what user like to use for their password
  var passwordLength = prompt("How many characters would you like your password to have? It must be between 8-128 characters");
  var confirmLowerCase = confirm("Would you like to use lowercase characters?");
  var confirmUpperCase = confirm("Would you like to use uppercase characters?");
  var confirmNumeric = confirm("would you like to use numeric characters?");
  var confirmSpecial = confirm("Would you like to use special characters?");
  //Decide what arrays to pull from based on the user's answers by using conditionals
  if (confirmLowerCase === true) {
    return lowerCaseCharacters;
  } else if (confirmUpperCase === true) {
    return upperCaseCharacters;
  } else if (confirmNumeric === true) {
    return numericCharacters;
  } else if (confirmSpecial === true) {
    return specialCharacters
  } else {
    alert("Choose again!");
  }
}