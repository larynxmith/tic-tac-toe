console.log('Hello frontend');
//variables
var timesClicked, playerXScore, PlayerOScore, Ties = 0;

// var winCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
// var xClickedArr = [1,4,7];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("restart-button").addEventListener("click", start);
});

var resetScoreButton = document.getElementById("reset-scores");
var restartGameButton = document.getElementById("restart-button");
var messageBoard = document.getElementById("message");

//constants needed
// x Image
// o Image
// get
// var x = 

//document.getElementById("grid-box-1").textContent = "X";


//player clicks on a box, an X is entered
//the box can no longer be clicked until reset
//player 2 clicks on a box, an O is entered
//the box can no longer be clicked until reset
//after 5th iteration, begin checking for a Win
//if Win, execute youWon, else continue current game
//if 9 iterations, execute youTied
//reset game with click of Play Again button
//update score for winner
//reset score counter button
//alternate which player starts
//draw line through win?
//create AI player

 function start() {
    console.log("working!");
    document.getElementById("jeopardy-music").play();
    
    // console.log(document.getElementById("grid-box-1").value);
    // console.log(xClickedArr.join(""));
   
    //getElementsByClassName("grid-box")[0].classList.remove();
 }

// //timer?
// time = 0
// document;

// //reset boxes
// document.getElementById("grid").childNode.remove();

//Set the initial order of play
function playerOrder() {
    if (timesClicked % 2 === 0) {
        messageBoard.textContent = "Player X, It's Your Turn";
    } else
    { messageBoard.textContent = "Player O, It's Your Turn"
    }
    }


function clickBox() {
    timesClicked=0;
    timesClicked = timesClicked + 1;
    console.log(timesClicked);
    if (timesClicked % 2 !== 0) {
        //insert image
        this.textContent = "X";
        console.log("x image inserted");
       } else
    { this.textContent = "O";
    console.log("o image inserted");

    playerOrder;
}
    //remove clicking option
    this.removeEventListener("click", clickBox);
    
    //check if won
    if (timesClicked >= 5) {
        winGame();
    }
}

//make boxes clickable
var emptyBoxes = document.querySelectorAll("div.grid-box");

for (i=0; i < emptyBoxes.length; i++) {
    emptyBoxes[i].addEventListener("click", clickBox)
}


// function winGame() {
//     for (i=0; i < winCombos.length; i++) {
//         if (xClickedArr === 3 && xClickedArr === winCombos[i]) {
//             return true;
//         }
//         else if (xClickedArr === 4) {
//             (xClickedArr)
//         }
//         }
//     }

// }

