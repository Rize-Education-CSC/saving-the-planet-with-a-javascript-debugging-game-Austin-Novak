const prompt = require("prompt-sync")();

console.log('Welcome to the Climate Change Awareness Game!');

let score = 0;

// Function to handle decision scenarios, Fixed function to display the options properly and check the player's answer
function decisionScenario(question, options, correctAnswerIndex) {
    console.log(question);

    // Displaying options to the player, Changed the loop condition to iterate through all options
    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
    }

    // Getting player's answer, Removed unnecessary variable 'j' and fixed the player's answer calculation
    let playerAnswer = parseInt(prompt("Enter your choice (number):")) - 1;

    // Checking if the answer is correct, Corrected the score update logic
    if (playerAnswer === correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++;
    } else {
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndex]}`);
    }
}

// Calling the decisionScenario function for each scenario, Added comma separated arguments to fix the function call
decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    1
);

decisionScenario(
    '\nYou are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    2
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    2
);
// Removed extra argument in the function call
decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center', 'Refurbish and continue using them'],
    3 // Correct answer index corrected to 3
);

decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    3 // Correct answer index corrected to 3
);

// Displaying the final score
console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
