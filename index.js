import playoff from "./playoff.js";

const equipos = ['Bélgica', 'Portugal','Italia', 'Austria', 'Francia', 'Suiza', 'Croacia', 'España', 'Suecia', 'Ucrania', 'Inglaterra', 'Alemania', 'Paises Bajos', 'República Checa', 'Gales', 'Dinamarca'];

const eurocopa = new playoff ('Eurocopa', equipos)

console.log ('==========================================================');
console.log ('================== COMIENZA LA EUROCOPA ==================')
console.log ('==========================================================')
console.log ('\n')
console.log ('===== EQUIPOS PARTICIPANTES:=====')
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
    console.log(`JORNADA ${partido.grupo}:`, 
        partido.local.nombre, partido.golesLocal, 'vs', partido.visitante.nombre, partido.golesVisitante, 
        '==> GANADOR: ', partido.ganador.nombre);
    
}
console.log ('\n')
console.log ('===== CUARTOS DE FINAL =====')
console.log ('\n')

eurocopa.crearCuartos();
eurocopa.jugarRonda(eurocopa.partidosCuartos);

for (let i in eurocopa.partidosCuartos) {
    const partido = eurocopa.partidosCuartos[i];
    console.log(`JORNADA ${partido.grupo}:`, 
        partido.local.nombre, partido.golesLocal, 'vs', partido.visitante.nombre, partido.golesVisitante, 
        '==> GANADOR: ', partido.ganador.nombre);
}



