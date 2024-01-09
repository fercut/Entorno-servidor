const numero = 20;
let fizzbuzz=[]

for(let i = 0; i<numero; i++){
    fizzbuzz[i] = i+1;
    if(fizzbuzz[i] % 3 === 0 && fizzbuzz[i] % 5 === 0){
      fizzbuzz[i]='fizzbuzz';
    }else if(fizzbuzz[i] % 3 === 0){
      fizzbuzz[i]='fizz';
    }else if(fizzbuzz[i] % 5 === 0){
      fizzbuzz[i] = 'buzz';
    }
}
console.log(fizzbuzz);