let enviar = document.getElementById("enviar")
enviar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value
    let trabajo = document.getElementById("trabajo").value
    let correo = document.getElementById("correo").value
    let telefono = document.getElementById("telefono").value
    let sobreti=document.getElementById("sobreti").value

    
    let nuevoUsuario = new Usuario(nombre, trabajo, correo, telefono, sobreti)


function Usuario(nombre, trabajo, correo, telefono, sobreti){
    this.nombre = nombre
    this.trabajo = trabajo
    this.correo = correo
    this.telefono = telefono
    this.sobreti = sobreti}

console.log(nuevoUsuario)

let name=document.getElementById("name")
let work=document.getElementById("work")
let email=document.getElementById("email")
let phone=document.getElementById("phone")
let about=document.getElementById("about")

name.innerHTML=`<b>Nombre:</b><br> ${nuevoUsuario.nombre}`
work.innerHTML=`<b>Trabajo:</b><br> ${nuevoUsuario.trabajo}`
email.innerHTML=`<b>Email:</b><br> ${nuevoUsuario.correo}`
phone.innerHTML=`<b>Telefono:</b><br>${nuevoUsuario.telefono}`
about.innerHTML=`<b>Sobre ti:</b><br>${nuevoUsuario.sobreti}`


nombre=document.getElementById("nombre").value=""
trabajo=document.getElementById("trabajo").value=""
correo=document.getElementById("correo").value=""
phone=document.getElementById("telefono").value=""
about=document.getElementById("sobreti").value=""
}
)



