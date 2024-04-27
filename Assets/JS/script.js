// Script para ajustar zIndex del carrusel al hacer clic en el botón del menú
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    if (window.innerWidth < 768) {
        document.querySelector('.carousel-section').style.zIndex = 999;
    } else {
        document.querySelector('.carousel-section').style.zIndex = 'auto';
    }
});

// Script para mostrar una alerta cuando se envía el formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("¡El formulario se ha enviado con éxito!");
    });

    // Inicialización de los tooltips de Bootstrap 5
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

