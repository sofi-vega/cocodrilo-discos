const textoAutor = document.getElementById("textoAutor");

const textos = {
  quien: `
    Juan Carlos Garay es un escritor, periodista y crítico musical colombo-peruano.
    Su obra se caracteriza por unir la narración literaria con una profunda sensibilidad musical.
  `,

  formacion: `
    Nació en Lima en 1974. Estudió periodismo en la Universidad Javeriana de Bogotá
    y también realizó estudios de periodismo cultural en Washington.
  `,

  musica: `
    La música atraviesa gran parte de su trayectoria. Garay ha trabajado en radio,
    prensa y crítica musical, especialmente alrededor del jazz, la salsa y otros sonidos
    latinoamericanos.
  `,

  obras: `
    Entre sus obras se encuentran La nostalgia del melómano, La canción de la luna,
    Balsa de fuego, Borealis y trabajos relacionados con la historia musical,
    como Jazz en Bogotá.
  `,

  melomano: `
    La nostalgia del melómano, publicada en 2005, fue su primera novela.
    En ella aparecen muchas de sus obsesiones: los vinilos, los coleccionistas,
    las grabaciones perdidas, la memoria y la música como refugio.
  `
};

function mostrar(seccion) {
  textoAutor.textContent = textos[seccion];
}
