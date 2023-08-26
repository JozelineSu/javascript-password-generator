/*
1. variables for length, lowercase, uppercase, numeric, special characters
2. create prompts for each varibale for the user to answer
3. validate users answers
4. password is generated
4. password is shown on screen

What length do you want your password to be? (8 - 128 characters)
  if length < 8 input is invalid
    give error message
  if length length === 8 && length >= 128 input is valid
    proceed to next prompt
Do you want to include lowercase letters? 
  if yes proceed
  if no proceed
  same for the rest of the charactaer types
  if no characters types are selected user should get an alert
  "At least one character type should be selected to create a password. Please try again."
  return to screen with button
*/

// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = 8;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = 8;
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?", "/", "[", "]", "{", "}", "<", ">", "."];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; // the var password holds a generatePassword function the var passwordText connects us to the password id in index html, and this line gives the vale of password text equal to the password var

}

function generatePassword() {
  






}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when we clickon generate pasword, writePassword function will play out

