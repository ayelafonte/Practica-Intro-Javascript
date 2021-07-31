export default class playoff {

    constructor(nombre, equipos = [])
    {
        this.nombre = nombre;
        this.setupEquipos(equipos);
        this.partidosOctavos = [];
        this.partidosCuartos = [];
        this.partidosSemis = [];
        this.partidoTercero = [];
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
        }
    }

    crearTabla (letra) { //Se arma la tabla vacia definiéndose la cantidad de partidos que se juega según la letra que se le asigna
        let cantidadPartidos
        let ronda

        if (letra == `Q`) { // Se pasa Q para jugar octavos
            cantidadPartidos = 8;
            ronda = this.partidosOctavos
        } else if (letra == `C`) { // Se pasa C para jugar cuartos
            cantidadPartidos = 4;
            ronda = this.partidosCuartos 
        } else if (letra == `S`) { // Se pasa S para jugar las semifinales
            cantidadPartidos = 2;
            ronda = this.partidosSemis
        } else if (letra == `T`) { // Se pasa T para jugar el tercer puesto
            cantidadPartidos = 1;
            ronda = this.partidoTercero
        } else {
            cantidadPartidos = 1; // Se pasa F para jugar la final
            ronda = this.partidoFinal
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
        this.crearTabla(`Q`)
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

    crearCuartos() {
        this.crearTabla(`C`);

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

    crearSemis() {
        this.crearTabla (`S`);

        // S1
        this.partidosSemis[0].local = this.partidosCuartos[0].ganador
        this.partidosSemis[0].visitante = this.partidosCuartos[2].ganador

        // S2
        this.partidosSemis[1].local = this.partidosCuartos[1].ganador
        this.partidosSemis[1].visitante = this.partidosCuartos[3].ganador
    }

    crearTercerPuesto() {
        let perdedorLocal = {}
        let perdedorVisitante = {}

        this.crearTabla(`T`);
        
        if (this.partidosSemis[0].golesLocal < this.partidosSemis[0].golesVisitante) {
            perdedorLocal = this.partidosSemis[0].local
        } else {
            perdedorLocal = this.partidosSemis[0].visitante
        }
        if (this.partidosSemis[1].golesLocal < this.partidosSemis[1].golesVisitante) {
            perdedorVisitante = this.partidosSemis[1].local
        } else {
            perdedorVisitante = this.partidosSemis[1].visitante
        }

        this.partidoTercero[0].local = perdedorLocal
        this.partidoTercero[0].visitante = perdedorVisitante
    }  

    crearFinal () {
        this.crearTabla(`F`);

        this.partidoFinal[0].local = this.partidosSemis[0].ganador
        this.partidoFinal[0].visitante = this.partidosSemis[1].ganador
    }

    printRonda(partidos) {
        for (let partido of partidos) {
            console.log(`(${partido.grupo})`, '  ', partido.local.nombre, partido.golesLocal, 'vs', partido.visitante.nombre, partido.golesVisitante, 
                '==> GANADOR: ', partido.ganador.nombre); 
        }
    }

    printTercero() {
        // for (let partido of partidoTercero) {
            console.log(this.partidoTercero[0].local.nombre, this.partidoTercero[0].golesLocal, 'vs', this.partidoTercero[0].visitante.nombre, this.partidoTercero[0].golesVisitante, 
                '==> TERCER PUESTO: ', this.partidoTercero[0].ganador.nombre); 
        }
    

    printFinal() {
        // for (let partido of partidoFinal) {
            console.log(this.partidoFinal[0].local.nombre, this.partidoFinal[0].golesLocal, 'vs', this.partidoFinal[0].visitante.nombre, this.partidoFinal[0].golesVisitante, 
                '==> GANADOR: ', this.partidoFinal[0].ganador.nombre); 
        }
    

}   

