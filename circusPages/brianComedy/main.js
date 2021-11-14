const comedy = new CircleType(document.getElementById('comedy'));
const brian = new CircleType(document.getElementById('brian'));
const bulbOn = document.querySelector('.bulbon');
const bulbOff = document.querySelector('.bulboff');
const bulb = document.querySelector('#toggle');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const logoHero = document.querySelector('#logo-hero');

brian.radius(300);
comedy.radius(700).dir(-1);

function toggle() {
  document.body.classList.toggle('dark');
  nav.classList.toggle('dark-bg');
  footer.classList.toggle('dark-bg');
  footer.classList.toggle('dark-semitext');
  logoHero.classList.toggle('dark-logo');

}

bulb.addEventListener('click', () => {
    if (bulbOn.classList.contains('on')) {
        bulbOn.classList.remove('on');
        bulbOn.classList.add('off');
        bulbOff.classList.add('on');
        toggle();
    } else {
        bulbOff.classList.remove('on');
        bulbOff.classList.add('off');
        bulbOn.classList.add('on');
        toggle();
    }
});