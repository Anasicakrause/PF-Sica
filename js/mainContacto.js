let loginForm = document.getElementsByClassName("formulario-datos")

//activo el formulario

let loginButton = document.getElementById("enviarBoton");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    validarNombre();
    validarApellido();
    validarEmail();
    validarMensaje()
  })
  
//Llamo a la info ingresada en los inputs del formulario y valido su contenido

//nombre y apellido

function validarNombre() {
    if ((nombre.value != ""))
            JSON.stringify(sessionStorage.setItem("nombre", nombre.value))
            return true;
}


let nombre = document.getElementById("nombre");
nombre.addEventListener("change",(_validarNombre) =>{
    console.log(nombre.value)
}),

 validarNombre ()

 function validarApellido() {
    if ((apellido.value != ""))
            JSON.stringify(sessionStorage.setItem("apellido", apellido.value))
            return true;
}

let apellido = document.getElementById("apellido");
apellido.addEventListener("change",(_validarApellido) =>{
    console.log(apellido.value)
}),

 validarApellido ()

//email

function validarEmail () {
    const mailFormat = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
         if (mailFormat.test(email.value)) {
            JSON.stringify(sessionStorage.setItem("email", email.value))
            return true;
        }
}

let email = document.getElementById("email");
email.addEventListener("change",(_validarEmail) =>{
    console.log(email.value)
}),

 validarEmail ()

 //mensaje

 function validarMensaje() {
    if ((mensaje.value != ""))
            JSON.stringify(sessionStorage.setItem("mensaje", mensaje.value))
            return true;
}

let mensaje = document.getElementById("mensaje");
mensaje.addEventListener("change",(_validarMensaje) =>{
    console.log(mensaje.value)
}),

 validarMensaje()