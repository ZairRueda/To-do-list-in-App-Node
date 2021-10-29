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

module.exports = {
    inquirerMenu,
    pause
}