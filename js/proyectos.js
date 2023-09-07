//activo el boton de filtrado

document.addEventListener('DOMContentLoaded', function () {
    const filtrarBtn = document.getElementById("filtrarBtn");
    filtrarBtn.addEventListener("click", filtrar);
});
// Traigo los proyectos listados
const proyectos = document.querySelectorAll(".pagina-proyectos-proyecto1");


function filtrar (){

// Genero variables con las opciones seleccionadas en los dropdown menus
let categoriaSeleccionada = document.getElementById("dropdown-menu-categoria").value;
let areaSeleccionada = document.getElementById("dropdown-menu-area").value;
let matSeleccionada = document.getElementById("dropdown-menu-mat").value;
let origenSeleccionado = document.getElementById("dropdown-menu-origen").value;
let visualSeleccionadas = document.getElementById("dropdown-menu-visual").value;

    proyectos.forEach(function (proyecto) {
        let categoria = proyecto.getAttribute("data-categoria");
        let area = proyecto.getAttribute("data-area");
        let materialidad = proyecto.getAttribute("data-mat");
        let origen = proyecto.getAttribute("data-origen");
        let visual = proyecto.getAttribute("data-visual");

        if(
            (categoriaSeleccionada === "*" || categoriaSeleccionada === categoria) ||
            (areaSeleccionada === "*" || areaSeleccionada === area) ||
            (matSeleccionada === "*" || matSeleccionada === materialidad) ||
            (origenSeleccionado === "*" || origenSeleccionado === origen) ||
            (visualSeleccionadas === "*" || parseInt(visualSeleccionadas) >= parseInt(visual))
        ){
            proyecto.style.display = "block";
            //console.log("Hola");
        } else {
            proyecto.style.display = "none";
            //console.log("No hay resultado");
        };
    });
};