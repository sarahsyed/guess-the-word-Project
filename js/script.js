const unorderedList = document.querySelector(".guessed-letters");
const btnGuessIt = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector("message");
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
   textValue = "";
   
})
