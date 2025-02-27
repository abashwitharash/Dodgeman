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
// - If incorrect guesses reach 5, display "You Lose!"  



/*-------------------------------- Constants --------------------------------*/
const words = ['mavericks', 'clippers', 'steelers', 'raiders', 
    'chargers', 'cowboys', 'canucks', 
    'padres', 'commanders', 'cardinals', 'falcons', 'panthers', 
'bengals', 'broncos', 'jaguars', 'vikings', 'buccaneers', 'celtics',
'grizzlies', 'timberwolves', 'raptors', 'wizards', 'diamondbacks', 'dodgers', 'yankeez',
'mariners', 'rangers',]

    const restartBtnEl = document.querySelector('#restartBtn');
    const lettersEl = document.querySelector('#letters');
    const letterBtnEl = document.querySelectorAll(".letter-button");
    const startBtnEl = document.querySelector('#startBtn');
    const wordDisplayEl = document.querySelector('#word-display');
    const letterBoxEl = document.querySelectorAll('.letter-box');
    const gameMessageEl = document.querySelector('#gameMessage');
    const dodgeballEl = document.querySelector('#dodgeball');

/*-------------------------------- Variables --------------------------------*/
let gameOver = false;
let randomWord;
let incorrectGuess = 0;
let guessedLetter = [];

const startGame = () => {
    randomWord = words[Math.floor(Math.random() * words.length)];
    incorrectGuess = 0;
    gameOver = false;
    guessedLetter = [ ];
 
    startBtnEl.style.display = 'none';
    dodgeballEl.style.display = 'none';
    

    
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === ' ') 
            {
        } else {
            guessedLetter.push('_');  //push an underscore for letters
        }
    }
    updateWordDisplay();
}

const updateWordDisplay = () => {
    wordDisplayEl.innerHTML = '';  // Clear any existing content - help with MDN
    guessedLetter.forEach(letter => {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;
        wordDisplayEl.appendChild(letterSpan);
    });
};


const handleClick = (event) => {
    const letter = event.target.textContent;  // Get letter from the button's text
    clickedLetter(letter);  // Call the function to handle the letter guess
    event.target.disabled = true;  // Disable the button after it’s clicked
};

// Function to handle clicked letter
const clickedLetter = (letter) => {

    if (randomWord.includes(letter)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                guessedLetter[i] = letter;
            }
        }
        updateWordDisplay();
    } else {
        incorrectGuess++;  // Increment incorrect guesses
        dodgeballEl.style.display = 'block';
        dodgeballEl.src = `./assets/${incorrectGuess}.png`;

    }
    if (incorrectGuess === 6) {
        gameOver = true;
        letterBtnEl.forEach(button => {
            button.disabled = true;  // Disable all buttons once game is over
        });
        gameMessageEl.innerHTML = `Game Over, You Lose! The word was: ${randomWord}`;
    }

    // Check for win condition (all letters guessed)
    if (!guessedLetter.includes('_')) {
        gameOver = true;
        letterBtnEl.forEach(button => {
            button.disabled = true; 
        });
        gameMessageEl.innerHTML = 'Congratulations! You won!';
    }
};


const resetGame = () => {
    gameOver = false;
    incorrectGuess = 0;
    guessedLetter = [];
    dodgeballEl.src = '';
    startGame();
//loop through each button and disables the diable button code resetting 
letterBtnEl.forEach(button => button.disabled = false); 
gameMessageEl.innerHTML = '';
};


startBtnEl.addEventListener('click', startGame)
Array.from(letterBtnEl).forEach(letterBtn => {   //Google helped me form an array throught html
    letterBtn.addEventListener('click', handleClick);
});

    restartBtnEl.addEventListener('click', resetGame);

