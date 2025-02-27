// JavaScript file
// Get elements
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const addFlashcardButton = document.getElementById('add-flashcard');
const flashcardList = document.getElementById('flashcard-list');
const startStudyButton = document.getElementById('start-study');
const studyCard = document.getElementById('study-card');
const nextCardButton = document.getElementById('next-card');

let flashcards = [];
let currentFlashcardIndex = 0;

// Add flashcard
addFlashcardButton.addEventListener('click', () => {
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();
    
    if (question && answer) {
        const flashcard = { question, answer };
        flashcards.push(flashcard);
        displayFlashcards();
        questionInput.value = '';
        answerInput.value = '';
    }
});

// Display flashcards in the list
function displayFlashcards() {
    flashcardList.innerHTML = '';
    flashcards.forEach((flashcard, index) => {
        const flashcardItem = document.createElement('div');
        flashcardItem.classList.add('flashcard-item');
        flashcardItem.innerHTML = `<strong>Q${index + 1}:</strong> ${flashcard.question}`;
        flashcardList.appendChild(flashcardItem);
    });
}

// Start studying
startStudyButton.addEventListener('click', () => {
    if (flashcards.length > 0) {
        currentFlashcardIndex = 0;
        showFlashcard();
    } else {
        alert('Please add some flashcards first.');
    }
});

// Show flashcard
function showFlashcard() {
    if (currentFlashcardIndex < flashcards.length) {
        const flashcard = flashcards[currentFlashcardIndex];
        studyCard.innerHTML = `<strong>Q:</strong> ${flashcard.question}`;
        studyCard.style.display = 'block';
    }
}

// Show next flashcard
nextCardButton.addEventListener('click', () => {
    if (currentFlashcardIndex < flashcards.length) {
        const flashcard = flashcards[currentFlashcardIndex];
        studyCard.innerHTML = `<strong>A:</strong> ${flashcard.answer}`;
    }
    currentFlashcardIndex++;
    if (currentFlashcardIndex < flashcards.length) {
        nextCardButton.textContent = 'Next Card';
    } else {
        nextCardButton.textContent = 'Restart Study';
        currentFlashcardIndex = 0;
    }
});
