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
// var numQuestions = questions.length;
var mainContainerEl = document.querySelector("#main-container");
var quizContainerEl = document.querySelector("#quiz-container");
var finalContainerEl = document.querySelector("#final-container");
var submitButtonEl = document.querySelector("#submit-initials");
var highscoreButtonEl = document.querySelector("#highscore-button");
var highscoreContainerEl = document.querySelector("#highscore-container");
var home = document.querySelector("#home");
var highScores = [];