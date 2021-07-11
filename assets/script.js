// Assignment code here
var numbers="0,1,2,3,4,5,6,7,8,9";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var generatePassword = function() {
  window.alert("Please select which criteria you would like to use in your password");
  while (true)
  {
    var passwordLength = window.prompt("Please select a length of your password between 8 and 128"); 
    if (passwordLength <= 8 || passwordLength > 128) {
      window.prompt ("Invalid input! Please select a length of your password between 8 and 128");
    }
    else
      break;
}
};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


