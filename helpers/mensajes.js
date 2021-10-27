require('colors')
/*
No utilizaremos un async por que esta promesa no se resuelve en la
funcion principal, se resuleve en una sub funcion 
Haremos uso de promesas normales
*/
const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear()
        console.log('=========================='.green)
        console.log('  Seleccione una opción   ')
        console.log('=========================='.green)

        console.log(`${ '1.'.green } Crear Tarea`);
        console.log(`${ '2.'.green } Listar Tareas`);
        console.log(`${ '3.'.green } Listar Tareas Completadas`);
        console.log(`${ '4.'.green } Listar Tareas Pendientes`);
        console.log(`${ '5.'.green } Completar Tarea(s)`);
        console.log(`${ '6.'.green } Borrar Tarea`);
        console.log(`${ '0.'.green } Salir \n`);

        // Para poder hacer un comunicacion funcional con la consola usaremos 
        // createInterface : es un paquete integrado de node 
        const readline = require('readline').createInterface({
            /* Process : objeto integrado que almacena funcionalidades */
            input: process.stdin,
            output: process.stdout
        })
        // .question : es la funsion que nos va a permitir hacerle una pregunta a el usuario
        readline.question('Seleccione un opción: ', (opt) => {
            readline.close()
            resolve(opt)
        })

    })
}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`\nPrecione : ${ 'Enter'.green} para continuar\n`, (opt) => {
            readline.close()
            resolve()
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}