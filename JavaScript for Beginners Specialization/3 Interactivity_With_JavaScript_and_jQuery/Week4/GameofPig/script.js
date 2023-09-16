(function () {
    'use strict';

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }

    startGame.addEventListener('click', function () {

        gameData.index = Math.round(Math.random());

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Want to Quit?</button>';
        document.getElementById('quit').addEventListener('click', function () {
            location.reload();
        });

        setUpTurn();

    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id = "roll">Roll the Dice</button>';

        document.getElementById('roll').addEventListener('click', function () {
            throwDice();
        });

    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Rolling the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src = "${gameData.dice[gameData.roll1 - 1]}" alt = "${gameData.dice[gameData.roll1 - 1]}"> <img src = "${gameData.dice[gameData.roll2 - 1]}" alt = "${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;


        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh Snap! You Got Snake Eyes!</p>'
            gameData.score[gameData.index] = 0;
            // gameData.index = 1- gameData.index;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 3000);
        }
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 3000);
        }
        else {
            gameData.score[gameData.index] += gameData.rollSum;
            game.innerHTML += `<p>You can continue rolling or you can decide to switch to the other player.</p>`;
            actionArea.innerHTML = '<button id = "rollagain">Roll Again!</button> or <button id = "switch">Switch!</button>';
            document.getElementById('rollagain').addEventListener('click', function () {
                throwDice();
            });
            document.getElementById('switch').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            checkWinningCondition();

        }
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} is the WINNER with the score of ${gameData.score[gameData.index]}!</h2>`;

            actionArea.innerHTML = '';
            game.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game!";
        }
        else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<p>The Scores are:</p>
            <p><strong>${gameData.players[0]}: ${gameData.score[0]}, ${gameData.players[1]}: ${gameData.score[1]}</strong>`;
    }
})();