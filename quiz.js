var timeRemaining = 60;

var questions = [
  {
    title:
      "Question 1: The value output of this function is 'true' or 'false':",
    choices: ["strings", "number", "confirm", "prompt"],
    answer: "confirm",
  },
  {
    title:
      "Question 2: To save an item in the local storage use this:________.",
    choices: ["getItem", "useItem", "storeItem", "setItem"],
    answer: "setItem",
  },
  {
    title: "Question 3: Javascript can be linked inside this tag:________",
    choices: [
      "&lt;js&gt;",
      "&lt;script&gt;",
      "&lt;scriptDiv&gt;",
      "&lt;functScript&gt;",
    ],
    answer: "&lt;script&gt;",
  },
  {
    title:
      "Question 4: This prefix is needed to convert an object to a string ____.",
    choices: ["funct", "init", "JSON", "SCRIPT"],
    answer: "JSON",
  },
  {
    title:
      "Question 5: This signals that value and type must be the same  ____.",
    choices: ["||", "==", "&", "==="],
    answer: "===",
  },
];

var startEl = document.querySelector("#start");
var timeRemainingEl = document.querySelector("#time-remaining");
var finalScoreEl = document.querySelector("#final-score");
var numQuestions = questions.length;
var mainContainerEl = document.querySelector("#main-container");
var quizContainerEl = document.querySelector("#quiz-container");
var finalContainerEl = document.querySelector("#final-container");
var submitButtonEl = document.querySelector("#submit-initials");
var highscoreButtonEl = document.querySelector("#highscore-button");
var highscoreContainerEl = document.querySelector("#highscore-container");
var home = document.querySelector("#home");
var highScores = [];

function startQuiz() {
  mainContainerEl.setAttribute("class", "container d-none");
  var rowEl = null;
  var colEl = null;
  var headerEl = null;
  var buttonEl = null;
  quizContainerEl.setAttribute("class", "container");
  var currentQuestion = 1;
  var score = 0;
  timeRemaining = 150;
  timeRemainingEl.setAttribute("value", timeRemaining);
  var myInterval = setInterval(function () {
    timeRemaining--;
    if (timeRemaining < 1) {
      clearInterval(myInterval);
      quizContainerEl.setAttribute("class", "container d-none");
      finalContainerEl.setAttribute("class", "container");
      return;
    }

    timeRemainingEl.setAttribute("value", timeRemaining);
  }, 1000);
  var clickTimeout = false;

  function generateQuestion(questionNum) {
    quizContainerEl.innerHTML = "";
    rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row text-white");
    quizContainerEl.append(rowEl);

    colEl = document.createElement("div");
    colEl.setAttribute("class", "col-0 col-sm-2 bg-success");
    rowEl.append(colEl);

    colEl = document.createElement("div");
    colEl.setAttribute("class", "col-12 col-sm-8 bg-dark");
    rowEl.append(colEl);

    colEl = document.createElement("div");
    colEl.setAttribute("class", "col-0 col-sm-2 bg-success");
    rowEl.append(colEl);

    colEl = rowEl.children[1];
    rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row mb-3");
    colEl.append(rowEl);

    colEl = document.createElement("div");
    colEl.setAttribute("class", "col-12 mb-2");
    rowEl.append(colEl);

    headerEl = document.createElement("h2");
    headerEl.innerHTML = questions[questionNum - 1].title;
    colEl.append(headerEl);

    colEl = quizContainerEl.children[0].children[1];
    for (var i = 0; i < 4; i++) {
      var rowEl = document.createElement("div");
      rowEl.setAttribute("class", "row mb-1");
      colEl.append(rowEl);

      var colEl2 = document.createElement("div");
      colEl2.setAttribute("class", "col-12");
      rowEl.append(colEl2);

      buttonEl = document.createElement("button");
      buttonEl.setAttribute("class", "btn btn-success");
      buttonEl.setAttribute("type", "button");
      buttonEl.innerHTML = questions[currentQuestion - 1].choices[i];
      colEl2.append(buttonEl);
      buttonEl.addEventListener("click", function () {
        if (clickTimeout) {
          return;
        }
        clickTimeout = true;
        clearInterval(myInterval);
        var rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row border-top");
        colEl.append(rowEl);

        colEl = document.createElement("div");
        colEl.setAttribute("class", "col-12");
        rowEl.append(colEl);

        var parEl = document.createElement("p");
        colEl.append(parEl);
        if (this.innerHTML === questions[currentQuestion - 1].answer) {
          parEl.innerHTML = "Correct!";
        } else {
          parEl.innerHTML = "Incorrect!";
          timeRemaining = timeRemaining - 15;
          if (timeRemaining < 0) {
            timeRemaining = 0;
          }
          timeRemainingEl.setAttribute("value", timeRemaining);
        }
        currentQuestion++;
        if (currentQuestion > questions.length) {
          score = timeRemaining * 5;
        }
        setTimeout(function () {
          if (currentQuestion > questions.length) {
            quizContainerEl.setAttribute("class", "container d-none");
            finalContainerEl.setAttribute("class", "container");
            finalScoreEl.setAttribute("value", score);
          } else {
            generateQuestion(currentQuestion);
            clickTimeout = false;
            myInterval = setInterval(function () {
              if (timeRemaining < 1) {
                clearInterval(myInterval);
                quizContainerEl.setAttribute("class", "container d-none");
                finalContainerEl.setAttribute("class", "container");
                return;
              }
              timeRemaining = timeRemaining - 1;
              timeRemainingEl.setAttribute("value", timeRemaining);
            }, 1000);
          }
        }, 1000);
      });
    }
  }
}
