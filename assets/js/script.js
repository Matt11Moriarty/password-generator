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
    if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
      window.alert("Invalid input. Please enter a number between 8 and 128.");
      return getPasswordLength(); // Return the recursive call
    } else {
      return parseInt(pwdLength); // Convert to number and return
    }
  }
  
  var chosenLength = getPasswordLength();
  console.log(chosenLength);

  //what character types will be included
  function charSelection () {
    var pwdSelectionArray = [];
    //get the users inputs
    var incUpper = window.confirm('Include upper case letters?');
    var incLower = window.confirm('Include lower case letters?');
    var incSpec  = window.confirm('Include special characters?');
    var incNums  = window.confirm('Include numbers?');
    //if they 
    if (incUpper || incLower || incSpec || incNums) {
      if (incUpper) {
        pwdSelectionArray = pwdSelectionArray.concat(upperCase);
      }
      if (incLower) {
        pwdSelectionArray = pwdSelectionArray.concat(lowerCase);
      }
      if (incSpec) {
        pwdSelectionArray = pwdSelectionArray.concat(specialChars);
      } 
      if (incNums) {
        pwdSelectionArray = pwdSelectionArray.concat(numbers);
      }
    } else {
      charSelection();
    }
    return pwdSelectionArray;
  }
  
  var concatArray = charSelection();
  console.log(concatArray);
} 


generatePassword();


