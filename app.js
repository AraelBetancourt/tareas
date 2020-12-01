const argv = require('./config/yargs').argv;
const colors = require('colors');
const tareas = require('./ConHacer/SaveFile');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        tareas.crear(argv.descripcion).then(data2 => {
            console.log(data2);
        }).catch(err => {
            console.log(err);
        })
        break
    case 'listar':
        tareas.Obtener().then(data => {
            for (let ta of data) {
                console.log("######## Por Hacer ############".green);
                console.log(ta.descripcion);
                console.log("Estado: " + ta.completado);
                console.log("####################".green);
            }
        }).catch(err => {
            console.log(err);
        })
        break
    case 'actualizar':
        tareas.Actualizar(argv.descripcion, argv.completado).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
        break
    case 'eliminar':
        tareas.Eliminar(argv.descripcion).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
        break
    default:
        console.log('Comando no reconocido');
        break;
}