// Traigo la base de datos
 const getBaseDatos = async ()=> {
        const resp = await fetch("./json/baseDatos.json");
        const data = await resp.json(data);
        console.log(data);
};


let loginForm = document.getElementsByClassName("formulario-datos")

//activo el formulario

let loginButton = document.getElementById("inicioBoton");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (validarEmail() && validarCons()) {
        hola();
        cargarUsuario();
    };
});

getBaseDatos();

//Llamo a la info ingresada en los inputs del formulario y valido su contenido

//usuario
let usuarioInput = document.getElementById("usuarioInput");
usuarioInput.addEventListener("change", () => {
    validarEmail();
});

function validarEmail() {
    const mailFormat = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if (mailFormat.test(usuarioInput.value)) {
        localStorage.setItem("usuario", JSON.stringify(usuarioInput.value));
        return true;
    } else {
        Toastify({
            text: "El formato no es válido!",
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
                background: '#513D62',
                color:'#F4F1C4',
            }
        }).showToast();
        
        return false;
    }
}

//contraseña
let passInput = document.getElementById("passInput");
passInput.addEventListener("change", () => {
    validarCons();
});

function validarCons() {
    if (passInput.value.length > 8) {
        localStorage.setItem("password", JSON.stringify(passInput.value));
        return true;
    } else {
        Toastify({
            text: "La contraseña debe tener al menos 8 caracteres!",
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
                background: '#513D62',
                color:'#F4F1C4',
            }
        }).showToast();
        return false;
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

function cargarUsuario() {
    let usuarioIngresado = new usuarioRegistrado(baseDatos.length + 1, usuarioInput.value, passInput.value);
    baseDatos.push(usuarioIngresado);
    localStorage.setItem("baseDatos", JSON.stringify(baseDatos));
}
