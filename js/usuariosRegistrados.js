// AUN EN PROCESO --!!!!

class usuarioRegistrado {
    constructor(id, usuario, password) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
    }
}

let baseDatos = [];

if (localStorage.getItem("baseDatos")) {
    baseDatos = JSON.parse(localStorage.getItem("baseDatos"));
} else {
    localStorage.setItem("baseDatos", JSON.stringify(baseDatos));
}; 
