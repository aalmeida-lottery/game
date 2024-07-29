


const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const feedbackElement = document.getElementById('feedback');

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let hasAnswered = false;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    hasAnswered = false;
    nextButton.classList.add('hide');
    nextButton.style.display = ''; // Ensure the Next button is reset to its default display property
    feedbackElement.classList.add('hide');
    feedbackElement.innerText = '';
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, option, question.answer));
        answerButtonsElement.appendChild(button);
    });
    nextButton.classList.add('hide');
    feedbackElement.classList.add('hide');
    feedbackElement.innerText = '';
    hasAnswered = false;
}

function selectAnswer(button, selectedOption, correctAnswer) {
    if (hasAnswered) return;

    // Remove underline from previously selected answer
    Array.from(answerButtonsElement.children).forEach(btn => {
        btn.classList.remove('selected');
    });

    selectedAnswer = { button, selectedOption, correctAnswer };
    button.classList.add('selected'); // Underline the selected answer
    nextButton.classList.remove('hide');
}

function showAnswerFeedback() {
    const { button, selectedOption, correctAnswer } = selectedAnswer;
    const currentQuestion = questions[currentQuestionIndex];  

    if (selectedOption === correctAnswer) {
        button.classList.add('correct');
        score++;
        if (currentQuestion.correct_explanation) {
            feedbackElement.innerText = currentQuestion.correct_explanation;
        } else {
            feedbackElement.innerText = 'Correct!';
        }
    } else {
        button.classList.add('incorrect');
        if (currentQuestion.incorrect_explanation) {
            feedbackElement.innerText = currentQuestion.incorrect_explanation;
        } else {
            feedbackElement.innerText = `Answer: ${correctAnswer}`;
        }
    }
    feedbackElement.classList.remove('hide');
    nextButton.innerText = 'Next';
    nextButton.classList.remove('hide');
    hasAnswered = true; // Mark the question as answered after showing feedback
}

function handleNextQuestion() {
    if (!hasAnswered) {
        showAnswerFeedback();
    } else {
        proceedToNextQuestion();
    }
}

function proceedToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        selectedAnswer = null;
        hasAnswered = false;
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
        feedbackElement.classList.add('hide');
        feedbackElement.innerText = '';
        nextButton.innerText = 'Submit';
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    nextButton.classList.add('hide'); // Ensure the Next button is hidden
    nextButton.style.display = 'none'; // Ensure the Next button is hidden
    resultContainer.style.display = 'block';
    const percentage = (score / questions.length) * 100;
    scoreElement.innerText = `Your score: ${score}/${questions.length} (${percentage.toFixed(2)}%)`;
    if (percentage >= 80) {
        resultMessage.innerText = 'Congratulations, you passed!';
    } else {
        resultMessage.innerText = 'Sorry, you did not pass. Better luck next time! You need a score of 80% or higher to pass.';
    }
}

restartButton.addEventListener('click', () => {
    fetch('/questions')
        .then(response => response.json())
        .then(data => {
            questions = data;
            startGame();
        })
        .catch(error => console.error('Error fetching questions:', error));
});

fetch('/questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        startGame();
    })
    .catch(error => console.error('Error fetching questions:', error));

nextButton.addEventListener('click', handleNextQuestion);
