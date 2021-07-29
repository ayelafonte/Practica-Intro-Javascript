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
            //goals: 0
        }
    }

    crearTabla () { //Se arma la tabla vacia
        for (let i = 0; i < 8; i++) {
            const partido = {
                grupo: `Q${i + 1}`,
                local: {},
                visitante: {},
                golesLocal: 0,
                golesVisitante: 0
            }
        }
    }

    crearPartidos () {
        for (let i = 0; i < 8; i++) {
            this.partido[i].local = equiposLocales[i]
            this.partido[i].visitante = equiposVisitantes [i]    
        }
    }


    crearOctavos() {
        this.nombre = 'Octavos',
        this.equiposLocales = this.equipos.slice(0,8),
        this.equiposVisitantes = this.equipos.slice(8, 16),
        this.crearTabla(),
        this.crearPartidos()      
    }
}