sentencesArr = ['spark','zany','futuristic','tremendous','nut','stick','obeisant','cross','freezing','talk','mysterious','waiting','mitten','numberless','spiritual','owe','argue','voracious','acoustic','internal','depressed','miscreant','rustic','thirsty','basket','fire','unequaled','spiteful','name','reason','sophisticated','advertisement','scatter','string','accidental','needle','rapid','able','imaginary','pail','wave','flowers','glorious','laugh','receptive','erratic','roof','unable','dizzy','team'];

var score = 0;
var scoreElement = document.getElementById('score');
var seconds = 25; 
var secondsElement = document.getElementById('seconds');secondsElement.innerHTML = seconds;

function generateWord() {
    var randomSentence = sentencesArr[Math.floor(Math.random() * sentencesArr.length)];

    var textToMatch = document.getElementById("text");
    textToMatch.innerHTML = "";
    var wordArray = randomSentence.split("");
    for(var i = 0; i < wordArray.length; i++) {
        var span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = wordArray[i].toUpperCase();
        textToMatch.appendChild(span);
    }
    spans = document.querySelectorAll(".span");
}
generateWord();

document.getElementById('btn-start').addEventListener('click', countdown);

function countdown() {

    document.addEventListener('keyup', function(e) {
        var target = e.target;
        
        var entryLetter = String.fromCharCode(e.which);
    
        for(var i = 0; i < spans.length; i++) {
            // console.log(spans[i]);
            if(spans[i].innerHTML.toUpperCase() == entryLetter) {
                if(spans[i].classList.contains("true")) {
                    continue;
                } else if(spans[i].classList.contains("true") === false && spans[i-1] === undefined || spans[i-1].classList.contains("true") !== false) {
                    spans[i].classList.add("true");
                    break;
                } 
            }
        }
        
        var checker = 0;
        for(var j = 0; j < spans.length; j++) {
            if(spans[j].className === "span true") {
                checker++;
            }
            if(checker === spans.length) {
                generateWord();
                score++;
                scoreElement.innerHTML = score;
            }
        }
    }, false);


    var timer = setInterval(function() {
        seconds--;
        secondsElement.innerHTML = seconds;
        
    	document.getElementById('btn-start').disabled = true;
        if(seconds === 0) {
            alert("Game over! Your score is " + score);
            clearInterval(timer);
    			seconds = 25;
    			score = 0;
                secondsElement.innerHTML = seconds;
                scoreElement.innerHTML = score;
                document.getElementById('btn-start').disabled = false;
                generateWord();
        }
    }, 1000);
}