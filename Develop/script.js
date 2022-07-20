// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//declare function generatePassword()
// variables holding the different characters
// EX: uppercase = ["A", "B", "C"]
// selectedCharacters = []
// I need to use var passwordLength = prompt() to gather password criteria
// If password length is less than 8 stop function
// If password length is greater than 128 stop function
// confirm() for uppercase letters
// confirm() for lowercase letters
// confirm() for special characters
// confirm() for numeric characters
// once each confirm/prompt has been answered
// if confirms are true keep or get character type for the confirm
// if no confirm is true stop function
// if a confirm is true then concat related list to selected characters array
// ex - ['A', 'B', 'C', 'a','b','c', 1, 2, 3, #, @, $]
// for loop based on password length prompt (var passwordLength)
// use Math.floor(math.random() * selectedCharacters.length) to get random index of selectedCharacters
// return password text
// check out rock paper scissors solved version for a lot of hints on fixing it