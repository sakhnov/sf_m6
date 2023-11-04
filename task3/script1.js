// Первая часть задания
const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('#03c50b');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('#edc700');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLightEl.style.background = ('#c50303');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}


trafficLightEl.addEventListener('click', makeGreen);

// Вторая часть задания


const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeColor() {
    if (trafficLightEl1.style.background === 'rgb(3, 197, 11)') {
        trafficLightEl1.style.background = 'rgb(0, 0, 0)';
        trafficLightEl2.style.background = 'rgb(237, 199, 0)';   
    } else if (trafficLightEl2.style.background === 'rgb(237, 199, 0)') {
        trafficLightEl2.style.background = 'rgb(0, 0, 0)';
        trafficLightEl3.style.background = 'rgb(197, 3, 3)';
    } else if (trafficLightEl3.style.background ==='rgb(197, 3, 3)') {
        trafficLightEl3.style.background = 'rgb(0, 0, 0)';
        trafficLightEl1.style.background = 'rgb(3, 197, 11)';
    } else {
        trafficLightEl1.style.background = 'rgb(3, 197, 11)';
    }
}

trafficLightEl1.addEventListener('click', makeColor);
trafficLightEl2.addEventListener('click', makeColor);
trafficLightEl3.addEventListener('click', makeColor);