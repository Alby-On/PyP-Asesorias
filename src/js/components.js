/**
 * Función para cargar componentes HTML externos
 * @param {string} id - El ID del div donde se cargará el contenido
 * @param {string} path - La ruta del archivo .html del componente
 */
function cargarComponente(id, path) {
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar " + path);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Llamamos a la función para cada sección
document.addEventListener("DOMContentLoaded", () => {
    cargarComponente("topbar-placeholder", "src/components/topbar.html");
    cargarComponente("navbar-placeholder", "src/components/navbar.html");
    cargarComponente("header-placeholder", "src/components/header.html");
    cargarComponente("servicios-placeholder", "src/components/servicios.html");
    cargarComponente("contacto-placeholder", "src/components/contacto.html");
    cargarComponente("footer-placeholder", "src/components/footer.html");
    cargarComponente("wsp-placeholder", "src/components/wsp.html");
    
});
