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
const words = ['general', 'harry potter', 'functions', 'zinque', 'los angeles', 'coding', 'artifical intelligence', 
    'nemo', 'earth']

    const restartBtnEl = document.querySelector('#restartBtn');
    const lettersEl = document.querySelector('#letters');
    const letterBtnEl = document.querySelectorAll(".letter-button");
    const startBtnEl = document.querySelector('#startBtn');
    const wordDisplayEl = document.querySelector('#word-display');

/*-------------------------------- Variables --------------------------------*/
let playerOne;
let gameOver = false;
let winner;
let randomWord;
let incorrectGuess = 0;
let guessedLetter = [];
let correctGuess;


// Create a start game function 
const startGame = () => {
    randomWord = words[Math.floor(Math.random() * words.length)];
    //string 
    console.log(randomWord);
}


// RESET DO LATER DO NOT TOUCH NOW 
// const resetGame = () => {
// randomWord = words[Math.floor(Math.random() * words.length)];
// incorrectGuess = 0;
// gameOver = false;
// wordDisplayEl.textContent = ''; // what do i want this to display when restarts? '' = nothing? 
// };


//image trending 
const playerGuess = () => {
if (incorrectGuess === 7);
}


// try and create a way to choose letters? 
// const clickedLetter = (letter) => {
//     if (randomWord.includes(letter)) {
//         console.log('Correct guess:', letter)
//       } else {
//         console.log('this is not found')
//       }
      
// }





// Function to handle clicked letter
const clickedLetter = (letter) => {
    if (randomWord.includes(letter)) {
        console.log('Correct guess:', letter);
       
    } else {
        console.log('Incorrect guess:', letter);
        incorrectGuess++;  // Increment incorrect guesses
    }
    if (incorrectGuess === 7) {
        letterBtnEl.forEach(button => {
            button.disabled = true;  // need to disable all buttons once 7 is clicked 
        console.log('you lost') //this will print you lost after 7 guesses 
        })}};


/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
// restartBtnEl.addEventListener('click', resetGame);
startBtnEl.addEventListener('click', startGame)
letterBtnEl.forEach(letterBtn => {
    letterBtn.addEventListener('click', (event) => {
        const letter = event.target.textContent;  // Get letter from the button's text
        clickedLetter(letter);
        event.target.disabled = true;
    
    })});



