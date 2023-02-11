const items = ['rock', 'paper', 'scissors'];

function computerSelection() {
    return items[Math.floor(Math.random() * items.length)];
}


const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return 'You tied!';
    } if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'Rock breaks scissors! You win!';
    } if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'Scissors cut paper! You win';
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'Paper covers rock! You win!';
    } if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'Rock breaks scissors! You lose!';
    } if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'Scissors cut paper! You lose!';
    } if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'Paper cover rock! You lose!';
    }
};

const buttons = document.querySelectorAll('.button');

function checkScores(player, computer) {
    player.textContent = `Your score: ${playerScore}`;
    computer.textContent = `Computer score: ${computerScore}`;
}

function destroyButtons(buttons) {
    buttons.forEach((button) => {
        button.remove();
    });
}

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        let playerChoice = button.id;
        let computerChoice = computerSelection();

        const player = document.querySelector('#player');
        const computer = document.querySelector('#computer');


        const result = document.querySelector('#result');
        result.textContent = `${playRound(playerChoice, computerChoice)}`;

        checkScores(player, computer);

        if (playerScore >= 5) {
            alert("You win");
            destroyButtons(buttons);
        } else if (computerScore >= 5) {
            alert("You lose");
            destroyButtons(buttons);
        }
    });
});



