const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsSection = document.querySelector("#results-section");
const roundResult = document.createElement("p");
const choiceBtn = document.querySelectorAll(".choice-button");
const choices = document.createElement("p");
const counter = document.createElement("h2");
const finalResult = document.createElement("h2");
let computerPoints = 0;
let playerPoints = 0;



choiceBtn.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();

        choices.textContent = `Player: ${playerSelection.slice(0,1).toUpperCase()+playerSelection.slice(1)} | Computer: ${computerSelection}`;
        playSingleRound(playerSelection, computerSelection);

        if (playSingleRound(playerSelection, computerSelection).includes("win")) {
            playerPoints += 1;
        } else if (playSingleRound(playerSelection, computerSelection).includes("lose")) {
            computerPoints += 1;
        }

        if(playerPoints == 5) {
            finalResult.textContent = "Congratulations! You win the game.";
        } else if (computerPoints == 5) {
            finalResult.textContent = "You lose the game. Better luck next time.";
        }

        counter.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`;
        roundResult.textContent = `${playSingleRound(playerSelection, computerSelection)}`;

        resultsSection.appendChild(choices);
        resultsSection.appendChild(roundResult);
        resultsSection.appendChild(counter);
        resultsSection.appendChild(finalResult);

        resultsSection.style.visibility = "visible";
    });
});



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "Rock":
                return "Round tied! Rock equals rock.";
            case "Paper":
                return "You lose the round! Paper beats rock.";
            case "Scissors":
                return "You win the round! Rock beats scissors.";
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "Rock":
                return "You win the round! Paper beats rock.";;
            case "Paper":
                return "Round tied! Paper equals paper.";
            case "Scissors":
                return "You lose the round! Scissors beats paper.";
        }
    }
    else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "Rock":
                return "You lose the round! Rock beats scissors.";
            case "Paper":
                return "You win the round! Scissors beats paper.";
            case "Scissors":
                return "Round tied! Scissors equals scissors.";
        }
    }
}
