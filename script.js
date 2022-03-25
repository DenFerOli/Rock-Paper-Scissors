function randomValue(){
    return Math.round(Math.random() * 2);
}

function showPlayer2Play(play){
    var player2 = document.createElement("img");
    player2.setAttribute("id", "player2");

    if(play == 0){
        player2.setAttribute("class", "rock");
    } else if(play == 1){
        player2.setAttribute("class", "paper");
    } else {
        player2.setAttribute("class", "scissors");
    }

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
    var playAgainText = document.createTextNode("Play Again?")
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
        showPlayer2Play(0);
        showResult("Draw!");
        playAgain();

    } else if(playerPlay == 1){
        showPlayer2Play(1);
        showResult("You Lose!");
        playAgain();
    } else {
        showPlayer2Play(2);
        showResult("You Win!");
        playAgain();
    }
})

var paper = document.querySelector("#paper");

paper.addEventListener("click", function(){
    let playerPlay = randomValue();
    disableBoxes();

    if(playerPlay == 0){
        showPlayer2Play(0);
        showResult("You Win!");
        playAgain();

    } else if(playerPlay == 1){
        showPlayer2Play(1);
        showResult("Draw!");
        playAgain();
    } else {
        showPlayer2Play(2);
        showResult("You Lose!");
        playAgain();
    }
})

var scissors = document.querySelector("#scissors");

scissors.addEventListener("click", function(){
    let playerPlay = randomValue();
    disableBoxes();

    if(playerPlay == 0){
        showPlayer2Play(0);
        showResult("You Lose!");
        playAgain();

    } else if(playerPlay == 1){
        showPlayer2Play(1);
        showResult("You Win!");
        playAgain();
    } else {
        showPlayer2Play(2);
        showResult("Draw!");
        playAgain();
    }
})
