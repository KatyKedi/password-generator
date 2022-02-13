// Assignment code here
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetLower = alphabet.split("");

var alphabetUpper = [];
for (i = 0; i < alphabetLower.length; i++) {
  alphabetUpper += alphabetLower[i].toUpperCase();
}
alphabetUpper.split("");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = " !"+ '"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
special.split("");

var characters = {};

function generatePassword() {
  var length = chooseLength();
  chooseCharacters();
  var options = [];
  for (i = 0; i < length; i++) {
    if (characters.lowercase === true) {
      options += alphabetLower;
    }
    if (characters.uppercase === true) {
      options += alphabetUpper;
    }
    if (characters.numeric === true) {
      options += numbers;
    }
    if (characters.special === true) {
      options += special;
    }
  }
};

function chooseLength() {
  var lengthPrompt = window.prompt("Choose a length between 8 and 128 characters: ");

  if (lengthPrompt >= 8 || lengthPrompt <=128) {
    return lengthPrompt;
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
  else {
    characters.lowercase = lowercasePrompt;
    characters.uppercase = uppercasePrompt;
    characters.numeric = numericPrompt;
    characters.special = specialPrompt;
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
