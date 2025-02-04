// Array de productos en la página principal
const productos = [
    {
      id: 1,
      nombre: "laptop gamer ASUS ROG G703",
      categoria: "computadoras",
      precio: 1299.99,
      imagen: "IMG/Lapto gamer.png",
    },
    {
      id: 2,
      nombre: "Smartphone Celular Samsung Galaxy A16 5G",
      categoria: "smartphones",
      precio: 799.99,
      imagen: "IMG/Smartphone 5G.jpg",
    },
    {
      id: 3,
      nombre: "COSTOM XVX M84 Teclado Mecánico Colombia | Ubuy",
      categoria: "accesorios",
      precio: 129.99,
      imagen: "IMG/Teclado Mecánico.jpg",
    },
    {
      id: 4,
      nombre: "VX3276-4K-MHD Monitor 4K de 32",
      categoria: "computadoras",
      precio: 399.99,
      imagen: "IMG/Monitor 4K.jpg",
    },
    {
      id: 5,
      nombre:
        "Auriculares Bluetooth 5.3, 4 Mic con Reducción de Ruido ENC, 50H con Graves, Cascos Inalambricos Bluetooth IP7 Impermeable, Carga Rápida USB-C, Ajuste Cómodo",
      categoria: "Equipo de sonido",
      precio: 89.99,
      imagen: "IMG/Auriculares Bluetooth.jpg",
    },
    {
      id: 6,
      nombre: "Tablet Tablet Android 11.0 De 10.1 Pulgadas, 64 Gb De Rom +",
      categoria: "smartphones",
      precio: 773.57,
      imagen: "IMG/Tablet Android.png",
    },
    {
      id: 7,
      nombre: "Ergonomic Rechargeable Vertical Mouse - 1200 / 1600 / 2",
      categoria: "accesorios",
      precio: 49.99,
      imagen: "IMG/Mouse Inalámbrico.png",
    },
    {
      id: 8,
      nombre: "Mouse Inalámbrico LED Gamer Alta Velocidad Recargable Q13",
      categoria: "accesorios",
      precio: 53.99,
      imagen: "IMG/Mouse Inalámbrico gamer.png",
    },
    {
      id: 9,
      nombre: "Mouse Gamer Óptico Inalambrico FRD-S01 - Nitro Systems",
      categoria: "accesorios",
      precio: 56.99,
      imagen: "IMG/Mouse Gamer Óptico Inalambrico FRD-S01 - Nitro Systems.png",
    },
    {
      id: 10,
      nombre: "Teclado Mecánico Corsair K60 PRO - Cherry® MV - Red LED",
      categoria: "accesorios",
      precio: 149.99,
      imagen: "IMG/Teclado Mecánico Corsair K60 PRO - Cherry® MV - Red LED.PNG",
    },
    {
      id: 12,
      nombre: "Review LG CM9760 - Nuevo Equipo de Sonido Bluetooth para Fiestas - Super Potente 3300W",
      categoria: "Equipo de sonido",
      precio: 1177.99,
      imagen: "IMG/Equipo de sonido.jpg",
    },
    {
      id: 12,
      nombre: "Microfono Profesional Condensador Omnidireccional Usb Luz",
      categoria: "Equipo de sonido",
      precio: 114.99,
      imagen: "IMG/Micrófono.jpg",
    },
    {
      id: 13,
      nombre: "Audifonos Gamer Con Microfono Led Pc Laptop Tablet Kotion",
      categoria: "Equipo de sonido",
      precio: 75.99,
      imagen: "IMG/Audifonos Gamer.png",
    },
    {
      id: 14,
      nombre: "Audifonos Gamer Inalambricos Tws N35 Bluetooth",
      categoria: "Equipo de sonido",
      precio: 11.99,
      imagen: "IMG/Audifonos Gamer inalambricos.png",
    },
  ]
  
  // Función para mostrar productos filtrados por categoría y búsqueda
  function mostrarProductos(categoria = "todos", busqueda = "") {
    const contenedor = document.getElementById("productos")
    contenedor.innerHTML = ""
  
    productos.forEach((producto) => {
      // Filtrar productos por categoría y término de búsqueda
      if (
        (categoria === "todos" || producto.categoria === categoria) &&
        (busqueda === "" || producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
      ) {
        const productoElement = document.createElement("div")
        productoElement.className = "producto"
        productoElement.innerHTML = `
                  <img src="${producto.imagen}" alt="${producto.nombre}">
                  <h3>${producto.nombre}</h3>
                  <p>Precio: $${producto.precio.toFixed(2)}</p>
              `
        contenedor.appendChild(productoElement)
      }
    })
  }
  
  // Función para buscar productos
  function buscarProductos() {
    const busqueda = document.getElementById("busqueda").value
    mostrarProductos("todos", busqueda)
  }
  
  // Agregar event listeners para los filtros de categoría
  document.getElementById("todos").addEventListener("click", () => mostrarProductos("todos"))
  document.getElementById("computadoras").addEventListener("click", () => mostrarProductos("computadoras"))
  document.getElementById("smartphones").addEventListener("click", () => mostrarProductos("smartphones"))
  document.getElementById("accesorios").addEventListener("click", () => mostrarProductos("accesorios"))
  document.getElementById("Equipo de sonido").addEventListener("click", () => mostrarProductos("Equipo de sonido"))
  
  // Mostrar todos los productos al cargar la página
  mostrarProductos()
  
  