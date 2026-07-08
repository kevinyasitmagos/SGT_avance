/*=========================
        MODAL AVISOS TUTOR
=========================*/

const modalAvisosTutor = document.getElementById("modalAvisosTutor");

const abrirAvisosTutor1 = document.getElementById("abrirAvisosTutor1");
const abrirAvisosTutor2 = document.getElementById("abrirAvisosTutor2");

const cerrarAvisosTutor = document.getElementById("cerrarAvisosTutor");
const btnCerrarAvisosTutor = document.getElementById("btnCerrarAvisosTutor");

function abrirModalAvisosTutor(e){
    e.preventDefault();
    modalAvisosTutor.classList.add("show");
    document.body.style.overflow = "hidden";
}

function cerrarModalAvisosTutor(){
    modalAvisosTutor.classList.remove("show");
    document.body.style.overflow = "";
}

abrirAvisosTutor1.addEventListener("click", abrirModalAvisosTutor);
abrirAvisosTutor2.addEventListener("click", abrirModalAvisosTutor);

cerrarAvisosTutor.addEventListener("click", cerrarModalAvisosTutor);
btnCerrarAvisosTutor.addEventListener("click", cerrarModalAvisosTutor);

modalAvisosTutor.addEventListener("click", function(e){
    if(e.target === modalAvisosTutor){
        cerrarModalAvisosTutor();
    }
});

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        if(modalAvisosTutor.classList.contains("show")){
            cerrarModalAvisosTutor();
        }
    }
});

/*=========================
   MODAL PRÓXIMAS TUTOR TUTOR
=========================*/

const modalProximasTutor = document.getElementById("modalProximasTutor");

const abrirProximasTutor1 = document.getElementById("abrirProximasTutor1");
const abrirProximasTutor2 = document.getElementById("abrirProximasTutor2");

const cerrarProximasTutor = document.getElementById("cerrarProximasTutor");
const btnCerrarProximasTutor = document.getElementById("btnCerrarProximasTutor");

function abrirModalProximasTutor(e){
    e.preventDefault();
    modalProximasTutor.classList.add("show");
    document.body.style.overflow = "hidden";
}

function cerrarModalProximasTutor(){
    modalProximasTutor.classList.remove("show");
    document.body.style.overflow = "";
}

if(abrirProximasTutor1){
    abrirProximasTutor1.addEventListener("click", abrirModalProximasTutor);
}

if(abrirProximasTutor2){
    abrirProximasTutor2.addEventListener("click", abrirModalProximasTutor);
}

cerrarProximasTutor.addEventListener("click", cerrarModalProximasTutor);
btnCerrarProximasTutor.addEventListener("click", cerrarModalProximasTutor);

modalProximasTutor.addEventListener("click", function(e){
    if(e.target === modalProximasTutor){
        cerrarModalProximasTutor();
    }
});

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        if(modalProximasTutor.classList.contains("show")){
            cerrarModalProximasTutor();
        }

    }

});