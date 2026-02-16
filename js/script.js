const guessedLettersElement = document.querySelector(".guessed-letters");
const btnGuessIt = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const btnPlayAgain = document.querySelector(".play-again");
let guessedLetters = [];
var remainingGuesses = 8;
let word;
//Picking a random word.
const selectRandomWord = function(wordArray){
    return Math.floor(Math.random() * wordArray.length);
}
//Fetching words from a file.
const getWord = async function(){
    const res = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await res.text();
    const wordArray = words.split("\n");
    let wordIndex = selectRandomWord(wordArray);
    word = wordArray[wordIndex].trim();
    updateParagraph(word);
}
getWord();

 const updateParagraph = function(word){
    for (var letter of word){
        var wordArray = [];
        wordArray.push("●");
        newArray = wordArray.join("");
        wordInProgress.innerText = newArray;
    }
}

//Clicks on Guess it button.
btnGuessIt.addEventListener("click", function(e){
    e.preventDefault();
    message.innerText = "";
    textValue = textInput.value.trim();
    const validateInput = playerInput(textValue);
    if (validateInput){
         makeGuess(validateInput);
        textInput.value = "";
    }
 })

//Validates accepted letters
const playerInput = function(textValue){
    const acceptedLetter = /[a-zA-Z]/;
    if (textValue === ""){
        message.innerText ="Input cannot be blank. Please type a letter";
    }
    else if (textValue.length > 1){
        message.innerText = "You cannot type more than 1 letter"
    }
    else if (!textValue.match(acceptedLetter)){
         message.innerText = "You can only enter a letter"
        
    }
    else{
        // message.innerText = `You guessed the letter ${textValue}`;
         return textValue ;
    }
}

//Guessed words go to an array.
const makeGuess = function(validateInput){
   const playerInputValue = validateInput.toUpperCase();
    if (guessedLetters.includes(playerInputValue)){
         message.innerText = "You already guessed this letter";
    }
    else {
        guessedLetters.push(playerInputValue);
        showGuessedLetters();
        guessRemaining(playerInputValue)
        updateWordInProgress(guessedLetters);
    }
}    

//Display Guessed Letters
const showGuessedLetters = function(){
    guessedLettersElement.innerHTML = "";
    for (letter of guessedLetters){
        var li = document.createElement("li");
        li.textContent = letter;
        guessedLettersElement.append(li);
    }
}

const updateWordInProgress = function(guessedLetters){
    var wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    updatedWordArray = [];
    
    //Update the circle symbol with correct letter
    for (const letter of wordArray){
       if (guessedLetters.includes(letter)){
           updatedWordArray.push(letter);
        }
       else {
            updatedWordArray.push("●");
            
        }
        wordInProgress.innerText = updatedWordArray.join("");
        playerResult();
    }
}

const guessRemaining = function(playerInputValue){
        secretWord = word.toUpperCase();
    if (!secretWord.includes(playerInputValue)){
        message.innerHTML = "Sorry the word does not contain the letter you typed"
        remainingGuesses -= 1;
    }
    else
    {
        message.innerHTML  = "Great! Your guessed letter is in the word";
    }
        if (remainingGuesses === 0){
            message.innerHTML = `Game Over. The word was <span>${word}</span>`;
            startOver();
        }
        else if (remainingGuesses === 1){
           span.innerText = remainingGuesses  + ` guesses`;

        }
        else {
           span.innerText = remainingGuesses  + ` guesses`;

        }
 }   

const playerResult = function(){
    if (wordInProgress.innerText === word.toUpperCase()){
        message.innerHTML = "You guessed the correct word! Congrats!";
    }
}

const startOver = function(){
    btnGuessIt.classList.add("hide");
    span.classList.add("hide");
    wordInProgress.classList.add("hide");
    remainingGuess.classList.add("hide");
    btnPlayAgain.classList.remove("hide");
 }

btnPlayAgain.addEventListener("click", function(){
        message.classList.remove(".win");
        message.innerText = "";
        guessedLettersElement.innerText = "";
        guessedLetters = [];
        remainingGuesses = 8;
        getWord();
        span.classList.remove("hide");
        span.innerText = span.innerText = remainingGuesses  + ` guesses`;
        btnGuessIt.classList.remove("hide");
        btnPlayAgain.classList.add("hide");
        textInput.classList.remove("hide");
        wordInProgress.classList.remove("hide");
        remainingGuess.classList.remove("hide");
    })