document.addEventListener('DOMContentLoaded', function () {
    const filtrarBtn = document.getElementById('filtrarBtn');
    filtrarBtn.addEventListener('click', aplicarFiltros);
});

function aplicarFiltros() {
    const categoriaSeleccionada = document.getElementById('categoriaBtn').innerText;
    const areaSeleccionada = document.getElementById('areaBtn').innerText;

    // Ejemplo: Mostrar/ocultar elementos basados en la categoría seleccionada
    const elementosProyecto = document.querySelectorAll('.proyecto'); // Ajusta el selector
    elementosProyecto.forEach(elemento => {
        if (categoriaSeleccionada === 'Residencial Unifamiliar' && elemento.classList.contains('residencial-unifamiliar')) {
            elemento.style.display = 'block';
        } else if (categoriaSeleccionada === 'Residencia Colectiva' && elemento.classList.contains('residencia-colectiva')) {
            elemento.style.display = 'block';
        } else {
            elemento.style.display = 'none';
        }
    });

    // Otras lógicas de filtrado similares para el área y otras condiciones
}

