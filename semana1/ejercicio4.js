const { ask } = require('../helpers/input.js');

function encontrarMayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Los números son iguales";
  }
}

async function main() {
  const numero1 = Number(await ask("Ingresa el primer numero?"));
  const numero2 = Number(await ask("Ingresa el segundo numero?"));

  const resultado = encontrarMayor(numero1, numero2);
  console.log(resultado);
}
main();