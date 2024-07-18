let titulo = document.querySelector('h1');
titulo.innerHTML = 'Guess the number!';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Guess the number between 1 - 10';

function intentoDeUsuario(){
    let numeroUsuario = document.querySelector('input').value;
    let numeroAleatorio = Math.floor(Math.random()*10 + 1);
    // console.log(numeroAleatorio);
    if (numeroUsuario == numeroAleatorio){
        parrafo.innerHTML = 'You guessed the number!';
    } else {
        parrafo.innerHTML = 'Wrong number, try again!';
    }
}