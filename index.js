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
eurocopa.printRonda(eurocopa.partidosOctavos) 
       

console.log ('\n')
console.log ('===== CUARTOS DE FINAL =====')
console.log ('\n')


eurocopa.crearCuartos();
eurocopa.jugarRonda(eurocopa.partidosCuartos);
eurocopa.printRonda(eurocopa.partidosCuartos) 

console.log ('\n')
console.log ('===== SEMIFINALES =====')
console.log ('\n')

eurocopa.crearSemis();
eurocopa.jugarRonda(eurocopa.partidosSemis);
eurocopa.printRonda(eurocopa.partidosSemis) 

console.log ('\n')
console.log ('===== TERCER PUESTO =====')
console.log ('\n')

eurocopa.crearTercerPuesto();
eurocopa.jugarRonda(eurocopa.partidoTercero);
eurocopa.printTercero()


console.log ('\n')
console.log ('===== FINAL =====')
console.log ('\n')

eurocopa.crearFinal();
eurocopa.jugarRonda(eurocopa.partidoFinal);
eurocopa.printFinal()

console.log ('\n')
console.log(`********************** ¡¡¡CAMPEÓN DE LA EUROCOPA ${eurocopa.partidoFinal[0].ganador.nombre}!!! ********************`)
