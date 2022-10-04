let estadoFoquito = "apagado";

/* Sonido - guardar id en variables */

let foquito = document.getElementById("foquito");
let sonidoBotonFoquito = document.getElementById("sonido-boton-foquito");

/* funciones */

function encenderFoquito() {
  if (estadoFoquito == "apagado") {
    estadoFoquito = "encendido";
    hacerSonido();
    foquito.classList.add("encendido");
  } else {
    estadoFoquito = "apagado";
    hacerSonido();
    foquito.classList.remove("encendido");
  }
}

function hacerSonido() {
  if (sonidoBotonFoquito.paused) {
    sonidoBotonFoquito.play();
  } else {
    sonidoBotonFoquito.pause();
  }
}
