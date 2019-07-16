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
var Words = ["jazz", "nadir", "apex", "affix" 
            "axiom", "blitz", "azure", "boggle", 
            "fuchsia", "gazebo", "gaze", "jaundice", 
            "mnemonic", "megahertz", "rhubarb", "topaz"];

// Creating variables to hold the number of wins, losses, and ties. 
var Wins = 0;
var Losses = 0;
var MaxGuesses = 9;

// Game state tracker to check if game is active. And variables that hold game data.
var CurrentWord;
var ValidGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var GuessedLetters = [];
var GuessingWord = [];
var GameOn = false;
var GameFinished = false;

// Resets the game
function ResetGame() {
    MaxGuesses = 9;
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
    document.getElementById("HumanCard").innerText = Wins;
    document.getElementById("WordToGuess").innerText =
}


// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = words[Math.floor(Math.random() * words.length)];

// Makes an empy array and fills it with _s equal to number of letters in word.
var AnswerArray = [];
for (i=0; i <words.length; i++) {
    answerArray[i] = "_";
}

var RemainderLetters = words.length;
while (RemainderLetters > 0) {
    var guess = 
    
}
// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

if ((userGuess === "r" && computerGuess === "s") ||
    (userGuess === "s" && computerGuess === "p") || 
    (userGuess === "p" && computerGuess === "r")) {
    wins++;
} else if (userGuess === computerGuess) {
    ties++;
} else {
  losses++;
}

// Hide the directions
directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/ties.
userChoiceText.textContent = "You chose: " + userGuess;
computerChoiceText.textContent = "The computer chose: " + computerGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
tiesText.textContent = "ties: " + ties;
    }
};
