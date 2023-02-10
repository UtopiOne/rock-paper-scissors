let items = Array('Rock', 'Paper', 'Scissors');

function getComputerChoice() {
    return items[Math.floor(Math.random() * items.length)]
}

console.log(getComputerChoice())