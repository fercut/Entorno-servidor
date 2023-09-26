const usuario = 1;

let maquina = Math.floor(Math.random() *3)+1;

if (usuario === maquina){
    console.log('Has empatado');
} else if (usuario === 2 && maquina === 1 || usuario === 1 && maquina === 3 || usuario === 3 && maquina === 2){
    console.log('Has ganado');
} else {
    console.log('Has perdido');
}
