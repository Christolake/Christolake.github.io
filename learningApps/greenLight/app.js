
const gameButton = document.querySelector('.game-state');
const level = {
    01: 4750, 02: 4000, 03: 3000, 04: 2000, 05: 1500
};
const min = 250;
const closedHead = document.querySelector('.closed');
const openHead = document.querySelector('.open');
const oopsHead = document.querySelector('.oops');
const player = document.querySelector('.player');
const root = document.querySelector(':root');
const dead = document.querySelector('.dead');
const field = document.querySelector('.field');
let movement = document.documentElement;
let clicks = 0;
let score = document.querySelector('.score');
let LEVEL = document.querySelector('.level');
let playedTime = 0;
let lives = 0;
function die() {
    player.classList.remove('alive');
    dead.classList.add('alive');
    oopsHead.classList.add('active');
    openHead.classList.remove('active')
    document.querySelector('.field').style.setProperty('background', 'black');
    }

function restart() {
    clicks = 0;
    gameButton.textContent = 'START';
    oopsHead.classList.add('active');
    openHead.classList.remove('active');
    closedHead.classList.remove('active');
    field.style.setProperty('background', 'sandybrown');
    LEVEL.textContent = clicks;
    movement.style.setProperty('--move', clicks + 'px');
    player.classList.add('alive');
    dead.classList.remove('alive');
}


let time = () => Math.ceil((Math.random() * (level[01] - min) + min));

const game = function() {
    //for (clicks = 0; clicks < 600;) {
    if (!dead.classList.contains('alive')) {
        let start = time();
        playedTime += start;
        gameButton.textContent = start + 'ms';
        oopsHead.classList.remove('active');
        openHead.classList.remove('active');
        closedHead.classList.add('active');
        field.style.setProperty('background', 'green');
        field.classList.add('green');
        setTimeout(() => {
            openHead.classList.add("active");
            closedHead.classList.remove("active");
            field.style.setProperty('background', 'red');
            field.classList.remove('green');
            field.classList.add('red');
        }, start);
    }
}

gameButton.addEventListener('click', () => !dead.classList.contains('alive') ? game() : restart());


//ACCIONES DEL JUGADOR

player.addEventListener('mouseup', () => {
    // WIN CONDITION -->
    if (clicks >= 600) {
        document.querySelector('.active').style.setProperty('display', 'none')
        gameButton.textContent = 'YOU WIN';
        score.textContent = clicks * 200 - playedTime;
    }
    // WALKING THE FIELD if Monkey Blind -->
    else if (closedHead.classList.contains('active') && clicks < 600) {
        clicks+=10;
        LEVEL.textContent = clicks;
        movement.style.setProperty('--move', clicks + 'px');
    }
    // IF GAME NOT STARTED -->
    else if (oopsHead.classList.contains('active')) {
        alert('Press START to begin the game')
    }
    else {
        die();
        gameButton.textContent = 'GAME OVER';
        score.textContent = clicks * 200 - playedTime;       
    }
})

// player.addEventListener('transitionstart', () => {
//     if (openHead.classList.contains('active')) {;
//     player.classList.remove('alive');
//     dead.classList.add('alive');
//     }
// })
