const { ask } = require('../helpers/input.js');

async function main() {
    const number = Number(await ask("Ingresa un numero?"));

    if(number %2 === 0 && number %5 === 0){
        console.log("El numero es multiplo entre 2 y 5");
    }else if(number %3 === 0 ){
        console.log("El numero es multiplo de 3");
    }else if(number %5 === 0 ){
        console.log("El numero es multiplo de 5");

    }else{
        console.log("El numero no es multiplo de 3 ni de 5");
    }

}

main();