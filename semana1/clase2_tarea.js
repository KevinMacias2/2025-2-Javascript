const { ask } = require('../helpers/input.js');

async function main() {
  const temp = Number(await ask('¿Cuál es la temperatura actual?'));

  if((temp < 10)){
console.log ('hace frio');

  }else if(temp >= 10 && temp <20){
    console.log ('Esta templado');
  }else if(temp >= 20 && temp <30){
    console.log ('Hace calor');
  }else if(temp <= 30){
    console.log ('Hace mucho calor');
  }else {
    console.log ('valor incorrecto');
  }

}

main()