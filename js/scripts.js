// Create two global arrays: one to hold the letters of the word
// (e.g. 'F', 'O', 'X'), and one to hold the current guessed
// letters (e.g. it would start with '_', '_', '_' and end with
// 'F', 'O', 'X').

var wordLetters = ["P", "I", "C", "N", "I", "C"];
var word1 = ["P", "I", "C", "N", "I", "C"];
var word2 = ["C", "O", "F", "F", "E", "E"];
var word3 = ["R", "I", "B", "B", "O", "N"];
var word4 = ["O", "R", "A", "N", "G", "E"];

var listOfWords = [];

listOfWords.push(word1, word2, word3, word4);
//console.log(listOfWords);


var guessedLetters = ["_", "_", "_", "_", "_", "_"];

document.getElementById("word").innerHTML = guessedLetters.join("");


// Write a function called guessLetter that will:
//   //Take one argument, the guessed letter.
//   //Iterate through the word letters and see if the guessed
//   letter is in there.
//   //If the guessed letter matches a word letter, changed the
//   guessed letters array to reflect that.
//   //When it's done iterating, it should log the current guessed
//   letters ('F__')
//   //and congratulate the user if they found a new letter.
//   //It should also figure out if there are any more letters that
//   need to be guessed,
//   //and if not, it should congratulate the user for winning the game.


function guessLetter(guess) {
  var goodGuess = false;
  for (var i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] == guess) {
      guessedLetters[i] = guess;
      goodGuess = true;
    }
  }
  if (guess === ""){
    document.getElementById("hint").innerHTML = "type a letter to make a guess.";
  }
  else{
    if (goodGuess) {
      document.getElementById("hint").innerHTML = "nice, you found a letter.";
      document.getElementById("word").innerHTML = guessedLetters.join("");
    } else {
      document.getElementById("hint").innerHTML = "try again.";
    }
  }
  
  if (JSON.stringify(guessedLetters) === JSON.stringify(wordLetters)){
    document.getElementById("hint").innerHTML =
    "nice job, you found the word!";
  }
  document.getElementById("myInput").value = "";
}



// takes input value and checks if it matches the word by
// running guessLetter
var input;

function doTheThing() {
  input = document.getElementById("myInput").value;
  guessLetter(input.toUpperCase());
//  console.log(input);
}

// triggers function when enter is clicked
input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("takeGuess").click();
  }
});

// picks a new word by indexing n in listOfWords array
var n = 0;

function newWord(){
   n += 1;
   if (n >= 4){
      n = 0;
    }
    //console.log(wordLetters);
    wordLetters = listOfWords[n];
    //console.log(wordLetters);
    
}


function resetWord(){
  guessedLetters = [];
  guessedLetters = ["_", "_", "_", "_", "_", "_"];
  //console.log(guessedLetters + " guess");

  document.getElementById("word").innerHTML = guessedLetters.join("");
  document.getElementById("hint").innerHTML = "take a guess";
  
  newWord();
}
