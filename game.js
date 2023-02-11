const items = ['rock', 'paper', 'scissors'];

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

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        let playerChoice = button.id;
        let computerChoice = computerSelection();

        const text = document.querySelector('#text');
        const result = document.createElement('div');
        result.textContent = `${playRound(playerChoice, computerChoice)}`;

        text.appendChild(result);
    });
});


