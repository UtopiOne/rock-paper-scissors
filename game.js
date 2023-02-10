const items = Array('rock', 'paper', 'scissors');

function computerSelection() {
    return items[Math.floor(Math.random() * items.length)];
}

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return 'You tied!';
    } if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Rock breaks scissors! You win!';
    } if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Scissors cut paper! You win';
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Paper covers rock! You win!';
    } if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Rock breaks scissors! You lose!';
    } if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Scissors cut paper! You lose!';
    } if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Paper cover rock! You lose!';
    }
};


const severalRounds = (amount) => {
    for (let i = 0; i < amount; i++) {
        let playerChoice = prompt("Choose an item!").toLowerCase();
        let computerChoice = computerSelection();

        console.log(playerChoice);

        console.log(computerChoice);

        console.log(playRound(playerChoice, computerChoice));
    }
};

severalRounds(5);