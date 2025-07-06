const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');

const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: 1
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"],
        answer: 1
    },
    {
        question: "Which river is the longest in India?",
        options: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
        answer: 1
    },
    {
        question: "What is the national animal of India?",
        options: ["Elephant", "Peacock", "Tiger", "Lion"],
        answer: 2
    },
    {
        question: "What is the national flower of India?",
        options: ["Rose", "Lotus", "Sunflower", "Marigold"],
        answer: 1
    },
    {
        question: "What is the national bird of India?",
        options: ["Peacock", "Sparrow", "Pigeon", "Crow"],
        answer: 0
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Sardar Patel"],
        answer: 1
    },
    {
        question: "In which year did India gain independence?",
        options: ["1945", "1946", "1947", "1948"],
        answer: 2
    },
    {
        question: "Which city is known as the Pink City of India?",
        options: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
        answer: 0
    },
    {
        question: "Which is the smallest state in India by area?",
        options: ["Sikkim", "Goa", "Tripura", "Nagaland"],
        answer: 1
    },
    {
        question: "What is the national sport of India?",
        options: ["Cricket", "Hockey", "Kabaddi", "Football"],
        answer: 1
    },
    {
        question: "Who wrote the Indian national anthem?",
        options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subramania Bharati"],
        answer: 0
    },
    {
        question: "Which Indian state is known as the Spice Garden of India?",
        options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
        answer: 0
    },
    {
        question: "Which Indian festival is known as the Festival of Lights?",
        options: ["Holi", "Diwali", "Eid", "Navratri"],
        answer: 1
    },
    {
        question: "Who was the first President of India?",
        options: ["Rajendra Prasad", "Jawaharlal Nehru", "Sarvepalli Radhakrishnan", "Subhas Chandra Bose"],
        answer: 0
    },
    {
        question: "What is the currency of India?",
        options: ["Dollar", "Rupee", "Pound", "Euro"],
        answer: 1
    },
    {
        question: "Which monument is known as the Symbol of Love in India?",
        options: ["Qutub Minar", "Red Fort", "Taj Mahal", "Charminar"],
        answer: 2
    },
    {
        question: "Which state is the largest by area in India?",
        options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
        answer: 2
    },
    {
        question: "Who is known as the Missile Man of India?",
        options: ["C.V. Raman", "Homi Bhabha", "A.P.J. Abdul Kalam", "Vikram Sarabhai"],
        answer: 2
    },
    {
        question: "Which Indian state is famous for its tea gardens?",
        options: ["Kerala", "Assam", "Himachal Pradesh", "West Bengal"],
        answer: 1
    },
    {
        question: "Which is the oldest language in India?",
        options: ["Hindi", "Sanskrit", "Tamil", "Telugu"],
        answer: 2
    },
    {
        question: "Which Indian festival marks the arrival of spring?",
        options: ["Diwali", "Holi", "Dussehra", "Baisakhi"],
        answer: 1
    },
    {
        question: "Which Indian state is known as the Land of Five Rivers?",
        options: ["Haryana", "Punjab", "Rajasthan", "Uttar Pradesh"],
        answer: 1
    },
    {
        question: "What is the main occupation in India?",
        options: ["Industry", "Agriculture", "Trade", "Service"],
        answer: 1
    },
    {
        question: "Which is the tallest mountain in India?",
        options: ["K2", "Kanchenjunga", "Nanda Devi", "Mount Everest"],
        answer: 1
    },
    {
        question: "Who is the author of 'Discovery of India'?",
        options: ["Rabindranath Tagore", "Jawaharlal Nehru", "Mahatma Gandhi", "Dr. B.R. Ambedkar"],
        answer: 1
    },
    {
        question: "Which Indian city is known as the Silicon Valley of India?",
        options: ["Mumbai", "Bengaluru", "Hyderabad", "Pune"],
        answer: 1
    },
    {
        question: "Which river is considered the holiest in India?",
        options: ["Yamuna", "Ganga", "Narmada", "Godavari"],
        answer: 1
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        options: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        answer: 0
    },
    {
        question: "Which Indian city is called the City of Joy?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: 2
    },
    {
        question: "Which dance form is associated with Kerala?",
        options: ["Bharatanatyam", "Kathakali", "Kuchipudi", "Odissi"],
        answer: 1
    },
    {
        question: "Which Indian state is known as the Land of Rising Sun?",
        options: ["Assam", "Arunachal Pradesh", "Manipur", "Mizoram"],
        answer: 1
    },
    {
        question: "What is the total number of states in India?",
        options: ["28", "29", "30", "31"],
        answer: 0
    },
    {
        question: "Which city is known as the Financial Capital of India?",
        options: ["Delhi", "Mumbai", "Bengaluru", "Chennai"],
        answer: 1
    },
    {
        question: "Who built the Qutub Minar?",
        options: ["Akbar", "Shah Jahan", "Qutub-ud-din Aibak", "Humayun"],
        answer: 2
    },
    {
        question: "What is the primary mode of transportation in rural India?",
        options: ["Cars", "Buses", "Trains", "Bullock Carts"],
        answer: 3
    },
    {
        question: "Which Indian state is famous for its backwaters?",
        options: ["Tamil Nadu", "Kerala", "Goa", "Andhra Pradesh"],
        answer: 1
    },
    {
        question: "What is the national tree of India?",
        options: ["Mango Tree", "Banyan Tree", "Neem Tree", "Peepal Tree"],
        answer: 1
    },
    {
        question: "Which city is called the Blue City of India?",
        options: ["Jodhpur", "Jaipur", "Udaipur", "Ajmer"],
        answer: 0
    },
    {
        question: "Which is the southernmost tip of India?",
        options: ["Rameshwaram", "Kanyakumari", "Lakshadweep", "Andaman"],
        answer: 1
    },
    {
        question: "Which place is famous for the Ajanta and Ellora caves?",
        options: ["Delhi", "Aurangabad", "Udaipur", "Hyderabad"],
        answer: 1
    },
    {
        question: "Which state is known for the Sunderbans mangroves?",
        options: ["Odisha", "West Bengal", "Andhra Pradesh", "Assam"],
        answer: 1
    },
    {
        question: "Who gave the slogan 'Jai Hind'?",
        options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh", "Jawaharlal Nehru"],
        answer: 0
    }
];


let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        optionsEl.appendChild(button);
    });
}

function selectOption(index) {
    if (index === questions[currentQuestionIndex].answer) {
        score++;
        scoreEl.textContent = score;
    }
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextBtn.disabled = true;
    } else {
        questionEl.textContent = "Quiz Completed!";
        optionsEl.innerHTML = '';
        nextBtn.style.display = 'none';
    }
}

nextBtn.addEventListener('click', nextQuestion);

// Initialize the quiz
loadQuestion();
nextBtn.disabled = true;
