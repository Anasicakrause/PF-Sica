class mensajeRegistrado {
    constructor(nombre, apellido, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mensaje = mensaje;
    }
}

let preguntasFrecuentes = [];

if (localStorage.getItem("preguntasFrecuentes")) {
    preguntasFrecuentes = JSON.parse(localStorage.getItem("preguntasFrecuentes"));
} else {
    localStorage.setItem("preguntasFrecuentes", JSON.stringify(preguntasFrecuentes));
}; 
