import playoff from "./playoff.js";

const equipos = ['Bélgica', 'Portugal','Italia', 'Austria', 'Francia', 'Suiza', 'Croacia', 'España', 'Suecia', 'Ucrania', 'Inglaterra', 'Alemania', 'Paises Bajos', 'República Checa', 'Gales', 'Dinamarca'];

const eurocopa = new playoff ('Eurocopa', equipos)

console.log ('==========================================================');
console.log ('================== COMIENZA LA EUROCOPA ==================')
console.log ('==========================================================')
console.log ('\n')
console.log ('* EQUIPOS PARTICIPANTES: *')
console.log ('\n')
for (let i in eurocopa.equipos) {
    const equipo = eurocopa.equipos [i];
    console.log(equipo.nombre)
}
console.log ('\n')
console.log ('===== OCTAVOS DE FINAL =====')
console.log ('\n')

eurocopa.crearOctavos();
eurocopa.jugarRonda(eurocopa.partidosOctavos);

for (let i in eurocopa.partidosOctavos) {
    const partido = eurocopa.partidosOctavos[i];
    console.log(`(${partido.grupo})`, '  ', partido.local.nombre, partido.golesLocal, 'vs', partido.visitante.nombre, partido.golesVisitante, 
        '==> GANADOR: ', partido.ganador.nombre);    
}
console.log ('\n')
console.log ('===== CUARTOS DE FINAL =====')
console.log ('\n')

eurocopa.crearCuartos();
eurocopa.jugarRonda(eurocopa.partidosCuartos);

for (let i in eurocopa.partidosCuartos) {
    const partido = eurocopa.partidosCuartos[i];
    console.log(`(${partido.grupo})`, '  ', partido.local.nombre, partido.golesLocal, '-', partido.visitante.nombre, partido.golesVisitante, 
        '==> GANADOR: ', partido.ganador.nombre);
}
console.log ('\n')
console.log ('===== SEMIFINALES =====')
console.log ('\n')

eurocopa.crearSemis();
eurocopa.jugarRonda(eurocopa.partidosSemis);

for (let i in eurocopa.partidosSemis) {
    const partido = eurocopa.partidosSemis[i];
    console.log(`(${partido.grupo})`, '  ', partido.local.nombre, partido.golesLocal, '-', partido.visitante.nombre, partido.golesVisitante, 
        '==> GANADOR: ', partido.ganador.nombre);
}

console.log ('\n')
console.log ('===== TERCER PUESTO =====')
console.log ('\n')

eurocopa.crearTercerPuesto();
eurocopa.jugarRonda(eurocopa.partidoTercero);

for (let i in eurocopa.partidoTercero) {
    const partido = eurocopa.partidoTercero[i];
    console.log(partido.local.nombre, partido.golesLocal, '-', partido.visitante.nombre, partido.golesVisitante, 
        '==> TERCER PUESTO: ', partido.ganador.nombre)
}

console.log ('\n')
console.log ('===== FINAL =====')
console.log ('\n')

eurocopa.crearFinal();
eurocopa.jugarRonda(eurocopa.partidoFinal);

for (let i in eurocopa.partidoFinal) {
    const partido = eurocopa.partidoFinal[i];
    console.log(partido.local.nombre, partido.golesLocal, '-', partido.visitante.nombre, partido.golesVisitante, 
        '==> GANADOR DE LA EUROCOPA: ', partido.ganador.nombre)
}