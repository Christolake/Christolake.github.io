const canvas = document.getElementById('canvas');
//ctx = Context
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 480;
const spriteWidth = 330;
const spriteHeight = 400;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrame = 8;

const playerImage = new Image();
playerImage.src = 'knight/KNIGHT.png'

function animate (){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100, 50, 100, 100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrame == 0){
    if (frameX < 9) frameX++;
    else frameX = 0;}
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();