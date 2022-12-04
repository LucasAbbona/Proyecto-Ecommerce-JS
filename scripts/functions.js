function elementosproductos(productoseleccionado){
    Contenedor.innerHTML=""/* Para que no se acumulen los productos */
    productoseleccionado.forEach((prod) => {
    const div = document.createElement('div')
    div.className='tarjeta'
    div.innerHTML = `
            <img src=${prod.imagen} class="foto d-block w-100">
            <div class="añ_cart2">
            <h6>${prod.marca} ${prod.modelo} </h6>
            <p class="prec2">Precio: ${prod.precio} + IVA</p>
            </div>    ` 
    Contenedor.append(div)
    let comprar = document.createElement("button");
    comprar.innerText="Añadir al carrito"
    comprar.classList="boton2 btn btn-success btn-outline-light"
    div.append(comprar);
    
    /* Notificacion de producto agregado */
    comprar.addEventListener("click", () => {
        Toastify({
            text: "Se ha agregado un nuevo elemento al carrito",
            avatar: "../images/cart.png",
            duration: 2500,
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
            background: "#aaaaaa",
            color: "black"
            },
            onClick: function(){} // Callback after click
        }).showToast();
    
        /* Agregando mas de 1 vez el mismo producto */
        const repetido= ElementosCarrito.some((repeatproduct) => repeatproduct.id === prod.id);
        if(repetido){
            ElementosCarrito.map((product)=> {
                if(product.id === prod.id){
                    product.cantidad++;
                }
            })
        }else{
        ElementosCarrito.push({
                id:prod.id,
                marca:prod.marca,
                modelo:prod.modelo,
                precio:prod.precio,
                cantidad:prod.cantidad,
            });
            rendercantidadcarrito();
            saveLocal();
        }
        });
        
    })
    }
const rendercantidadcarrito= () =>{
    let carritolength = ElementosCarrito.length;
    localStorage.setItem("carritolength", JSON.stringify(carritolength))
    contadorcarrito.innerHTML = JSON.parse(localStorage.getItem("carritolength"))
}
function Filtros(BotonCategoria,ArrayProductos){
    BotonCategoria.forEach((boton) => {
    boton.addEventListener("click",(el) => {
        BotonCategoria.forEach(boton => boton.classList.remove("active"))
        el.currentTarget.classList.add("active")
        if(el.currentTarget.id != "todos"){
        const productoselecionado=ArrayProductos.filter((producto) => producto.marca === el.currentTarget.id)
        elementosproductos(productoselecionado)}
        else{
            elementosproductos(ArrayProductos)
        }
    })
})
}