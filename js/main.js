const loginForm = document.getElementsByClassName("formulario-datos");
const loginButton = document.getElementById("inicioBoton");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();

})

let passInput = document.getElementById("passInput");
let usuarioInput = document.getElementById("usuarioInput");

function validarEmail () {
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (usuarioInput.value == mailFormat) {
          alert("Valid address!");

        } else {
          alert("Invalid address!");
        
        }
      }


validarEmail()
console.log(usuarioInput.value)

// validar contraseña
console.log(passInput.value)

function validarCons (passInput) {

    if (passInput.value == null && passInput.value.length == 0) {
    console.log("No entiendo nada")
    return false;
    }
    
}
validarCons()


// continuar con inicio de sesion
        
function validacionDatos() {
console.log("Inicio de sesion exitoso");
}

validacionDatos()


