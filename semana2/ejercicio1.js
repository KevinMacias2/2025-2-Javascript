const { ask } = require('../helpers/input');

function diffDays(a, b) {
  const diff = b - a;
  const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));

  return edadEnDias;
}

function saludar(nombre){
  console.log("Hola", nombre)

}

async function main() {
    const futureDate = new Date(await ask("¿Hasta cuando quieres imprimir la fecha? (formato YYYY-MM-DD)"));
    let diff = diffDays(new Date(), futureDate);
    console.log("Diferencia:", diff);

    while (diff>0){
      diff = diff -1;
      console.log("Valor actual", diff+2);
    }

    const personas = [
      "Pedro",
      "Juan",
      "arla",
      "Sofia",
      "Carlos",
      "Esteban",
    ]

    for (let i = 0; i < personas.length; i++){
      saludar(personas[i]);
    }


}

main();
