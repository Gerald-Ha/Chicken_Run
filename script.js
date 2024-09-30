document.getElementById("start-game").addEventListener("click", function() {
    showReadyScreen();
});

document.getElementById("high-score").addEventListener("click", function() {
    showHighScore();
});

function showReadyScreen() {
    document.body.innerHTML = `
        <div class="ready-screen">
            <h1>Are You Ready?</h1>
            <p id="countdown">3</p>
        </div>`;
        
    let countdown = 3;
    let interval = setInterval(function() {
        countdown--;
        document.getElementById("countdown").textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            startGame();
        }
    }, 1000);
}

function showHighScore() {
    document.body.innerHTML = `
        <div class="high-score-screen">
            <h1>High Scores</h1>
            <p>Platzhalter für High Scores</p>
            <button id="back-button" class="menu-button">Zurück</button>
        </div>`;
    
    
    document.getElementById("back-button").addEventListener("click", function() {
        showTitleScreen();
    });
}

function showTitleScreen() {
    document.body.innerHTML = `
        <div class="start-screen">
            <img src="img/titel.jpg" alt="Titelbild" class="title-image">
            <h1>Chicken Run</h1>
            <div class="menu">
                <button id="start-game" class="menu-button">Start Game</button>
                <button id="high-score" class="menu-button">High Score</button>
            </div>
            <div class="bottom-images">
                <img src="img/p1.png" alt="Bild links" class="bottom-image left">
                <img src="img/p2.png" alt="Bild rechts" class="bottom-image right">
            </div>
        </div>`;

    
    document.getElementById("start-game").addEventListener("click", function() {
        showReadyScreen();
    });
    
    document.getElementById("high-score").addEventListener("click", function() {
        showHighScore();
    });
}

function startGame() {
    
    window.location.href = "game/index.html"; 
}
