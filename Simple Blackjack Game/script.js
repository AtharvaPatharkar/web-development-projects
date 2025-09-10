// JavaScript file
const playerArea = document.getElementById("player-cards");
const dealerArea = document.getElementById("dealer-cards");
const playerScoreElem = document.getElementById("player-score");
const dealerScoreElem = document.getElementById("dealer-score");

const hitBtn = document.getElementById("hit-btn");
const standBtn = document.getElementById("stand-btn");
const restartBtn = document.getElementById("restart-btn");

let playerHand = [];
let dealerHand = [];
let deck = [];
let playerScore = 0;
let dealerScore = 0;

function createDeck() {
    const suits = ["♠️", "♥️", "♦️", "♣️"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    return suits.flatMap(suit => values.map(value => ({ suit, value })));
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function calculateScore(hand) {
    let score = 0;
    let aces = 0;

    hand.forEach(card => {
        if (card.value === "A") {
            score += 11;
            aces += 1;
        } else if (["J", "Q", "K"].includes(card.value)) {
            score += 10;
        } else {
            score += parseInt(card.value);
        }
    });

    while (score > 21 && aces) {
        score -= 10;
        aces -= 1;
    }

    return score;
}

function dealCard(hand, area) {
    const card = deck.pop();
    hand.push(card);
    const cardElem = document.createElement("div");
    cardElem.classList.add("card");
    cardElem.textContent = `${card.value} ${card.suit}`;
    area.appendChild(cardElem);
}

function updateScores() {
    playerScore = calculateScore(playerHand);
    dealerScore = calculateScore(dealerHand);
    playerScoreElem.textContent = `Score: ${playerScore}`;
    dealerScoreElem.textContent = `Score: ${dealerScore}`;
}

function startGame() {
    deck = createDeck();
    shuffleDeck(deck);

    playerHand = [];
    dealerHand = [];
    playerArea.innerHTML = "";
    dealerArea.innerHTML = "";

    dealCard(playerHand, playerArea);
    dealCard(playerHand, playerArea);
    dealCard(dealerHand, dealerArea);

    updateScores();
}

hitBtn.addEventListener("click", () => {
    dealCard(playerHand, playerArea);
    updateScores();

    if (playerScore > 21) {
        alert("You busted! Dealer wins.");
        restartBtn.style.display = "block";
    }
});

standBtn.addEventListener("click", () => {
    while (dealerScore < 17) {
        dealCard(dealerHand, dealerArea);
        updateScores();
    }

    if (dealerScore > 21 || playerScore > dealerScore) {
        alert("You win!");
    } else if (playerScore === dealerScore) {
        alert("It's a tie!");
    } else {
        alert("Dealer wins!");
    }
    restartBtn.style.display = "block";
});

restartBtn.addEventListener("click", startGame);

startGame();
