// JavaScript file
const words = [
    { word: "Hello", translation: "हॅलो" },
    { word: "Goodbye", translation: "गुडबाय" },
    { word: "Thank you", translation: "धन्यवाद" },
    { word: "Yes", translation: "हो" },
    { word: "No", translation: "नाही" },
];

let currentIndex = 0;

const wordElement = document.querySelector('.word');
const translationElement = document.querySelector('.translation');
const nextButton = document.querySelector('.next');

function showFlashcard() {
    const currentFlashcard = words[currentIndex];
    wordElement.textContent = currentFlashcard.word;
    translationElement.textContent = currentFlashcard.translation;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % words.length;
    showFlashcard();
});

showFlashcard();
