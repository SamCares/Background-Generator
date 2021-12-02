const from = document.querySelector('.from');
const to = document.querySelector('.to');
const css = document.querySelector('h3');
const body = document.querySelector('body');

function setGradient() {
    body.style.background =
        `linear-gradient(to right, ${from.value}, ${to.value})`;

    css.textContent = body.style.background + ';';
}
from.addEventListener('input', setGradient);

to.addEventListener('input', setGradient);


