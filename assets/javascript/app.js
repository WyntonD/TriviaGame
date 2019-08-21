var currentQuestion = 0;
var score = 0;
var quizOver =false;


var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("#nextButton");
var resultCont = document.getElementById("resultCont");

var questions = [{
    "question": "What country is the Amazon Rainforest located in?",
    "option1": "Chile",
    "option2": "Paraguay",
    "option3": "Brazil",
    "option4": "Angola",
    answer : "Brazil"}, 
    {
    "question": "What is the capital of Texas?",
    "option1": "Dallas",
    "option2": "Houston",
    "option3": "Austin",
    "option4": "San Antonio",
    answer: "Austin"}, 
    {
    "question": "What is the tallest standing building on Earth?",
    "option1": "One World Trade Center",
    "option2": "Shanghai Tower",
    "option3": "Burj Khalifa",
    "option4": "China Zun",
    answer: "Burj Khalifa"
}];

var totQuestions = questions.length;

var totalSeconds = 60;
var minutes = parseInt(totalSeconds/60);
var seconds = parseInt(totalSeconds%60);

function checkTime(){
    $("#time").text("Time remaining: " + minutes + "minutes" + seconds + "seconds");
    if(totalSeconds <=0){
        container.style.display = "none";
        resultCont.style.display = '';
        resultCont.textContent = "Your Score:" + score + " points out of 30!";
        return;
    } 
    else{
        totalSeconds = totalSeconds - 1;
        minutes = parseInt(totalSeconds/60);
        seconds = parseInt(totalSeconds%60);
        setTimeout("checkTime()", 1000);
    }}
checkTime();

function loadQuestion (questionIndex) {
    
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {

    var selectedOption = document.querySelector("input[type=radio]:checked");
     if(!selectedOption) {
        alert("Please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    
    if(questions[currentQuestion].answer == answer) {
        resultCont.textContent = "Your Score:" + score + " points out of 30!";
    }
    selectedOption.checked = false;
    currentQuestion++;
    
    if(currentQuestion === totQuestions) {
        selectedOption.checked = true;
        console.log("correct");
        score += 10;
        $("#nextButton").text("Finish");
    }
    else{
        selectedOption.checked = false;
        score += 0
        console.log("wrong")};


    if(currentQuestion == totQuestions){
    container.style.display = "none";
    resultCont.style.display = '';
    resultCont.textContent = "Your Score:" + score + " points out of 30!";
    return;
}

    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
