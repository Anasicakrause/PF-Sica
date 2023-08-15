let loginForm = document.getElementsByClassName("formulario-datos")

//activo el formulario

let loginButton = document.getElementById("inicioBoton");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    validarEmail();
    validarCons();
    cargarUsuario(baseDatos);
})
 

loginButton.addEventListener("click", (e) => {
    swal.fire ({
        title: "Bienvenido!",
        text: "Has iniciado sesion exitosamente!",
        icon: "success",
      }) .then ( () => {
        if (true) {
            window.location.href=("index.html");
        }
    })
});
    

//Llamo a la info ingresada en los inputs del formulario y valido su contenido

//usuario

function validarEmail () {
    const mailFormat = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
         if (mailFormat.test(usuarioInput.value)) {
            JSON.stringify(localStorage.setItem("usuario", usuarioInput.value))
            return true;
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
    JSON.stringify(localStorage.setItem("password", passInput.value))
    return true;
    }
    
}
let passInput = document.getElementById("passInput");
passInput.addEventListener("change", (_validarCons) => {
    console.log(passInput.value)
})

validarCons ()

// probando
function cargarUsuario(array) {
    
    let usuarioCreado = new usuarioRegistrado(array.length + 1, usuarioInput.value, passInput.value)
    array.push(usuarioCreado)
    localStorage.setItem("registro usuarios", JSON.stringify(array))

}

