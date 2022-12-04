const Contenedor=document.querySelector(`#contenedor`)
const contadorcarrito = document.querySelector("#contador")
const verCarrito = document.querySelector(`#carrito`)
const ModalContainer = document.querySelector(`#cart_container`)
const botonesCordajes=document.querySelectorAll(".boton_categoria_cordajes")

const Cordajes=PRODUCTOS.filter((el)=>el.categorias.includes("Cordajes"))

rendercantidadcarrito();
elementosproductos(Cordajes)

botonesCordajes.forEach((boton) => {
    boton.addEventListener("click",(e) => {
        botonesCordajes.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
        if(e.currentTarget.id != "todas"){
        const productoselecionado=Cordajes.filter(cordaje => cordaje.tipo === e.currentTarget.id)
        elementosproductos(productoselecionado)}
        else{
            elementosproductos(Cordajes)
        }
    })
})