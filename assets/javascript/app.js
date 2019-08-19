var currentQuestion = 0
rightAnswers = 0;
wrongAnswers = 0;
unanswered = 0;

var container = document.getElementById("#quizContainer");
var questionEl =document.getElementById(".questions");
var opt1 = document.getElementById("#opt1");
var opt2 = document.getElementById("#opt2");
var opt3 = document.getElementById("#opt3");
var opt4 = document.getElementById("#opt4");


var questions = [{
    "question": "How many licks does it take to get to the center of a lollipop?",
    "option1": 364,
    "option2": 240,
    "option3": 256,
    "option4": 325,
    "answer": 364
}, {
    "question": "What is the capital of Texas?",
    "option1": "Dallas",
    "option2": "Houston",
    "option3": "Austin",
    "option4": "San Antonio",
    "answer": "Austin"}, 
                
    {"question": "What is the tallest standing building on Earth?",
    "option1": "One World Trade Center",
    "option2": "Shanghai Tower",
    "option3": "Burj Khalifa",
    "option4": "China Zun",
    "answer": "Burj Khalifa"}];

var totalQuestions = questions.length;
var nextButton = document.getElementById("#nextBtn")

var results = document.getElementById("#stats");

function loadQuestion(questionIndex) {
    var q = questions[questionsIndex];
    questionEl.textContent = (questionsIndex + 1) + ". " + q.questions;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion() {
var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption){
        alert("Next question");
        return;
    }
var answer = selectedOption.value;

if(questions[currentQuestion].answer === answer) {
    rightAnswers++;
}
selectedOption.checked = false;
currentQuestion++;

if(currentQuestion == totalQuestions - 1){
    nextButton.textContent = "Finish";
}

if(currentQuestion == totalQuestions){
    container.style.display ="none";
    results.style.display =" ";
    results.textContent ="Your Score" + score;
    return;
}
loadQuestion(currentQuestion);
}


loadQuestion(currentQuestion);




var isCorrect = false;

answers = [364, "Austin", "Burj Khalifa"];

var submitButton = document.getElementById("#done");

var correctAnswer = []; 
var incorrectAnswer =[];

questions=[];


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent ="Time Left: " + minutes + ":" + seconds;


        if (--timer === 0) {
            clearInterval(timer);
            console.log("Time's up");
            $("#right").text("Correctly Answered: " + rightAnswers);
            $("#wrong").text("Incorrectly Answered: " + wrongAnswers);
            $("#unanswered").text("Unanswered: " + unanswered);
        }
    }, 1000);
}

// $("#stats").attr("color", "red");
// $("#stats").attr("color", "red");
// $("#stats").attr("color", "red");

// for (var i = 0; i < answers.length; i++) {
//     if (input === answers[i]){
    
//     }
// }

// for (var i = 0; i < questions.length; i++) {
//     answer = prompt(questions[i].question);

//     if (answer !== questions[i].answers) {
//         alert(questions[i].rebuttal);
//         i--;
//     }
//     else {
//         alert(questions[i].affirm);
//     }
// }
// $(function (one) {
//     $('input[name="How many licks does it take to get to the center of a lollipop?"]').on('click', function() {
//         if ($(this).val() === 364) {
//             console.log(rightAnswers++)
//         } else {
//         console.log(wrongAnswers++);
//         }
//     })
//     });

// $(function (two) {
//         $('input[name="What is the capital of Texas?"]').on('click', function() {
//             if ($(input).val() === "Austin") {
//                 console.log(rightAnswers++);
//             } else {
//                console.log(wrongAnswers++);
//             }
//         })
//         });

// $(function (three) {
//             $('input[name="What is the tallest building on Earth?"]').on('click', function() {
//                 if ($(this).val() == "Burj Khalifa") {
//                     console.log(rightAnswers++);
//                 } else {
//                 console.log(wrongAnswers++);
//                 }
//             })
//             });



// var input = $("#done").on("click", function(event){
//         $("#right").text("Correctly Answered: " + rightAnswers);
//         console.log("Correctly Answered : " + rightAnswers);
//         $("#wrong").text("Incorrectly Answered: " + wrongAnswers);
//         console.log("Incorrectly Answered: " + wrongAnswers);
//         $("#unanswered").text("Unanswered: " + unanswered);
//         console.log("Unanswered: " + unanswered);


// });

// function begin() { window.onload = function () {
//     var fiveMinutes = 10,
//         display = document.querySelector('.time-rem');
//         startTimer(fiveMinutes, display);
// };
// }
// $(".start").on("click", function(){
//     clearInterval(startTimer());
//     var fiveMinutes = 10,
//         display = document.querySelector('.time-rem');
//         startTimer(fiveMinutes, display);
// });