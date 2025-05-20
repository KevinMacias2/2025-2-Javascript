const { ask } = require('../helpers/input');// Esto ahora debería encontrar y cargar la función 'ask'

async function main() {
  // Crear un arreglo para almacenar los alumnos
  const alumnos = [];

  // Función para agregar un alumno al arreglo
  async function agregarAlumno() {
    const nombre = await ask("Ingresa el nombre del alumno: ");
    const edad = parseInt(await ask("Ingresa la edad del alumno: "));
    const calificacion = parseFloat(await ask("Ingresa la calificación del alumno: "));

    // Crear objeto alumno y agregarlo al arreglo
    const alumno = {
      nombre: nombre,
      edad: edad,
      calificacion: calificacion
    };

    alumnos.push(alumno);

    console.log(`¡${nombre} ha sido agregado correctamente!`);
  }

  // Ciclo para agregar alumnos mientras el usuario lo desee
  let continuar = true;
  while (continuar) {
    await agregarAlumno();

    // Preguntar si desea agregar otro alumno
    const respuesta = (await ask("¿Deseas agregar otro alumno? (si/no): ")).toLowerCase();
    continuar = (respuesta === "si" || respuesta === "sí");
  }

  // Analizar los datos de los alumnos
  function analizarDatos() {
    // Si no hay alumnos, mostrar mensaje y salir
    if (alumnos.length === 0) {
      console.log("No hay alumnos registrados para analizar.");
      return;
    }

    // Inicializar contadores y variables para el análisis
    let aprobados = 0;
    let puedenVotar = 0;
    let sumaCalificaciones = 0;
    // Es seguro acceder a alumnos[0] aquí porque ya se verificó alumnos.length > 0
    let calificacionMayor = alumnos[0].calificacion;
    let calificacionMenor = alumnos[0].calificacion;

    // Recorrer el arreglo para analizar cada alumno
    for (let i = 0; i < alumnos.length; i++) {
      const alumno = alumnos[i];

      // Verificar si el alumno está aprobado (calificación >= 70)
      if (alumno.calificacion >= 70) {
        aprobados++;
      }

      // Verificar si el alumno puede votar (edad >= 18)
      if (alumno.edad >= 18) {
        puedenVotar++;
      }

      // Sumar calificaciones para calcular el promedio
      sumaCalificaciones += alumno.calificacion;

      // Actualizar calificación mayor si corresponde
      if (alumno.calificacion > calificacionMayor) {
        calificacionMayor = alumno.calificacion;
      }

      // Actualizar calificación menor si corresponde
      if (alumno.calificacion < calificacionMenor) {
        calificacionMenor = alumno.calificacion;
      }
    }

    // Calcular el promedio de calificaciones
    const promedio = sumaCalificaciones / alumnos.length;

    // Mostrar los resultados
    console.log("\n----- RESULTADOS DEL ANÁLISIS -----");
    console.log(`Total de alumnos: ${alumnos.length}`);
    console.log(`Alumnos con calificación aprobatoria (≥ 70): ${aprobados}`);
    console.log(`Alumnos que pueden votar (edad ≥ 18): ${puedenVotar}`);
    console.log(`Promedio general de calificaciones: ${promedio.toFixed(2)}`);
    console.log(`Calificación mayor: ${calificacionMayor}`);
    console.log(`Calificación menor: ${calificacionMenor}`);
    console.log("---------------------------------");
  }

  // Mostrar los datos de todos los alumnos
  function mostrarAlumnos() {
    if (alumnos.length === 0) {
      console.log("No hay alumnos registrados.");
      return;
    }

    console.log("\n----- LISTA DE ALUMNOS -----");
    alumnos.forEach((alumno, indice) => {
      console.log(`Alumno ${indice + 1}:`);
      console.log(`  Nombre: ${alumno.nombre}`);
      console.log(`  Edad: ${alumno.edad} años`);
      console.log(`  Calificación: ${alumno.calificacion}`);
      console.log("----------------------------");
    });
  }

  // Ejecutar el análisis y mostrar los resultados después de ingresar todos los alumnos
  mostrarAlumnos();
  analizarDatos();
}

main();