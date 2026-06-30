document.addEventListener("DOMContentLoaded", () => {

    const correoLogin = document.getElementById("correoLogin");
    const errorCorreoLogin = document.getElementById("errorCorreoLogin");

    const correoRecuperacion = document.getElementById("correoRecuperacion");
    const errorCorreoRecuperacion = document.getElementById("errorCorreoRecuperacion");

    const btnLogin = document.querySelector(".btn-login");
    const btnEnviarEnlace = document.getElementById("btnEnviarEnlace");

    const regexUtez = /^[a-zA-Z0-9._%+-]+@utez\.edu\.mx$/;

    function validarCorreo(correo) {
        return regexUtez.test(correo.trim());
    }

    // =========================
    // LOGIN
    // =========================

    if (btnLogin && correoLogin) {

        btnLogin.addEventListener("click", (e) => {

            if (!validarCorreo(correoLogin.value)) {

                e.preventDefault();

                errorCorreoLogin.style.display = "block";

                correoLogin.focus();

                return;
            }

            errorCorreoLogin.style.display = "none";

        });

        correoLogin.addEventListener("input", () => {

            if (validarCorreo(correoLogin.value)) {

                errorCorreoLogin.style.display = "none";

            }

        });

    }

    // =========================
    // RECUPERACIÓN
    // =========================

    if (btnEnviarEnlace && correoRecuperacion) {

        btnEnviarEnlace.addEventListener("click", (e) => {

            if (!validarCorreo(correoRecuperacion.value)) {

                e.preventDefault();

                errorCorreoRecuperacion.style.display = "block";

                correoRecuperacion.focus();

                return;
            }

            errorCorreoRecuperacion.style.display = "none";

        });

        correoRecuperacion.addEventListener("input", () => {

            if (validarCorreo(correoRecuperacion.value)) {

                errorCorreoRecuperacion.style.display = "none";

            }

        });

    }

});