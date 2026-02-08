const guessedLettersElement = document.querySelector(".guessed-letters");
const btnGuessIt = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const btnPlayAgain = document.querySelector(".play-again hide");
const word = "magnolia"
const guessedLetters = [];


const updateParagraph = function(word){
    for (var letter of word){
        var wordArray = [];
        wordArray.push("●");
        newArray = wordArray.join("");
        wordInProgress.innerText = newArray;
    }
}

updateParagraph(word);

//Clicks on Guess it button.
btnGuessIt.addEventListener("click", function(e){
    e.preventDefault();
    message.innerText = "";
    textValue = textInput.value;
    const validateInput = playerInput(textValue);
    if (validateInput){
         makeGuess(validateInput);
         e.preventDefault();
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
          // console.log("updateWordArray "+ updatedWordArray);
        }
       else {
            updatedWordArray.push("●");
        }
        wordInProgress.innerText = updatedWordArray.join("");
    }

}
