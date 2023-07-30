

let usuarioEmail;
let usuarioContrasena;

// validar email ingresado

function validarEmail () {

    let usuarioEmail = document.getElementsById("usuario");
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
    return false;
    }
}

// validar contraseña

function validarCons () {

    let usuarioContrasena = document.getElementById("contraseña");
    if (usuarioContrasena == null || usuarioContrasena.length == 0) {
    return false;
    }
}

// continuar con inicio de sesion

let iniciar = document.getElementsById("inicioBoton");
iniciar.addEventListener("click", validacionDatos)
        
function validacionDatos(e) {
e.preventDefault();
console.log("Inicio de sesion exitoso");
}

validarEmail();
validarCons();

