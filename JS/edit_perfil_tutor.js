document.addEventListener("DOMContentLoaded", function () {

    const btnGuardar = document.getElementById("guardarCambios");
    const toast = document.getElementById("toast");

    const btnFoto = document.querySelector(".change-photo");
    const btnCamara = document.querySelector(".camera");
    const imagenPerfil = document.querySelector(".photo img");

    const telefono = document.querySelector('input[type="tel"]');

    /* =========================
        INPUT FILE (FOTO)
    ========================= */

    const selectorImagen = document.createElement("input");
    selectorImagen.type = "file";
    selectorImagen.accept = "image/*";
    selectorImagen.style.display = "none";

    document.body.appendChild(selectorImagen);

    /* =========================
        ERROR TELÉFONO
    ========================= */

    const errorTel = document.createElement("small");
    errorTel.textContent = "Número inválido";
    errorTel.style.color = "red";
    errorTel.style.fontSize = "13px";
    errorTel.style.marginTop = "6px";
    errorTel.style.display = "none";

    if (telefono && telefono.parentNode) {
        telefono.parentNode.appendChild(errorTel);
    }

    /* =========================
          CAMBIAR FOTO
    ========================= */

    if (btnFoto) {
        btnFoto.addEventListener("click", () => selectorImagen.click());
    }

    if (btnCamara) {
        btnCamara.addEventListener("click", () => selectorImagen.click());
    }

    selectorImagen.addEventListener("change", function () {

        if (this.files && this.files.length > 0) {

            const lector = new FileReader();

            lector.onload = function (e) {
                if (imagenPerfil) {
                    imagenPerfil.src = e.target.result;
                }
            };

            lector.readAsDataURL(this.files[0]);
        }
    });

    /* =========================
        FORMATO TELÉFONO
    ========================= */

    if (telefono) {

        telefono.addEventListener("input", function () {

            let value = this.value.replace(/\D/g, ""); // solo números
            value = value.substring(0, 10); // máximo 10

            let formatted = "";

            if (value.length > 0) formatted = value.substring(0, 3);
            if (value.length >= 4) formatted += "-" + value.substring(3, 6);
            if (value.length >= 7) formatted += "-" + value.substring(6, 8);
            if (value.length >= 9) formatted += "-" + value.substring(8, 10);

            this.value = formatted;

            validarTelefono(value);

        });
    }

    /* =========================
        VALIDACIÓN TELÉFONO
    ========================= */

    function validarTelefono(value) {

        if (!errorTel) return true;

        if (value.length !== 10) {
            errorTel.style.display = "block";
            return false;
        }

        errorTel.style.display = "none";
        return true;
    }

    /* =========================
        GUARDAR CAMBIOS
    ========================= */

    if (btnGuardar) {
        btnGuardar.addEventListener("click", function () {

            const value = telefono
                ? telefono.value.replace(/\D/g, "")
                : "";

            if (!validarTelefono(value)) {

                if (errorTel) errorTel.style.display = "block";
                if (telefono) telefono.focus();

                return;
            }

            if (toast) {
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2500);
            }

        });
    }

});