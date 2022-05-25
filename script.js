// Assignment code here
function generatePassword() {
    var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");
  
  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }
  
    
    
  if (uppers && lowers && numbers && symbols) {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal; } else if (uppers && lowers && !numbers &&!symbols) {
      var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        metVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        metVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return metVal;
    } else if (uppers && !lowers && !numbers && !symbols) {
      
      var length = 8,
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        metVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        metVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return metVal;
  
    } else if (!uppers && lowers && !numbers && !symbols) {
  
      var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyz",
        metVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        metVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return metVal;
  
    } else if (!uppers && !lowers && numbers && !symbols) {
      var length = 8,
        charset = "1234567890",
        metVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        metVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return metVal;
    } else if (!uppers && !lowers && !numbers && symbols) {
      var length = 8,
        charset = "!@#$%^&*()",
        metVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        metVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return metVal;
    } else if (!uppers && !lowers && numbers && symbols) {
      var length = 8,
        charset = "1234567890!@#$%^&*()",
        metVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        metVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return metVal;
    } else if (!uppers && lowers && numbers && symbols) {
      var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal
    } else if (uppers && !lowers && numbers && symbols) {
      var length = 8,
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal
    }
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  