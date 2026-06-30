const abrir = document.getElementById("abrirRecuperacion");
const cerrar = document.getElementById("cerrarRecuperacion");
const overlay = document.getElementById("overlayRecuperacion");

const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");

const btnEnviar = document.getElementById("btnEnviarEnlace");
const btnEntendido = document.getElementById("btnEntendido");

// Regresar siempre al primer paso
function reiniciarModal(){

    paso1.classList.remove("oculto");
    paso1.classList.add("visible");

    paso2.classList.remove("visible","fade-in");
    paso2.classList.add("oculto");

}

// Abrir modal
abrir.addEventListener("click", function(e){

    e.preventDefault();

    reiniciarModal();

    overlay.classList.add("active");

});

// Enviar enlace
btnEnviar.addEventListener("click", function(){

    paso1.classList.remove("visible");
    paso1.classList.add("oculto");

    paso2.classList.remove("oculto");
    paso2.classList.add("visible","fade-in");

});

// Botón entendido
btnEntendido.addEventListener("click", function(){

    overlay.classList.remove("active");

    setTimeout(reiniciarModal,300);

});

// Cerrar con la X
cerrar.addEventListener("click", function(){

    overlay.classList.remove("active");

    setTimeout(reiniciarModal,300);

});

// Cerrar al dar clic fuera del modal
overlay.addEventListener("click", function(e){

    if(e.target === overlay){

        overlay.classList.remove("active");

        setTimeout(reiniciarModal,300);

    }

});

// Cerrar con la tecla ESC
document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        overlay.classList.remove("active");

        setTimeout(reiniciarModal,300);

    }

});