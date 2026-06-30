function abrirModal(){
    document.getElementById("modalCerrarSesion").classList.add("active");
}

function cerrarModal(){
    document.getElementById("modalCerrarSesion").classList.remove("active");
}

// Cerrar al hacer clic fuera del cuadro
window.onclick = function(event){

    const modal = document.getElementById("modalCerrarSesion");

    if(event.target === modal){
        cerrarModal();
    }

}