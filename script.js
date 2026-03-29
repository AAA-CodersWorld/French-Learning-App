// FLASHCARDS
const cards = [
    { front: "Bonjour", back: "Hello" },
    { front: "Merci", back: "Thank you" },
    { front: "Pomme", back: "Apple" },
    { front: "Chat", back: "Cat" },
];

let index = 0;
let flipped = false;

const flashcard = document.getElementById("flashcard");

if (flashcard) {
    flashcard.addEventListener("click", () => {
        flipped = !flipped;
        flashcard.textContent = flipped ? cards[index].back : cards[index].front;
    });
}

function nextCard() {
    index = (index + 1) % cards.length;
    flipped = false;
    flashcard.textContent = cards[index].front;
}

// QUIZ
function startQuiz() {
    const quiz = document.getElementById("quiz-container");
    quiz.innerHTML = `
        <p>What does "Bonjour" mean?</p>
        <button onclick="alert('Correct!')">Hello</button>
        <button onclick="alert('Try again')">Good night</button>
        <button onclick="alert('Try again')">Please</button>
    `;
}
