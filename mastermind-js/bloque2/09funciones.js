// Formas de agrupar lógica
function proceso1() {
    console.log('Hago una cosa');
    console.log('Luego hago otra');
}
// Las podemos llamar
proceso1();
// Repetidamente
proceso1();




// Les podemos enviar datos

function generateFullName(nombre, apellido) {
    console.log(nombre + " " + apellido);
}

generateFullName('Martin', 'Cristobal');
generateFullName('Martin', 'Hernandez');





// Podemos hacer que nos devuelvan datos
function calculateMidpoint(num1, num2) {
    return (num1 + num2)/2;
}

var firstNumber = 0;
var secondNumber = 4;
var midPoint = calculateMidpoint(firstNumber, secondNumber);
console.log('La media de ' + firstNumber +' y ' + secondNumber +' es ' + midPoint);







// Las funciones son un tipo de dato, por lo que podemos utilizarlo como variable

var logicaSaludar = function(nombre) {console.log('Hola, mi nombre es ' + nombre)};
var logicaSaludarMaleducado = function(nombre) {console.log('Hola, no me gustas pero mi nombre es ' + nombre)};

// En logicaSaludar tenemos la referencia a la funcion
// Podemos hacer algo tan loco como pasar una funciona a otra:
function saludarSuperEducadamente(funcionPasadaPorParametro, nombre) {
    console.log('Disculpe, perdone que le moleste, pero ');
    // Ejecutamos la funcion que hemos recibido
    funcionPasadaPorParametro(nombre);
    console.log('Espero pasar una muy buena velada con usted.');
}

// Si lo ejecutamos todo:
saludarSuperEducadamente(logicaSaludarMaleducado, 'Martin');






// Esto es lo que da pie a poder hacer programacion funcional en JS
// Las funciones son objetos y por lo tanto se pueden comportar como tal

// Se usa mucho en gestion de eventos:

function processClickEvent(event) {
    // Hago algo cuando recibo el click
}

//Quiero que cuando se haga click en el item, se ejecute mi funcion
var itemEnPantalla; // Algun item de la pantalla
// La libreria de frontend me proporciona una forma de ejecutar
// mi funcion cuando se haga click
// Lo que estoy haciendo es pasarle la funcion a ejecutar como parametro
//itemEnPantalla.onClick(processClickEvent)



// TAREA: El generador de Patrones Mágicos

// Imagina que estás programando el sistema de una fábrica de helados intergaláctica. Esta fábrica crea helados con sabores inspirados en diferentes planetas del sistema solar, y cada planeta tiene un factor de sabor único. Tu tarea es escribir una función en JavaScript que genere un "lote de helados" basado en un planeta y un "factor de intensidad" de sabor.

// Instrucciones:

// La función recibe dos parámetros: un array que representa los sabores básicos del helado y un número entero que es el "factor de intensidad" del sabor.

// Cada sabor del helado se asocia con un planeta, y cada planeta tiene un valor numérico (por ejemplo, Mercurio = 1, Venus = 2, etc.).

// Para cada sabor en el array, multiplica su valor numérico asociado por el factor de intensidad.

// Si el resultado es par, añade una "chispa cósmica" al sabor. Si es impar, añade "polvo de estrella".

// La función debe retornar un nuevo array con los nombres de los sabores de helado transformados según el resultado.

// Comparte el ejercicio en las discusiones de la clase si quieres que te demos nuestro feedback sobre tus helados espaciales.


function loteDeHelados(arraySabores, factorIntensidad) {
    const saboresPlanetas = {
        1: "Mercurio",
        2: "Venus",
        3: "Tierra",
        4: "Marte",
        5: "Júpiter",
        6: "Saturno",
        7: "Urano",
        8: "Neptuno"
    } // Objeto que asocia cada planeta con un valor numérico

    // Asociamos los sabores de helado con los planetas
    for (let i = 0; i < arraySabores.length; i++) {
        arraySabores[i] = saboresPlanetas[i + 1] // Asignamos el nombre del planeta al sabor
        let resultado = (i + 1) * factorIntensidad // Multiplicamos el índice del sabor por el factor de intensidad
        if (resultado % 2 === 0) {
            arraySabores[i] += ' con chispa cósmica'
        } else {
            arraySabores[i] += ' con polvo de estrella'
        }
    }
    return arraySabores // Retornamos el nuevo array con los sabores transformados
}


let arraySaboresBasicos = ['chocolate', 'vainilla', 'fresa'] // Array de sabores básicos, pueden ser cualquier sabor que quieras, hasta 8 sabores (la cantidad de planetas en el sistema solar)
let factorIntensidad = 3 // Factor de intensidad, puede ser cualquier número entero
console.log(loteDeHelados(arraySaboresBasicos, factorIntensidad)) // Llamamos a la función con el array de sabores y el factor de intensidad
// Resultado esperado: ['Mercurio con polvo de estrella', 'Venus con chispa cósmica', 'Tierra con polvo de estrella']