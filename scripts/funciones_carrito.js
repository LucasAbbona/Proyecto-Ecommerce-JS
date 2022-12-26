const cart = () => {
    ModalContainer.innerHTML=""/* Para que no apareza mas de un carrito */
    ModalContainer.className="cart_container"
    const Modalhead= document.createElement("div")
    Modalhead.className="modal_header"
    Modalhead.innerHTML= `
    <h3 class="header_title"><i class="bi bi-bag-fill"></i> TU CARRITO</h3>
    `
    ModalContainer.append(Modalhead);
    const ModalCloseButton= document.createElement("a")
    ModalCloseButton.innerText="Cerrar"
    ModalCloseButton.className="modal_close"
    ModalCloseButton.addEventListener("click",() => {
        ModalContainer.className="cerrar"
    })
    Modalhead.append(ModalCloseButton)
    let carritoContent=document.createElement("div");
    if(ElementosCarrito.length == 0){ /* Para cuando el carrito esta vacio */
    carritoContent.classList="modal_empty modal_content"
    carritoContent.innerHTML=`
    <p>Aun no hay elementos en el carrito</p>
    `
    ModalContainer.append(carritoContent)
}else{ /* Carrito con productos */
    ElementosCarrito.forEach((product)=>{
    const carritoContent=document.createElement("div");
        carritoContent.className="modal_content"
        carritoContent.innerHTML=`
        <p>${product.marca}</p>
        <p>${product.modelo}</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: $${product.cantidad * product.precio}</p>
        `
        ModalContainer.append(carritoContent)

        let restarCantidad=carritoContent.querySelector(".restar") /* Restar cantidad */
        restarCantidad.addEventListener("click", () => {
            if(product.cantidad !==1){
            product.cantidad--
            }
            saveLocal( )
            cart()
        })
        let sumarCantidad= carritoContent.querySelector(".sumar") /* Sumar cantidad */
        sumarCantidad.addEventListener("click", () => {
            product.cantidad++
            saveLocal()
            cart()
        })
        const eliminarProduct = document.createElement("span");
        eliminarProduct.innerHTML="<i class='bi bi-trash3'></i>"
        eliminarProduct.className="delete_product"
        carritoContent.append(eliminarProduct);
        eliminarProduct.addEventListener("click",eliminar_producto) /* Eliminar productos del carrito */
    })}
    const PrecioFinal = ElementosCarrito.reduce((acc,el) =>acc + el.precio * el.cantidad,0)
    const ModalEnd= document.createElement("div")
    ModalEnd.className="total_content"
    
    if(ElementosCarrito.length>0){
        ModalEnd.innerHTML=`
        <button class="btn btn-danger cleancart">Vaciar Carrito</button>
        <p>Subtotal: $ ${PrecioFinal}</p>
        <button class="btn btn-success end">Terminar Compra</button>
        `
        ModalContainer.append(ModalEnd)
    let vaciarcart= document.querySelector(".cleancart"); /* Vaciar el carrito */
    vaciarcart.addEventListener("click",vaciarcarrito)
    let finalizar=document.querySelector(".end") /* Finalizar compra */
    finalizar.addEventListener("click",terminarcompra)
    }else {
    ModalEnd.innerHTML= `
    <p>Subtotal: $ ${PrecioFinal}</p>
    `
    ModalContainer.append(ModalEnd);
    rendercantidadcarrito();
    }
    
rendercantidadcarrito();
 }

verCarrito.addEventListener("click", cart) /* Mostrar carrito */


const eliminar_producto = () =>{
    const prodid = ElementosCarrito.find((prod) => prod.id);
    ElementosCarrito = ElementosCarrito.filter((cart) => {
        return cart !== prodid;
    });
    saveLocal()
    cart()
}
const vaciarcarrito = () => {
    ElementosCarrito.length = 0;
    console.log(ElementosCarrito)
    cart()
    saveLocal()
}
const saveLocal= () => { /* Guardar en el LocalStorage */
    localStorage.setItem("carrito", JSON.stringify(ElementosCarrito));    
};
const terminarcompra = () => {
    Swal.fire({
        title: "Se ha finalizado la compra",
        icon: 'success',
        confirmButtonText: "Continuar"
    })
}


