const { ask } = require('../helpers/input.js');

async function main() {
  const age = Number(await ask('¿Cuántos años tienes?'));
  const genere = await ask('¿Cuál es tu genero?(hombre/mujer)');

  if((age >= 1 && age <18) && (genere ==='hombre')){
console.log ('Eres un hombre menor de edad');

  }else if((age >= 18 && age <65) && (genere ==='hombre')){
    console.log ('Eres un hombre mayor de edad');
  }else {
    console.log ('no se cumplen las condiciones');
  
  }

}

main();