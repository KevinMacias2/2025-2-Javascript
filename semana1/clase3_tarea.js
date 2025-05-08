const { ask } = require('../helpers/input.js');

async function main() {
    const dia = Number(await ask("Ingresa un numero del 1 al 7"));
    const diassemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    if (dia >= 1 && dia <= 7) {
        console.log(`El día de la semana es: ${diassemana[dia - 1]}`);
    } else {
        console.log("El número ingresado no es válido. Por favor, ingresa un número del 1 al 7.");
    }
}



main();