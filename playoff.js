export default class playoff {

    constructor(nombre, equipos = [])
    {
        this.nombre = nombre;
        this.setupEquipos(equipos);
        this.etapas = [];
        this.partidosOctavos = [];
        this.partidosCuartos = [];
        this.partidosSemis = [];
        this.partidoFinal = []

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

    crearTabla (cantidadPartidos) { //Se arma la tabla vacia
        let letra
        let ronda

        if (cantidadPartidos == 8) {
            letra = `Q`;
            ronda = this.partidosOctavos
        } else if (cantidadPartidos == 4) {
            letra = `C`
            ronda = this.partidosCuartos
        } else {
            letra = `S`
            ronda = this.partidosSemis
        }

        for (let i = 0; i < cantidadPartidos; i++) {
            const partido = {
                grupo: `${letra}${i + 1}`,
                local: {},
                visitante: {},
                golesLocal: 0,
                golesVisitante: 0,
                ganador: {}
            }
            ronda.push(partido)
        }
    }

    crearPartidosOctavos (locales, visitantes) {
        for (let i = 0; i < 8; i++) {
            this.partidosOctavos[i].local = locales[i]
            this.partidosOctavos[i].visitante = visitantes [i]    
        }      
    }

    crearOctavos() {
        this.equiposLocales = this.equipos.slice(0,8),
        this.equiposVisitantes = this.equipos.slice(8, 16),
        this.crearTabla(8)
        this.crearPartidosOctavos(this.equiposLocales, this.equiposVisitantes)      
    }

    generarGoles() {
        return Math.floor(Math.random() * 10);
    }

    play(partido) {
        partido.golesLocal = this.generarGoles();
        partido.golesVisitante = this.generarGoles();
        while (partido.golesLocal === partido.golesVisitante) {
            partido.golesLocal = this.generarGoles();
            partido.golesVisitante = this.generarGoles();
        }
    }

    jugarRonda(partidos) {
         for (const partido of partidos) {
            this.play(partido)
            if (partido.golesLocal > partido.golesVisitante) {
                partido.ganador = partido.local
            } else {
                partido.ganador = partido.visitante
            }
        }
    }

    crearPartidosCuartos () {
        // el ganador de c/ jornada 

        //C1 = Primer partido de Cuartos de Final
        this.partidosCuartos[0].local = this.partidosOctavos[0].ganador 
        this.partidosCuartos[0].visitante = this.partidosOctavos[7].ganador

        //C2 = Segundo partido de Cuartos de Final
        this.partidosCuartos[1].local = this.partidosOctavos[2].ganador 
        this.partidosCuartos[1].visitante = this.partidosOctavos[5].ganador

        // C3 = Tercer partido de Cuartos de Final
        this.partidosCuartos[2].local = this.partidosOctavos[6].ganador 
        this.partidosCuartos[2].visitante = this.partidosOctavos[1].ganador

        // C4 = Cuarto partido de Cuartos de Final
        this.partidosCuartos[3].local = this.partidosOctavos[4].ganador 
        this.partidosCuartos[3].visitante = this.partidosOctavos[3].ganador
        
    }

    crearCuartos() {
        this.crearTabla(4);
        this.crearPartidosCuartos () 
    }
}   
