import express from 'express';

const server = express();

const tablero = 63;

let turnoJugador = 1;
let turnoMaquina = 1;
let ganador = '';

const tirarDados = () => {
    ganador = 'sdadasd';
    const dadoJugador = Math.floor(Math.random()*6)+1;
    turnoJugador += dadoJugador;
    const dadoMaquina = Math.floor(Math.random()*6)+1;
    turnoMaquina += dadoMaquina;

    // Casilla 5 Oca
    if(turnoJugador === 5){
        turnoJugador = 9;
        ganador= 'Oca';
        location.reload();
    };
    if(turnoMaquina === 5){
        turnoMaquina = 9;
        ganador= 'Oca';
        location.reload();
    };

    // Casilla 6 Puente
    if(turnoJugador === 6){
        turnoJugador = 12;
        ganador= 'Puente';
        location.reload();
    };
    if(turnoMaquina === 6){
        turnoMaquina = 12;
        ganador= 'Puente';
        location.reload();
    };

    // Casilla 9 Oca
    if(turnoJugador === 9){
        turnoJugador = 14;
        ganador= 'Oca';
        location.reload();
    };
    if(turnoMaquina === 9){
        turnoMaquina = 14;
        ganador= 'Oca';
        location.reload();
    };

    // Casilla 12 puente
    if(turnoJugador === 12){
        turnoJugador = 6;
        ganador= 'Puente a la baja';
        location.reload();
    };
    if(turnoMaquina === 12){
        turnoMaquina = 6;
        ganador= 'Puente a la baja';
        location.reload();
    };

    // Casilla 58 muerte 
    if(turnoJugador === 58){
        turnoJugador = 1;
        ganador= 'La muerte te ha tocado';
        location.reload();
    };
    if(turnoMaquina === 58){
        turnoMaquina = 1;
        ganador= 'La muerte te ha tocado';
        location.reload();
    };

    //Ganador
    if(turnoJugador === tablero){
        ganador = 'Has ganado tu';
        location.reload();
    }else if(turnoJugador > tablero){
        turnoJugador -= dadoJugador+1;
        location.reload();
    };
    if(turnoMaquina === tablero){
        ganador = 'Lo siento ha ganado la maquina';
        location.reload();
    }else if (turnoMaquina > tablero){
        turnoMaquina -= dadoMaquina+1;
        location.reload();
    };
};

const port = 3000;

server.get('/laOca', (req,res) => {
    tirarDados();
    res.status(200).set('Content-Type', 'text/html').send(`Casilla jugador: ${turnoJugador}  ${ganador}<br>
    Casilla maquina: ${turnoMaquina}  ${ganador}<br>`
    +'<button onclick="location.reload()">siguiente turno</button>')
});


server.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

server.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
});