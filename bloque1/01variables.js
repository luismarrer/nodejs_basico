var cajaA = 3
cajaA = 5
var cajaB = 5
var cajaC = cajaA + cajaB

console.log(cajaA, cajaB, cajaC)


// Tarea 1
// Intercambio de valores de x e y con variable temporal

var x = 2
var y = 3
var z = x
x = y
y = z

// Tarea 2
// Intercambio de valores con operación aritmética

x = 5
y = 8
console.log('Aquí x:',x,'Acá y:',y)

x = x + 3
y = y - 3
console.log('Aquí x:',x,'Acá y:',y)

// deestructuring

;[x, y] = [y, x]

console.log('Aquí x:',x,'Acá y:',y)