//VARIABLES

//Timer Vars
var timeLeft = 100;
var timerEl = document.getElementById('countdown');
var timeInterval;

//Start ID
var startButton = document.getElementById('Start');
var welcomeInfo = document.getElementById('Welcome');

//Correct Answer ID's
var correctOne = document.getElementById('Correct1');
var correctTwo = document.getElementById('Correct2');
var correctThree = document.getElementById('Correct3');
var correctFour = document.getElementById('Correct4');
var correctFive = document.getElementById('Correct5');

//Wrong Answer Class
var wrongSubtract = document.getElementsByClassName('Wrong');

//Question ID's
var questionOne = document.getElementById('Question1');
var questionTwo = document.getElementById('Question2');
var questionThree = document.getElementById('Question3');
var questionFour = document.getElementById('Question4');
var questionFive = document.getElementById('Question5');

//High Score ID's
var finalScore = document.getElementById('FinalScore')
var highScore = document.getElementById('HighScore')
var highScoreButton = document.getElementById('HighScoreButton')
var playerName = document.getElementById('Name')

//ALL FUNCTIONS

//Show Question 1
startButton.addEventListener('click', function () {
    questionOne.style.display = "block";
    welcomeInfo.style.display = "none";
    countdown();
}
)

//Show Question 2
correctOne.addEventListener('click', function () {
    questionTwo.style.display = "block";
    questionOne.style.display = "none";
}
)

//Show Question 3
correctTwo.addEventListener('click', function () {
    questionThree.style.display = "block";
    questionTwo.style.display = "none";
}
)

//Show Question 4
correctThree.addEventListener('click', function () {
    questionFour.style.display = "block";
    questionThree.style.display = "none";
}
)

//Show Question 5
correctFour.addEventListener('click', function () {
    questionFive.style.display = "block";
    questionFour.style.display = "none";
}
)

//Start Timer
function countdown() {
    setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + " seconds remaining."
            timeLeft--;
        }

        else {
            timerEl.textContent = "No time remaining."
            clearInterval(timeInterval)
            displayMessage();
        }
    }
        , 1000);
}

//Stop the Timer and Clear It
function stopCountdown() {
    clearInterval(timeInterval);
    timerEl.innerText = "";
    displayMessage();
}

//Collect the Score
localStorage.setItem('timeLeft', JSON.stringify([timeLeft]));


//Show Final Score and Stop Timer
correctFive.addEventListener('click', function () {
    finalScore.style.display = "block";
    questionFive.style.display = "none";
    stopCountdown();
}
)

//Show High Score and Make Timer Go Away
highScoreButton.addEventListener('click', function () {
    highScore.style.display = "block";
    finalScore.style.display = "none";
}
)

highScore.innerText = playerName + " scored " + timeLeft + " !"