const canvas = document.getElementById('canvas');
//ctx = Context
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 3300;
const CANVAS_HEIGHT = canvas.height = 400;

const playerImage = new Image();
playerImage.src = 'knight/KNIGHT.png'

function animate (){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(100, 50, 100, 100);
    ctx.drawImage(playerImage, 330, 400);
    requestAnimationFrame(animate);
};
animate();