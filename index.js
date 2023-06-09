let guardarBtn = document.getElementById('btn');
guardarBtn.addEventListener('click', guardar);
let estudiantes = [];

function guardar(e) {
    e.preventDefault();
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const matematica = parseInt(document.getElementById("matematica").value);
    const fisica = parseInt(document.getElementById("fisica").value);
    const programacion = parseInt(document.getElementById("programacion").value);

    const estudiante = {
        cedula: cedula,
        nombre: nombre,
        matematica: matematica,
        fisica: fisica,
        programacion: programacion,
    };

    estudiantes.push(estudiante);
    guardarDatos();
}

function reset(){
    document.getElementsById("form").reset();
    }

function guardarDatos() {
    let promedioMatematica = 0;
    let sumatoriaMatematica = 0;
    let promedioFisica = 0;
    let sumatoriaFisica = 0;
    let promedioProgramacion = 0;
    let sumatoriaProgramacion = 0;
    let aprobadosMatematica = 0;
    let reprobadosMatematica = 0;
    let aprobadosFisica = 0;
    let reprobadosFisica = 0;
    let aprobadosProgramacion = 0;
    let reprobadosProgramacion = 0;
    let AproboTodas = 0;
    let AproboDos = 0;
    let AproboUna = 0;
    let MaxMate = 0;
    let MaxFis = 0;
    let MaxProg = 0;
    let estudianteConMaximaMatematicas = null;
    let estudianteConMaximaFisica = null;
    let estudianteConMaximaProgramacion = null;

    estudiantes.forEach((estudiante) => {
        sumatoriaMatematica += estudiante.matematica;
        sumatoriaFisica += estudiante.fisica;
        sumatoriaProgramacion += estudiante.programacion;

        if (estudiante.matematica > MaxMate) {
            MaxMate = estudiante.matematica;
            estudianteConMaximaMatematicas = estudiante;
        }

        if (estudiante.fisica > MaxFis) {
            MaxFis = estudiante.fisica;
            estudianteConMaximaFisica = estudiante;
        }

        if (estudiante.programacion > MaxProg) {
            MaxProg = estudiante.programacion;
            estudianteConMaximaProgramacion = estudiante;
        }

        if(estudiante.matematica > 10 && estudiante.fisica > 10 && estudiante.programacion > 10){
            AproboTodas++;
        }

        if(estudiante.matematica > 10 && estudiante.fisica > 10 || estudiante.matematica > 10 && estudiante.programacion > 10 || estudiante.fisica > 10 && estudiante.programacion > 10){
            AproboDos++;
        }

        if(estudiante.matematica > 10 || estudiante.fisica > 10 || estudiante.programacion > 10){
            AproboUna++;
        }

        if(estudiante.matematica < 10){
            reprobadosMatematica++;
        }

        if(estudiante.matematica >= 10){
            aprobadosMatematica++;
        }

        if(estudiante.fisica < 10){
            reprobadosFisica++;
        }

        if(estudiante.fisica >= 10){
            aprobadosFisica++;
        }

        if(estudiante.programacion < 10){
            reprobadosProgramacion++;
        }

        if(estudiante.programacion >= 10){   
            aprobadosProgramacion++;
        }
        
    });

    promedioMatematica = sumatoriaMatematica / estudiantes.length;
    promedioFisica = sumatoriaFisica / estudiantes.length;
    promedioProgramacion = sumatoriaProgramacion / estudiantes.length;

    const promedioMatematicar = `Promedio de notas de matemáticas: ${promedioMatematica.toFixed(2)}`;
    const promedioFisicar = `Promedio de notas de física: ${promedioFisica.toFixed(2)}`;
    const promedioProgramacionr = `Promedio de notas de programación: ${promedioProgramacion.toFixed(2)}`;
    const aprobadoMate = `Número de estudiantes aprobados en matematica: ${aprobadosMatematica}`;
    const reprobadoMate = `Número de estudiantes reprobados en matematica: ${reprobadosMatematica}`;
    const aprobadoFis = `Número de estudiantes aprobados en física: ${aprobadosFisica}`;
    const reprobadoFis = `Número de estudiantes reprobados en física: ${reprobadosFisica}`;
    const aprobadoProg = `Número de estudiantes aprobados en programación: ${aprobadosProgramacion}`;
    const reprobadoProg = `Número de estudiantes reprobados en programación: ${reprobadosProgramacion}`;
    const aprobadosTodas = `Número de estudiantes que aprobaron todas las materias: ${AproboTodas}`;
    const aprobadosDos = `Número de estudiantes que aprobaron dos materias: ${AproboDos}`;
    const aprobadosUna = `Número de estudiantes que aprobaron una materia: ${AproboUna}`;
    const estudianteConMaximaMatematicasr = `Estudiante con la mejor nota en matemáticas: ${estudianteConMaximaMatematicas.nombre} con una nota de ${estudianteConMaximaMatematicas.matematica}`;
    const estudianteConMaximaFisicar = `Estudiante con la mejor nota en física: ${estudianteConMaximaFisica.nombre} con una nota de ${estudianteConMaximaFisica.fisica}`;
    const estudianteConMaximaProgramacionr = `Estudiante con la mejor nota en programación: ${estudianteConMaximaProgramacion.nombre} con una nota de ${estudianteConMaximaProgramacion.programacion}`;
    const respuestaMate = document.getElementById("respuestaMate");
    const respuestaFis = document.getElementById("respuestaFis");
    const respuestaProg = document.getElementById("respuestaProg");
    const respuestaAprobadoMate = document.getElementById("aprobadosMate");
    const respuestaReprobadoMate = document.getElementById("reprobadosMate");
    const respuestaAprobadoFis = document.getElementById("aprobadosFisica");
    const respuestaReprobadoFis = document.getElementById("reprobadosFisica");
    const respuestaAprobadoProg = document.getElementById("aprobadosProg");
    const respuestaReprobadoProg = document.getElementById("reprobadosProg");
    const respuestaAprobadosTodas = document.getElementById("aproboTodas");
    const respuestaAprobadosDos = document.getElementById("aproboDos");
    const respuestaAprobadosUna = document.getElementById("aproboUna");
    const respuestaMaximaMatematicas = document.getElementById("maxMat");
    const respuestaMaximaFisica = document.getElementById("maxFis");
    const respuestaMaximaProgramacion = document.getElementById("maxProg");
    
    respuestaMate.textContent = `${promedioMatematicar}`;
    respuestaFis.textContent = `${promedioFisicar}`;
    respuestaProg.textContent = `${promedioProgramacionr}`;
    respuestaAprobadoMate.textContent = `${aprobadoMate}`;
    respuestaReprobadoMate.textContent = `${reprobadoMate}`;
    respuestaAprobadoFis.textContent = `${aprobadoFis}`;
    respuestaReprobadoFis.textContent = `${reprobadoFis}`;
    respuestaAprobadoProg.textContent = `${aprobadoProg}`;
    respuestaReprobadoProg.textContent = `${reprobadoProg}`;
    respuestaAprobadosTodas.textContent = `${aprobadosTodas}`;
    respuestaAprobadosDos.textContent = `${aprobadosDos}`;
    respuestaAprobadosUna.textContent = `${aprobadosUna}`;
    respuestaMaximaMatematicas.textContent = `${estudianteConMaximaMatematicasr}`;
    respuestaMaximaFisica.textContent = `${estudianteConMaximaFisicar}`;
    respuestaMaximaProgramacion.textContent = `${estudianteConMaximaProgramacionr}`;
}
