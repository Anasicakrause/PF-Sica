document.addEventListener("DOMContentLoaded", function () {
    const filtrarButton = document.getElementById("filtrarBtn");
    const proyectosContainer = document.getElementById("proyectosContainer");
    const proyectos = proyectosContainer.querySelectorAll(".pagina-proyectos-proyecto1");

    filtrarButton.addEventListener("click", () => {
        const categoriaSeleccionada = document.querySelector(".dropdown-categoria .dropdown-item.active");
        const areaSeleccionada = document.querySelector(".dropdown-area .dropdown-item.active");
        // Agrega más variables para los otros filtros...

        proyectos.forEach(proyecto => {
            proyecto.style.display = "none"; // Oculta todos los proyectos
           
            const categoriaProyecto = proyecto.querySelector(".pagina-proyectos-contenedor-descripcion p:first-child").textContent;
            const areaProyecto = proyecto.querySelector(".pagina-proyectos-contenedor-descripcion p:nth-child(2)").textContent;
            // Obten los valores de los otros filtros...
           
            // Verifica si el proyecto cumple con los filtros seleccionados
            if ((categoriaSeleccionada && categoriaProyecto.includes(categoriaSeleccionada.textContent)) ||
                (areaSeleccionada && areaProyecto.includes(areaSeleccionada.textContent))) {
                proyecto.style.display = "block"; // Muestra el proyecto si cumple con los filtros
            }
            // Agrega más condiciones para los otros filtros...
        });
    });
});