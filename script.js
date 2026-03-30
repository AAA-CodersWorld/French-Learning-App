// Complete flashcard initialization
const flashcards = [{
    question: 'Bonjour',
    answer: 'Hello',
}, {
    question: 'Merci',
    answer: 'Thank you',
}, {
    question: 'S'il vous plaît',
    answer: 'Please',
}];

let currentCardIndex = 0;

// Initialize flashcards
function initializeFlashcards() {
    displayCard();
}

// Display the current card
function displayCard() {
    const card = flashcards[currentCardIndex];
    document.getElementById('flashcard').innerText = card.question;
}

// Click event handler
document.getElementById('flashcard').addEventListener('click', function() {
    const card = flashcards[currentCardIndex];
    alert(`Translation: ${card.answer}`);
});

// Next card function
function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    displayCard();
}

// Quiz functionality
function startQuiz() {
    currentCardIndex = 0;
    initializeFlashcards();
}

// Call startQuiz to initialize on script load
startQuiz();