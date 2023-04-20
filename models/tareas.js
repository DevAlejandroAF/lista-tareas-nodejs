const Tarea = require('./tarea');
const colors = require('colors');

class Tareas {

    _listado = {};

    get listadoArray() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        } );
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }
    
    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArray.forEach( ( tarea, i ) => {
            const idx = i + 1;
            const { desc, completadoEn } = tarea;
            ( completadoEn )
                ? console.log(`${ colors.green(idx) }${ '.'.green } ${ desc } :: ${ 'Completado(a)'.green }`)
                : console.log(`${ colors.red(idx) }${ '.'.red } ${ desc } :: ${ 'Pendiente'.red }`);
        })
    }
}

module.exports = Tareas;
