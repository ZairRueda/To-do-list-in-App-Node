/* Info Codigo --
Recomendacion :
Integrar primero los requerimentos de terceros y despues los de nosotros */

require('colors')
// Inportacion de las clases del archivo inquirer
const { 
    inquirerMenu, 
    pause,
    leerInput
} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
console.clear()
const main = async() => {

    opt = ''
    const tareas = new Tareas()

    do {
        opt = await inquirerMenu()
        console.log({opt});

        switch (opt) {
            case '1':
                // Crear Opcion
                const desc = await leerInput('Descripción: ')
            break;

            case '2':
                // Listar Opcion
                console.log(tareas._listado);
            break;

            case '3':
                
            break;

            case '4':
                
            break;

            case '5':
                
            break;

            case '6':
                
            break;
        }

        await pause()
        
    } while (opt !== '0');

    // pausa()
}
main()