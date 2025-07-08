// JavaScript file
// Joke API endpoint
const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('joke-text');
const newJokeBtn = document.getElementById('new-joke-btn');

// Fetch a random joke from JokeAPI
async function getRandomJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const data = await response.json();

        if (data.joke) {
            jokeText.textContent = data.joke;
        } else {
            jokeText.textContent = 'Oops! Could not fetch a joke. Please try again.';
        }
    } catch (error) {
        jokeText.textContent = 'Oops! Something went wrong. Please try again.';
    }
}

// Load a new joke when the button is clicked
newJokeBtn.addEventListener('click', () => {
    jokeText.textContent = 'Loading...';
    getRandomJoke();
});

// Initialize with a random joke
getRandomJoke();
