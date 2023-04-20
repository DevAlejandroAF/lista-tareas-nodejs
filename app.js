require('colors');

const { guardarDB, leerDB } = require('./helpers/guardar-archivo');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    
    if ( tareasDB ) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquirerMenu();
        switch ( opt ) {
            case '1':
                const desc = await leerInput('Descripción:');
                tareas.crearTarea( desc );
            break;

            case '2':
                tareas.listadoCompleto();
            break;
        }
        guardarDB( tareas.listadoArray );
        await pausa();
    }while( opt !== '0' );
}

main();

