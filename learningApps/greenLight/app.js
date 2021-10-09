const closedHead = document.querySelector('.closed');
const openHead = document.querySelector('.open');
const player = document.querySelector('.player');
const root = document.querySelector(':root');
const dead = document.querySelector('.dead');
let movement = document.documentElement;
let clicks = 0;
let transitionEnd = 

closedHead.addEventListener("click", () => {
    openHead.classList.add("active");
    closedHead.classList.remove("active");
});

openHead.addEventListener("click", () => {
    closedHead.classList.add("active");
    openHead.classList.remove("active");
});

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
    dead.classList.add('alive'); }
})
//player.addEventListener('webkitTransitionEnd', () => { console.log('transition end')}, false);

