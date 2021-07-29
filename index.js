import playoff from "./playoff.js";

const equipos = ['Bélgica', 'Portugal','Italia', 'Austria', 'Francia', 'Suiza', 'Croacia', 'España', 'Suecia', 'Ucrania', 'Inglaterra', 'Alemania', 'Paises Bajos', 'República Checa', 'Gales', 'Dinamarca'];

const eurocopa = new playoff ('Eurocopa', equipos)

console.log ('==========================================================');
console.log ('================== COMIENZA LA EUROCOPA ==================')
console.log ('==========================================================')
console.log ('\n')
console.log ('EQUIPOS PARTICIPANTES:')
console.log ('\n')
for (let i in eurocopa.equipos) {
    const equipo = eurocopa.equipos [i];
    console.log(equipo.nombre)
}
console.log ('\n')

eurocopa.crearOctavos();

console.log ('===== OCTAVOS DE FINAL =====')
console.log ('\n')
for (let i in eurocopa.partidos) {
    const partido = eurocopa.partidos[i];
    console.log(`JORNADA ${partido.grupo}`);
    console.log(partido.local.nombre, 'vs',partido.visitante.nombre)
}

