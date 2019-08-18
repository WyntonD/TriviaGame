rightAnswers = 0;
wrongAnswers = 0;
unanswered = 0;


var isCorrect = false;

var questions = [{question: "How many licks does it take to get to the center of a lollipop?",
                answer: 364}, 
                {question:" What is the capital of Texas?", 
                answer: "Austin"}, 
                {question: "What is the tallest building on Earth?", 
                answer: "Burj Khalifa"}];

answers = [364, "Austin", "Burj Khalifa"];

incorrectAnswers =[240, 256, 325, "Dallas", "Houston", "San-Antonio"]


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

$("#stats").attr("color", "red");
$("#stats").attr("color", "red");
$("#stats").attr("color", "red");

for (var i = 0; i < answers.length; i++) {
    if (input === answers[i]){
    
    }
    
}

for (var i = 0; i < questions.length; i++) {
    answer = prompt(questions[i].question);

    if (answer !== questions[i].answers) {
        alert(questions[i].rebuttal);
        i--;
    }
    else {
        alert(questions[i].affirm);
    }
}

$(function (one) {
    $('input[name="How many licks does it take to get to the center of a lollipop?"]').on('click', function() {
        if ($(this).val() == "364") {
            // push to correct answer array
        } else {
        // Push to incorrect answer array
        }
    })
    });

$(function (two) {
        $('input[name="What is the capital of Texas?"]').on('click', function() {
            if ($(this).val() === "Austin") {
                // push to correct answer array
            } else {
            // Push to incorrect answer array
            }
        })
        });

$(function (three) {
            $('input[name="What is the tallest building on Earth?:"]').on('click', function() {
                if ($(this).val() == "Burj Khalifa") {
                    // push to correct answer array
                } else {
                // Push to incorrect answer array
                }
            })
            });



var input = $("#done").on("click", function(event){
        $("#right").text("Correctly Answered: " + rightAnswers);
        console.log("Correctly Answered : " + rightAnswers);
        $("#wrong").text("Incorrectly Answered: " + wrongAnswers);
        console.log("Incorrectly Answered: " + wrongAnswers);
        $("#unanswered").text("Unanswered: " + unanswered);
        console.log("Unanswered: " + unanswered);


});

function begin() { window.onload = function () {
    var fiveMinutes = 10,
        display = document.querySelector('.time-rem');
        startTimer(fiveMinutes, display);
};
}
$(".start").on("click", function(){
    clearInterval(startTimer());
    var fiveMinutes = 10,
        display = document.querySelector('.time-rem');
        startTimer(fiveMinutes, display);
});