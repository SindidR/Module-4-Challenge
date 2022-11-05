var initialsDiv = document.getElementById('initials-div');
var questionEl = document.getElementById('questions'); 
var timeLeft = document.getElementById("timer");
var optionChoice = document.getElementsByClassName('options') [0];
var options1El = document.getElementById('option1');
var options2El = document.getElementById('option2');
var options3El = document.getElementById('option3');
var options4El = document.getElementById('option4');
var optionsarray =[ options1El, options2El, options3El, options4El]; 
var questionNumber =0;
var score = 0; 
var quizEl = document.getElementById('quiz'); 

var scoreEl = document.getElementById('score');
var initialsButton = document.getElementById('submit');
var nameEl = document.getElementById('initials');
var scoresEl= document.getElementById('highscores');
var highscores = JSON.parse(localStorage.getItem('scores'));


var questionCount = 1;

function setTime() {
    var secondsLeft = 60;
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeLeft.textContent = "Time: " + secondsLeft + "  Seconds";
        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            console.log ("Quiz has ended");
        
        }
    }, 1000);
}
setTime();

var questions = [
  {

      question : "What does CSS stand for?",
      options: [
       "Corrupted Software System",
       "Cascading Similar Styles",
       "Computer Software System",
       "Cascading Style Sheets",
      ],
      answer:"Cascading Style Sheets"
  },
  {
      question : "Commonly used data types?",
      options: [
      "Float",
      "String",
      "No wrong answer",
      "Integer",
      ],
      answer:"No wrong answer"

  },
  {   
      question : "What is a data structure consisting of similar elements?",
      options: [
      "Package",
      "String",
      "Array",
      "Booleans",
      ],
      answer:"Array"
  }
];


function generateQuiz (questionNumber) {
    questionEl.textContent = questions[questionNumber].question;

    for ( var i =0; i <4; i++) {
        optionsarray[i].textContent =questions[questionNumber].options[i];
    } 
    
}

function scoreBoard (){
    questionEl.remove();
    optionChoice.remove();
    timeLeft.remove();
    result.remove();
    scoreEl.textContent = score;
    highscores();
};

function highscores (){
    var highscores= JSON.parse(localStorage.getItem('scores'))
    var scoresList = document.createElement("");

    for (var highscore of highscore) {
        textContent = `Initials: ${highscore.initials}, Score: ${highscore.score}`;
        scoresList.appendChild;
    }

    scoresEl.appendChild(scoresList);
}


optionChoice.addEventListener( 'click', function(event) {
    questionNumber++ 

    if (questionNumber < questions.length ) {
        generateQuiz(questionNumber); 

    } else {
        scoreBoard ();
    }
});


initialsButton.addEventListener ('click', function(){
    highscores.push({ 
        name: nameEl.value,
        score: score
    })
     if (nameEl.value <1) {
        console.log('Must be 2 Characters')
     }
    localStorage.setItem('scores', JSON.stringify(highscores));
    highscores();
});
generateQuiz(0);