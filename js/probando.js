
let loginForm = document.getElementsByClassName("formulario-datos")

//activo el formulario
let loginButton = document.getElementById("inicioBoton");
loginButton.addEventListener("click", (e) => {
    validarDatos();
    validarEmail();
    validarCons();
    cargarUsuario(baseDatos);
    e.preventDefault();
});

// mensajes respuesta


//Llamo a la info ingresada en los inputs del formulario y valido su contenido

//usuario
let usuarioInput = document.getElementById("usuarioInput");
usuarioInput.addEventListener("change",validarEmail);

function validarEmail () {
    const mailFormat = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
         if (mailFormat.test(usuarioInput.value)) {
            JSON.stringify(localStorage.setItem("usuario", usuarioInput.value))
            return true;
        }else {
            console.log("formato no válido")
        }
}

//contraseña
let passInput = document.getElementById("passInput");
passInput.addEventListener("change", validarCons);

function validarCons () {
    if (passInput.value != "") {
    JSON.stringify(localStorage.setItem("password", passInput.value))
    return true;
    } else {
        console.log("contraseña no valida")
    }
    
}

// probando
function cargarUsuario(array) {
    
    let usuarioCreado = new usuarioRegistrado(array.length + 1, usuarioInput.value, passInput.value)
    array.push(usuarioCreado)
    localStorage.setItem("registro usuarios", JSON.stringify(array))

};

function validarDatos (validarEmail,validarCons) => {
    validarEmail () {
    const mailFormat = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
         if (mailFormat.test(usuarioInput.value)) {
            JSON.stringify(localStorage.setItem("usuario", usuarioInput.value))
            return true;
        }else {
            console.log("formato no válido")
        }
}
    
    
    if (validarEmail && validarCons) {
      hola();
    }else{
        error();
    }
};
 
 //saludo de bienvenida
 
  function hola() {
     swal.fire ({
         title: "Bienvenido!",
         text: "Has iniciado sesion exitosamente!",
         icon: "success",
       }) .then ( () => {
             window.location.href=("index.html");
     });
 }; 
 
 //vuelve a intentar
 
 function error() {
     Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Something went wrong!',
     }) .then ( () => {
         window.location.href=("iniciosesion.html");  
 });
 }

