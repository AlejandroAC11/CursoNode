const fs = require('fs');
const argv = require('./config/yargs').argvn
const colors = require('colors')


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('creado'));
        break;
    default:
        console.log('Comando no reconocido')
        break;
}




//let argv2 = process.argv;


//console.log(argv2);
// let parametro= argv[2];

// let base = parametro.split('=')[1];

// crearArchivo(base).then(archivo => console.log('creado'));



