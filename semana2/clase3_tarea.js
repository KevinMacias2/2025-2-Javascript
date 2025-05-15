const { ask } = require('../helpers/input');

async function main() {
  // 🏠 Práctica para casa:
  // Contar cuántos de una lista de edades pueden votar

  // Instrucciones:
  // Crea un arreglo de edades (pedirlo al usuario).
  const edadesInput = await ask("Ingresa las edades separadas por comas (ej. 25,17,30,16,21):\n");
  const edadesStrings = edadesInput.split(',');
  const edades = [];
  for (let i = 0; i < edadesStrings.length; i++) {
    const edad = parseInt(edadesStrings[i].trim(), 10); // Convert to number and remove extra spaces
    if (!isNaN(edad)) { // Check if it's a valid number
      edades.push(edad);
    } else {
      console.log(`"${edadesStrings[i]}" no es una edad válida y será ignorada.`);
    }
  }

  // Recorre el arreglo.
  // Cuenta cuántos tienen 18 años o más.
  let puedenVotar = 0;
  for (let index = 0; index < edades.length; index++) {
    if (edades[index] >= 18) {
      puedenVotar++;
    }
  }

  // Muestra el total.
  console.log(`De las ${edades.length} edades ingresadas, ${puedeVotar} personas pueden votar.`);
}
main();