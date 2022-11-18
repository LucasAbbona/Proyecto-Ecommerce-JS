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
raquetas.push(new Raquetas(1,"Babolat","Pure Aero Rafa",82500,"./images/raquetas/babolatrafa.jpg",1));
raquetas.push(new Raquetas(2,"Babolat","Pure Drive",78500,"./images/raquetas/babolatdrive.png",1));
raquetas.push(new Raquetas(3,"Babolat","Pure Aero",78500,"./images/raquetas/babolataero.png",1));
raquetas.push(new Raquetas(4,"Babolat","Pure Aero Strike",70200,"./images/raquetas/babolatstrike.png",1));
raquetas.push(new Raquetas(5,"HEAD","EXTREME TOUR",67500,"./images/raquetas/extreme-tour-2022.jpg",1));
raquetas.push(new Raquetas(6,"HEAD","BOOM PRO",70000,"./images/raquetas/boom-pro-2022.jpg",1));
raquetas.push(new Raquetas(7,"HEAD","SPEED PRO",75000,"./images/raquetas/speed-pro-2022.jpg",1));
raquetas.push(new Raquetas(8,"HEAD","RADICAL PRO",67500,"./images/raquetas/radical-pro.jpg",1));
raquetas.push(new Raquetas(9,"HEAD","GRAVITY PRO",67500,"./images/raquetas/gravity-pro.jpg",1));
raquetas.push(new Raquetas(10,"HEAD","PRESTIGE PRO",75500,"./images/raquetas/prestige-pro-2021.jpg",1));
raquetas.push(new Raquetas(11,"Wilson","Blade 98 V8.0",67500,"./images/raquetas/blade.jpeg",1));
raquetas.push(new Raquetas(12,"Wilson","PRO Staff RF 97",75500,"./images/raquetas/prostaff.jpeg",1));
raquetas.push(new Raquetas(13,"Wilson","Clash 98 V2",70500,"./images/raquetas/clash.jpeg",1));
raquetas.push(new Raquetas(14,"Wilson","Burn 100 CV",67500,"./images/raquetas/burn.jpg",1));
raquetas.push(new Raquetas(15,"Wilson","Ultra 100 V4",67500,"./images/raquetas/wilsonultra3.jpeg",1));

const Babolat= raquetas.filter((raqueta)=>raqueta.marca.includes("Babolat"));
const Head= raquetas.filter((raqueta)=>raqueta.marca.includes("HEAD"));
const Wilson= raquetas.filter((raqueta)=>raqueta.marca.includes("Wilson"));

const Contenedor=document.querySelector(`#contenedor_raquetas`)
const verCarrito = document.querySelector(`#carrito`)
const ModalContainer = document.querySelector(`#cart_container`)
const contadorcarrito = document.querySelector("#contador")

raquetas.forEach((raqueta) => {
const div = document.createElement('div')
div.className='tarjeta'
div.innerHTML = `
        <img src=${raqueta.image} class="d-block w-100">
        <div class="añ_cart2">
        <h6>${raqueta.marca} ${raqueta.modelo} </h6>
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
    let carritolength = ElementosCarrito.length;
    localStorage.setItem("carritolength", JSON.stringify(carritolength))
    contadorcarrito.innerHTML = JSON.parse(localStorage.getItem("carritolength"))
}
rendercantidadcarrito();

const wilson=document.querySelector("#Wilson")
const head=document.querySelector("#head")
const babolat=document.querySelector("#babolat")
const todos= document.querySelector("#allraquets")
