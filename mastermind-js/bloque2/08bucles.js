// Bucle while
/*
var contador = 0;
var N = 50;
while (contador < N) {
    console.log(contador);
    contador += 1;
}
*/

/*
// Bucle do while
do {
    // Primera iteracion
} while(condicion)
*/


/*
// Bucle for
for (var i = 0; i < 50; i += 2) {
    console.log(i);
}
*/
// 0. 1. 2
var array = [10, 20, 30]; // 3
var estudiantes = [
    {
        nombre: 'Estudiante 1',
        nota: 5
    },
    {
        nombre: 'Estudiante 2',
        nota: 8
    },
    {
        nombre: 'Estudiante 3',
        nota: 1
    }
]
for (var i = 0; i < estudiantes.length; i += 1) {
    var estudiante = estudiantes[i];
    console.log(estudiante.nombre, estudiante.nota);
}

// Iterar sobre vectores y objetos
for (var estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota);
}

var estudianteAuxiliar = {
    nombre: 'Estudiante 1',
    nota: 5
}

for (var key in estudianteAuxiliar) {
    console.log(key, estudianteAuxiliar[key]);
}

// TAREA

// Utilizando bucles for, se tiene que dibujar un árbol de navidad en pantalla.

// En una variable, se determinará la altura del árbol, por ejemplo, un árbol de altura 3 sería el siguiente:

//     *

//   ***

// *****

// Se busca hacer un programa que, dada una altura, sea capaz de dibujar un árbol de navidad utilizando espacios y asteriscos.

// Ejemplos:

// Árbol de altura 1:

// *

// Árbols de altura 2:

//   *

// ***

let altura = 10

for (let escalon = 1; escalon <= altura; escalon++) {
    // Calcular espacios y asteriscos

    if (escalon > altura) {
        break; // Si escalon es mayor que altura, salimos del bucle
    }
    if (escalon < 1) {
        continue; // Si escalon es menor que 1, saltamos a la siguiente iteración
    }
    let espacios = ' '.repeat(altura - escalon)
    let asteriscos = '*'.repeat(escalon * 2 - 1)
    console.log(espacios + asteriscos);
}