


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

computerChoice();
