const { ask } = require('../helpers/input'); 

// Función para analizar calificaciones (completada)
function analizarCalificaciones(calificaciones) {
    // 1. Manejar el caso de un arreglo vacío
    if (!calificaciones || calificaciones.length === 0) {
        return {
            cantidadAprobados: 0,
            cantidadReprobados: 0,
            promedioGeneral: NaN, // Not a Number, ya que no se puede calcular el promedio de cero elementos
            calificacionMasAlta: undefined, // O null, o 0 según se prefiera para un caso vacío
            calificacionMasBaja: undefined  // O null, o 100 según se prefiera para un caso vacío
        };
    }

    // 2. Inicializar variables
    let cantidadAprobados = 0;
    let cantidadReprobados = 0;
    let sumaTotal = 0;
    let calificacionMasAlta = calificaciones[0]; // Asumimos la primera como la más alta inicialmente
    let calificacionMasBaja = calificaciones[0]; // Asumimos la primera como la más baja inicialmente

    // 3. Recorrer el arreglo para procesar cada calificación
    for (let i = 0; i < calificaciones.length; i++) {
        const calificacionActual = calificaciones[i];

        // Acumular la suma para el promedio
        sumaTotal += calificacionActual;

        // Determinar si es aprobado o reprobado
        if (calificacionActual >= 70) {
            cantidadAprobados++;
        } else {
            cantidadReprobados++;
        }

        // Actualizar la calificación más alta
        if (calificacionActual > calificacionMasAlta) {
            calificacionMasAlta = calificacionActual;
        }

        // Actualizar la calificación más baja
        if (calificacionActual < calificacionMasBaja) {
            calificacionMasBaja = calificacionActual;
        }
    }

    // 4. Calcular el promedio general
    const promedioGeneral = sumaTotal / calificaciones.length;

    // 5. Devolver el objeto con los resultados
    return {
        cantidadAprobados: cantidadAprobados,
        cantidadReprobados: cantidadReprobados,
        promedioGeneral: promedioGeneral,
        calificacionMasAlta: calificacionMasAlta,
        calificacionMasBaja: calificacionMasBaja
    };
}

async function main() {
    // Ejemplo de cómo usar la función analizarCalificaciones:
    const notasEstudiantes = [85, 60, 92, 78, 69, 95, 71, 55, 88, 100, 45];

    console.log("Calificaciones a analizar:", notasEstudiantes.join(', '));

    const analisis = analizarCalificaciones(notasEstudiantes);

    console.log("\n--- Análisis de Calificaciones ---");
    console.log(`Cantidad de Aprobados (≥70): ${analisis.cantidadAprobados}`);
    console.log(`Cantidad de Reprobados (<70): ${analisis.cantidadReprobados}`);
    // Usamos toFixed(2) para mostrar el promedio con dos decimales
    console.log(`Promedio General: ${isNaN(analisis.promedioGeneral) ? 'N/A' : analisis.promedioGeneral.toFixed(2)}`);
    console.log(`Calificación Más Alta: ${analisis.calificacionMasAlta === undefined ? 'N/A' : analisis.calificacionMasAlta}`);
    console.log(`Calificación Más Baja: ${analisis.calificacionMasBaja === undefined ? 'N/A' : analisis.calificacionMasBaja}`);


}

main();