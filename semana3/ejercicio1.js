
const { ask } = require('../helpers/input');

async function main() {

    const personas = [
        {
            nombre: "Juan",
            edad: 25,
            profesion: "Desarrollador",
            hobbies: ["programar", "leer", "jugar"],
            birthday: "1998-01-01",
            saludar: function() {
                console.log(`Hola, mi nombre es ${this.nombre}`);
            }
        },
        {
            nombre: "Kevin",
            edad: 25,
            profesion: "Desarrollador",
            hobbies: ["programar", "leer", "jugar"],
            birthday: "1998-01-01",
            saludar: function() {
                console.log(`Hola, mi nombre es ${this.nombre}`);
            }
        },
        {
            nombre: "Pedro",
            edad: 25,
            profesion: "Desarrollador",
            hobbies: ["programar", "leer", "jugar"],
            birthday: "1998-01-01",
            saludar: function() {
                console.log(`Hola, mi nombre es ${this.nombre}`);
            }
        }
    ];
    console.log(personas);


     const alumnos = {
        nombre: "Pepe",
        matricula: "123456",
         carrera: "Ingeniería en Sistemas", 
         promedio: 8.5,
         edad: 20,
        mostrarInformacion: function() {
            if (this.edad >= 18) {
            console.log("Es mayor de edad y puede votar.");
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Matricula: ${this.matricula}`);
            console.log(`Edad: ${this.edad}`);
            console.log(`Promedio: ${this.promedio}`);
            } else {
                console.log("No es mayor de edad y no puede votar.");
            } 
        }
     }
     console.log(alumnos);
    alumnos.mostrarInformacion();
}
    
main();
