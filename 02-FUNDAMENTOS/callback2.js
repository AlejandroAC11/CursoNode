let empleados = [{id:1,nombre:'Roberto'}, {id:2,nombre:'Melisa'}, {id:3,nombre:'Juan'}]
let sueldos = [{id:1,sueldo:1000},{id:2,sueldo:2000}]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        if(!empleado){
            callback('No existe empleado con id: ',id );
        } else {
            callback(null, empleadoDB)
        }
    })
    console.log(empleado);
}

let getSalario = (empleado, callback) => {
    let resultado = sueldos.find(sueldo =>  sueldo.id === empleado.id);

    if(!resultado) {
        callback('No existe empleado con id: ',id );
    } else {
        callback(null, {nombre: empleado.nombre, salario: resultado.sueldo})
    }        

    //console.log(resultado);
}

getEmpleado(10, (err, empleado) => {
    if(!err) {
        console.log(err)
    }

    console.log(empleado);
});

getSalario(empleados[1], (err, resultado) => {
    if(err) {
        console.log(err)
    }

    console.log(resultado);
});