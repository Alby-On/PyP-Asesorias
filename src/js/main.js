// --- FUNCIÓN DE SCROLL SUAVE CON DELEGACIÓN DE EVENTOS ---
document.addEventListener('click', function (e) {
    // Verificamos si lo que se clickeó es un enlace que empieza con #
    const anchor = e.target.closest('a[href^="#"]');
    
    if (anchor) {
        const targetId = anchor.getAttribute('href');
        
        // Si el href es solo "#", no hacemos nada
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault(); // Evitamos el salto brusco original

            // Calculamos la altura de la Navbar para no tapar el título de la sección
            // Ajusta '.navbar' si tu clase tiene otro nombre
            const navbar = document.querySelector('.navbar');
            const offset = navbar ? navbar.offsetHeight : 0;
            
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
});
