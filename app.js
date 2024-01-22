// variables
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
// lista numeros sorteados
let listaNumeros = [];

//funcion generica para cambiar textos
function asignarTextoElementos(elemento,texto){
    elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById('valor_usuario').value);

    if (numeroDelUsuario === numeroSecreto){
        asignarTextoElementos('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDelUsuario>numeroSecreto){
            asignarTextoElementos('p','el numero es menor')
        }else{
            asignarTextoElementos('p','el numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    
}

function generarNumeroSecreto(){
    let numeroGnerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(listaNumeros)

    if (listaNumeros.length == numeroMaximo) {
        asignarTextoElementos('p', 'Ya se sortearon los # posibles')
    }else{
        if (listaNumeros.includes(numeroGnerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumeros.push(numeroGnerado);
            return numeroGnerado;
        }
    }
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valor_usuario').value = '';
}

function inicializandoJuego(){
    asignarTextoElementos('h1','Adivina el numero secreto');
    asignarTextoElementos('p','Indica un numero entre 1 y 10');
    // generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    // inicializar los intentos
    intentos = 1;
}

function reiniciarJuego(){
    // lipiar la caja
    limpiarCaja();
    // indicaciones
    inicializandoJuego();
    // deshabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

inicializandoJuego();