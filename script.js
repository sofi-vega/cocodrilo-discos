const botonEntrar = document.getElementById("botonEntrar");
const imagenTienda = document.getElementById("imagenTienda");
const sonidoCampana = document.getElementById("sonidoCampana");
const textoAyuda = document.querySelector(".texto-ayuda");

botonEntrar.addEventListener("click", () => {
  sonidoCampana.currentTime = 0;
  sonidoCampana.play();

  botonEntrar.classList.add("desaparecer");
  textoAyuda.classList.add("desaparecer");

  imagenTienda.classList.add("entrando");

  setTimeout(() => {
    imagenTienda.src = "puerta-abierta.png";
  }, 600);

  setTimeout(() => {
    imagenTienda.classList.remove("entrando");
  }, 1200);
});
