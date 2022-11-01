/* Carrito */

class Cordajes{
    constructor(marca,modelo,tipo,precio){
        this.marca=marca,
        this.modelo=modelo,
        this.tipo=tipo,
        this.precio=parseInt(precio);
    }
}
const cordajes = [];
cordajes.push(new Cordajes("HEAD","LYNX","Monofilamento",3700));
cordajes.push(new Cordajes("HEAD","HAWK","Monofilamento",5000));
cordajes.push(new Cordajes("HEAD","HAWK ROUGH","Monofilamento",6200));
cordajes.push(new Cordajes("HEAD","HAWK TOUCH","Monofilamento",5000));
cordajes.push(new Cordajes("HEAD","INTELLITOUR","Hibrido",4700));
cordajes.push(new Cordajes("HEAD","REFLEX MLT","Multifilamento",5500));
cordajes.push(new Cordajes("HEAD","RIP CONTROL","Multifilamento",4000));
cordajes.push(new Cordajes("HEAD","VELOCITY MLT","Multifilamento",3300));
cordajes.push(new Cordajes("Babolat","RPM Blast","Monofilamento",4700));
cordajes.push(new Cordajes("Babolat","Addixion","Monofilamento",4700));
cordajes.push(new Cordajes("Babolat","RPM Soft","Monofilamento",4700));
cordajes.push(new Cordajes("Babolat","RPM Hurricane","Monofilamento",4700));
cordajes.push(new Cordajes("Wilson","NXT Duo II","Monofilamento",8700));
cordajes.push(new Cordajes("Wilson","NXT Power","Multifilamento",7000));
cordajes.push(new Cordajes("Wilson","NXT 16","Multifilamento",7000));
const Monofilamento = cordajes.filter((cordaje)=> cordaje.tipo.includes("Monofilamento"));
console.log(Monofilamento);
const Multifilamento = cordajes.filter((cordaje)=> cordaje.tipo.includes("Multifilamento"));
console.log(Multifilamento);
const Hibrido = cordajes.filter((cordaje)=>cordaje.tipo.includes("Hibrido"))
console.log(Hibrido)

class Raquetas{
    constructor(marca,modelo,precio){
        this.marca=marca,
        this.modelo=modelo,
        this.precio=parseInt(precio);
    }
}
const raquetas = [];
raquetas.push(new Raquetas("Babolat","Pure Aero Rafa",82500));
raquetas.push(new Raquetas("Babolat","Pure Drive",78500));
raquetas.push(new Raquetas("Babolat","Pure Aero",78500));
raquetas.push(new Raquetas("Babolat","Pure Aero Strike",70200));
raquetas.push(new Raquetas("HEAD","EXTREME TOUR",67500));
raquetas.push(new Raquetas("HEAD","BOOM PRO",70000));
raquetas.push(new Raquetas("HEAD","SPEED PRO",75000));
raquetas.push(new Raquetas("HEAD","RADICAL PRO",67500));
raquetas.push(new Raquetas("HEAD","GRAVITY PRO",67500));
raquetas.push(new Raquetas("HEAD","PRESTIGE PRO",75500));
raquetas.push(new Raquetas("Wilson","Blade 98",67500));
raquetas.push(new Raquetas("Wilson","PRO Staff",75500));
raquetas.push(new Raquetas("Wilson","Clash 98",70500));
raquetas.push(new Raquetas("Wilson","Burn 100",67500));
raquetas.push(new Raquetas("Wilson","Ultra 100",67500));
const Babolat= raquetas.filter((raqueta)=>raqueta.marca.includes("Babolat"));
console.log(Babolat)
const Head= raquetas.filter((raqueta)=>raqueta.marca.includes("HEAD"));
console.log(Head)
const Wilson= raquetas.filter((raqueta)=>raqueta.marca.includes("Wilson"));
console.log(Wilson)

class Grips{
    constructor(marca,modelo,precio){
        this.marca=marca,
        this.modelo=modelo,
        this.precio=parseInt(precio);
    }
}
const grips= [];
grips.push(new Grips("HEAD","SOFTAC TRACTION",2000));
grips.push(new Grips("HEAD","HYDROSORB PRO",2200));
grips.push(new Grips("HEAD","LEATHER TOUR",3700));
grips.push(new Grips("HEAD","ULTIMATE",3000));
grips.push(new Grips("HEAD","ABSORBING",1750));
grips.push(new Grips("Babolat","Syntec Pro",2600));
grips.push(new Grips("Babolat","Syntec Uptake",2200));
grips.push(new Grips("Wilson","Classic Sponge",2400));
grips.push(new Grips("Wilson","Sublime",2400));
grips.push(new Grips("Wilson","Cushion Pro",1600));
const GripWilson = grips.filter((grip)=>grip.marca.includes("Wilson"));
console.log(GripWilson)
const GripBabolat = grips.filter((grip)=>grip.marca.includes("Babolat"));
console.log(GripBabolat)
const GripHEAD = grips.filter((grip)=>grip.marca.includes("HEAD"));
console.log(GripHEAD)

const GripsEnCarrito= grips.map((grip)=>{
    return{
        marca: grip.marca,
        modelo: grip.modelo,
        precio: grip.precio * 1.21
    }
});
console.log(GripsEnCarrito);
const RaquetasEnCarrito= raquetas.map((raqueta)=>{
    return{
        marca: raqueta.marca,
        modelo: raqueta.modelo,
        precio: raqueta.precio * 1.21
    }
});
console.log(RaquetasEnCarrito)
const CordajesEnCarrito= cordajes.map((cordaje)=>{
    return{
        marca: cordaje.marca,
        modelo: cordaje.modelo,
        precio: cordaje.precio * 1.21
    }
});
console.log(CordajesEnCarrito)

ElementosCarrito=[];
if(prompt("Ingrese un Producto:") == "Raqueta Babolat Pure Aero"){
    ElementosCarrito.push=raquetas[2]
}else{
    console.log("Ingrese otro producto")
}
console.log(ElementosCarrito)