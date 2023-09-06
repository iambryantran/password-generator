// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Lines 32-93 was provided by instructor during class

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function generatePassword(){
  var length = parseInt(prompt("Password Length"));

  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }

  var optionsArr = [];
  var password = " ";

  var hasLowerCase = confirm("Lowercase?");
  var hasUpperCase = confirm("Uppercase?");
  var hasNumbers = confirm("Numbers?");
  var hasSpecialCharacters = confirm("Special Characters?");

  // Create character array

  if (hasLowerCase) {
    optionsArr = optionsArr.concat(lowerCasedCharacters)
  }
  if (hasUpperCase) {
    optionsArr = optionsArr.concat(upperCasedCharacters)
  } 
  if (hasNumbers) {
    optionsArr = optionsArr.concat(numericCharacters)
  }
  if (hasSpecialCharacters) {
    optionsArr = optionsArr.concat(specialCharacters)
  }

  // Create for loop to choose password characters
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * optionsArr.length);
    password += optionsArr[randomIndex];
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
