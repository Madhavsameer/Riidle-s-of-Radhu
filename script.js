let myname=prompt("Enter Your Name?");
let messwelcome=document.querySelector('#welcome');
messwelcome.innerHTML=`Welcome ${myname}🥰! Lets test Your Knowledge About Our lovestory `

//array containing questions and answers below
const questions = [
  {
    question: "When did ADI met RADHU❤️?",
    answers: [
      { text: "2023", correct: false },
      { text: "2022", correct: true },
      { text: "2021", correct: false },
      { text: "They did Never meet😁", correct: false },
    ],
  },

  {
    question: "By which name is RADHU most commonly called by ADI?",
    answers: [
      { text: "Motki👧", correct: true },
      { text: "Bauaa🍼", correct: false },
      { text: "Meri Pagaliya Girlfriend🥰", correct: false },
      { text: "Radhika Rani G❤️", correct: false },
      
    ],
  },

  {
    question: "From which city do Adi belongs?",
    answers: [
      { text: "Jammu", correct: false },
      { text: "Patna", correct: true },
      { text: "Delhi", correct: false },
      { text: "Mumbai", correct: false },
    ],
  },
  {
    question: "The honeymoon place as per planned of ADI & RADHU?",
    answers: [
      { text: "Singapore", correct: true },
      { text: "New york", correct: false },
      { text: "Wellington", correct: false },
      { text: "Islambad😂", correct: false },
    ],
  },
  {
    question: "How many times did Adi Kissed RAdHU ?",
    answers: [
      { text: "<=300", correct: false },
      { text: "<=500", correct: false },
      { text: "<=1000", correct: false },
      { text: "<=1200", correct: true },
    ],
  },
  {
    question: "What hurts more you from your ADI?",
    answers: [
      { text: "Attitude", correct: false },
      { text: "Ego", correct: true },
      { text: "His Lust😘", correct: false },
      { text: "His Busy Schedule", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuizz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");

  }

  //this is for when you click one button, it disables the other ones, if its wrong it paints the correct one
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Well Played ${myname} You scored ${score} out of ${questions.length}! `;
  nextButton.innerHTML = `Play Agin! ${myname}`;
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuizz();
  }
});

starQuizz();
