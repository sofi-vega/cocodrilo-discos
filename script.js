const botonEntrar = document.getElementById("botonEntrar");
const imagenEscena = document.getElementById("imagenEscena");
const sonidoCampana = document.getElementById("sonidoCampana");

const pantallaEntrada = document.getElementById("pantallaEntrada");
const pantallaMiranda = document.getElementById("pantallaMiranda");
const textoMiranda = document.getElementById("textoMiranda");

const opciones = document.querySelectorAll(".opciones button");

botonEntrar.addEventListener("click", () => {
  sonidoCampana.currentTime = 0;
  sonidoCampana.play();

  pantallaEntrada.classList.add("desaparecer");
  imagenEscena.classList.add("entrando");

  setTimeout(() => {
    imagenEscena.src = "interior-miranda.png";
  }, 600);

  setTimeout(() => {
    imagenEscena.classList.remove("entrando");
    pantallaEntrada.classList.add("oculto");
    pantallaMiranda.classList.remove("oculto");
  }, 1200);
});

opciones.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    const respuestaJugador = opcion.textContent;

    textoMiranda.textContent = `Buena elección. Entonces estás buscando esto: "${respuestaJugador}". Dame un momento y te muestro esa parte del recorrido.`;
  });
});
