// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = 8;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?", "/", "[", "]", "{", "}", "<", ">", "."];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return
};

function generatePassword() {
  var newPassword = [];  
  var length = parseInt(prompt("What length do you want the password to be? (8 - 128 characters)"));
    if (length < 8 || length > 128) {
      alert("Please choose a number between 8 and 128");
      return;
    };

  var lowercaseInput = confirm("Do you want lowercase letters included in your password? (Ok = yes & Cancel = no)");
    if (lowercaseInput === true) {
      newPassword = newPassword.concat(lowerCase);
    }
  var uppercaseInput = confirm("Do you want UPPERCASE letters included in your password? (Ok = yes & Cancel = no)");
    if (uppercaseInput === true) {
      newPassword = newPassword.concat(upperCase);
    }
  var numberInput = confirm("Do you want to include numbers in your password? (Ok = yes & Cancel = no)");
    if (numberInput === true) {
      newPassword = newPassword.concat(number);
    }
  var specialCharInput = confirm("Do you want to include special characters in your password? (Ok = yes & Cancel = no)");
    if (specialCharInput === true) {
      newPassword = newPassword.concat(specialChar);
    }
   
  if (lowercaseInput === false && uppercaseInput === false && numberInput === false && specialCharInput === false) {
    alert("Please click 'Ok' for one option to generate a password.");
    return;
  };

  var userPassword = "";
  for (var i = 0; i < length; i++) {
    var randomizePassword = [Math.floor(Math.random() * newPassword.length)];
    userPassword = userPassword + newPassword[randomizePassword];
  }
  return userPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


