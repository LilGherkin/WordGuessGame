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


//Word bank of words to choose from. The theme is hard words to guess in hangman.
var WordBank = ["APEX","NADIR","JAZZ", "SUTURE", "ROCS"];
//Various variables used to keep track of game state.
const Lives = 12;       
var GuessedLetters = [];        
var LiveIndex;           
var WordBuild = [];          
var RemainingGuesses = 0;       
var GameOver = false;            
var Wins = 0;                   
var Losses = 0;

// Reset game flags
function resetGame() {
    RemainingGuesses = Lives;

    // Gets a word from our word bank at random
    LiveIndex = Math.floor(Math.random() * (WordBank.length));

    // Clears out all of our placeholder arrays when new game is started.
    GuessedLetters = [];
    WordBuild = [];

    // Build the guessing word and clear it out for the player
    for (var i = 0; i < WordBank[LiveIndex].length; i++) {
        WordBuild.push("_ ");
    }   

    // Calls our display function
    Display();
};

//  Updates the display with various game state information for player to see.
function Display() {

    document.getElementById("HumanScore").innerText = Wins;
    document.getElementById("ComputerScore").innerText = Losses;

    // Display how much of the word has been guessed.
    var WordBuildText = "";
    for (var i = 0; i < WordBuild.length; i++) {
        WordBuildText += WordBuild[i];
    }

    //Update our values that the player sees.
    document.getElementById("WordToGuess").innerText = WordBuildText;
    document.getElementById("GuessesLeft").innerText = RemainingGuesses;
    document.getElementById("GuessedLetters").innerText = GuessedLetters;
};

// Checks the letter entered and sees if it's in the word and replaces it if so.
function CheckGuess(letter) {
    // Array to store Positions of letters in string
    var Positions = [];

    // Loop through word finding all instances of guessed letter, adds the correct indeces into the array Positions.
    for (var i = 0; i < WordBank[LiveIndex].length; i++) {
        if(WordBank[LiveIndex][i] === letter) {
            Positions.push(i);
        }
    }

    // If it's not valid, hurt 'em.
    if (Positions.length <= 0) {
        RemainingGuesses--;
    } else {
        // If it was valid, then add it into the displayed word. 
        for(var i = 0; i < Positions.length; i++) {
            WordBuild[Positions[i]] = letter;
        }
    }
};
// If we have no underscores than we've won.
function CheckWin() {
    if(WordBuild.indexOf("_ ") === -1) {
        Wins++;
        GameOver = true;
    }
};


// We ran out of lives, score 1 for computer.
function CheckLoss()
{
    if(RemainingGuesses <= 0) {
        Losses++;
        GameOver = true;
    }
}

// How do we make a guess? This thing. It sees if we can guess, and if we've already used the letter.
function Guess(letter) {
    if (RemainingGuesses > 0) {
        // Make sure we didn't use this letter yet
        if (GuessedLetters.indexOf(letter) === -1) {
            GuessedLetters.push(letter);
            CheckGuess(letter);
        }
    }
    
};


// Event listener
document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(GameOver) {
        resetGame();
        GameOver = false;
    } else {
        // Check to make sure A-Z was pressed. Code gotten from https://stackoverflow.com/questions/34687895/determine-if-a-letter-or-a-number-was-pressed-javascript. 
        // Checks to see if we've won, or lost, and also updates the display on each button press.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            Guess(event.key.toUpperCase());
            Display();
            CheckWin();
            CheckLoss();
        }
    }
};