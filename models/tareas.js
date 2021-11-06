const Tarea = require('./tarea');
/*
 * == Resultado ==
 * _listado: 
 *      { 'uuid-398640945-21864734' {id:12, desc:abc, completadoEN:23/09/22} }
*/

class Tareas {
    _listado = {}

    /* 
    Caso : actualmente como listado recivimos un objeto, y lo 
    que queremos recivir es un arreglo, y que se avea mas legible
    Adicional :  en JS tambien tenemos acceso a las propiedades get y set
    */
   get listadoArr() {
        const listado = []
        
        /* 
        En JS tenemos la propiedad Object en esta ocacion nos permite con la funcion 
        Keys, recibir un objeto y pasarlo a arreglo y asi poder iterar sobre el
        */
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
   }

    constructor() {
        this._listado = {}
    }

    borrarTarea(id = '') {
        // EL if loa gregamos prara poder salir del menu de eliminacion sin borrar nada
        if(this._listado[id]){
            delete this._listado[id]
        }
    }

    cargarTareasFromArray( tareas = [] ){

        // console.log(tareas);

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea
        })

        
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

    listadoCompleto() {

        const arrListado = this.listadoArr

        // Este es el indice, tambien se puede hacer con
        // el mismo foreach, ya que el seguindo parametro que recibe
        // es el index (values , index) 
        let i = 0
        
        arrListado.forEach( ( {desc, completadoEn}) => {

            let estado

            if (completadoEn === null) {
                estado = 'Pendiente'.red
            } else {
                estado = 'Completada'.green
            }

            i += 1
            
            console.log(`${(i + '.').green} ${desc} :: ${estado}`)     
            
        })


    }

    listarPedientesCompletadas( completadas = true ){

        const arrListado = this.listadoArr

        // Este es el indice, tambien se puede hacer con
        // el mismo foreach, ya que el seguindo parametro que recibe
        // es el index (values , index) 
        let i = 0
        
        arrListado.forEach( ( {desc, completadoEn}) => {

            let estado

            if (completadoEn == null) {
                estado = 'Pendiente'.red
            } else {
                estado = 'Completada'.green
            }

            if( completadas ) {
                // Mostrar completadas
                if (completadoEn) {
                    i += 1
                    console.log(`${(i + '.').green} ${desc} :: ${completadoEn.green}`) 
                }
            } else { 
                if (!completadoEn) {
                    i += 1
                    console.log(`${(i + '.').green} ${desc} :: ${estado}`) 
                }
            }
        })
    }

    toggleComletadas(ids = []){
        const ex = ids.id
        ex.forEach( id => {
            const tarea = this._listado[id]
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach(tarea => {
            if(!ex.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
            }
        })
    }
}



module.exports = Tareas

/*
 * En JS todo lo que se escribe en [ ] fucniona como referencia 
 * Ejemplo 
 * 
 * const objetoA {
 *      primero: 1
 * }
 * const A = primero
 * objetoA[A] 
 * 
 * Compara el valor con un valor que este dentro de el objeto
 * Y retrona su valor en caso de que sea un objeto
 */