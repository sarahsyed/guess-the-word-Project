const guessedLettersElement = document.querySelector(".guessed-letters");
const btnGuessIt = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const btnPlayAgain = document.querySelector(".play-again hide");
const guessedLetters = [];


const updateParagraph = function(word){
    for(var letter of word)
        lengthArray = word.length;
        var wordArray = [];
        //wordInProgress="";
        for (i=0; i < lengthArray; i++){
        wordArray.push("●");
        newArray = wordArray.join("");
        wordInProgress.innerText = newArray;
    }
}

updateParagraph("magnolia");

//Clicks on Guess it button.
btnGuessIt.addEventListener("click", function(e){
    e.preventDefault();
    message.innerText = "";
    textValue = textInput.value;
    const validateInput = playerInput(textValue);
    if (validateInput){
    console.log(validateInput);
    }
   
})

//Checks accepted letters
const playerInput = function(textValue){
    const acceptedLetter = /[a-zA-Z]/;
    if (textValue === ""){
        console.log("Input cannot be blank. Please type a letter");
        message.innerText ="Input cannot be blank. Please type a letter";
    }
    else if (textValue.length > 1){
        console.log("You cannot type more than 1 letter");
        message.innerText = "You cannot type more than 1 letter"
    }
    else if (!textValue.match(acceptedLetter)){
         message.innerText = "You can only enter a letter"
        
    }
    else{
         message.innerText = `You guessed the letter ${textValue}`;
         return textValue ;

    }

}

//Guessed words go to an array.
const makeGuess = function(playerInput){
    playerInput.toUpperCase;
    if (guessedLetters.includes(playerInput)){
         console.log("You already guessed this letter");
    }
    else 
    {
        guessedLetters.push(playerInput);
        console.log("letter added to guessedLetter array");
    }

}
