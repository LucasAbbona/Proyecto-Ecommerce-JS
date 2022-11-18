class Raquetas{
    constructor(id,marca,modelo,precio,image,cantidad){
        this.id=id,
        this.marca=marca,
        this.modelo=modelo,
        this.precio=parseInt(precio),
        this.image=image,
        this.cantidad=cantidad
    }
}
const raquetas = [];
raquetas.push(new Raquetas(15,"Wilson","Ultra 100 V4",67500,"./images/raquetas/wilsonultra3.jpeg",1));
const Contenedor=document.querySelector(`#contenedor_raquetas`)
const verCarrito = document.querySelector(`#carrito`)
const ModalContainer = document.querySelector(`#cart_container`)
const contadorcarrito = document.querySelector("#contador")
raquetas.forEach((raqueta) => {
    const div = document.createElement('div')
    
    div.innerHTML = `
            <img src=${raqueta.image} class="d-block w-100">
            <div class="añ_cart2">
            <h6>${raqueta.marca} ${raqueta.modelo} </h6>
            <p>Cantidad: ${raqueta.cantidad}</p>
            <p class="prec2">Precio: $ ${raqueta.precio} + IVA</p>  
            </div>` 
    Contenedor.append(div)
    let comprar = document.createElement("button");
    comprar.innerText="Añadir al carrito"
    comprar.classList="boton2 btn btn-success btn-outline-light"
    div.append(comprar);
    
    comprar.addEventListener("click", () => {
    
    const repeat= ElementosCarrito.some((repeatproduct) => repeatproduct.id === raqueta.id);
    if(repeat){
        ElementosCarrito.map((prod)=> {
            if(prod.id === raqueta.id){
                prod.cantidad++;
            }
        })
    }else{
    ElementosCarrito.push({
            id:raqueta.id,
            marca:raqueta.marca,
            modelo:raqueta.modelo,
            precio:raqueta.precio,
            cantidad:raqueta.cantidad,
        });
        rendercantidadcarrito();
        saveLocal();
        }
    });
    
    });
    const rendercantidadcarrito= () =>{
        contadorcarrito.innerHTML = ElementosCarrito.length
    }
    