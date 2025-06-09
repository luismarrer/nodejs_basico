var booleanoCierto = true
var booleanoFalso = false

var a = '10'
var b = 10

var aMayorQueb = a > b
// >, <, >=, <=, ==, === != !==

console.log(a === b)

var rangoInicio = 0
var rangoFinal = 100
var numeroAComparar = 101

var mayorQueInicio = numeroAComparar > rangoInicio
var menorQueFinal = numeroAComparar < rangoFinal
var dentroDeRango = mayorQueInicio && menorQueFinal

console.log('El número', numeroAComparar, 'está dentro del rango:', dentroDeRango)


var haHechoTrabajo = false
var notaExamenFinal = 10
var tieneFaltaTecnica = false

var aprobadoElCurso = (haHechoTrabajo || notaExamenFinal >= 5) && !tieneFaltaTecnica
console.log('¿Aprobó el curso?', aprobadoElCurso)


// Realizar un programa que, dadas dos lineas en una dimension (dos rangos)
// (a, b), (c, d) comprobar que las lineas se solapan o no se solapan

var a = 5

var b = 20

var c = 10

var d = 25

var haySolape = (c > a && c < b) || (d > a && d < b) || (a > c && a < d) || (b > c && b < d)
console.log('¿Las líneas se solapan?', haySolape)