// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = 8;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?", "/", "[", "]", "{", "}", "<", ">", "."];
var newPassword = [];  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

function generatePassword() {
  var length = parseInt(prompt("What length do you want the password to be? (8 - 128 characters)"));
    if (length < 8 || length > 128) {
      alert("Please choose a number between 8 and 128");
      return;
    };

  var lowerCase = confirm("Do you want lowercase letters included in your password? (Ok = yes & Cancel = no)");
  var upperCase = confirm("Do you want UPPERCASE letters included in your password? (Ok = yes & Cancel = no)");
  var number = confirm("Do you want to include numbers in your password? (Ok = yes & Cancel = no)");
  var specialChar = confirm("Do you want to include special characters in your password? (Ok = yes & Cancel = no)");

    if (lowerCase === false && upperCase === false && number === false && specialChar === false) {
      alert("Please click 'Ok' for one option to generate a password.");
      return;
    };

  if (lowerCase) {newPassword += lowerCase}
  if (upperCase) {newPassword += upperCase;}
  if (number) {newPassword += number;}
  if (specialChar) {newPassword += specialChar;}

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


