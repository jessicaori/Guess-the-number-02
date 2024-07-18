function asignarTextoElemento(elemento,texto){
    let text = document.querySelector(elemento);
    text.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(typeof(numeroUsuario));
    console.log(numeroAleatorio);
    if (numeroUsuario == numeroAleatorio){
        alert('Congrats! You guessed the number!');
    } else {
        if(numeroUsuario < numeroAleatorio){
            msg = "The number is greater!"
        }else{
            msg = "The number is less!"
        }
        alert('Wrong number, try again! ' + msg);
    }
    return;
}

asignarTextoElemento('h1', 'Guess the number!');
asignarTextoElemento('p', 'Guess the number between 1 - 10');

let numeroAleatorio = generarNumeroSecreto();