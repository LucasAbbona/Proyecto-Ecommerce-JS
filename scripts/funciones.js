const cart = () => {
    ModalContainer.innerHTML=""/* Para que no apareza mas de un carrito */
    ModalContainer.className="cart_container"
    const Modalhead= document.createElement("div")
    Modalhead.className="modal_header"
    Modalhead.innerHTML= `
    <h3 class="header_title"><i class="bi bi-bag-fill"></i> TU CARRITO</h3>
    `
    ModalContainer.append(Modalhead);
    const ModalButton= document.createElement("a")
    ModalButton.innerText="Cerrar"
    ModalButton.className="modal_close"
    ModalButton.addEventListener("click",() => {
        ModalContainer.className="cerrar"
    })
    Modalhead.append(ModalButton)
    let carritoContent=document.createElement("div");
    if(ElementosCarrito.length == 0){ /* Para cuando el carrito esta vacio */
    carritoContent.classList="modal_empty modal_content"
    carritoContent.innerHTML=`
    <p>Aun no hay elementos en el carrito</p>
    `
    ModalContainer.append(carritoContent)
}else{ /* Carrito con productos */
    ElementosCarrito.forEach((product)=>{
    let carritoContent=document.createElement("div");
        carritoContent.className="modal_content"
        carritoContent.innerHTML=`
        <p>${product.marca}</p>
        <p>${product.modelo}</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>
        `
        ModalContainer.append(carritoContent)

        let restar=carritoContent.querySelector(".restar") /* Restar cantidad */
        restar.addEventListener("click", () => {
            if(product.cantidad !==1){
            product.cantidad--
            }
            saveLocal( )
            cart()
        })
        let sumar= carritoContent.querySelector(".sumar") /* Sumar cantidad */
        sumar.addEventListener("click", () => {
            product.cantidad++
            saveLocal()
            cart()
        })
        let eliminar = document.createElement("span");
        eliminar.innerHTML="<i class='bi bi-trash3'></i>"
        eliminar.className="delete_product"
        carritoContent.append(eliminar);
        eliminar.addEventListener("click",eliminar_producto) /* Eliminar productos del carrito */
    })}
    const total = ElementosCarrito.reduce((acc,el) =>acc + el.precio * el.cantidad,0)
    const totalcart= document.createElement("div")
    totalcart.className="total_content"
    totalcart.innerHTML= `
    <button class="btn btn-danger" id="cleancart">Vaciar Carrito</button>
    <p>Subtotal: $ ${total}</p>
    <button id="end" class="btn btn-success">Continuar Compra</button>
    `
    ModalContainer.append(totalcart);
    rendercantidadcarrito();
    let vaciarcart= document.querySelector("#cleancart"); /* Vaciar el carrito */
    vaciarcart.addEventListener("click",vaciarcarrito)
    let finalizar=document.querySelector("#end") /* Finalizar compra */
    finalizar.addEventListener("click",terminarcompra)
    
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


