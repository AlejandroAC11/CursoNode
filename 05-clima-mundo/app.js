const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async( direccion ) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${ direccion } es de ${ temp }`;
    } catch (e) {
        return "Error al obtener clima";
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);