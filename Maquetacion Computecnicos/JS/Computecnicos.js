// Import GSAP library.  This needs to be added to your HTML file as well, likely within a `<script>` tag in the `<head>` or before the inclusion of this script.
// For example: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
import gsap from "gsap"

// Función para crear los caminos flotantes
function crearCaminosFlotantes(contenedor, posicion) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("viewBox", "0 0 696 316")
  svg.style.width = "100%"
  svg.style.height = "100%"

  // Crear 36 caminos
  for (let i = 0; i < 36; i++) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute(
      "d",
      `M-${380 - i * 5 * posicion} -${189 + i * 6}C-${380 - i * 5 * posicion} -${189 + i * 6} -${312 - i * 5 * posicion} ${216 - i * 6} ${152 - i * 5 * posicion} ${343 - i * 6}C${616 - i * 5 * posicion} ${470 - i * 6} ${684 - i * 5 * posicion} ${875 - i * 6} ${684 - i * 5 * posicion} ${875 - i * 6}`,
    )
    path.setAttribute("stroke", "#ff0000") // Color rojo
    path.setAttribute("stroke-width", 0.5 + i * 0.03)
    path.setAttribute("stroke-opacity", 0.1 + i * 0.03)
    path.style.opacity = 0.6

    // Animación con GSAP
    gsap.to(path, {
      strokeDashoffset: 0,
      strokeDasharray: path.getTotalLength(),
      duration: 20 + Math.random() * 10,
      repeat: -1,
      ease: "none",
    })

    svg.appendChild(path)
  }

  contenedor.appendChild(svg)
}

// Crear los caminos flotantes
crearCaminosFlotantes(document.getElementById("caminosFlotantes1"), 1)
crearCaminosFlotantes(document.getElementById("caminosFlotantes2"), -1)

// Animación del título
const titulo = document.getElementById("titulo")
const palabras = titulo.textContent.split(" ")
titulo.innerHTML = ""

palabras.forEach((palabra, indicePalabra) => {
  const spanPalabra = document.createElement("span")
  spanPalabra.style.display = "inline-block"
  spanPalabra.style.marginRight = "0.5rem"

  palabra.split("").forEach((letra, indiceLetra) => {
    const spanLetra = document.createElement("span")
    spanLetra.textContent = letra
    spanLetra.style.display = "inline-block"
    spanLetra.style.opacity = "0"
    spanLetra.style.transform = "translateY(100px)"

    gsap.to(spanLetra, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: indicePalabra * 0.1 + indiceLetra * 0.03,
      ease: "back.out",
    })

    spanPalabra.appendChild(spanLetra)
  })

  titulo.appendChild(spanPalabra)
})

// Animación del botón
const boton = document.getElementById("botonDescubrir")
gsap.from(boton, {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1,
  ease: "power3.out",
})

