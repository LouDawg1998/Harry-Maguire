function finishFunction() {
    alert("Thank you for completing the quiz.")
}

function checkAnswers() {
    var score = 0; 
    // assign the quiz elements to the quiz variable 
    quiz = document.forms.Quiz.elements; 
    // assign the answer to the question to answer1 variable 
    answer1 = quiz.growth.value; 
    // check the answer to the first question 
    if (answer1 == "70%") {
        //add 1 to the score
        score = score + 1;  
    }
    answer2 = quiz.talent.value;
    if (answer2 == "20") {
        score = score + 1; 
    } 
    answer3 = quiz.payment.value; 
    if (answer3 == "80") {
        score = score + 1;
    }
    answer4 = quiz.idiot.value;
    if (answer4 == "2019") {
        score = score + 1;
    }
    answer5 = quiz.moron.value;
    if (answer5 == "2017") {
        score = score + 1;
    }
    if (score == 5) {
alert ("Congratulations! You know all there needs to be know about the GOAT Harry Maguire!");
    }
else {
    alert ("Your score is " + score + ". You made a mistake or two but that's ok, even the GOAT makes mistakes sometimes");
}
}
