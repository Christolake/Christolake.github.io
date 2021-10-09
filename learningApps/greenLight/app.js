
const gameButton = document.querySelector('.game-state');
const level = {
    01: 5000, 02: 4000, 03: 3000, 04: 2000, 05: 1500
};
const min = 1000;
const closedHead = document.querySelector('.closed');
const openHead = document.querySelector('.open');
const player = document.querySelector('.player');
const root = document.querySelector(':root');
const dead = document.querySelector('.dead');
let movement = document.documentElement;
let clicks = 0;
let time = 0;

//EMPIEZA EL JUEGO. EL MONO HACE SU TRABAJO

// function gameStart (theTime) {
//     openHead.classList.remove("active");
//     closedHead.classList.add("active")
//     setTimeout(function resetInTime () {
//         openHead.classList.remove("active");
//         closedHead.classList.add("active");
//     }, 1000);
// }
// PRESIONAR INICIAR JUEGO.

gameButton.addEventListener('click', () => {
    time = Math.ceil((Math.random() * (level[01] - min) + min));
    gameButton.textContent = time + 'ms';
    openHead.classList.remove("active");
    closedHead.classList.add("active");
    setTimeout(() => {
        openHead.classList.add("active");
        closedHead.classList.remove("active");
     }, time);
    }
);


//ACCIONES DEL JUGADOR

player.addEventListener('click', () => {
    if (closedHead.classList.contains('active')) {
        clicks++;
        movement.style.setProperty('--move', clicks + 'em');
    }
    else {
        player.classList.remove('alive');
    dead.classList.add('alive')
}
}
)

player.addEventListener('transitionstart', () => {
    if (openHead.classList.contains('active')) {
    player.classList.remove('alive');
    dead.classList.add('alive');
    }
})
//player.addEventListener('webkitTransitionEnd', () => { console.log('transition end')}, false);

