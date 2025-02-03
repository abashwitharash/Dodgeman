// The letters will be from A to Z, and the player must guess the word within 7 tries.  

// Use `let` and `const` to define variables (e.g., playerOne, gameOver).  
// Use loops like `for` and `forEach` to check and update the word display??? 
// Use `if` statements to handle correct and incorrect guesses.  
// Change images possibly load all images and show/hide them using classList.add/remove???

// Create variables to track the state of the game and define the player.  
// Create arrays to hold letters and words that will cycle randomly.  
// Create a reset button and a game-over message.  
// Add click events for letters.  
// Display blank spaces for the word without revealing it.  
// Create a separate panel to show clicked letters.  

// Prevent clicking the same letter twice—disable it after selection.  
// Create an on-screen keyboard (research how to display a virtual keyboard).  
// Cache elements (buttons, word display, images) and assign event listeners.  
// If a letter is clicked and correct, reveal it; if incorrect, show the next image and disable the letter.  
// Update hangman image with incorrect guesses.  if?? look into visibility or display hidden? 

// Win/Lose Conditions:  
// - If all letters are revealed, display "You Win!"  
// - If incorrect guesses reach 7, display "You Lose!"  

// Optional:  
// - Add a hint section for each word?? could be tough???


/*-------------------------------- Constants --------------------------------*/
const letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z'  ]
const words = ['general', 'harry potter', 'functions', 'zinque', 'los angeles', 'coding', 'artifical intelligence', 
    'nemo', 'ben manning']

    const restartBtnEl = document.querySelector('#restartBtn')
    const lettersEl = document.querySelector('#letters')
    const letterBtnEl = document.querySelectorAll(".letter-button")
    const startBtnEl = document.querySelector('#startBtn')

/*-------------------------------- Variables --------------------------------*/
let playerOne;
let gameOver;
let winner;
let randomWord;
let incorrectGuess;
let guessedLetter;

// Create a start game function 
// const startGame = () => {
//     let randomWord = words[Math.floor(Math.random() * words.length)];
// }

// generate a random word 
const resetGame = () => {
randomWord = words[Math.floor(Math.random() * words.length)];
gameOver = true;
winner = false;
console.log(randomWord);
guessedLetter = [];
if (incorrectGuess === 7)
console.log('You Lost!')
};


// try and create a way to choose letters? 
const letterClick = () => {
   letterChoices.forEach(letter)
   if (letter = true ) {
    
   }
}




/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
restartBtnEl.addEventListener('click', resetGame);
// startBtnEl.addEventListener('click', startGame);



