//Importa una herramienta que no utiliza
const chalk = require('chalk');

//el texto no es literal para hacer lo siguiente tendria que se la comilla ``
//la variable no se modifica por lo que puede ser una constante
var youShouldNeverUseVar = "This is my very long line that eslint   
  should check as an error
  ............................................";

//una funcion con un parametro que no se usa y el return no devuelve nada
//Deberia de ser return console.log(used) y añadir ;
function myFunction(used, nonUsed){
 if(used){
    console.log(used)
    return
  }
 }

 //exporta una funcion que no existe.
 module.exports = nonExistingVar;
