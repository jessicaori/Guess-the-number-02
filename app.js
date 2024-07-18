function asignarTextoElemento(elemento,texto){
    let text = document.querySelector(elemento);
    text.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function clearbox(){
    document.getElementById('valorUsuario').value = "";
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    intentos += 1;
    console.log(numeroAleatorio);
    if (numeroUsuario == numeroAleatorio){
        asignarTextoElemento('p',`Congrats! You guessed the number! in ${intentos} ${intentos > 1 ? 'tries.' : 'try.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroUsuario < numeroAleatorio){
            msg = "The number is greater!"
        }else{
            msg = "The number is less!"
        }
        asignarTextoElemento('p','Wrong number, try again! ' + msg);
        clearbox();
    }
    return;
}

function reiniciarJuego(){
    condicionesIniciales();
}

function condicionesIniciales(){
    clearbox();
    asignarTextoElemento('h1', 'Guess the number!');
    asignarTextoElemento('p', 'Guess the number between 1 - 10');
    numeroAleatorio = generarNumeroSecreto();
    intentos = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();