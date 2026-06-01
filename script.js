/* =========================================
   EL COCODRILO DISCOS — script.js
   ========================================= */

const botonEntrar      = document.getElementById("botonEntrar");
const imagenEscena     = document.getElementById("imagenEscena");
const sonidoCampana    = document.getElementById("sonidoCampana");
const pantallaEntrada  = document.getElementById("pantallaEntrada");
const pantallaInterior = document.getElementById("pantallaInterior");
const tooltip          = document.getElementById("tooltip");

/* ── Entrada a la tienda ── */
botonEntrar.addEventListener("click", () => {
  sonidoCampana.currentTime = 0;
  sonidoCampana.play().catch(() => {});

  pantallaEntrada.classList.add("desaparecer");
  imagenEscena.classList.add("entrando");

  // 1. Primero muestra la puerta abierta
  setTimeout(() => {
    imagenEscena.src = "img/puerta-abierta.png";
  }, 600);

  // 2. Luego muestra el interior de la tienda
  setTimeout(() => {
    imagenEscena.src = "img/interior-tienda.png";
  }, 1900);

  // 3. Después activa los botones flotantes
  setTimeout(() => {
    imagenEscena.classList.remove("entrando");
    pantallaEntrada.classList.add("oculto");
    pantallaInterior.classList.remove("oculto");
  }, 2600);
});

/* ── Si venimos de otra página (ej. Volver), entrar directo al interior ── */
if (new URLSearchParams(window.location.search).has("dentro")) {
  imagenEscena.src = "img/interior-tienda.png";
  pantallaEntrada.classList.add("oculto");
  pantallaInterior.classList.remove("oculto");
}

/* ── Tooltip follow-mouse ── */
let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (tooltip.classList.contains("visible")) posicionarTooltip();
});

function posicionarTooltip() {
  const pad  = 18;
  const tipW = tooltip.offsetWidth;
  const tipH = tooltip.offsetHeight;
  const vpW  = window.innerWidth;
  const vpH  = window.innerHeight;

  let x = mouseX + pad;
  let y = mouseY - tipH - pad;

  if (x + tipW > vpW - 8) x = mouseX - tipW - pad;
  if (y < 34) y = mouseY + pad;

  tooltip.style.left = x + "px";
  tooltip.style.top  = y + "px";
}

/* ── Bind hotspots ── */
const hotspots = document.querySelectorAll(".hotspot");

hotspots.forEach(spot => {
  const label = spot.dataset.label || "";

  spot.addEventListener("mouseenter", () => {
    tooltip.textContent = label;
    tooltip.classList.add("visible");
    posicionarTooltip();
    playBeep();
  });

  spot.addEventListener("mousemove", posicionarTooltip);

  spot.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });

  spot.addEventListener("click", e => {
    const href = spot.getAttribute("href");
    if (href) {
      e.preventDefault();
      playClick();
      setTimeout(() => {
        window.location.href = href;
      }, 130);
    }
  });
});

/* ── Sonidos retro 8-bit ── */
let audioCtx = null;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playBeep() {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const g   = ctx.createGain();

    osc.connect(g);
    g.connect(ctx.destination);

    osc.type = "square";
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.05);

    g.gain.setValueAtTime(0.06, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.12);
  } catch (_) {}
}

function playClick() {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const g   = ctx.createGain();

    osc.connect(g);
    g.connect(ctx.destination);

    osc.type = "square";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.08);

    g.gain.setValueAtTime(0.10, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (_) {}
}

/* ── Modo debug: añade ?debug a la URL ── */
if (new URLSearchParams(window.location.search).has("debug")) {
  hotspots.forEach(s => {
    s.style.border     = "2px dashed rgba(224,180,60,0.8)";
    s.style.background = "rgba(224,180,60,0.12)";

    const tag = document.createElement("span");
    tag.textContent = s.id;
    tag.style.cssText = `
      position:absolute;
      top:3px;
      left:4px;
      font-family:'Press Start 2P', monospace;
      font-size:7px;
      color:#fff4c4;
      background:rgba(0,0,0,0.75);
      padding:2px 5px;
      pointer-events:none;
      z-index:999;
    `;

    s.appendChild(tag);
  });

  console.info("🐊 Debug activo — hotspots visibles");
}

/* ── Diálogo de bienvenida de Miranda ── */
const mirandaTexto = document.getElementById("mirandaTexto");
if (mirandaTexto && !new URLSearchParams(window.location.search).has("dentro")) {
  const msg = "Bienvenido a El Cocodrilo Discos. Yo soy Miranda. Mueve el mouse por la pantalla para descubrir tus acciones.";
  let i = 0;
  (function escribir(){
    mirandaTexto.textContent = msg.slice(0, i);
    if (i++ <= msg.length) setTimeout(escribir, 38);
  })();
}
