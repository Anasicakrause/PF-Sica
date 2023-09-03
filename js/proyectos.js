document.addEventListener('DOMContentLoaded', function () {
    const filtrarBtn = document.getElementById('filtrarBtn');
    filtrarBtn.addEventListener('click', aplicarFiltros);
});

function aplicarFiltros() {
    const categoriaSeleccionada = document.getElementById('categoriaBtn').innerText;
    const areaSeleccionada = document.getElementById('areaBtn').innerText;
    const matSeleccionada = document.getElementById('matBtn').innerText;
    const origenSeleccionada = document.getElementById('origenBtn').innerText;
    const visualSeleccionada = document.getElementById('visualBtn').innerText;


    // Ejemplo: Mostrar/ocultar elementos basados en la categoría seleccionada
    const elementosProyecto = document.querySelectorAll('pagina-proyectos-contenedor-descripcion'); // Ajusta el selector
    
    elementosProyecto.forEach(elemento => {

        if (categoriaSeleccionada === 'Residencial Unifamiliar' && elemento.classList.contains('residencial-unifamiliar')) {
            elemento.style.display = 'block';
        } else if (categoriaSeleccionada === 'Residencia Colectiva' && elemento.classList.contains('residencia-colectiva')) {
            elemento.style.display = 'block';
        }else if (categoriaSeleccionada === 'Comercial' && elemento.classList.contains('comercial')) {
            elemento.style.display = 'block'; 
        }else if (categoriaSeleccionada === 'Espacios Públicos' && elemento.classList.contains('espacios-publicos')) {
                elemento.style.display = 'block';
        }else {
            elemento.style.display = 'none';
        };
    
        if (areaSeleccionada === '50 m2' && elemento.classList.contains('50 m2')) {
            elemento.style.display = 'block';
        } else if (areaSeleccionada === '100 m2' && elemento.classList.contains('100 m2')) {
            elemento.style.display = 'block';
        }else if (areaSeleccionada === '150 m2' && elemento.classList.contains('150 m2')) {
            elemento.style.display = 'block'; 
        }else if (areaSeleccionada === '+200 m2' && elemento.classList.contains('+200 m2')) {
                elemento.style.display = 'block';
        }else {
            elemento.style.display = 'none';
        };

        if (matSeleccionada === 'Mampuesto cerámico' && elemento.classList.contains('Mampuesto cerámico')) {
            elemento.style.display = 'block';
        } else if (matSeleccionada === 'Steel Framing' && elemento.classList.contains('Steel Framing')) {
            elemento.style.display = 'block';
        }else if (matSeleccionada === 'Madera' && elemento.classList.contains('Madera')) {
            elemento.style.display = 'block'; 
        }else if (matSeleccionada === 'Hormigón' && elemento.classList.contains('Hormigón')) {
                elemento.style.display = 'block';
        }else if (matSeleccionada === 'Bloques HCCA' && elemento.classList.contains('Bloques HCCA')) {
            elemento.style.display = 'block';
        }else {
            elemento.style.display = 'none';
        };

        if (origenSeleccionada === 'Uruguay' && elemento.classList.contains('Uruguay')) {
            elemento.style.display = 'block';
        } else if (origenSeleccionada === 'Argentina' && elemento.classList.contains('Argentina')) {
            elemento.style.display = 'block';
        }else if (origenSeleccionada === 'Brasil' && elemento.classList.contains('Brasil')) {
            elemento.style.display = 'block'; 
        }else if (origenSeleccionada === 'México' && elemento.classList.contains('México')) {
                elemento.style.display = 'block';
        }else {
            elemento.style.display = 'none';
        };

        if (visualSeleccionada === '5' && elemento.classList.contains('5')) {
            elemento.style.display = 'block';
        } else if (visualSeleccionada === '10' && elemento.classList.contains('10')) {
            elemento.style.display = 'block';
        }else if (visualSeleccionada === '15' && elemento.classList.contains('15')) {
            elemento.style.display = 'block'; 
        }else if (visualSeleccionada === '+20' && elemento.classList.contains('+20')) {
                elemento.style.display = 'block';
        }else {
            elemento.style.display = 'none';
        };

    })};

    // Otras lógicas de filtrado similares para el área y otras condiciones

