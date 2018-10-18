//the list of words
var wordsArray = ['celery', 'carrot', 'potatoes'];
//set the wins points to 0.
var wins = 0;
//set the tries for player.                                    
var tries = 5;
//array for letter player will guess.         
var letterGuessed = [];
//index of the word that have in the array.
var wordIndex;
//This Array will contain the word that player will guess.          
var gussingWord = [];
//how many tries left.
var remainGusses = 10;
//a flag to show game just started and all values go 0.
var gameStarted = false;
// a flag that game is over.
var gameFinished = false;
// Folowing console logs for test purposes.
gameReset()
console.log(wordsArray);
console.log(tries);
console.log(remainGusses);
console.log(letterGuessed);
console.log(wordIndex);

//Function to reset all values when game started.
function gameReset() {
    remainGusses = tries;
    gameStarted = false;
    wordIndex = Math.floor(Math.random() * wordsArray.length);
    letterGuessed = [];
    gussingWord = [];
    for (i = 0; i < wordsArray[wordIndex].length; i++) {
        gussingWord.push(" _ ");
    }
    update();
};

//Function to update my index.html page
function update() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (i = 0; i < gussingWord.length; i++) {
        //here will add the current word to gussingWord array.
        document.getElementById("currentWord").innerText += gussingWord[i];
    }
    document.getElementById("remainGusses").innerText = remainGusses;
    document.getElementById("letterGuessed").innerText = letterGuessed;
    //when no more remain guesses game finish will change state to be ture to the finish the game
    if (remainGusses <= 0) {
        gameFinished = true;
        alert("lost");
        gameReset();
    }
};

//will create a onKeyUp lisnter
document.onkeydown = function (event) {
    //If we finished a game, dump one keystroke and reset.
    if (gameFinished) {
        gameReset();
        gameFinished = false;
    } else {
        // Check to make sure a-z was pressed.
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

//will create a function here for each guess 
function makeGuess(letter) {
    if (remainGusses > 0) {
        if (gameStarted) {
            gameStarted = true;
        }

        // Make sure we didn't use this letter yet
        if (letterGuessed.indexOf(letter) === -1) {
            letterGuessed.push(letter);
            evaluateGuess(letter);
        }
    }

    update();
    winChecker();
};

//function to check if player wins and increament wins by 1
function winChecker() {
    if (gussingWord.indexOf(" _ ") === -1) {
        wins++;
        gameFinished = true;
        gameReset();
        alert("You Won");
    }
}

// This function match the guessed letter with the picked word letters 
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < wordsArray[wordIndex].length; i++) {
        if (wordsArray[wordIndex][i] === letter) {
            positions.push(i);
        }
    }

    // if there are no indicies, remove a guess and update
    if (positions.length <= 0) {
        remainGusses--;

    } else {
        // Loop through all the indicies and replace the " _ " with a letter.
        //this will help to decide when game is over
        for (var i = 0; i < positions.length; i++) {
            gussingWord[positions[i]] = letter;
        }
    }
};


















// //This is an array that PC will choose from
// var vegName = ['Broccoli', 'cabbage', 'celery'];
// //This is an array that will hol dwhat PC will choose from the vegName array
// var PCPicked = [];
// //Start score for the win points
// var wins = 0;
// //Start remain chances
// var remain = 15;
// //An array to hold letter already player choce and is not in the word
// var alreadyGuessed = [];

// var randomItem = vegName[Math.floor(Math.random() * vegName.length)];

// var wins = document.getElementById("wins");
// var remain = document.getElementById("remain");
// console.log(randomItem);
// console.log("======================")

// //function to show what player keyed
// var userText = document.getElementById("user-text");
// document.onkeyup = function (event) {
//     userText.key = event.key;
// }
// //for loop to break that vegName to letters
// for (var i = 0; i < randomItem.length; i++) {
//     console.log(randomItem.charAt(i));
// }
// if (userText === i) {
//     wins++;
// } else remain--;



// var playerchoice = document.getElementById("player-choice");
// var pcchoice = document.getElementById("pc-choice");
// var wins = document.getElementById("wins");
// var playerguess = document.getElementById("game");
// document.onkeyup = function (event) {
//     playerguess = event.key;
//     var playerguess = event.key;    
// }