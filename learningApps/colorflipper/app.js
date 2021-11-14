const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white'];

let btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
    console.log(colors[random]);
});
