const botonesCategorias = document.querySelectorAll(".boton_categoria")
const Contenedor=document.querySelector(`#contenedor_raquetas`)
const verCarrito = document.querySelector(`#carrito`)
const ModalContainer = document.querySelector(`#cart_container`)
const contadorcarrito = document.querySelector("#contador")

const Raquetas= PRODUCTOS.filter((el)=> el.categorias.includes("Raquetas"))

rendercantidadcarrito();
elementosproductos(Raquetas);
Filtros(botonesCategorias,Raquetas);