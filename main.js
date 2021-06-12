


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


function random(max) {

    return Math.floor(Math.random() * max);
}



function playRound(playerChoice, computerChoice) { // function get player decision and computer decision

        
        // if conditional with && operator decides the winner or loser of the round.

        if (playerChoice == "paper" && computerChoice == "rock") {

           return alert("Spieler gewinnt mit Papier gegen Stein");


        } else if (playerChoice == "paper" && computerChoice =="scissor") {

            return alert("Spieler verliert mit Papier Schere");

        } else if (playerChoice == "rock" && computerChoice == "paper") {

            return alert("Spieler verliert mit Stein gegen Papier"); 

        } else if (playerChoice == "rock" && computerChoice == "scissor") {

            return alert("Spieler gewinnt mit Stein gegen Schere");

        }else if (playerChoice == "scissor" && computerChoice == "paper") {

            return alert("Spieler gewinnt mit Schere gegen Papier");

        }else if (playerChoice == "scissor" && computerChoice =="rock") {

            return alert("Spieler verliert mit Schere gegen Stein");

        }else if (playerChoice == computerChoice) {

            return alert("Unentschieden");
        } else {

            return alert("Keine auswahl getroffen");
        }
         
}

let playerChoice1 = playerChoice();
let computerChoice2 = computerChoice();
console.log(computerChoice2);
playRound(playerChoice1, computerChoice2);












