const fs = require('fs');
const colors = require('colors')

let base = 2;

let listarTabla = (base, limite) => {
//    let data = '';
//    return new Promise ((resolve, reject) => {

//        if(!Number(base))reject('El valor no es un numero');

        for(let i = base; i <= limite; i++){
//            data += `${ base } * ${i} = ${i * base} \n`;
            console.log(`${ base } * ${i} = ${i * base} \n`);
        }

//        resolve(data);
 //   })

}

let crearArchivo = ( base , limite =10 ) => {

    if(!Number(base))reject('El valor no es un numero');

    return new Promise ((resolve, reject) => {

    for(let i = 1; i <= limite; i++){
        data += `${ base } * ${i} = ${i * base} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}.tx`, data, err => {
        if (err) reject(err);
        else
            resolve('The file has been saved');
    });
    })

}

module.exports = {crearArchivo};
module.exports = {listarTabla};
