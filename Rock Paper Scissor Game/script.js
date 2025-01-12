let humanChoice = '';

function selectChoice(choice) {
    humanChoice = choice; // Store the player's choice
    document.getElementById("playButton").style.display = 'block'; // Show the play button
}

function playGame() {
    const imgs = [document.getElementById("rock"), document.getElementById("paper"), document.getElementById("scissors")];
    const botChoice = imgs[Math.floor(Math.random() * 3)].id; // Random bot choice
    const results = decideWinner(humanChoice, botChoice);
    const message = finalMessage(results);
    
    rpsFrontend(humanChoice, botChoice, message);
}

function decideWinner(yourChoice, computerChoice) {
    const rpsDataBase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    };

    const yourScore = rpsDataBase[yourChoice][computerChoice];
    const computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': "You lost!", 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': "You tied!", 'color': 'yellow' };
    } else {
        return { 'message': "You won!", 'color': 'green' };
    }
}

function rpsFrontend(humanImageChoice, botImageChoice, finalMessage) {
    const imagesDataBase = {
        'rock': document.getElementById("rock").src,
        'paper': document.getElementById("paper").src,
        'scissors': document.getElementById("scissors").src
    };

    document.getElementById("startingPoint").remove();
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    document.getElementById("playButton").remove();

    const humanDiv = document.createElement('div');
    const messageDiv = document.createElement('div');
    const botDiv = document.createElement('div');

    humanDiv.innerHTML = `<img src='${imagesDataBase[humanImageChoice]}' alt='error' width='120' height='120' style='box-shadow: 0px 10px 60px rgba(37, 50, 233, 1);'>`;
    document.getElementById("flex-box-rps").appendChild(humanDiv);
    messageDiv.innerHTML = `<h1 style='color: ${finalMessage['color']}; font-size: 30px; padding: 30px;'>${finalMessage['message']}</h1>`;
    document.getElementById("flex-box-rps").appendChild(messageDiv);
    botDiv.innerHTML = `<img src='${imagesDataBase[botImageChoice]}' alt='error' width='120' height='120' style='box-shadow: 0px 10px 60px rgba(243, 38, 24, 1);'>`;
    document.getElementById("flex-box-rps").appendChild(botDiv);
    
    // Show the restart button
    document.getElementById("restartButton").style.display = 'block';
}

function restartGame() {
    // Reload the page to reset the game state
    location.reload();
}
