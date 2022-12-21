//---Welcome User------>>>>
var readlinesync = require("readline-sync");

var userName = readlinesync.question("Enter your name ");
console.log("Welcome " + userName + " in this Naruto Quiz");

var score = 0;

// Create function------->>>>
function narutoQuiz(question, answer) {
  var userques = readlinesync.question(question);

  if (typeof answer === "string") {
    if (userques.toLowerCase() === answer.toLowerCase()) {
      console.log("Correct Answer");
      score = score + 1;
    } else {
      console.log("wrong !")
    }
  } else {
    for (var i = 0; i < answer.length; i++) {
      if (userques.toLowerCase() === answer[i].toLowerCase()) {
        console.log("Correct Answer");
        score = score + 1;
      }
    }
  }
  console.log("Your current score is : ", score)
}

//--Array of question-answer-object------>>>
var questions = [
  {
    questionArray: "what is naruto's element? ",
    answerP: "wind"
  },
  {
    questionArray: "Naruto's father name? ",
    answerP: ["minato namikaze", "minato", "namikaze"]
  },
  {
    questionArray: "what is naruto's last name? ",
    answerP: "uzumaki"
  },
  {
    questionArray: "Naruto's biggest fight with? ",
    answerP: "sasuke"
  },
  {
    questionArray: "Who trained Team 7? ",
    answerP: "kakashi"
  }
]

//---Loop---->>
for (var i = 0; i < questions.length; i++) {
  narutoQuiz(questions[i].questionArray, questions[i].answerP);
}

console.log("Your final score is : ", score)
