/* Info Codigo --
Recomendacion :
Integrar primero los requerimentos de terceros y despues los de nosotros
*/
require('colors')
const { mostrarMenu, pausa } = require('./helpers/mensajes')
console.clear()
const main = async() => {
    apt = ''
    do {
        // Como la funcion ahora regresa una promesa podemos usar el await
        opt = await mostrarMenu()
        console.log({opt});
        await pausa()
    } while (opt !== '0');

    // pausa()
}
main()