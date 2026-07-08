/*=========================
        MODAL AVISOS
=========================*/

const modalAvisos = document.getElementById("modalAvisos");

const abrirAvisos1 = document.getElementById("abrirAvisos1");
const abrirAvisos2 = document.getElementById("abrirAvisos2");

const cerrarModal = document.getElementById("cerrarModal");
const btnCerrarModal = document.getElementById("btnCerrarModal");

function abrirModalAvisos(e){
    e.preventDefault();
    modalAvisos.classList.add("show");
    document.body.style.overflow = "hidden";
}

function cerrarModalAvisos(){
    modalAvisos.classList.remove("show");
    document.body.style.overflow = "";
}

abrirAvisos1.addEventListener("click", abrirModalAvisos);
abrirAvisos2.addEventListener("click", abrirModalAvisos);

cerrarModal.addEventListener("click", cerrarModalAvisos);
btnCerrarModal.addEventListener("click", cerrarModalAvisos);

modalAvisos.addEventListener("click", function(e){
    if(e.target === modalAvisos){
        cerrarModalAvisos();
    }
});


/*=========================
   MODAL PRÓXIMAS TUTORÍAS
=========================*/

const modalProximas = document.getElementById("modalProximas");

const abrirProximas1 = document.getElementById("abrirProximas1");
const abrirProximas2 = document.getElementById("abrirProximas2");

const cerrarProximas = document.getElementById("cerrarProximas");
const btnCerrarProximas = document.getElementById("btnCerrarProximas");

function abrirModalProximas(e){
    e.preventDefault();
    modalProximas.classList.add("show");
    document.body.style.overflow = "hidden";
}

function cerrarModalProximas(){
    modalProximas.classList.remove("show");
    document.body.style.overflow = "";
}

abrirProximas1.addEventListener("click", abrirModalProximas);
abrirProximas2.addEventListener("click", abrirModalProximas);

cerrarProximas.addEventListener("click", cerrarModalProximas);
btnCerrarProximas.addEventListener("click", cerrarModalProximas);

modalProximas.addEventListener("click", function(e){
    if(e.target === modalProximas){
        cerrarModalProximas();
    }
});


/*=========================
      TECLA ESC
=========================*/

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        if(modalAvisos.classList.contains("show")){
            cerrarModalAvisos();
        }

        if(modalProximas.classList.contains("show")){
            cerrarModalProximas();
        }

    }

});

