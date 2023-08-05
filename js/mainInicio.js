let loginForm = document.getElementsByClassName("formulario-datos")

//activo el formulario

let loginButton = document.getElementById("inicioBoton");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    validarEmail();
    validarCons();
  })
  
//Llamo a la info ingresada en los inputs del formulario y valido su contenido

//usuario

function validarEmail () {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
         if (usuarioInput.value == mailFormat) {
            console.log("has ingresado un usuario valido");
         } else {
              alert("Invalid address!"); 
        }
}

let usuarioInput = document.getElementById("usuarioInput");
usuarioInput.addEventListener("change",(_validarEmail) =>{
    console.log(usuarioInput.value)
}),

 validarEmail ()

//contraseña


function validarCons () {
    if (passInput.value != "") {
    console.log("A ver ahora?")
    return true;
    }
    
}
let passInput = document.getElementById("passInput");
passInput.addEventListener("change", (_validarCons) => {
    console.log(passInput.value)
})

validarCons ()

