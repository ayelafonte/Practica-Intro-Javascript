export default class playoff {

    constructor(nombre, equipos = [])
    {
        this.nombre = nombre;
        this.setupEquipos(equipos);
        this.etapas = []

    }

    setupEquipos(nombreEquipos) 
    {
        this.equipos= []; // Creo un array vacio
        for (const nombreEquipo of nombreEquipos) { // Recorro mi array de nombres de equipos
            const equipo = this.customizeTeam(nombreEquipo); // Crea un objeto equipo asignandole su nombre y cant de goles
            this.equipos.push(equipo); // Agrega al array de equipos (nuevo) cada equipo con sus propiedades
        }
    }

    customizeTeam (nombreEquipo) // Asignar a cada equipos propiedades
    {
        return {
            nombre: nombreEquipo,
            goals: 0
        }
    }

    crearOctavos() {
        nombre = 'Octavos',
        equiposLocales = equipo.slice(0,8),
        equiposVisitantes = equipo.slice(8, 16)
        crearPartidos


    }
}