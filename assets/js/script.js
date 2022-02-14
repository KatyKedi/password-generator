// Set up arrays to hold alphabet characters
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetLower = alphabet.split("");

var alphabetUpper = alphabet.toUpperCase();
alphabetUpper = alphabetUpper.split("");

// Set up an array to hold numeric characters
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Set up an array to hold special characters
var special = " !"+ '"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
special = special.split("");

// Set up an object to hold the Boolean values for each character type
var characters = {};

function generatePassword() {
  // Call chooseLength and chooseCharacters functions
  var length = chooseLength();
  chooseCharacters();

  // Set up an empty array to hold the options the user has selected
  var options = [];

  // Set up an empty string to hold the generated password
  var password = "";

  // Check if the user wanted the following criteria included in their password, then add those characters to options
  if (characters.lowercase === true) {
    options = options.concat(alphabetLower);
  }
  if (characters.uppercase === true) {
    options = options.concat(alphabetUpper);
  }
  if (characters.numeric === true) {
    options = options.concat(numbers);
  }
  if (characters.special === true) {
    options = options.concat(special);
  }

  // For the user's desired password length, choose each character randomly from the list of options
  for (i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * options.length);
    password += options[random];
  }

  // Return the password to be used in the writePassword function
  return password;
};

function chooseLength() {
  var lengthPrompt = window.prompt("Choose a length between 8 and 128 characters: ");

  // If the user enters an integer between 8 and 128, return their answer
  if (lengthPrompt >= 8 || lengthPrompt <=128) {
    return lengthPrompt;
  }
  // If the user enters an invalid entry, prompt them to re-enter
  else {
    window.alert("You must enter a valid number between 8 and 128.");
    return chooseLength();
  }
};

function chooseCharacters() {
  // Prompt the user to confirm or cancel each type of character
  var lowercasePrompt = window.confirm("Click OK to include lowercase characters.");
  var uppercasePrompt = window.confirm("Click OK to include uppercase characters.");
  var numericPrompt = window.confirm("Click OK to include numeric characters.");
  var specialPrompt = window.confirm("Click OK to include special characters.");

  // If none of the options are chosen, prompt user to choose again
  if (!lowercasePrompt && !uppercasePrompt && !numericPrompt && !specialPrompt) {
    window.alert("You must include at least one of the following: lowercase, uppercase, numeric, or special characters.");
    return chooseCharacters();
  }
  // Create key-value pairs with the character type as key, and the boolean representing the user's choice as the value
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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
