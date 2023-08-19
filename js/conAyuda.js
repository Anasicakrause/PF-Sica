// Generando base de datos de usuarios a partir de un archivo JSON
let baseDatos = []; // Esta será tu base de datos local

fetch('baseDatos.json') // Cambia la URL a la ubicación real de tu archivo JSON
  .then(response => response.json())
  .then(data => {
    baseDatos = data; // Almacenar los datos en la base de datos local
  })
  .catch(error => {
    console.error('Error al cargar la base de datos:', error);
  });

//----------------------------------------------------------!!!!!

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

//--------------------------------------------------------------!!!!

// Luego, en la función cargarUsuario(), puedes agregar nuevos usuarios a la base de datos y actualizar el archivo JSON:
function cargarUsuario() {
    let usuarioIngresado = new usuarioRegistrado(baseDatos.length + 1, usuarioInput.value, passInput.value);
    baseDatos.push(usuarioIngresado);
    localStorage.setItem("baseDatos", JSON.stringify(baseDatos)); // Actualizar localStorage si es necesario

    // Actualizar el archivo JSON (baseDatos.json) con la nueva información
    fetch('baseDatos.json', {
        method: 'PUT', // Puedes usar PUT para actualizar el archivo
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(baseDatos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Base de datos actualizada:', data);
    })
    .catch(error => {
        console.error('Error al actualizar la base de datos:', error);
    });
}