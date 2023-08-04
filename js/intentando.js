const loginForm = document.getElementsByClassName("formulario-datos");
const loginButton = document.getElementById("inicioBoton");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let passInput = document.getElementById("passInput");
    let usuarioInput = document.getElementById("usuarioInput");

    if (passInput === /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ || usuarioInput === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Estas afuera")
    }
    console.log("Ay dios")
})  
