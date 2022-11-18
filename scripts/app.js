class Cordajes{
    constructor(id,marca,modelo,tipo,precio,image,cantidad){
        this.id=id,
        this.marca=marca,
        this.modelo=modelo,
        this.tipo=tipo,
        this.precio=parseInt(precio),
        this.image=image,
        this.cantidad=cantidad;
    }
}
const cordajes = [];
cordajes.push(new Cordajes(16,"HEAD","LYNX TOUCH","Monofilamento",3700,"./images/cordajes/lynx-green.jpg",1));
cordajes.push(new Cordajes(17,"HEAD","HAWK TM","Monofilamento",5000,"./images/cordajes/hawk-black.jpg",1));
cordajes.push(new Cordajes(18,"HEAD","HAWK ROUGH","Monofilamento",6200,"./images/cordajes/hawk-rough-anthracite.jpg",1));
cordajes.push(new Cordajes(19,"HEAD","HAWK TOUCH","Monofilamento",5000,"./images/cordajes/hawk-touch-red.jpg",1));
cordajes.push(new Cordajes(20,"HEAD","INTELLITOUR","Hibrido",4700,"./images/cordajes/cuerda-babolat-rpm-blast-12m-11-29d0fa1a9c813febd216625676863632-480-0.jpg",1));
cordajes.push(new Cordajes(21,"HEAD","REFLEX MLT","Multifilamento",5500,"./images/cordajes/reflex-mlt-natural.jpg",1));
cordajes.push(new Cordajes(22,"HEAD","RIP CONTROL","Multifilamento",4000,"./images/cordajes/rip-control-orange.jpg",1));
cordajes.push(new Cordajes(23,"HEAD","VELOCITY MLT","Multifilamento",3300,"./images/cordajes/velocity-mlt-natural.jpg",1));
cordajes.push(new Cordajes(24,"Babolat","RPM Blast","Monofilamento",4700,"./images/cordajes/cuerda-babolat-rpm-blast-12m-11-29d0fa1a9c813febd216625676863632-480-0.jpg",1));
cordajes.push(new Cordajes(25,"Babolat","Addixion Comfort","Monofilamento",4700,"./images/cordajes/cuerda-babolat-addixion-12m-111-9aafdbfd84f0fc486b16625676208542-480-0.jpg",1));
cordajes.push(new Cordajes(26,"Babolat","RPM Soft","Monofilamento",4700,"./images/cordajes/cuerda-babolat-rpm-soft-12m-11-f978a71f5032aa9d8916633624704691-480-0.jpg",1));
cordajes.push(new Cordajes(27,"Babolat","RPM Hurricane","Monofilamento",4700,"./images/cordajes/cuerda-babolat-rpm-hurricane-12m-11-0dcb371f04dd38b7d816625680667746-480-0.jpg",1));
cordajes.push(new Cordajes(28,"Wilson","NXT Duo II","Monofilamento",8700,"./images/cordajes/wilsonhibrido.jpg",1));
cordajes.push(new Cordajes(29,"Wilson","NXT Power","Multifilamento",7000,"./images/cordajes/wilsonmulti.png",1));
cordajes.push(new Cordajes(30,"Wilson","NXT 16 Comfort","Multifilamento",7000,"./images/cordajes/wilsonmult.jpeg",1));
const Monofilamento = cordajes.filter((cordaje)=> cordaje.tipo.includes("Monofilamento"));
const Multifilamento = cordajes.filter((cordaje)=> cordaje.tipo.includes("Multifilamento"));
const Hibrido = cordajes.filter((cordaje)=>cordaje.tipo.includes("Hibrido"))

const Contenedor=document.querySelector(`#contenedor`)
const contadorcarrito = document.querySelector("#contador")
const verCarrito = document.querySelector(`#carrito`)
const ModalContainer = document.querySelector(`#cart_container`)
cordajes.forEach((cordaje) => {
const div = document.createElement('div')
div.className='tarjeta'
div.innerHTML = `
        <img src=${cordaje.image} class="d-block w-100">
        <div class="añ_cart2">
        <h6>${cordaje.marca} ${cordaje.modelo} </h6>
        <p class="prec2">Precio: ${cordaje.precio} + IVA</p>
        </div>    ` 
Contenedor.append(div)
let comprar = document.createElement("button");
comprar.innerText="Añadir al carrito"
comprar.classList="boton2 btn btn-success btn-outline-light"
div.append(comprar);
comprar.addEventListener("click", () => {

    const repeat= ElementosCarrito.some((repeatproduct) => repeatproduct.id === cordaje.id);
    if(repeat){
        ElementosCarrito.map((prod)=> {
            if(prod.id === cordaje.id){
                prod.cantidad++;
            }
        })
    }else{
    ElementosCarrito.push({
            id:cordaje.id,
            marca:cordaje.marca,
            modelo:cordaje.modelo,
            precio:cordaje.precio,
            cantidad:cordaje.cantidad,
        });
        rendercantidadcarrito();
        saveLocal();
    }
    });
    
})
const rendercantidadcarrito= () =>{
    let carritolength = ElementosCarrito.length;
    localStorage.setItem("carritolength", JSON.stringify(carritolength))
    contadorcarrito.innerHTML = JSON.parse(localStorage.getItem("carritolength"))
}
rendercantidadcarrito();