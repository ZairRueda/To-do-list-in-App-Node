/* Info Codigo --
Recomendacion :
Integrar primero los requerimentos de terceros y despues los de nosotros */

require('colors')
const { inquirerMenu, pause } = require('./helpers/inquirer')
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')
console.clear()
const main = async() => {
    apt = ''
    do {
        // Como la funcion ahora regresa una promesa podemos usar el await
        // opt = await inquirerMenu()
        // console.log({opt});
        const tareas = new Tareas()
        const tarea = new Tarea('Comprar Comida')


        /*Se integra de esta foma para que el primer parametro
        [tarea.id] sea el la referencia para el objeto tarea
        Cuando en JS se ponde algo entre llaves, nos se esta haciendo referencia al 
        propio objeto, si no a ya sea una integracion o se existe una propiedad con el 
        mismo valor esta se re asigne */
        tareas._listado[tarea.id] = tarea
        console.log(tareas);

        await pause()
        
    } while (opt !== '0');

    // pausa()
}
main()