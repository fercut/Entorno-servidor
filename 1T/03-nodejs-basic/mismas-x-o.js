const texto = 'xxooo';

let numX = 0;
let numO = 0;

for(let i = 0; i<texto.length; i++){
  if(texto[i] === 'x'){
    numX++;
  }else if(texto[i] === 'o'){
    numO++
  }
}

console.log( numX === numO ? true : false)