class usuarioRegistrado {
    constructor(id,usuario, password) {
        this.id = id,
        this.usuario = usuario,
        this.password = password 
    }
    mostrarData() {
        console.log(`El titulo es ${this.usuario}, el autor es ${this.password} y su precio es ${this.precio}`)
    }
}

const usuario1 = new usuarioRegistrado (1, "Roberto Flores", "hola")
const usuario2 = new usuarioRegistrado (2, "Susana Flores", "gabhaj")

let baseDatos = []

if (localStorage.getItem("baseDatos")) {
    baseDatos = JSON.parse(localStorage.getItem("baseDatos"))
}else{
    baseDatos.push(usuario1,usuario2)
    localStorage.setItem("baseDatos", JSON.stringify(baseDatos))
}