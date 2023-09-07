// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var useLowerCase = window.confirm("Do you want to use lowercase letters in your password? Ok to use, Cancel to not")
  if (useLowerCase) {
    lowercase = "abcdefghijklmnopqrstuvwxyz";
  } else  {
    lowercase = "";
  }
  var useUpperCase = window.confirm("Do you want to use Uppercase letters in your pasword? Ok to use, Cancel to not")
  if (useUpperCase) {
    uppercase = "ABCDEGHIJKLMNOPQRSTUVWXYZ";
  } else  {
    uppercase = "";
  }

  var useSpecialChars = window.confirm("Do you want to use special characters in your pasword? Ok to use, Cancel to not")
  if (useSpecialChars) {
    specialchars = "!@#$%^&*()-_=`~<>/";
  } else  {
    specialchars = "";
  }

  var passwordLength = window.prompt("Enter a desired password length between 8-128, if you provide an invalid entry, password length defaults to 8")
  // you need to validate the entry here, make sure it's a number and doesn't contain letters or special characters 
  if ( passwordLength < 8 || passwordLength > 128){
   passwordLength = 8 
  }
  
  characterlist = uppercase + lowercase + specialchars
  if (characterlist.length == 0){
    // you need to handle them not entering any paramaters here
    alert("you need to select at least one of the options for password setup");
  }

  password = ""
  for (let i = 0; i < passwordLength; i++) {
    password += characterlist[Math.floor(Math.random() * characterlist.length)];
  }

  return password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






  //create variables to store data about my character
  // var lowerCase = ["a"]
  // var upperCase = ["A"]
  // var specialCharacters = [""]
  //prompt user for password length
  // give user a message "How long do you want your password to be"
  // add conditional statement for the length if (passwordLength >8) (between 8-128)
  // if (passwordLength <128 )
  //conditional statement to check for input value

  // use the confirm method for if user wants lowercase
  // do they want uppercase, numeric values, special characters.

  //create an object that looks like a json to store passwordOptions{length: ; specialCharacters} the user selected
  //this object will store the pasword length, and if the user selected to have special characters

  //for example if the user confirmed they want a number in their password create a function that will randomly select a 
  //from the array or the variable I created earlier
  // could use Math.random to select a random index from an array

  //make sure you have somewhere you can push the information to. from password options object
  // we usually push to an array, initally this array is empty
  // var generatedPassword = []
  // i want to push all my info to here
 // thinking about how I can join multiple strings together. concatenate