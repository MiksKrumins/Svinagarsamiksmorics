
const questions = [
    {
        question: "Galvenais varonis grāmatā Svina garša ir jauns vīrietis vārdā Matīss.",
        answer: true
    },
    {
        question: "Darbība grāmatā norisinās Otrā pasaules kara laikā.",
        answer: true
    },
    {
        question: "Matīss bija automehāniķis.",
        answer: false
    },
    {
        question: "Grāmatas autors ir Māris Bērziņš.",
        answer: true
    },
    {
        question: "Matīss grāmatā pievienojas sarkanajai armijai.",
        answer: false
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionText = document.getElementById('question-text');
    questionText.textContent = questions[currentQuestion].question;
}

function checkAnswer(userAnswer) {
    const feedback = document.getElementById('feedback');
    const scoreElement = document.getElementById('score');
    
    if (userAnswer === questions[currentQuestion].answer) {
        feedback.textContent = "Pareizi!";
        feedback.style.color = "#4CAF50";
        score++;
    } else {
        feedback.textContent = "Nepareizi!";
        feedback.style.color = "#a12b1f";
    }
    
    scoreElement.textContent = `Punkti: ${score}`;
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        setTimeout(() => {
            feedback.textContent = "";
            displayQuestion();
        }, 1500);
    } else {
        setTimeout(() => {
            document.getElementById('question-container').innerHTML = `
                <h2>Spēle beigusies!</h2>
                <p>Tavs rezultāts: ${score} no ${questions.length}</p>
                <button onclick="restartQuiz()" class="navigation-btn">Sākt no jauna</button>
            `;
        }, 1500);
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('score').textContent = "Punkti: 0";
    document.getElementById('feedback').textContent = "";
    document.getElementById('question-container').innerHTML = `
        <p id="question-text" class="placeholder-text"></p>
        <div class="button-group">
            <button onclick="checkAnswer(true)" class="navigation-btn">Patiess</button>
            <button onclick="checkAnswer(false)" class="navigation-btn">Nepatiess</button>
        </div>
    `;
    displayQuestion();
}

// Start the quiz when the page loads
window.onload = displayQuestion;
