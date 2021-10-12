// 3) Arrays

// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(month[4]);
console.log(month[10]);

// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var month1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(month1.sort());


// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

var month2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
month2.unshift(1991);
month2.push(1992);
console.log(month2);

// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

var month3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
month3.shift();
month3.pop();
console.log(month3);

// e) Invertir el orden del array (utilizar reverse)

var month4 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
month4.reverse();
console.log(month4);

// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var month5 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var juntos = month5.join('-');
console.log(juntos);

// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var month6 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mayoNov = month6.slice(4, 11);
console.log(mayoNov);