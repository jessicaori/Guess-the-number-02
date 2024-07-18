function asignarTextoElemento(elemento,texto){
    let text = document.querySelector(elemento);
    text.innerHTML = texto;
}

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

asignarTextoElemento('h1', 'Guess the number!');
asignarTextoElemento('p', 'Guess the number between 1 - 10');