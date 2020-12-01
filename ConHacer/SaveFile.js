const fs = require('fs');

let listado = [];

const Guardar = () => {
    return new Promise((result, reject) => {
        let data = JSON.stringify(listado)
        fs.writeFile(`ConHacer/data.json`, data, (err) => {
            if (err) reject(err);
            else
                result(`data.json`)
        });
    })
}

const Obtener = () => {
    return new Promise((result, reject) => {
        try {
            listado = require('../ConHacer/data.json')
        } catch (err) {
            listado = []
        }
        result(listado);
    })
}

const Actualizar = (desc, comple = true) => {
    return new Promise((result, reject) => {
        Obtener().then(() => {
            let index = listado.findIndex(tarea => tarea.descripcion === desc)
            console.log(index);
            if (index >= 0) {
                listado[index].completado = comple;
            } else {
                reject("No se encuentra la tarea en la lista");
                return;
            }
            console.log(listado);
            Guardar()
                .then(data => {
                    console.log(data);
                    result(data);
                    return;
                })
                .catch(err => {
                    console.log(err)
                    reject(err);
                    return;
                })
        })
    }).catch(err => {
        console.log(err);
    })
}

const crear = (descripcion) => {

    return new Promise((result, reject) => {
        Obtener().then(() => {
            let porhacer = {
                descripcion,
                completado: false
            }
            listado.push(porhacer);
            Guardar()
                .then(file => {
                    console.log(file)
                    result(listado);
                    return;
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                    return
                })
        })
    }).catch(err => {
        console.log(err);
    })
}

const Eliminar = (desc) => {
    return new Promise((result, reject) => {
        Obtener().then(() => {
            let index = listado.findIndex(tarea => tarea.descripcion === desc)
            console.log(index);
            if (index >= 0) {
                listado.pop(index)
            } else {
                reject("No se encuentra la tarea en la lista");
                return;
            }
            Guardar()
                .then(file => {
                    result(file);
                    return;
                })
                .catch(err => {
                    reject(err)
                    return
                })
        }).catch(err => {
            reject(err);
        })
    })
}

module.exports = {
    crear,
    Obtener,
    Actualizar,
    Eliminar
}

//let crear()