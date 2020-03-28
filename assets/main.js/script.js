// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Step 1 :  Create the password options function 
function choosePasswordOptions(){
  //prompt the use for how many characters they would like 
  //prompt()
  //ParseInt = take in an integer 
  var passwordLengthQuestion = parseInt(prompt("How many characters would you like"));

  //min 8 & max is 128
  //Conditional statement to check to assure an inout was placed
  //if there is nothing - isNaN
  if(isNaN(passwordLengthQuestion) === true ) {
      alert("input a valid number");
      return;
  }

  //Condtional statement to check to assure it is hgher the number 8

  if (passwordLengthQuestion < 8) {
      alert("you need 8 characters");
      return;
  }

  //Conditonal statemnt to assure it does not exceed 128 characters

  if (passwordLengthQuestion > 128) {
      alert("you can't exceed 128 characters");
      return;
  }

  //confirm the options
  //ask the user would they like lowercase, uppercase, number or special charcters (with a confirm function)

  //Here we create a variable that will prompt a confrim box 
  var numbers = confirm("click OK if you'd like to use numbers");
  //Here we create a variable that will prompt a confrim box 
  var lowerCase = confirm("click OK if you'd like to use lowercase letters");
  //Here we create a variable that will prompt a confrim box 
  var upperCase = confirm("click OK if you'd like to use uppercase letters");
  //Here we create a variable that will prompt a confrim box 
  var symbol = confirm("click OK if you'd like to use symbols");

  //Condtional that checks if the user includes any of the options above

  if(
      numbers === false &&
      lowerCase === false &&
      upperCase === false &&
      symbol === false
  ) {
      alert('You need to choose one');
      return;
  }
  //Create an object taht will store the users options 
  var userOptions = {
  passwordLengthQuestion: passwordLengthQuestion,
  numbers: numbers,
  lowerCase: lowerCase,
  upperCase: upperCase,
  symbol: symbol
  };
  console.log(userOptions);
  return userOptions;       
}


function getRandom(chars) {
  var randomIndex = Math.floor((Math.random() * chars.length))
  console.log(randomIndex);
  return chars[randomIndex];
}

function newGenerate() {
  //Create a var that will hold the previous options
  const userOpt = choosePasswordOptions();

  //Creating a variabel that hold the results (it is blank till the entire function is complete)
  var result = [];

  //Create a blank empty array that will hold the individaul options
  var posibleCharacters = [];


////// A few built-in functions you will need ::: .concat()   .join()     .push()    .addEventListener()       .querySelector()
//Step 1: Create an conditional statement that adds arrays of special characters into array of possible and push the array into your random function
    if (userOpt.symbol) {
      posibleCharacters = posibleCharacters.concat(specialCharacters);
      
    }

//Step 2: Create an conditional statement that adds arrays of lowercase characters into array of possible and push the array into your random function
    if (userOpt.lowerCase) {
    posibleCharacters = posibleCharacters.concat(lowerCasedCharacters);
    
    }

//Step 3: Create an conditional statement that adds arrays of uppercase characters into array of possible and push the array into your random function
    if (userOpt.upperCase) {
    posibleCharacters = posibleCharacters.concat(upperCasedCharacters);
    
    }

//Step 4: Create an conditional statement that adds arrays of numbers characters into array of possible and push the array into your random function
    if (userOpt.numbers) {
    posibleCharacters = posibleCharacters.concat(numericCharacters);
    
    }

    console.log('possible charcaters');
    console.log(posibleCharacters);



//Step 5: Create a for loop that will iterate over the password length - select random indices from the array of possible 
//push to seperateOptions array
    for (var i =0; i < userOpt.passwordLengthQuestion; i++) {
      var passwordCharacter = getRandom(posibleCharacters);

      result.push(passwordCharacter);
    }
    console.log(result);

    var passwordText = document.querySelector('#display');
    passwordText.value = result.join('');
  }

//Step 10: Create an event listener to generate the button 
    //gennerateBtn.addEventListener('click', writePassword);

     













