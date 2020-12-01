const desc = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}
const completado = {
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', desc)
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        desc,
        completado
    })
    .command('eliminar', 'Actualiza el estado completado de una tarea', desc)
    .help()
    .argv;

module.exports = {
    argv
}