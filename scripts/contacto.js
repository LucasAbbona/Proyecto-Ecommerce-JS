const form= document.querySelector("#formulario")
const alerts=document.querySelector("#form_alerts")
const correo=document.querySelector("#correo")
const mensaje=document.querySelector("#mensaje")


form.addEventListener("click", () => {
alerts.innerHTML=""
const alerta=document.createElement("div")
alerta.className="alerta_form"
alerta.innerHTML=`
<h5>Se ha enviado el formulario exitosamente</h5>
<a class="link_form" href="../contacto.html">Volver al formulario</a>`
alerts.append(alerta)
})




