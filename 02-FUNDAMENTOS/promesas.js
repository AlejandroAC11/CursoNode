let empleados = [{id:1,nombre:'Roberto'}, {id:2,nombre:'Melisa'}, {id:3,nombre:'Juan'}];
let sueldos = [{id:1,sueldo:1000},{id:2,sueldo:2000}];

let getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if(!empleadoDB) {
            reject('No existe empleado con id: '+ id );
        } else {
            resolve(empleadoDB);
        }
    })
    };

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario = sueldos.find(sueldo => sueldo.id === empleado.id);

        if(!salario) {
            reject('No existe un usuario con id '+ empleado.id);
        } else {
            resolve({nombre: empleado.nombre, sueldo: salario.sueldo});
        }
    });
}


/*    getEmpleado(10).then( empleado => {
        console.log('Empleado es ', empleado);
    }, err => console.log(err));

    getSalario(empleados[1]).then(salario => {
        console.log('Salario es ', salario);
    }, err => console.log(err));*/

    getEmpleado(1).then(empleado => getSalario(empleado))
        .then(resp => console.log('El salario de ', resp.nombre + ' es de ', resp.sueldo))
            .catch(err => console.log(err));