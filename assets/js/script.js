// Assignment code here
function generatePassword() {
  chooseLength();
  chooseCharacters();

};

function chooseLength() {
  var lengthPrompt = window.prompt("Choose a length between 8 and 128 characters: ");

  if (lengthPrompt >= 8 || lengthPrompt <=128) {
    return;
  }
  else {
    window.alert("You must enter a valid number between 8 and 128.");
    return chooseLength();
  }
};

function chooseCharacters() {
  var lowercasePrompt = window.confirm("Click OK to include lowercase characters.");
  var uppercasePrompt = window.confirm("Click OK to include uppercase characters.");
  var numericPrompt = window.confirm("Click OK to include numeric characters.");
  var specialPrompt = window.confirm("Click OK to include special characters.");

  if (!lowercasePrompt && !uppercasePrompt && !numericPrompt && !specialPrompt) {
    window.alert("You must include at least one of the following: lowercase, uppercase, numeric, or special characters.");
    return chooseCharacters();
  }
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("click");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
