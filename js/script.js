const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const dead = document.querySelector('.dead');
const botton = document.querySelector('.botton');
var score = 0;

/*const audio = document.querySelector('.audio');*/

var infoPontos = document.getElementById('pontuacao');

//function pontuou() {
//infoPontos.innerHTML = 'Pontuação: \n' + pipe == bottom = 0;
//}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {



        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        console.log(marioPosition);

            function mostrarBotão(){
                botton.classList.add("reload");
            }


        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = '../images/game-over.png';
            mario.style.width = '75px'
            mario.style.marginLeft = '50px'

            dead.src = '../images/dead.png';

            mostrarBotão();



            clearInterval(loop);

        }


    },
    10);

document.addEventListener('keydown', jump);