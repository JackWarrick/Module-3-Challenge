// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomCreator(x,y){
return Math.floor(Math.random()*(y-x)+x)
}

function randomItemFromList(list){
return list[randomCreator(0, list.length)]

}


function generatePassword(chooselower, chooseupper, choosenumbers, choosespecial, passwordLength){
 console.log ("you clicked the button");

 let generatedPassword = '';

 // 1. prompt user for password criteria
 //   a. password length between 8 and 128 characters
//    b. lowercase, uppercase, numbers, special characters
// 2. Don't allow for options outside of parameters

    var passwordLength = window.prompt("Please enter a number 8-128, to choose how many characters you want in the passsword.");

    if (passwordLength < 8 || passwordLength > 128){
      return;
    }
    else {
      window.alert ("Your password will be " + passwordLength + " characters long.")
    }

    var chooselower = window.confirm("Would you like to include lowercase letters in your password?");

    if (chooselower){
      window.alert("You have chosen to include lowercase letters.")
    }
    else{
      window.alert("You have chosen to leave out lowercase letters in your password.")
    }

    var chooseupper = window.confirm("Would you like to include uppercase letters in your password?");

    if (chooseupper){
      window.alert("You have chosen to include uppercase letters.")
    }
    else{
      window.alert("You have chosen to leave out uppercase letters in your password.")
    }

    var choosenumbers = window.confirm("Would you like to include numbers in your password?");

    if (choosenumbers){
      window.alert("You have chosen to include numbers.")
    }
    else{
      window.alert("You have chosen to leave out numbers in your password.")
    }

    var choosespecial = window.confirm("Would you like to include special characters in your password?");

    if (choosespecial){
      window.alert("You have chosen to include special characters.")
    }
    else{
      window.alert("You have chosen to leave out special characters in your password.")
    }

    if (chooselower === false && chooseupper === false && choosenumbers === false && choosespecial === false){
      return;
    }

    var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '+', '<', '>', '='];

    var userChoices = []

    if (chooselower){
      userChoices.push(lowers)
    }
    if (chooseupper){
      userChoices.push(uppers)
    }
    if (choosenumbers){
      userChoices.push(numbers)
    }
    if (choosespecial){
      userChoices.push(specials)
    }


//3. Generate password from criteria

for (var i = 0; i < passwordLength; i++){
  var randomPassword = randomItemFromList(userChoices)
  var randomCharacter = randomItemFromList(randomPassword)
  console.log(randomCharacter)
  generatedPassword += randomCharacter
}

console.log(generatedPassword)



// 4. Display generated password on page
 return generatedPassword;
}





// Write password to the #password input

 //This takes the output of the generatePassword function and gives it the ability to be written out in the password section
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// starter code above
// Create arrays for lowercase letters, uppercase letters, numbers, and special characters


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


/* //Random char creators - attempt

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()';
  return symbols[Math.floor(Math.random() * symbols.length)];

} */
