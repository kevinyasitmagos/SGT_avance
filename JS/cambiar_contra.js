// Mostrar y ocultar contraseña
document.querySelectorAll(".toggle").forEach(icono => {

    icono.addEventListener("click", () => {

        const input = icono.parentElement.querySelector("input");

        if (input.type === "password") {
            input.type = "text";
            icono.classList.remove("fa-eye-slash");
            icono.classList.add("fa-eye");
        } else {
            input.type = "password";
            icono.classList.remove("fa-eye");
            icono.classList.add("fa-eye-slash");
        }

    });

});


// =============================
// Mensaje de error
// =============================

const mensajeError = document.getElementById("mensajeError");

function mostrarError(texto) {

    mensajeError.textContent = texto;
    mensajeError.style.display = "block";

}

function ocultarError() {

    mensajeError.textContent = "";
    mensajeError.style.display = "none";

}


// =============================
// Validar formulario
// =============================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    ocultarError();

    const actual = document.querySelectorAll("input")[0].value;
    const nueva = document.querySelectorAll("input")[1].value;
    const confirmar = document.querySelectorAll("input")[2].value;

    if (actual === "") {

        mostrarError("Ingresa tu contraseña actual.");
        return;

    }

    if (nueva.length < 8) {

        mostrarError("La nueva contraseña debe tener al menos 8 caracteres.");
        return;

    }

    if (!/[A-Z]/.test(nueva)) {

        mostrarError("La contraseña requiere al menos una letra mayúscula.");
        return;

    }

    if (!/[a-z]/.test(nueva)) {

        mostrarError("La contraseña requiere al menos una letra minúscula.");
        return;

    }

    if (!/[0-9]/.test(nueva)) {

        mostrarError("La contraseña requiere al menos un número.");
        return;

    }

    if (nueva !== confirmar) {

        mostrarError("Las nuevas contraseñas no coinciden.");
        return;

    }

    ocultarError();

    window.location.href="../../HTML/Contraseñas/contra_cambiada.html";
});