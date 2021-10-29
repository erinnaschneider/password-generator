// Assignment code here

function howLong() {
  var passwordLength = window.prompt("How long do you want your password to be?");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null || isNaN(passwordLength)) {
    window.alert("You need to pick a number between 8 and 128!");
  }
  return passwordLength;
};

function passwordRequirements () {
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  if (lowerCase) {
    
  }
}

function generatePassword () {
  var passwordLength = howLong();
  console.log(passwordLength);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
