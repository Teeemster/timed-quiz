//VARIABLES

//Timer Vars
var timeLeft = 100;
var timerEl = document.getElementById('countdown');
var timeInterval;

//Start Button ID's
var startButton = document.getElementById('Start');
var welcomeInfo = document.getElementById('Welcome');

//Correct Button Answer ID's
var correctOne = document.getElementById('Correct1');
var correctTwo = document.getElementById('Correct2');
var correctThree = document.getElementById('Correct3');
var correctFour = document.getElementById('Correct4');
var correctFive = document.getElementById('Correct5');

//Wrong Answer Class
var wrong1 = document.getElementById('Wrong1');
var wrong2 = document.getElementById('Wrong2');
var wrong3 = document.getElementById('Wrong3');
var wrong4 = document.getElementById('Wrong4');
var wrong5 = document.getElementById('Wrong5');
var wrong6 = document.getElementById('Wrong6');
var wrong7 = document.getElementById('Wrong7');
var wrong8 = document.getElementById('Wrong8');
var wrong9 = document.getElementById('Wrong9');
var wrong10 = document.getElementById('Wrong10');
var wrong11 = document.getElementById('Wrong11');
var wrong12 = document.getElementById('Wrong12');
var wrong13 = document.getElementById('Wrong13');
var wrong14 = document.getElementById('Wrong14');
var wrong15 = document.getElementById('Wrong15');
var wrong16 = document.getElementById('Wrong16');
var wrong17 = document.getElementById('Wrong17');
var wrong18 = document.getElementById('Wrong18');
var wrong19 = document.getElementById('Wrong19');
var wrong20 = document.getElementById('Wrong20');

//Question ID's
var questionOne = document.getElementById('Question1');
var questionTwo = document.getElementById('Question2');
var questionThree = document.getElementById('Question3');
var questionFour = document.getElementById('Question4');
var questionFive = document.getElementById('Question5');

//High Score ID's
var finalScore = document.getElementById('FinalScore');
var highScore = document.getElementById('HighScore');
var highScoreButton = document.getElementById('HighScoreButton');

//Collect The Name

var playerName = window.prompt("Welcome to the Code Quiz! What is your Name?");

//ALL FUNCTIONS
//Show Question 1
startButton.addEventListener('click', function () {
    questionOne.style.display = "block";
    welcomeInfo.style.display = "none";
    countdown();
}
);

//Show Question 2
correctOne.addEventListener('click', function () {
    questionTwo.style.display = "block";
    questionOne.style.display = "none";
}
);

//Show Question 3
correctTwo.addEventListener('click', function () {
    questionThree.style.display = "block";
    questionTwo.style.display = "none";
}
);

//Show Question 4
correctThree.addEventListener('click', function () {
    questionFour.style.display = "block";
    questionThree.style.display = "none";
}
);

//Show Question 5
correctFour.addEventListener('click', function () {
    questionFive.style.display = "block";
    questionFour.style.display = "none";
}
);

//Wrong Answer Deduction
wrong1.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong2.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong3.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong4.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong5.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong6.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong7.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong8.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong9.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong10.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong11.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong12.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong13.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong14.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong15.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong16.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong17.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong18.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong19.addEventListener('click', function () { timeLeft = timeLeft - 10; });
wrong20.addEventListener('click', function () { timeLeft = timeLeft - 10; });

//Start Timer
function countdown() {
    timeInterval = setInterval(function () {
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
};

//Stop the Timer and Collect the Score
function stopCountdown() {
    clearInterval(timeInterval);
    timerEl.innerText = "Final Score: " + timeLeft + ". Great job!";

    var newData = "Name: " + playerName + " and Score: " + timeLeft
    

    if (localStorage.getItem('Score') == null) {
        localStorage.setItem('Score', '[]');
    }

    var oldData = JSON.parse(localStorage.getItem('Score'))

    oldData.push(newData)

    localStorage.setItem('Score', JSON.stringify(oldData))
};

//Clear the Timer
function clearTimer() {
    timerEl.innerText = "";
};

//Show Final Score and Stop Timer
correctFive.addEventListener('click', function () {
    finalScore.style.display = "block";
    questionFive.style.display = "none";
    stopCountdown();
}
);

//Show High Score and Make Timer Go Away
highScoreButton.addEventListener('click', function () {
    highScore.style.display = "block";
    finalScore.style.display = "none";
    clearTimer();
    Scoreboard();
}
);

//Show the Scoreboard
function Scoreboard() {
    if (localStorage.getItem('Score') != null) {
        var highScoreArray = JSON.parse(localStorage.getItem('Score')) || [];
        console.log(highScoreArray)
        
        for (var i = 0; i < highScoreArray.length; i++) {
            var highScoreList = document.querySelector('#highScores');
            var highScoreEl = document.createElement('li');
            highScoreEl.textContent = highScoreList[i];
            highScoreList.appendChild(highScoreEl);
        }
    }
}
