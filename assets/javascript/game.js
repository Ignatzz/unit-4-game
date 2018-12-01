
//global variables
wins = 0;
losses = 0;
playerScore= 0;
var targetNumber = Math.floor((Math.random() * 101) + 19);
var button1 = Math.floor((Math.random() * 12)+1);
var button2 = Math.floor((Math.random() * 12)+1);
var button3 = Math.floor((Math.random() * 12)+1);
var button4 = Math.floor((Math.random() * 12)+1);

// Reset function - Generates random numbers for our target number and for our crystals, writes the target number to our html and updates html with win/loss counter, playerscore, and target number

function reset(){
playerScore = 0;
targetNumber = Math.floor((Math.random() * 101) + 19);
button1 = Math.floor((Math.random() * 12)+1);
button2 = Math.floor((Math.random() * 12)+1);
button3 = Math.floor((Math.random() * 12)+1);
button4 = Math.floor((Math.random() * 12)+1);
$('#randomNumber').text("Random Number: " + targetNumber);
$('#wins').text("Wins: " + wins);
$('#losses').text("Losses: " + losses);
$('#playerScore').text("Player Score: " + playerScore);
}


//On click, each button increases the playerscore by the it's assigned random number and updates the html, then the checker function is run to see if win or loss conditions are met

$("#button1").click(function(){
   playerScore = playerScore + button1;
   $('#playerScore').text("Player Score: " + playerScore);
   checker ();
});

$("#button2").click(function(){
    playerScore = playerScore + button2;
    $('#playerScore').text("Player Score: " + playerScore);
    checker ();
 });

 $("#button3").click(function(){
    playerScore = playerScore + button3;
    $('#playerScore').text("Player Score: " + playerScore);
    checker ();
 });

 $("#button4").click(function(){
    playerScore = playerScore + button4;
   $('#playerScore').text("Player Score: " + playerScore);
    checker ();
 });

//checker function checks player score against target number, if it is equal, wins are increased and html is updated then reset function is run, if it is greater, same is done but for losses

 function checker (){
     
    if (playerScore === targetNumber) {
        alert ("You Win!");
        wins ++;
        $('#wins').text("Wins: " + wins);
        reset ();
        }
    else if (playerScore > targetNumber) {
        alert ("You Lose!");
        losses ++;
        $('#losses').text("Losses: " + losses);
        reset ();
    }
 }


reset ()