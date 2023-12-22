// Deposit users money
// determine number of lines user wants to bet
// collect users bet
// spin slot machine
// check if user won
// if won give winnings
// if lost take bet
// play again?

const prompt = require('prompt-sync')();

const deposit = () => {
    while (true) {
        const depositAmount = prompt('Enter a Deposit Amount: ');
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log('Invalid Deposit Amount, Try Again.')
        } else {
            return numberDepositAmount;
        }
    }
};

const depositAmount = deposit();
console.log(depositAmount)