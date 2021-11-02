const Tarea = require('./tarea');
/*
 * == Resultado ==
 * _listado: 
 *      { 'uuid-398640945-21864734' {id:12, desc:abc, completadoEN:23/09/22} }
*/

class Tareas {
    _listado = {}

    constructor() {
        this._listado = {}
    }

    // desc = '' : esta implementacion nos sirve para que el ditor sepa que sera de tipo string
    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea

        /*
         * Recordatorio - Integraciones
         * Integrar (a un arreglo) -- this._listado.push(value)
         * Integrar (a un objeto) propiedad existente -- this._listado.existente = valor
         * Integrar (a un objeto) por referencia -- this._listado['nombreExistente'] = valor
         * Integrar (a un objeto) por referencia de variable -- this._listado[tarea.id] = valor
        */
    }
}

module.exports = Tareas