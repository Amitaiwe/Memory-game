const cards = document.querySelectorAll('.card');
const minutes = 2;
let time = minutes*60;

const counter = document.getElementById('time-remaining');

let rank = 0;
const points = 100;

function updateScore(){
    rank += points;
    document.getElementById('score').innerHTML= rank;
}

var timer = setInterval(tiktak, 1000);
function tiktak(){
    const seconds = time % 121;
    counter.innerHTML = `${seconds}`;
    time--;
}

let locking = false;
let flipped = false;//first or second card I flip
let first;
let second;


function flip(){
    if(rank == points*10){clearInterval(timer)}
    if(locking) return;
    if(this === first) return;
    this.classList.add('flip');
    if(!flipped){//first card
        flipped = true;
        first = this;
        return;
    }
    else{
        flipped = false;
        second = this;
        isMatch();
    }
}

function isMatch(){
    let isMatch = first.dataset.framework === second.dataset.framework;

    isMatch? freezing(): keepPlay();
}

function freezing(){
//same cards
    updateScore();
    first.removeEventListener('click', flip());
    second.removeEventListener('click', flip());
    reset();
}
function keepPlay(){
    //not the same
    locking = true;
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        reset();
        }, 1000);
}

function reset(){
    flip = false;
    locking = false;
    first = null;
    second = null;
}

(function shuffle(){
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 20);
        card.style.order = rand;
    });
})();

cards.forEach(card => card.addEventListener('click',flip));