const { ask } = require('../helpers/input');

function obtenerPromedio(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    const promedio = suma / numeros.length;
    return promedio; 
}
function obtenerMayor(numeros){
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}
function resumenEstadistico(numeros){
    const promedio = obtenerPromedio(numeros);
    let maximo = obtenerMayor(numeros);
    let minimo = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }
    return {'promedio':promedio, 'maximo': maximo, 'minimo':minimo};
}

function nombresConVocal(nombres){
    const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    for (let index1 = 0; index1 < nombres.length; index1++) {
        const primerLetra = nombres[index1][0].toLowerCase();
        for (let index2 = 0; index2 < vocales.length; index2++) {
            if (primerLetra === vocales[index2]) {
                console.log(`${nombres[index1]} empieza con ${vocales[index2].toUpperCase()}`);
            }
        }
    }
}


async function main() {
    const edades =[20, 10, 25, 30, 22];
    console.log(`Promedio =  ${obtenerPromedio(edades)}`); 

    const lista =[5, 20, 8, 99, 2];
    console.log(`Numero mayor =  ${obtenerMayor(lista)}`); 

     const datos =[70, 80, 90, 100, 85];
     const estadistico = resumenEstadistico(datos);
     console.log('Promedio: ',estadistico.promedio);
     console.log('maximo:', estadistico.maximo);
     console.log('minimo:', estadistico.minimo);

     const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Ernesto"];
     console.log("Nombres que empiezan con vocal");
     nombresConVocal(nombres);

   
}

main();