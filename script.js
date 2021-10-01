//Received tutoring help from assigned tutor

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character arrays
var parameters = []; //empty array which will hold one or all of the character types if selected
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCase = ['1','2','3','4','5','6','7','8','9','0'];
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "/"];

function generatePassword() {
  //Variable to store password length
  var passwordLength = parseInt(prompt('How long do you want your password to be? (Enter between 8 and 128 characters)'));

  //Conditional statement to check password has at least 8 characters
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('How long do you want your password to be? (Enter between 8 and 128 characters)'));
  }

  //Variable to store lowercase characters
  var lowerCaseChoice = confirm('Does your password have a lowercase character?');
  if (lowerCaseChoice === true) {
    parameters = parameters.concat(lowerCase);
  }
  //Variable to store uppercase characters
  var upperCaseChoice = confirm('Does your password have a uppercase character?');
  if (upperCaseChoice === true) {
    parameters = parameters.concat(upperCase);
  }

  //Variable to store numerical characters
  var numberChoice = confirm('Does your password have a numbercase character?');
  if (numberChoice === true) {
    parameters = parameters.concat(numberCase);
  }

  //Variable to store special characters
  var specialChoice = confirm('Does your password have a special character?');
  if (specialChoice === true) {
    parameters = parameters.concat(specialCase);
  };

var result = []


  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * parameters.length);
    var possibleCharacter = parameters[randomIndex]

    result.push(possibleCharacter);
  }

  /*
  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < generatePassword.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
*/

  //Function that generates random password
  var generatedPassword = result.join("");
  return generatedPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 console.log(password);
 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

