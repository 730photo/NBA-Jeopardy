var playerPoints = 0;
const updateScore = () => {
    $('#playerScore').text(playerPoints)
}


// When user clicks, the question pops up.
var numOne = document.getElementById('numOne')
numOne.addEventListener('click', function() {
        var question = prompt('which player won the MVP award last season?');
        console.log(question)
        if (question == 'James Harden') {
            playerPoints += 10;
            
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
            
        } else {
            playerPoints -= 10;
           
        }
        $('#numOne').prop('disabled', true);
        $('#numOne').css('color', 'transparent').css('pointer-events', 'none');

        
        

        // updates score
        updateScore();
    });

// When user clicks, the question pops up.
var numTwo = document.getElementById('numTwo')
numTwo.addEventListener('click', function() {
        var question = prompt('which player led the NBA in scoring last season?');
        console.log(question)
        if (question == 'James Harden') {
            playerPoints += 10;
            console.log(playerPoints)
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 10;
        }

        $('#numTwo').prop('disabled', true);
        $('#numTwo').css('color', 'transparent').css('pointer-events', 'none');

        // updates score
        updateScore();
    });

// When user clicks, the question pops up.
var numThree = document.getElementById('numThree');
numThree.addEventListener('click', function () {
    var question = prompt('Which team had the most losses in the NBA last season?');
    if (question === 'Phoenix Suns') {
        playerPoints += 10;
        console.log(playerPoints)
    } else {
        playerPoints -= 10;
    }

    $('#numThree').prop('disabled', true);
    $('#numThree').css('color', 'transparent').css('pointer-events', 'none');

    // update score
    updateScore()
});

// When user clicks, the question pops up.
var numFour = document.getElementById('numFour')
numFour.addEventListener('click', function() {
        var question = prompt('which former player holds the record for most consecutive games played?');
        console.log(question)
        if (question == 'A.C. Green') {
            playerPoints += 10;
            console.log(playerPoints)
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 10;
        }

        $('#numFour').prop('disabled', true);
        $('#numFour').css('color', 'transparent').css('pointer-events', 'none');

        // updates score
        updateScore();
    });

// When user clicks, the question pops up.
var numFive = document.getElementById('numFive')
numFive.addEventListener('click', function() {
        var question = prompt('which team won the NBA championship last season?');
        console.log(question)
        if (question == 'Golden State Warriors') {
            playerPoints += 10;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 10;
        }

        $('#numFive').prop('disabled', true);
        $('#numFive').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
    });

// When user clicks, the question pops up.
var numSix = document.getElementById('numSix');
numSix.addEventListener('click', function () {
    var question = prompt('which player won the DPOY award last season?');
        console.log(question)
        if (question == 'Rudy Gobert') {
            playerPoints += 20;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 20;
        }

        $('#numSix').prop('disabled', true);
        $('#numSix').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
   
});

// When user clicks, the question pops up.
var numSeven = document.getElementById('numSeven');
numSeven.addEventListener('click', function () {
    var question = prompt('which player avereaged the most blocks per game last season?');
        console.log(question)
        if (question == 'Anthony Davis') {
            playerPoints += 20;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 20;
        }

        $('#numSeven').prop('disabled', true);
        $('#numSeven').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numEight = document.getElementById('numEight');
numEight.addEventListener('click', function () {
    var question = prompt('which team was the #1 seed in the Eastern Conference last season?');
        console.log(question)
        if (question == 'Toronto Raptors') {
            playerPoints += 20;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 20;
        }

        $('#nummEight').prop('disabled', true);
        $('#numEight').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numNine = document.getElementById('numNine');
numNine.addEventListener('click', function () {
    var question = prompt('which player holds the record for most three-pointers in a single game?');
        console.log(question)
        if (question == 'Steph Curry') {
            playerPoints += 20;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 20;
        }

        $('#numNine').prop('disabled', true);
        $('#numNine').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numTen = document.getElementById('numTen');
numTen.addEventListener('click', function () {
    var question = prompt('which player won the slam dunk contest in 2005?');
        console.log(question)
        if (question == 'Josh Smith') {
            playerPoints += 20;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 20;
        }

        $('#numTen').prop('disabled', true);
        $('#numTen').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numEleven = document.getElementById('numEleven');
numEleven.addEventListener('click', function () {
    var question = prompt('which player was selected #14 in the 2018 NBA Draft?');
        console.log(question)
        if (question == 'Michael Porter jr.') {
            playerPoints += 30;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 30;
        }

        $('#numEleven').prop('disabled', true);
        $('#numEleven').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numTwelve = document.getElementById('numTwelve');
numTwelve.addEventListener('click', function () {
    var question = prompt('which player had the most number of steals in the playoffs last season?');
        console.log(question)
        if (question == 'Draymond Green') {
            playerPoints += 30;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 30;
        }

        $('#numTwelve').prop('disabled', true);
        $('#numTwelve').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numThirteen = document.getElementById('numThirteen');
numThirteen.addEventListener('click', function () {
    var question = prompt('Which team had the #1 pick in the 2017 NBA Draft?');
        console.log(question)
        if (question == 'Philadelphia 76ers') {
            playerPoints += 30;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 30;
        }

        $('#numThirteen').prop('disabled', true);
        $('#numThirteen').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numFourteen = document.getElementById('numFourteen');
numFourteen.addEventListener('click', function () {
    var question = prompt('which former player holds the record for second most points in a single game?');
        console.log(question)
        if (question == 'Kobe Bryant') {
            playerPoints += 30;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 30;
        }

        $('#numFourteen').prop('disabled', true);
        $('#numFourteen').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numFifteen = document.getElementById('numFifteen');
numFifteen.addEventListener('click', function () {
    var question = prompt('who was the first player to get drafted out of highschool?');
        console.log(question)
        if (question == 'Moses Malone') {
            playerPoints += 30;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 30;
        }

        $('#numFifteen').prop('disabled', true);
        $('#numFifteen').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numSixteen = document.getElementById('numSixteen');
numSixteen.addEventListener('click', function () {
    var question = prompt('which player won the NBA Sportsmanship award in 2015?');
        console.log(question)
        if (question == 'Kyle Korver') {
            playerPoints += 40;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 40;
        }

        $('#numSixteen').prop('disabled', true);
        $('#numSixteen').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();
});

// When user clicks, the question pops up.
var numSeventeen = document.getElementById('numSeventeen');
numSeventeen.addEventListener('click', function () {
    var question = prompt('who had the most turnovers in the NBA last season?');
        console.log(question)
        if (question == 'Russell Westbrook') {
            playerPoints += 40;
            console.log(playerPoints)
            
            // this.textContent(score + playerPoints)
        } else {
            playerPoints -= 40;
        }

        $('#numSeventeen').prop('disabled', true);
        $('#numSeventeen').css('color', 'transparent').css('pointer-events', 'none');
        // updates score
        updateScore();

});

// When user clicks, the question pops up.
var numEighteen = document.getElementById('numEighteen');
numEighteen.addEventListener('click', function () {
    var question = prompt('which teams were in the NBA Finals in 2012?');
    console.log(question)
    if (question == 'Oklahoma City Thunder & Miami Heat') {
        playerPoints += 40;
        console.log(playerPoints)
        
        // this.textContent(score + playerPoints)
    } else {
        playerPoints -= 40;
    }

    $('#numEighteen').prop('disabled', true);
    $('#numEighteen').css('color', 'transparent').css('pointer-events', 'none');
    // updates score
    updateScore(); 
});

// When user clicks, the question pops up.
var numNineteen = document.getElementById('numNineteen');
numNineteen.addEventListener('click', function () {
    var question = prompt('who holds the record for most 3-pointers attempted in a single game?');
    console.log(question)
    if (question == 'J.R. Smith') {
        playerPoints += 40;
        console.log(playerPoints)
        
        // this.textContent(score + playerPoints)
    } else {
        playerPoints -= 40;
    }

    $('#numNineteen').prop('disabled', true);
    $('#numNineteen').css('color', 'transparent').css('pointer-events', 'none');
    // updates score
    updateScore(); 
});

// When user clicks, the question pops up.
var numTwenty = document.getElementById('numTwenty');
numTwenty.addEventListener('click', function () {
    var question = prompt('what year was the 3-point line implemented into the NBA?');
    console.log(question)
    if (question == '1979') {
        playerPoints += 40;
        console.log(playerPoints)
        
        // this.textContent(score + playerPoints)
    } else {
        playerPoints -= 40;
    }

    $('#numTwenty').prop('disabled', true);
    $('#numTwenty').css('color', 'transparent').css('pointer-events', 'none');
    // updates score
    updateScore(); 
});

// When user clicks, the question pops up.
var numTwentyone = document.getElementById('numTwentyone');
numTwentyone.addEventListener('click', function () {
    var question = prompt('which former player is the NBA logo?');
    console.log(question)
    if (question == 'Jerry West') {
        playerPoints += 50;
        console.log(playerPoints)
        
        // this.textContent(score + playerPoints)
    } else {
        playerPoints -= 50;
    }

    $('#numTwentyone').prop('disabled', true);
    $('#numTwentyone').css('color', 'transparent').css('pointer-events', 'none');
    // updates score
    updateScore(); 
});

// When user clicks, the question pops up.
var numTwentytwo = document.getElementById('numTwentytwo');
numTwentytwo.addEventListener('click', function () {
    var question = prompt('How many quadruple doubles have been recorded in the NBA?');
    console.log(question)
    if (question == '4') {
        playerPoints += 50;
        console.log(playerPoints)
        
        // this.textContent(score + playerPoints)
    } else {
        playerPoints -= 50;
    }

    $('#numTwentyTwo').prop('disabled', true);
    $('#numTwentyTwo').css('color', 'transparent').css('pointer-events', 'none');
    // updates score
    updateScore(); 
});

// When user clicks, the question pops up.
var numTwentythree = document.getElementById('numTwentythree');
numTwentythree.addEventListener('click', function () {
    var question = prompt('Which team has the most NBA championships?');
    console.log(question)
    if (question == 'Boston Celtics') {
        playerPoints += 50;
        console.log(playerPoints)
        
        // this.textContent(score + playerPoints)
    } else {
        playerPoints -= 50;
    }

    $('#numTwentyThree').prop('disabled', true);
    $('#numTwentyThree').css('color', 'transparent').css('pointer-events', 'none');
    // updates score
    updateScore(); 
});

// When user clicks, the question pops up.
var numTwentyfour = document.getElementById('numTwentyfour');
numTwentyfour.addEventListener('click', function () {
    var question = prompt('who holds the record for most all-star selections in the NBA?');
    console.log(question)
    if (question == 'LeBron James') {
        playerPoints += 50;
        console.log(playerPoints)
        
        // this.textContent(score + playerPoints)
    } else {
        playerPoints -= 50;
    }

    $('#numTwentyFour').prop('disabled', true);
    $('#numTwentyFour').css('color', 'transparent').css('pointer-events', 'none');
    // updates score
    updateScore(); 
});

// When user clicks, the question pops up.
var numTwentyfive = document.getElementById('numTwentyfive');
numTwentyfive.addEventListener('click', function () {
    var question = prompt('what year did the NBAPA have it\'s first holdout?');
    console.log(question)
    if (question == '2011') {
        playerPoints += 50;
        console.log(playerPoints)
        
        // this.textContent(score + playerPoints)
    } else {
        playerPoints -= 50;
    }

    $('#numTwentyFour').prop('disabled', true);
    $('#numTwentyFour').css('color', 'transparent').css('pointer-events', 'none');
    // updates score
    updateScore(); 
});

var button = document.getElementById('finished')
button.addEventListener('click', function() {  
    alert('GAME OVER');
    document.location.reload(true);

});




