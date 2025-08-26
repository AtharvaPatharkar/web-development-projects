// JavaScript file
// Story JSON Data
const storyData = {
    start: {
        text: "You find yourself at a crossroads. A dense forest lies to your left, and a dark cave to your right. Where will you go?",
        choices: [
            { text: "Enter the forest", next: "forest" },
            { text: "Explore the cave", next: "cave" },
        ],
    },
    forest: {
        text: "You venture into the forest and hear a growl. A wolf appears. What do you do?",
        choices: [
            { text: "Run back to the crossroads", next: "start" },
            { text: "Stand your ground", next: "fightWolf" },
        ],
    },
    cave: {
        text: "Inside the cave, you see glinting treasures but also hear a rumble deeper in. What will you do?",
        choices: [
            { text: "Take the treasure and leave", next: "treasure" },
            { text: "Explore deeper into the cave", next: "exploreCave" },
        ],
    },
    fightWolf: {
        text: "The wolf lunges at you, but you bravely fend it off with a stick you found. You survive and return to the crossroads.",
        choices: [
            { text: "Return to the crossroads", next: "start" },
        ],
    },
    treasure: {
        text: "You grab the treasure and leave the cave quickly. You feel richer but also uneasy.",
        choices: [
            { text: "Go back to the crossroads", next: "start" },
        ],
    },
    exploreCave: {
        text: "You go deeper into the cave and find a sleeping dragon. It opens one eye. What will you do?",
        choices: [
            { text: "Run away quietly", next: "start" },
            { text: "Try to communicate", next: "dragon" },
        ],
    },
    dragon: {
        text: "The dragon listens and surprisingly offers you wisdom. You gain knowledge and leave the cave enlightened.",
        choices: [
            { text: "Return to the crossroads", next: "start" },
        ],
    },
};

// DOM Elements
const storyBox = document.getElementById("story");
const choicesBox = document.getElementById("choices");

// Function to display story
function displayStory(storyKey) {
    const story = storyData[storyKey];
    storyBox.textContent = story.text;

    choicesBox.innerHTML = ""; // Clear old choices
    story.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.classList.add("choice-btn");
        button.addEventListener("click", () => displayStory(choice.next));
        choicesBox.appendChild(button);
    });
}

// Start the game
displayStory("start");
