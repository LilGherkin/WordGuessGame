//1. Pick a random word.
//  a) Create an array of words to choose from with some common unifying theme.
//  b) Have the computer choose one at random using the array[math.floor(math.random() * array.length)];
//  c) Have it display to the user the number of letters that belong to the word as _.
//2. Take the player’s guess.
//  a) Set an onkeydown function to take in usuer input.
//3. Keep track of letters the player has guessed.
//  b) Have it check to see if the pressed key belonged to the computer's chosen word.
//  c) Have a number of guesses remaining that counts down from 5 to 0 for each incorrect letter.
//  d) Log any guessed letter that's incorrect.
//  e) Have it save fill in a _ if the letter belongs to the word.
//4. Check that the player’s guess is a valid letter.
//6. Show the player their progress.
//7. Finish when the player has guessed the word.
//  a) Increment the win counter.
    
    
// Array with list of words to choose from.
var Words = ["jazz", "nadir", "apex", "affix",
            "axiom", "blitz", "azure", "boggle", 
            "fuchsia", "gazebo", "gaze", "jaundice", 
            "mnemonic", "megahertz", "rhubarb", "topaz"];

// Creating variables to hold the number of wins, losses, and ties. 
var Wins = 0;
var Losses = 0;
const MaxGuesses = 9;

// Game state tracker to check if game is active. And variables that hold game data.
var CurrentWord; //Gets called later.
var GuessedLetters = [];
var GuessingWord = [];
var GameOn = false;
var GameFinished = false;
var RemainingGuesses = 0;

// Resets the game
function ResetGame() {
    RemainingGuesses = MaxGuesses;
    GameOn = false;

    // Choose a word, and clear previous guesses.
    CurrentWord = Math.floor(Math.random() * (Words.length));
    // Create the word to guess and clear it out.
    for (var i=0; i < Words.length[CurrentWord].length; i++) {
        GuessingWord.push("_");
    }
};

// Update scores that are readable by the player. Along with current word progress.
function UpdateDisplay(){
    document.getElementById("HumanScore").innerText = Wins;
    document.getElementById("WordToGuess").innerText = "";
    for (var i = 0; i < GuessingWord.length; i++) {
        document.getElementById("WordToGuess").innerText += GuessingWord[i];
    }
    document.getElementById("GuessesLeft").innerText = MaxGuesses;
    document.getElementById("GuessedLetters").innerText = GuessedLetters;
    if(MaxGuesses <=0) {
        GameFinished = true;
    }
};


// Determines which key is pressed and checks to see if A-Z and calls function below
document.onkeydown = function(event) {
    if(GameFinished) {
        ResetGame();
        GameFinished = false;
    } else {
        // Checks to see if A-Z was pressed: Code gotten from https://stackoverflow.com/questions/34687895/determine-if-a-letter-or-a-number-was-pressed-javascript
        if(event.keyCode >=65 && event.keyCode <= 90) {
            // Checks global function MakeGuess and converts input to lowercase letter.
            MakeGuess(event.key.toLowerCase());
        }
    }
};

// When a user presses A-Z this part runs. Checks to see if there are guesses remaining, and if game is on. 
function MakeGuess(letter) {
    if (MaxGuesses > 0) {
        if (!GameOn) {
            GameOn = true;
        }
        // Checks to see if letter has already been guessed before.
        if (GuessedLetters.indexOf(letter) === -1) {
            GuessedLetters.push(letter);
            CheckGuess(letter);
        }
    }
    // Updates user display and checks to see if user has won.
    UpdateDisplay();
    CheckWin();
};


// Checks input to find all every spot where it appears in the chosen word.
function CheckGuess(letter) {
    // Storage variable for letter positions.
    var Position = [];
    
    // Go through the computers word and check for guessed letter.
    for (var i = 0; i < Words[CurrentWord].length; i++) {
        if(Words[CurrentWord][i] === letter) {
            Position.push(i);
        }
    }
    // If the letter guessed doesn't belong, decrease guesses.
    if (Position.length <= 0) {
        MaxGuesses--;
    // If the letter belongs, replace underscores with the letter.
    } else {
        for (var i = 0; i < Position.length; i++) {
            GuessingWord[Position[i]] = letter;
        }
    }


};

function CheckWin() {
    if (GuessingWord.indexOf("_") === -1) {
        Wins++;
        GameFinished = true;
    }
};
