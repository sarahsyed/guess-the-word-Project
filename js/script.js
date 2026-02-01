const unorderedList = document.querySelector(".guessed-letters");
const btnGuessIt = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const btnPlayAgain = document.querySelector(".play-again hide");


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

btnGuessIt.addEventListener("click", function(e){
    e.preventDefault();
    textValue = textInput.value;
    playerInput(textInput);
    //textValue.value = "";
})

const playerInput = function(textInput){
    const acceptedLetter = /[a-zA-Z]/;
    const inputFromPlayer = textInput.value;
    if (inputFromPlayer === ""){
        console.log("Input cannot be blank. Please type a letter");
        message.innerText ="Input cannot be blank. Please type a letter";
    }
    else if (inputFromPlayer.length > 1){
        console.log("You cannot type more than 1 letter");
        message.innerText = "You cannot type more than 1 letter"
    }
    else if (inputFromPlayer.match(acceptedLetter)){
        message.innerText = `You guessed the letter ${inputFromPlayer}`;
    }
    else{
        console.log("You can only enter a letter");
         message.innerText = "You can only enter a letter"

    }

}

