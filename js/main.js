let passInput = document.getElementById("passInput").value
let usuarioInput = document.getElementById("usuarioInput").value

// validar email ingresado

usuarioInput.addEventListener("usuarioInput", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;

}

console.log(updateValue)

function validarEmail (usuarioInput) {
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (usuarioInput == mailFormat) {
          alert("Valid address!");

        } else {
          alert("Invalid address!");
        
        }
      }


validarEmail()


// validar contraseña
console.log(passInput.value)

function validarCons (passInput) {

    if (passInput == null && passInput.length == 0) {
    console.log("No entiendo nada")
    return false;
    }
    
}
validarCons()


// continuar con inicio de sesion

function probando(){
const iniciar = document.getElementById("inicioBoton");
}
        
function validacionDatos(e) {
e.preventDefault();
console.log("Inicio de sesion exitoso");
}




