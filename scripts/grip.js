const Contenedor=document.querySelector(`#contenedor_grips`)
const contadorcarrito = document.querySelector("#contador")
const verCarrito = document.querySelector(`#carrito`)
const ModalContainer = document.querySelector(`#cart_container`)
const botongrip=document.querySelectorAll(".boton_grips_categoria")

const Gripsss= PRODUCTOS.filter((el) => el.categorias.includes("Grips"))

rendercantidadcarrito();
elementosproductos(Gripsss)
Filtros(botongrip,Gripsss)
