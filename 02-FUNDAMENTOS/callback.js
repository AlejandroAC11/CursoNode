setTimeout( function(){
    console.log('Hola mundo');
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre = 'Fernando',
        id
    }

    callback(usuario);
}

getUsuarioById(10, () => {

});