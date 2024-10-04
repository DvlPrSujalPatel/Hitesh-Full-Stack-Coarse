document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const markShow = document.getElementById("marks-list");
  const marksDisplay = document.getElementById("total-marks");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 5,
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 10,
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 15,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let totalMarks = 0;
  let earnedMarks = 0; // Track marks earned by correct answers

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    earnedMarks = 0;
    totalMarks = questions.reduce((sum, question) => sum + question.marks, 0); // Reset total marks
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    totalMarks = questions.reduce((sum, question) => sum + question.marks, 0); // Calculate total marks at the start
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    markShow.textContent = `Marks: ${questions[currentQuestionIndex].marks}`;
    choicesList.innerHTML = ""; // clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${choice}</span>`;
      li.addEventListener("click", () => selectAnswer(li, choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(li, choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
      earnedMarks += questions[currentQuestionIndex].marks; // Only add marks for correct answers
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }

    // Disable further clicks after answering
    Array.from(choicesList.children).forEach((child) => {
      child.style.pointerEvents = "none";
      if (child.textContent === correctAnswer) {
        child.style.backgroundColor = "green"; // Highlight the correct answer
      }
    });

    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
    marksDisplay.textContent = `Total Marks Earned: ${earnedMarks} out of ${totalMarks}`;
  }
});
