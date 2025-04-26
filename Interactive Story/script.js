// JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');
  
    const storyData = {
      start: {
        text: "Welcome to the adventure! Do you dare to enter the haunted forest?",
        choices: [
          { text: "Enter the forest", next: "forest" },
          { text: "Leave and go home", next: "home" },
        ],
      },
      forest: {
        text: "You enter the forest and hear eerie sounds. Do you follow the sounds or run away?",
        choices: [
          { text: "Follow the sounds", next: "cabin" },
          { text: "Run away", next: "lost" },
        ],
      },
      home: {
        text: "You chose safety and returned home. Maybe next time you'll be braver!",
        choices: [],
      },
      cabin: {
        text: "You find a creepy cabin. Do you enter or turn back?",
        choices: [
          { text: "Enter the cabin", next: "treasure" },
          { text: "Turn back", next: "lost" },
        ],
      },
      lost: {
        text: "You got lost in the forest! Eventually, you found your way out. The adventure ends here.",
        choices: [],
      },
      treasure: {
        text: "Inside the cabin, you find a hidden treasure chest! You win!",
        choices: [],
      },
    };
  
    let currentStep = "start";
  
    function updateStory(step) {
      const story = storyData[step];
      storyText.textContent = story.text;
  
      choicesContainer.innerHTML = ""; // Clear previous choices
  
      story.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.className = "choice";
        button.onclick = () => updateStory(choice.next);
        choicesContainer.appendChild(button);
      });
    }
  
    updateStory(currentStep);
  });
  