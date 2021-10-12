// 2) Strings

// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var string1, toUpperCase;
string1 = "Momentaneamente";
toUpperCase = string1.toUpperCase();
console.log(toUpperCase);

// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var string2, substring1;
string2 = "dificilmente";
substring1 = string2.substring(0, 5);
console.log(substring1);

// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var string3, substring2;
string3 = "supermercado";
substring2 = string3.substring(string3.length - 3, string3.length);
console.log(substring2)

// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var string4, subfull;
string4 = "superficial";
subfull = string4.substring(0, 1).toUpperCase() + string4.substring(1, string4.length).toLowerCase();
console.log(subfull);

// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var string5, space;
string5 = "super caro";
space = string5.indexOf(" ");
console.log(space);

// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var string6, space2, stringFull;
string6 = "murcielago infeccioso";
space2 = string6.indexOf(" ");
stringFull = string6.substring(0, 1).toUpperCase() + string6.substring(1, 10).toLowerCase() + 
             string6.substring(space2, + space2) + string6.substring(11, 12).toUpperCase() + 
             string6.substring(12, string6.length).toLowerCase();
console.log(stringFull);





