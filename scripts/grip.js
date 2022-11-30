class Grips{
    constructor(id,marca,modelo,precio,image,cantidad){
        this.id=id,
        this.marca=marca,
        this.modelo=modelo,
        this.precio=parseInt(precio),
        this.image=image,
        this.cantidad=cantidad;
    }
}
const grips= [];
grips.push(new Grips(31,"HEAD","SOFTAC TRACTION",2000,"./images/grips/softac-traction.jpg",1));
grips.push(new Grips(32,"HEAD","HYDROSORB PRO",2200,"./images/grips/hydrosorb-pro-white.jpg",1));
grips.push(new Grips(33,"HEAD","LEATHER TOUR",3700,"./images/grips/leather-tour-brown.jpg",1));
grips.push(new Grips(34,"HEAD","ULTIMATE",3000,"./images/grips/ultimate-black.jpg",1));
grips.push(new Grips(35,"HEAD","ABSORBING",1750,"./images/grips/dual-absorbing-black.jpg",1));
grips.push(new Grips(36,"Babolat","Syntec Pro",2600,"./images/grips/grip-babolat-syntecpro-white1-30ef20b2bbd1eefaa516615247377181-480-0.jpg",1));
grips.push(new Grips(37,"Babolat","Syntec Uptake",2200,"./images/grips/670069105-69de03fb6b2841551916039124756703-640-0.jpg",1));
grips.push(new Grips(38,"Wilson","Classic Sponge",2400,"./images/grips/wrz4205bke_0_cushion_aire_classic_sponge-1200x1200.jpeg",1));
grips.push(new Grips(39,"Wilson","Sublime Feel",2400,"./images/grips/wrz4202whe_0_sublime_white-1200x1200_1.jpeg",1));
grips.push(new Grips(40,"Wilson","Cushion Pro",1600,"./images/grips/wrz4209bk_0_cushion_pro-1200x1200.jpeg",1));

const Contenedor=document.querySelector(`#contenedor_grips`)
const contadorcarrito = document.querySelector("#contador")
const verCarrito = document.querySelector(`#carrito`)
const ModalContainer = document.querySelector(`#cart_container`)

function elementosgrips(gripseleccionado){
Contenedor.innerHTML=""/* Para que no se acumulen los productos */
gripseleccionado.forEach((grip) => {
const div = document.createElement('div')
div.className='tarjeta'
div.innerHTML = `
        <img src=${grip.image} class="foto d-block w-100">
        <div class="añ_cart2">
        <h6>${grip.marca} ${grip.modelo} </h6>
        <p class="prec2">Precio: ${grip.precio} + IVA</p>
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
    const repetido= ElementosCarrito.some((repeatproduct) => repeatproduct.id === grip.id);
    if(repetido){
        ElementosCarrito.map((prod)=> {
            if(prod.id === grip.id){
                prod.cantidad++;
            }
        })
    }else{
    ElementosCarrito.push({
            id:grip.id,
            marca:grip.marca,
            modelo:grip.modelo,
            precio:grip.precio,
            cantidad:grip.cantidad,
        });
        rendercantidadcarrito();
        saveLocal();
    }
    });
    
})
}
/* Numeros en el carrito de cantidad con localStorage */
const rendercantidadcarrito= () =>{
    let carritolength = ElementosCarrito.length;
    localStorage.setItem("carritolength", JSON.stringify(carritolength))
    contadorcarrito.innerHTML = JSON.parse(localStorage.getItem("carritolength"))
}
rendercantidadcarrito();

/* Sistema de filtros */
elementosgrips(grips)
const botongrip=document.querySelectorAll(".boton_grips_categoria")
botongrip.forEach((boton) => {
    boton.addEventListener("click",(e) => {
        botongrip.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
        if(e.currentTarget.id != "todas"){
        const productoselecionado=grips.filter(grip => grip.marca === e.currentTarget.id)
        elementosgrips(productoselecionado)}
        else{
            elementosgrips(grips)
        }
    })
})