
let loginForm = document.getElementsByClassName("formulario-datos")

//activo el formulario

let loginButton = document.getElementById("enviarBoton");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
if (validarNombre() && validarApellido() && validarEmail() && validarMensaje()){
    enviado();
}else {
    error()
};
    cargarMensaje();
});
 
//Llamo a la info ingresada en los inputs del formulario y valido su contenido

//nombre 

let nombre = document.getElementById("nombre");
nombre.addEventListener("change",() =>{
    validarNombre();
});

function validarNombre() {
    if ((nombre.value.length > 3)){
        sessionStorage.setItem("nombre", JSON.stringify(nombre.value));
        return true;
    }  
}
        
//apellido

let apellido = document.getElementById("apellido");
apellido.addEventListener("change",() =>{
    validarApellido();
});

 function validarApellido() {
    if ((apellido.value.length >3)){
        sessionStorage.setItem("apellido", JSON.stringify(apellido.value));
        return true; 
    }
}

//email

let email = document.getElementById("email");
email.addEventListener("change",() =>{
    validarEmail();
});

function validarEmail() {
    const mailFormat = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (mailFormat.test(email.value)) {
        sessionStorage.setItem("email", JSON.stringify(email.value));
        return true;
    } 
}

 //mensaje

 let mensaje = document.getElementById("mensaje");
 mensaje.addEventListener("change",() =>{
     validarMensaje();
 });

 function validarMensaje() {
    if ((mensaje.value.length >10)){
            sessionStorage.setItem("mensaje", JSON.stringify(mensaje.value))
            return true;
        } 
}

// mensaje enviado con exito

function enviado() {
    swal.fire ({
        title: "Gracias!",
        text: "Tu mensaje se ha enviado correctamente, a la brevedad nos contactaremos contigo!",
        icon: "success",
      }) .then ( () => {
            window.location.href=("index.html");
    });
};

function error(){
    Swal.fire({
        icon: 'error',
        title: 'Algo ha sucedido!',
        text: 'Procura que todos los campos estén correctos!',
      });
}

function cargarMensaje() {
    let mensajeIngresado = new mensajeRegistrado(nombre.value,apellido.value,mensaje.value);
    preguntasFrecuentes.push(mensajeIngresado);
    localStorage.setItem("preguntasFrecuentes", JSON.stringify(preguntasFrecuentes));
}