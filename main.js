


// function playerChoice with promnt function 

function playerChoice() {
    
    let choice = prompt("Make a decision: ")
   
    return choice.toLowerCase(); // make player decision case sensitive (RoCK, paper, SCISSOR).
}


console.log(playerChoice());