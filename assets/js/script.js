// Assignment code here
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",'"'];
var allNumbers = ["1","2","3","4","5","6","7","8","9","0"];

function howLong() {
  var passwordLength = window.prompt("How long do you want your password to be?");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null || isNaN(passwordLength)) {
    window.alert("You need to pick a number between 8 and 128!");
    return null
  }
  return passwordLength;
};

function passwordRequirements () {
  var saidYes = [];
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  if (lowerCase) {
     saidYes = saidYes.concat(lowerCaseLetters);
  }
  
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  if (upperCase) {
    saidYes = saidYes.concat(upperCaseLetters);
  }

  var useNumbers = window.confirm("Would you like to use numbers?");
  if (useNumbers) {
    saidYes = saidYes.concat(allNumbers)
  }

  var useSpecial = window.confirm("Would you like to use special characters?");
    if (useSpecial) {
    saidYes = saidYes.concat(specialCharacters);
  }

  return saidYes;
}

function generatePassword () {
  var passwordLength = howLong();
  if (passwordLength === null) {
    return null
  };
  var passwordReqs = passwordRequirements();
  console.log(passwordReqs);
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
