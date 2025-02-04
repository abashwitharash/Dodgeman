// The letters will be from A to Z, and the player must guess the word within 7 tries.  

// Use `let` and `const` to define variables (e.g., playerOne, gameOver).  
// Use loops like `for` and `forEach` to check and update the word display??? 
// Use `if` statements to handle correct and incorrect guesses.  
// Change images possibly load all images and show/hide them using classList.add/remove???

// Create variables to track the state of the game and define the player.  
// Create arrays to hold letters and words that will cycle randomly.  
// Create a reset button and a game-over message.  
// Add click events for letters.   
// Have letters be disabled when clicked 

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
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z'  ]
const words = ['general', 'harry potter', 'functions', 'zinque', 
    'los angeles', 'coding', 'artifical intelligence', 
    'finding nemo', 'planet earth']

    const restartBtnEl = document.querySelector('#restartBtn');
    const lettersEl = document.querySelector('#letters');
    const letterBtnEl = document.querySelectorAll(".letter-button");
    const startBtnEl = document.querySelector('#startBtn');
    const wordDisplayEl = document.querySelector('#word-display');
    const letterBoxEl = document.querySelectorAll('.letter-box');

/*-------------------------------- Variables --------------------------------*/
let playerOne;
let gameOver = false;
let randomWord;
let incorrectGuess = 0;
let guessedLetter = [];
let correctGuess = [];


// Create a start game function 
const startGame = () => {
    randomWord = words[Math.floor(Math.random() * words.length)];
    incorrectGuess = 0;
    gameOver = false;
    correctGuess = [];
    guessedLetter = [];
    
    for (let i = 0; i < randomWord.length; i++) {
        guessedLetter.push('_');
    }
    updateWordDisplay();
    console.log(randomWord);
}

// need to create a new display so it prints into the html 
const updateWordDisplay = () => {
    wordDisplayEl.innerHTML = guessedLetter.join(' ');
}

const handleClick = (event) => {
    const letter = event.target.textContent;  // Get letter from the button's text
    clickedLetter(letter);  // Call the function to handle the letter guess
    event.target.disabled = true;  // Disable the button after it’s clicked
};

//image trending 
const playerGuess = () => {
if (incorrectGuess === 1);
}

// Function to handle clicked letter
const clickedLetter = (letter) => {

    if (randomWord.includes(letter)) {
        console.log('Correct guess:', letter);
        randomWord.split('').forEach((char, index) => {
            if (char === letter) {
                guessedLetter[index] = letter;  // Replace _ with the letter at the correct index
            }
        });
        updateWordDisplay();
    } else {
        console.log('Incorrect guess:', letter);
        incorrectGuess++;  // Increment incorrect guesses
    }
    if (incorrectGuess === 7) {
        gameOver = true;
        letterBtnEl.forEach(button => {
            button.disabled = true;  // need to disable all buttons once 7 is clicked 
        console.log('you lost') //this will print you lost after 7 guesses 
        if (gameOver)
            return;
        })}};



        // RESET DO LATER DO NOT TOUCH NOW 
const resetGame = () => {
    gameOver = false;
    clearInterval();
    startGame();
//loop through eaxh button and disables the diable button code resetting 
letterBtnEl.forEach(button => button.disabled = false); 
};
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

startBtnEl.addEventListener('click', startGame)
letterBtnEl.forEach(letterBtn => {
    letterBtn.addEventListener('click', handleClick);  // Use the handleClick function for each button click
}); 
    restartBtnEl.addEventListener('click', resetGame);

