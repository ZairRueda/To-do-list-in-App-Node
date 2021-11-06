/* Info Codigo --
Recomendacion :
Integrar primero los requerimentos de terceros y despues los de nosotros */

require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
// Inportacion de las clases del archivo inquirer
const { 
    inquirerMenu, 
    pause,
    leerInput,
    listadoTareaBorrar,
    confirmar,
    mostrarListadoCheckList
} = require('./helpers/inquirer')

const Tareas = require('./models/tareas')


const main = async() => {

    opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()
    
    if (tareasDB) {
        // Establecer las tareas guardadas
        tareas.cargarTareasFromArray(tareasDB)
    }

    // await pause()

    do {
        console.clear()
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                // Crear Tarea
                const desc = await leerInput('Descripción: ')
                tareas.crearTarea(desc)
            break;

            case '2':
                // Listar Tareas
                // console.log(tareas.listadoArr);
                console.log(tareas.listadoCompleto());

            break;

            case '3':
                // Lista Tareas Completadas
                console.log(tareas.listarPedientesCompletadas(true));
            break;

            case '4':
                // Listar tareas Pendientes
                console.log(tareas.listarPedientesCompletadas(false));
            break;

            case '5':
                // Completar Tareas
                const ids = await mostrarListadoCheckList(tareas.listadoArr)
                tareas.toggleComletadas(ids)
                console.log(ids)
            break;

            case '6':
                // Eliminar Tareas
                const id = await listadoTareaBorrar(tareas.listadoArr)
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro')
                    if(ok) {
                        tareas.borrarTarea(id)
                        console.log('Tarea Borrada Correctamente!!');
                    }
                    // Imprimir el resiltadado en consola
                    // console.log({ok});
                }
                
            break;
        }

        guardarDB(tareas.listadoArr)

        await pause()
        
    } while (opt !== '0');

    // pausa()
}

main()