// JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const storyText = document.getElementById('story-text');
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');

    const gameData = {
        start: "You find yourself in a dark forest. There's a path leading left and another to the right. Which way will you go?",
        left: "You encounter a wild wolf. Do you fight it or run?",
        right: "You find a treasure chest. Do you open it or leave it?",
        fight: "The wolf overpowers you. You lose!",
        run: "You escape safely but find yourself back at the start.",
        open: "You find gold and jewels. You win!",
        leave: "You walk away and get lost in the forest. Game over."
    };

    let currentState = 'start';

    submitBtn.addEventListener('click', () => {
        const choice = userInput.value.trim().toLowerCase();
        userInput.value = '';

        if (currentState === 'start') {
            if (choice === 'left') currentState = 'left';
            else if (choice === 'right') currentState = 'right';
            else storyText.innerHTML = `<p>Invalid choice. Try again.</p>`;
        } else if (currentState === 'left') {
            if (choice === 'fight') currentState = 'fight';
            else if (choice === 'run') currentState = 'run';
            else storyText.innerHTML = `<p>Invalid choice. Try again.</p>`;
        } else if (currentState === 'right') {
            if (choice === 'open') currentState = 'open';
            else if (choice === 'leave') currentState = 'leave';
            else storyText.innerHTML = `<p>Invalid choice. Try again.</p>`;
        } else {
            currentState = 'start';
        }

        if (gameData[currentState]) {
            storyText.innerHTML = `<p>${gameData[currentState]}</p>`;
        }
    });
});
