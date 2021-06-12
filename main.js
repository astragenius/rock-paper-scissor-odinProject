
let playerPoint = 0;
let computerPoint = 0;
let gameRounds

// function playerChoice with promnt function 

function playerChoice() {
    
    let choice = prompt("Make a decision: ")
   
      // make player decision case sensitive (RoCK, paper, SCISSOR).
      // and test the input of validity
    
    if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissor") {
 
        return choice.toLowerCase();
    } else {

        alert("wrong decision");
    }
}


function computerChoice() {

    // array with choice options 
    let list = ["rock", "paper", "scissor"]; 

    // computer make a guess with radom the function to pick some of the array indices.

    return list[random(list.length)];

}

// creats a random number between 0 and 2
function random(max) {

    return Math.floor(Math.random() * max);
}



function playRound(playerChoice, computerChoice) { // function get player decision and computer decision

        
        // if conditional with && operator decides the winner or loser of the round.

        if (playerChoice == "paper" && computerChoice == "rock") {

            addPlayerPoint();
           return alert("Spieler gewinnt mit Papier gegen Stein");
            
        } else if (playerChoice == "paper" && computerChoice =="scissor") {

            addComputerPoint();
            return alert("Spieler verliert mit Papier gegen Schere");

        } else if (playerChoice == "rock" && computerChoice == "paper") {

            addComputerPoint();
            return alert("Spieler verliert mit Stein gegen Papier"); 

        } else if (playerChoice == "rock" && computerChoice == "scissor") {

            addPlayerPoint();
            return alert("Spieler gewinnt mit Stein gegen Schere");

        }else if (playerChoice == "scissor" && computerChoice == "paper") {

            addPlayerPoint();
            return alert("Spieler gewinnt mit Schere gegen Papier");

        }else if (playerChoice == "scissor" && computerChoice =="rock") {

            addComputerPoint();
            return alert("Spieler verliert mit Schere gegen Stein");

        }else if (playerChoice == computerChoice) {

            return alert("Unentschieden");
        } else {

            return alert("Keine auswahl getroffen");
        }
         
}



// point adding functions for Computer and Player
function addPlayerPoint(point = +1) {

    playerPoint = playerPoint + point;

    console.log(`Spieler hat: ${point} Punkt bekommen. Der Spieler hat insgesammt: ${playerPoint} Punkte`);

}

function addComputerPoint(point = +1) {
    
    computerPoint = computerPoint + point;

    console.log(` Der Computer hat: ${point} Punkt bekommen. Der Spieler hat insgesammt: ${computerPoint} Punkte`);

}

// shows the Points after the game is finished.

function showPoints(playerPoint, computerPoint) {
    
    if (playerPoint > computerPoint) {

        return alert(`You winn with ${playerPoint} point's YEAAAA!!!`);

    } else if (playerPoint < computerPoint) {

         return alert(`The computer win's with ${computerPoint} point's.`);
    } else {

        return alert(`Draw`);
    }
}





// game loop 

function game(n) {

    let i = 0;

    while (i < n) {

        i++;
        playRound(playerChoice(), computerChoice());
        
    }

    return showPoints(playerPoint, computerPoint);

    
    
}


// the main function 
function main() {

    gameRounds = prompt("How many round's would you like to play? ")

    game(gameRounds);
    
}



















