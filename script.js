function randomValue(){
    return Math.round(Math.random() * 2);
}

function showPlayer2Play(play){
    var player2 = document.createElement("div");
    player2.setAttribute("id", "player2");
    var player2play = document.createTextNode(play);
    player2.appendChild(player2play);
    document.body.appendChild(player2);
}

function showResult(result){
    var showResults = document.createElement("p");
    showResults.setAttribute("id", "result");
    var resultsText = document.createTextNode(result);
    showResults.appendChild(resultsText);
    document.body.appendChild(showResults);
}

function playAgain(){
    var playAgain = document.createElement("button");
    playAgain.setAttribute("id", "play-again");
    var playAgainText = document.createTextNode("Play Again")
    playAgain.appendChild(playAgainText);
    document.body.appendChild(playAgain);

    var playAgainButton = document.querySelector("#play-again");

    playAgainButton.addEventListener("click", function(){
    var deletePlayerBox = document.querySelector("#player2");
    deletePlayerBox.parentNode.removeChild(deletePlayerBox);

    var deleteResult = document.querySelector("#result");
    deleteResult.parentNode.removeChild(deleteResult);

    var deletePlayAgain = document.querySelector("#play-again");
    deletePlayAgain.parentNode.removeChild(deletePlayAgain);

    ableBoxes();
})
}

function disableBoxes(){
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

function ableBoxes(){
    document.querySelector("#rock").disabled = false;
    document.querySelector("#paper").disabled = false;
    document.querySelector("#scissors").disabled = false;
}

var rock = document.querySelector("#rock");

rock.addEventListener("click", function(){
    let playerPlay = randomValue();
    disableBoxes();
    
    if(playerPlay == 0){
        showPlayer2Play("Rock");
        showResult("Draw!");
        playAgain();

    } else if(playerPlay == 1){
        showPlayer2Play("Paper");
        showResult("You Lose!");
        playAgain();
    } else {
        showPlayer2Play("Scissors");
        showResult("You Win!");
        playAgain();
    }
})

var paper = document.querySelector("#paper");

paper.addEventListener("click", function(){
    let playerPlay = randomValue();
    disableBoxes();

    if(playerPlay == 0){
        showPlayer2Play("Rock");
        showResult("You Win!");
        playAgain();

    } else if(playerPlay == 1){
        showPlayer2Play("Paper");
        showResult("Draw!");
        playAgain();
    } else {
        showPlayer2Play("Scissors");
        showResult("You Lose!");
        playAgain();
    }
})

var scissors = document.querySelector("#scissors");

scissors.addEventListener("click", function(){
    let playerPlay = randomValue();
    disableBoxes();

    if(playerPlay == 0){
        showPlayer2Play("Rock");
        showResult("You Lose!");
        playAgain();

    } else if(playerPlay == 1){
        showPlayer2Play("Paper");
        showResult("You Win!");
        playAgain();
    } else {
        showPlayer2Play("Scissors");
        showResult("Draw!");
        playAgain();
    }
})
