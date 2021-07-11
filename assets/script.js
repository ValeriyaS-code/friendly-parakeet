// Assignment code here
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var char = ['!','@','#','$','%','^','&','*','_','-','+','='];
var randomPassword = [];

var generatePassword = function() {
  window.alert("Please select which criteria you would like to use in your password");
  while (true)
  {
    var passwordLength = window.prompt("Please select a length of your password between 8 and 128 characters."); 
    if (passwordLength <= 8 || passwordLength > 128) {
      window.prompt ("Invalid input! Please select a length of your password between 8 and 128 characters.");
    } else 
      break;
  }
  var lowercaseConfirm = window.confirm ("Would you like to include lowercase letters in your password?");
  if (lowercaseConfirm) {
    randomPassword = randomPassword.concat(lowercase);
  }
  var uppercaseConfirm = window.confirm ("Whould you like to include uppercase letters in your password?");
  if (uppercaseConfirm) {
    randomPassword = randomPassword.concat(uppercase);
  }
  var numbersConfirm = window.confirm( "Whoudl you like to include numberic characters in your password?");
  if (numbersConfirm) {
    randomPassword = randomPassword.concat(numbers);
  }
  var charConfirm = window.confirm("Would you like to include special characters in your password?");
  if (charConfirm) {
    randomPassword = randomPassword.concat(char);
  }

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
