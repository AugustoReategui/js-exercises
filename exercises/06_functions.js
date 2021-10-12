// 6) Funciones

// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function suma1(num1, num2) {
    var total = num1 + num2
    return total;
}
console.log(suma1(144, 50));

// b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function suma2(num1, num2) {
    if (typeof num1 != 'numero' || typeof num2 != 'numero') {
        alert("At least one parameter is not a number")
        return NaN;
    }
    else {
        return total;
    }
}
console.log(suma2(19, 'Augusto'));
console.log(suma2(300, 19));

// c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(num3) {
    return Number.isInteger(num3)
}
console.log(validateInteger(7));
console.log(validateInteger('Augusto'))

// d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function suma3(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        alert("At least one parameter is not a number");
        return NaN;
    }
    else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert('There is a decimal number');
        return Math.round(num1 + num2);
    }
    else {
        return total;
    }
}
console.log(suma3(500, 'October'));
console.log(suma3(2.39, 100));
console.log(suma3(500, 784620));

// e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function checkValidation(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        alert("At least one parameter is not a number");
        return NaN;
    }
    else {
        return true;
    }
}
function suma(num1, num2) {
    if (checkValidation(num1, num2)) {
        return num1 + num2;
    }
}
suma(149, 'Computer');
console.log(suma(99, 630));
