const { ask } = require('../helpers/input'); // Assuming this helper is available

async function main() {
  // 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
  // 🎯 Objetivo:
  // Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir.
  // El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.

  // 🧩 Instrucciones:
  // 1. Crea un arreglo vacío llamado frutas.
  let frutas = [];
  let opcion = '';

  // 2. Usa un ciclo while que muestre el siguiente menú:
  while (opcion !== '4') {
    console.log("\n-------------------------");
    console.log("🥭 Gestor de Frutas 🍓");
    console.log("-------------------------");
    opcion = await ask(
      "¿Qué deseas hacer?\n" +
      "1. Agregar fruta\n" +
      "2. Eliminar fruta\n" +
      "3. Ver lista de frutas\n" +
      "4. Salir\n" +
      "Elige una opción: "
    );

    if (opcion === '1') {
      // Agregar fruta
      const frutaNueva = await ask("Ingresa el nombre de la fruta que quieres agregar: ");
      if (frutaNueva.trim() !== "") { // Evitar agregar frutas vacías
        frutas.push(frutaNueva.trim());
        console.log(`✅ "${frutaNueva.trim()}" ha sido agregada a la lista.`);
      } else {
        console.log("⚠️ No se puede agregar una fruta sin nombre.");
      }
      console.log(`Frutas actuales: ${frutas.join(', ') || 'Ninguna'}`);

    } else if (opcion === '2') {
      // Eliminar fruta
      if (frutas.length === 0) {
        console.log("ℹ️ No hay frutas en la lista para eliminar.");
      } else {
        console.log("\n--- Frutas Disponibles ---");
        frutas.forEach((fruta, index) => {
          console.log(`${index + 1}. ${fruta}`);
        });
        console.log("--------------------------");
        const frutaAEliminar = await ask("Ingresa el nombre de la fruta que deseas eliminar: ");
        const index = frutas.indexOf(frutaAEliminar.trim());

        if (index !== -1) {
          const eliminada = frutas.splice(index, 1);
          console.log(`🗑️ "${eliminada[0]}" ha sido eliminada de la lista.`);
        } else {
          console.log(`⚠️ La fruta "${frutaAEliminar.trim()}" no se encontró en la lista.`);
        }
        console.log(`Frutas actuales: ${frutas.join(', ') || 'Ninguna'}`);
      }

    } else if (opcion === '3') {
      // Ver lista de frutas
      if (frutas.length === 0) {
        console.log("ℹ️ La lista de frutas está vacía.");
      } else {
        console.log("\n--- 📖 Lista de Frutas ---");
        frutas.forEach((fruta, i) => {
          console.log(`${i + 1}. ${fruta}`);
        });
        console.log("---------------------------");
      }

    } else if (opcion === '4') {
      // Salir
      console.log(`👋 Gracias por usar el Gestor de Frutas. ¡Hasta pronto!`);
      if (frutas.length > 0) {
        console.log(`Tus frutas finales fueron: ${frutas.join(', ')}`);
      } else {
        console.log("No te llevaste ninguna fruta esta vez.");
      }
    } else {
      console.log("❌ Opción no válida. Por favor, elige un número del 1 al 4.");
    }
  }
}

main();