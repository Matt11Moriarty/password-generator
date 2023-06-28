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



function generatePassword() {
  //arrays
  var lowerCase    = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase    = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers      = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

  //gets user input for the desired length of the password. Only takes numbers between a range
  function getPasswordLength() {
    var pwdLength = window.prompt("How long would you like your password to be? Must be a number between 8 and 128.");
    if (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {
      window.alert("Can't you read?");
        getPasswordLength();

    } else {
      return parseInt(pwdLength);
    }
  }
  //store the value of getPasswordLength()
  var chosenLength = getPasswordLength();
  console.log(chosenLength);
 
}


generatePassword();

