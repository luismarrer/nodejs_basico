// Otra forma de controlar el flujo condicional
// Podemos simplificar un if:
var status = 0;
if (status === 0) {
    // Hago A
} else if (status === 1) {
    // Hago B
} else if (status === 2) {
    // Hago C
}

// Podemos escribirlo como:
switch (status) {
    case 0:
        // Hago A
        break;
    case 1:
        // Hago B
        break;
    case 2:
        // Hago C
        break;
    default:

        break;
}

// Es mas legible y mas eficiente


// Tarea Planificador de Viajes Espaciales Solución
var destinoplanetario = "Tierra";

switch (destinoplanetario) {

    case "Mercurio":    

         console.log("Destino planetario: Mercurio.");

         console.log("Duración estimada del viaje: 3 meses.");

         console.log("Distancia al planeta: 91 millones de kilómetros.");

        console.log("Curiosidad interesante: Mercurio es el planeta más cercano al sol.");

        break;

    case "Venus":

         console.log("Destino planetario: Venus.");

         console.log("Duración estimada del viaje: 5 meses.");

         console.log("Distancia al planeta: 41 millones de kilómetros.");

         console.log("Curiosidad interesante: Venus es el planeta más caliente del sistema solar.");

        break;

    case "Tierra":  

         console.log("Destino planetario: Tierra.");

         console.log("Duración estimada del viaje: 6 meses.");

         console.log("Distancia al planeta: 149 millones de kilómetros.");

         console.log("Curiosidad interesante: La Tierra es el único planeta conocido con vida.");

        break;

    case "Marte":           

         console.log("Destino planetario: Marte.");

         console.log("Duración estimada del viaje: 9 meses.");

         console.log("Distancia al planeta: 225 millones de kilómetros.");

         console.log("Curiosidad interesante: Marte es el cuarto planeta del sistema solar.");

        break;

    case "Júpiter":

         console.log("Destino planetario: Júpiter.");

         console.log("Duración estimada del viaje: 6 años.");

         console.log("Distancia al planeta: 778 millones de kilómetros.");

        console.log("Curiosidad interesante: Júpiter es el planeta más grande del sistema solar.");

        break;      

    case "Saturno":    

         console.log("Destino planetario: Saturno.");

         console.log("Duración estimada del viaje: 7 años.");

        console.log("Distancia al planeta: 1.4 mil millones de kilómetros.");

         console.log("Curiosidad interesante: Saturno es el planeta con anillos.");

        break;

    case "Urano":   

         console.log("Destino planetario: Urano.");

        console.log("Duración estimada del viaje: 8 años.");

         console.log("Distancia al planeta: 2.8 mil millones de kilómetros.");

         console.log("Curiosidad interesante: Urano es el planeta inclinado.");

        break;

    case "Neptuno":

        console.log("Destino planetario: Neptuno.");

         console.log("Duración estimada del viaje: 9 años.");

         console.log("Distancia al planeta: 4.5 mil millones de kilómetros.");

         console.log("Curiosidad interesante: Neptuno es el planeta más alejado del sol.");

    default:

         console.log("No se ha seleccionado un destino planetario válido.");

        break;

}