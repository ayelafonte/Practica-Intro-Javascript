import playoff from "./playoff.js";

const equipos = ['Bélgica', 'Portugal','Italia', 'Austria', 'Francia', 'Suiza', 'Croacia', 'España', 'Suecia', 'Ucrania', 'Inglaterra', 'Alemania', 'Paises Bajos', 'República Checa', 'Gales', 'Dinamarca'];

const eurocopa = new playoff ('Eurocopa', equipos)

console.log ('==========================================================');
console.log ('================== COMIENZA LA EUROCOPA ==================')
console.log ('==========================================================')
console.log ('\n')
console.log ('Equipos participantes:')
for (let i in eurocopa.equipos) {
    const equipo = eurocopa.equipos [i];
    console.log(equipo.nombre)
}

console.log ('===== OCTAVOS DE FINAL =====')

eurocopa.crearOctavos()

eurocopa.partido.forEach(i => {
    console.log ('Nombre del partido ${nombre}')
    
});    
