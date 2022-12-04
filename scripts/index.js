const Contenedor=document.querySelector(`#contenedor_raquetas`)
const verCarrito = document.querySelector(`#carrito`)
const ModalContainer = document.querySelector(`#cart_container`)
const contadorcarrito = document.querySelector("#contador")
const RaquetaDestacada=PRODUCTOS.filter((el)=>el.modelo.includes("Ultra 100 V4"))

/* Raqueta destacada */
RaquetaDestacada.forEach((raqueta) => {
    const div = document.createElement('div')
    div.innerHTML = `
            <img src=${raqueta.imagen} class="foto d-block w-100">
            <div class="añ_cart2">
            <h6>${raqueta.marca} ${raqueta.modelo} </h6>
            <p class="prec2">Precio: $ ${raqueta.precio} + IVA</p>  
            </div>` 
    Contenedor.append(div)
    let comprar = document.createElement("button");
    comprar.innerText="Añadir al carrito"
    comprar.classList="boton2 btn btn-success btn-outline-light"
    div.append(comprar);
    
    /* Notificacion de producto agregado y agregar mas cantidad de un producto */
    comprar.addEventListener("click", () => {
    const repetido= ElementosCarrito.some((repeatproduct) => repeatproduct.id === raqueta.id);
    if(repetido){
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
    });
    });

    /* Numeros en el carrito de cantidad */
    const rendercantidadcarrito= () =>{
        contadorcarrito.innerHTML = ElementosCarrito.length
    }
    rendercantidadcarrito();
    
    /* Fetch y promesas para un el archivo json local utilizado en el final de la pagina */
    const rank=document.querySelector("#ranking")
        fetch('scripts/jugadores.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((jugador)=> {
            const rankTop = document.createElement("div")
            rankTop.className="rank_player"
            rankTop.innerHTML=`
            <div>
            <h5 class="rank_nombre">${jugador.nombre}</h5>
            <img class="jugadores" src="${jugador.img} ">
            <a class="rank_raquet" href="../raquetas.html">${jugador.raqueta}</a>
            </div>
            `
            rank.append(rankTop)
            })
            
        })