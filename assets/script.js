// Assignment code here
// Get references to the #generate element

function generatePassword() {
  var userInput = window.prompt("Enter desired length.");
  var passLength = userInput;

  if (isNaN(passLength)) {
    window.alert("You did not enter a number");
    return;
  }
  if (passLength < 8 || passLength > 128) {
    window.alert("Enter a number between 8-128.");
    return;
  }

  var useNumbers = window.confirm("Add numbers to your password?");
  var useSymbols = window.confirm("Add symbols to your password?");
  var useLowercase = window.confirm("Add lowercase letters to your password?");
  var useUppercase = window.confirm("Add uppercase letters to your password?");

  var temp = "";
  var password = "";

  if (useNumbers === true) {
    temp += "0123456789";
  }
  if (useSymbols === true) {
    temp += "!?$@#&*";
  }
  if (useLowercase === true) {
    temp += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (useUppercase === true) {
    temp += "qwertyuiopasdfghjklzxcvbnm".toUpperCase();
  }

  if (!useNumbers && !useSymbols && !useLowercase && !useUppercase)
    return generatePassword();

  for (var i = 0; i < passLength; i++) {
    password += temp[Math.floor(Math.random() * temp.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
document.querySelector("button").addEventListener("click", writePassword);
