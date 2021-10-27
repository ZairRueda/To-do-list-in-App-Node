/* Info Codigo --
Recomendacion :
Integrar primero los requerimentos de terceros y despues los de nosotros
*/
require('colors')
const { mostrarMenu, pausa } = require('./helpers/mensajes')
console.clear()
const main = async() => {
    mostrarMenu()

    pausa()
}
main()