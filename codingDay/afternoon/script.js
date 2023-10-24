const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Hyper Transfer Markup Language"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is a popular JavaScript framework?",
      options: ["JavaFX", "jQuery", "JScript", "JavaBeans"],
      correctAnswer: 1,
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML tag is used to link an external JavaScript file?",
      options: ["<js>", "<script>", "<link>", "<javascript>"],
      correctAnswer: 1,
    },
    {
      question: "What is the result of 2+2 in JavaScript?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
    },
   
    {
        question: "What is CSS used for?",
        options: ["Styling web pages", "Creating web content", "Building web servers", "Adding interactivity to web pages"],
        correctAnswer: 0
    },
    {
        question: "What is JavaScript primarily used for?",
        options: ["Styling web pages", "Creating web content", "Building web servers", "Adding interactivity to web pages"],
        correctAnswer: 3
    },
    {
        question: "Which is not a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        correctAnswer: 2
    },
    {
        question: "What does the 'CSS' in CSS Grid stand for?",
        options: ["Cascading Style Sheets", "Creative Style Selector", "Central Style System", "Computer Style Script"],
        correctAnswer: 0
    },
    {
        question: "What does 'DOM' stand for in web development?",
        options: ["Document Object Model", "Design Oriented Markup", "Digital Object Module", "Dynamic Operation Model"],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of a 'media query' in CSS?",
        options: ["To add audio and video content to a web page.", "To apply different styles based on screen size.", "To define the structure of a web page.", "To create interactive animations."],
        correctAnswer: 1
    },
    {
        question: "What does 'AJAX' stand for in web development?",
        options: ["Advanced JavaScript and XML", "Asynchronous JavaScript and XML", "Application JavaScript and XML", "Automated JavaScript and XML"],
        correctAnswer: 1
    },
    {
        question: "What is the 'localStorage' object used for in JavaScript?",
        options: ["To define styles for HTML elements.", "To store data on the server.", "To store key-value pairs locally in a web browser for persistent storage.", "To create dynamic HTML content."],
        correctAnswer: 2
    },
    {
        question: "What is the primary purpose of 'flexbox' in CSS?",
        options: ["To create rounded corners on elements.", "To position elements on the web page.", "To define the layout and spacing of elements in relation to their content, padding, border, and margin.", "To add shadow effects to elements."],
        correctAnswer: 2
    }
  
    
  ];
let currentQuestion = 0;
let score = 0;
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

function showQuestion() {
    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    for (let i = 0; i < current.options.length; i++) {
        const optionButton = optionsContainer.children[i];
        optionButton.textContent = current.options[i];
        optionButton.style.backgroundColor = "#145b99";
    }
}
function checkAnswer(button) {
    const selectedAnswer = Array.from(optionsContainer.children).indexOf(button);
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = "#21cba7";
        score++;
    } else {
        button.style.backgroundColor = "#E74C3C";
        optionsContainer.children[correctAnswer].style.backgroundColor = "#21cba7";
    }
    for (const optionButton of optionsContainer.children) {
        optionButton.disabled = true;
    }
    nextButton.style.display = "block";
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        for (const optionButton of optionsContainer.children) {
            optionButton.disabled = false;
        }
        nextButton.style.display = "none";
    } else {
        showResult();
    }
}
function showResult() {
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = score;
    if (score === questions.length) {
        messageElement.textContent = "You are a genius!";
    } else if (score >= Math.floor(questions.length / 2)) {
        messageElement.textContent = "You did well!";
    } else {
        messageElement.textContent = "You seem to have a bad day.";
    }
}
showQuestion();