/*==================================================
        REPORTE DE TUTORÍAS UTEZ
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const btnReporte = document.getElementById("btnReporte");

    if (!btnReporte) return;

    btnReporte.addEventListener("click", () => {

        const datos = obtenerDatosFormulario();

        llenarReporte(datos);

        generarPDF();

    });

});


/*==================================================
        OBTENER DATOS DEL FORMULARIO
==================================================*/

function obtenerDatosFormulario(){

    const tutor =
        document.getElementById("nombreTutor").textContent.trim();

    const grupo =
        document.getElementById("grupo").value;

    const carrera =
        document.getElementById("carrera").value;

    const cuatrimestre =
        document.getElementById("cuatrimestre").value;

    const fecha =
        document.getElementById("fechaSesion").value;

    const temas =
        document.getElementById("temas").value.trim();

    const observaciones =
        document.getElementById("observaciones").value.trim();

    const tabla =
        document.querySelector("#tablaAsistencia tbody");

    const filas =
        tabla.querySelectorAll("tr");

    let alumnos=[];

    let presentes=0;
    let faltas=0;
    let justificados=0;

    filas.forEach((fila,index)=>{

        const nombre=fila.cells[1].textContent.trim();

        const presente=
            fila.querySelector(".presente").checked;

        const falta=
            fila.querySelector(".falta").checked;

        const justificado=
            fila.querySelector(".justificado").checked;

        let estado="Sin registro";

        if(presente){

            estado="Presente";
            presentes++;

        }

        else if(falta){

            estado="Falta";
            faltas++;

        }

        else if(justificado){

            estado="Justificada";
            justificados++;

        }

        alumnos.push({

            numero:index+1,

            nombre,

            estado

        });

    });

    return{

        tutor,

        grupo,

        carrera,

        cuatrimestre,

        fecha,

        temas,

        observaciones,

        presentes,

        faltas,

        justificados,

        alumnos

    };

}

/*==================================================
            LLENAR REPORTE
==================================================*/

function llenarReporte(datos){

    document.getElementById("pdfTutor").textContent =
        datos.tutor;

    document.getElementById("pdfFecha").textContent =
        datos.fecha;

    document.getElementById("pdfGrupo").textContent =
        datos.grupo;

    document.getElementById("pdfCuatrimestre").textContent =
        datos.cuatrimestre;

    document.getElementById("pdfCarrera").textContent =
        datos.carrera;

    document.getElementById("pdfTemas").textContent =
        datos.temas || "Sin información.";

    document.getElementById("pdfObservaciones").textContent =
        datos.observaciones || "Sin observaciones.";

    document.getElementById("pdfPresentes").textContent =
        datos.presentes;

    document.getElementById("pdfFaltas").textContent =
        datos.faltas;

    document.getElementById("pdfJustificados").textContent =
        datos.justificados;

    const ahora = new Date();

    document.getElementById("pdfFechaGeneracion").textContent =
        ahora.toLocaleDateString("es-MX");

    document.getElementById("pdfHora").textContent =
        ahora.toLocaleTimeString("es-MX");

    const tbody =
        document.getElementById("pdfTabla");

    tbody.innerHTML = "";

    datos.alumnos.forEach(alumno=>{

        let clase = "presente";

        if(alumno.estado==="Falta")
            clase="falta";

        if(alumno.estado==="Justificada")
            clase="justificado";

        tbody.innerHTML += `

        <tr>

            <td>

                ${alumno.numero}

            </td>

            <td>

                ${alumno.nombre}

            </td>

            <td>

                <span class="estado ${clase}">

                    ${alumno.estado}

                </span>

            </td>

        </tr>

        `;

    });

    document.getElementById("contenedorReporte").style.display="block";

}

/*==================================================
            GENERAR PDF
==================================================*/

function generarPDF(){

    const reporte =
        document.getElementById("reporte");

    html2pdf().set({

        margin:8,

        filename:
        `Reporte_${document.getElementById("grupo").value}_${new Date().toISOString().split("T")[0]}.pdf`,

        image:{

            type:"jpeg",

            quality:1

        },

        html2canvas:{

            scale:2,

            useCORS:true,

            scrollY:0

        },

        jsPDF:{

            unit:"mm",

            format:"a4",

            orientation:"portrait"

        }

    })
    .from(reporte)
    .save()
    .then(()=>{

        document.getElementById("contenedorReporte").style.display="none";

        alert("✅ Reporte generado correctamente.");

    });

}


/*==================================================
      CHECKBOXES EXCLUSIVOS
==================================================*/

document.querySelectorAll("#tablaAsistencia tbody tr").forEach(fila=>{

    const presente =
        fila.querySelector(".presente");

    const falta =
        fila.querySelector(".falta");

    const justificado =
        fila.querySelector(".justificado");

    presente.addEventListener("change",()=>{

        if(presente.checked){

            falta.checked=false;

            justificado.checked=false;

        }

    });

    falta.addEventListener("change",()=>{

        if(falta.checked){

            presente.checked=false;

            justificado.checked=false;

        }

    });

    justificado.addEventListener("change",()=>{

        if(justificado.checked){

            presente.checked=false;

            falta.checked=false;

        }

    });

});


/*==================================================
        FECHA AUTOMÁTICA
==================================================*/

const fecha =
document.getElementById("fechaSesion");

if(fecha && fecha.value===""){

    fecha.value =
    new Date().toISOString().split("T")[0];

}


/*==================================================
      ANIMACIÓN DEL BOTÓN
==================================================*/

const boton =
document.getElementById("btnReporte");

if(boton){

    boton.addEventListener("click",()=>{

        boton.disabled=true;

        const texto=boton.innerHTML;

        boton.innerHTML="Generando PDF...";

        setTimeout(()=>{

            boton.disabled=false;

            boton.innerHTML=texto;

        },2000);

    });

}