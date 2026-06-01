const textoAutor = document.getElementById("textoAutor");

const textos = {
  quien: `
    Juan Carlos Garay Acevedo es un escritor, periodista cultural, traductor
    y crítico musical colombo-peruano. Nació en Lima, Perú, en 1974, pero su
    vida y trayectoria profesional están muy ligadas a Colombia.

    Su obra se caracteriza por unir la literatura con la música. En sus novelas,
    la música no aparece solo como un tema decorativo, sino como una forma de
    memoria, identidad, refugio y sensibilidad.
  `,

  formacion: `
    Garay nació en Lima, de padres colombianos, y vivió allí hasta los cuatro años.
    Más adelante estudió Comunicación Social y Periodismo en la Pontificia
    Universidad Javeriana de Bogotá entre 1991 y 1996.

    Durante su paso por la universidad se acercó con fuerza al mundo de la radio.
    Trabajó en Javeriana Estéreo como libretista, locutor y realizador de programas
    dedicados al rock, el jazz y el blues. Esa experiencia lo puso en contacto con
    grandes colecciones de discos y ayudó a formar muchas de las ideas que después
    aparecerían en su primera novela.
  `,

  musica: `
    La música atraviesa casi toda la trayectoria de Juan Carlos Garay. Ha trabajado
    en radio, prensa escrita y crítica musical, especialmente alrededor del jazz,
    el rock, el blues, la salsa y otros sonidos latinoamericanos.

    A finales de 1996 viajó a Washington para realizar estudios de periodismo
    cultural. Allí trabajó en La Voz de América como traductor de noticias y
    libretista de programas de jazz. También fue corresponsal del Magazín Dominical
    de El Espectador.

    Desde 1999 comenzó a publicar columnas sobre música en la revista Semana,
    donde reseñó especialmente la escena musical colombiana. En 2008 ganó el
    Premio Nacional de Periodismo Simón Bolívar por una crónica sobre la salsa
    en Bogotá.
  `,

  obras: `
    Entre sus obras narrativas se encuentran La nostalgia del melómano, publicada
    en 2005; La canción de la luna, publicada en 2011; Balsa de Fuego, publicada
    en 2016; y Borealis, publicada en 2022.

    Además de sus novelas, también ha desarrollado trabajos de investigación
    periodística relacionados con la historia musical. Uno de ellos es Jazz en
    Bogotá, publicado en 2010 junto con otros autores.

    En sus libros suelen aparecer temas como los discos, los coleccionistas, las
    canciones, la radio, los músicos, la memoria y la relación emocional que las
    personas construyen con la música.
  `,

  melomano: `
    La nostalgia del melómano fue publicada en 2005 y fue la primera novela de
    Juan Carlos Garay. La obra nació, en parte, de su experiencia en la radio y
    de su contacto con grandes colecciones de discos durante sus años en
    Javeriana Estéreo.

    En esta novela aparecen muchas de sus obsesiones literarias y musicales:
    los vinilos, los coleccionistas, las grabaciones perdidas, la búsqueda de
    canciones, la memoria y la música como refugio personal.

    La novela también refleja la figura del melómano como alguien que no solo
    escucha música, sino que la persigue, la recuerda, la colecciona y la convierte
    en parte de su propia historia.
  `
};

function mostrar(seccion) {
  textoAutor.textContent = textos[seccion];
}
