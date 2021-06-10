


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


