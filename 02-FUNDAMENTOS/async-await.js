let empleados = [{id:1,nombre:'Roberto'}, {id:2,nombre:'Melisa'}, {id:3,nombre:'Juan'}];
let sueldos = [{id:1,sueldo:1000},{id:2,sueldo:2000}];

/**
 * let getNombre = async() => {
 *   return 'Rober';
 *}
 * 
 * 
 * Async es lo mismo q poner
 * let getNombre = () => {
 * return new Promise( (resolve, reject) => {
 * resolve('Rober')
 * })
 * }
 */

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if(!empleadoDB) {
        throw new Error('No existe empleado con id: '+ id );
    } else {
        return empleadoDB;
    }
    };

let getSalario = async (empleado) => {
    let salario = sueldos.find(sueldo => sueldo.id === empleado.id);

    if(!salario) {
        throw new Error('No existe un usuario con id '+ empleado.id);
    } else {
        return {nombre: empleado.nombre, sueldo: salario.sueldo};
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}`;
}

/*
getEmpleado(1).then(empleado => getSalario(empleado))
.then(resp => console.log('El salario de ', resp.nombre + ' es de ', resp.sueldo))
    .catch(err => console.log(err));*/

