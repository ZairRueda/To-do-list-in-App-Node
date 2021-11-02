const inquirer = require('inquirer')
const confirm = require('@inquirer/confirm')

require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué decea hacer?',
        choices: [
            {
                value: '1', // este es el valor al que apunta el codigo pueden ser numeros o strings
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Lista Tareas'
            },
            {
                value: '3',
                name: '3. Lista Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Eliminar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const inquirerMenu = async() => {

    // console.clear()
    console.log('=========================='.green)
    console.log('  Seleccione una opción   ')
    console.log('==========================\n'.green)

    const {opcion} = await inquirer.prompt(preguntas)

    return opcion
}

const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Preciones ${ 'enter'.green } para continuar`
        }
    ]

    console.log('\n')
    // Integramos la llamada a pantalla, esperamos que interactue
    await inquirer.prompt(question)

    /* Mi integracion - tiene un promblema, al seguir ejecutando la app se finaliza
    let answer;

    answer = await confirm({
        message: 'Desea ingresar?',
    });
    // answer sera - true o flace 
    console.log('Answer:', answer);
    */
}
 
/*
// Problema:

Al usuario querer agregar una tarea nosotros podemos preguntarle 
cual es el valor de la tarea, que quiere agregar 
Tambien que el usuario pueda escribir algo

Nosotros vamos a ocupar el mismo promp en varios lugares, ejemplo
al querer el usuario borrar una tarea o buscarla 

// Solucion:

Lo solucionaremos creando una funcion global
*/
const leerInput = async(message) => {

    const questions = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
        /* 
        validate: como su nombre nos dice nos ayuda a validar lo que el usuario 
        decea buscar, en este caso queremos validar que alla algo en el mensaje recivido
        */
    ]

    // Destructuramos por que questions retorna un objeto
    const {desc} = await inquirer.prompt(questions)

    return desc 
}

module.exports = {
    inquirerMenu,
    pause,
    leerInput
}