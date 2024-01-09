import express from 'express';

const server = express();

const tablero = 63;

let turnoJugador = 1;
let turnoMaquina = 1;
let mensajeJugador = '';
let mensajeMaquina = '';

const tirarMaquina = () => {
    mensajeMaquina = '';
    const dadoMaquina = Math.ceil(Math.random()*6);
    turnoMaquina += dadoMaquina;
   
    // Casilla 5 Oca
    if(turnoMaquina === 5){
        turnoMaquina = 9;
        mensajeMaquina= 'Oca';
        location.reload();
    };

    // Casilla 6 Puente
    if(turnoMaquina === 6){
        turnoMaquina = 12;
        mensajeMaquina= 'Puente';
        location.reload();
    };

    // Casilla 9 Oca
    if(turnoMaquina === 9){
        turnoMaquina = 14;
        mensajeMaquina= 'Oca';
        location.reload();
    };

    // Casilla 12 puente
    if(turnoMaquina === 12){
        turnoMaquina = 6;
        mensajeMaquina= 'Puente a la baja';
        location.reload();
    };

    // Casilla 58 muerte
    if(turnoMaquina === 58){
        turnoMaquina = 1;
        mensajeMaquina= 'La muerte te ha tocado';
        location.reload();
    };

    // Ganador
    if(turnoMaquina === tablero){
        mensajeMaquina = 'Lo siento ha ganado la maquina';
        location.reload();
    } 
    if (turnoMaquina > tablero){
        turnoMaquina -= dadoMaquina+1;
        location.reload();
    };
}

const tirarJugador = () => {
    
    mensajeJugador = '';
    const dadoJugador = Math.ceil(Math.random()*6);
    turnoJugador += dadoJugador;

    // Casilla 5 Oca
    if(turnoJugador === 5){
        turnoJugador = 9;
        mensajeJugador= 'Oca';
        location.reload();
    };
    
    // Casilla 6 Puente
    if(turnoJugador === 6){
        turnoJugador = 12;
        mensajeJugador= 'Puente';
        location.reload();
    };
    
    // Casilla 9 Oca
    if(turnoJugador === 9){
        turnoJugador = 14;
        mensajeJugador= 'Oca';
        location.reload();
    };
    
    // Casilla 12 puente
    if(turnoJugador === 12){
        turnoJugador = 6;
        mensajeJugador= 'Puente a la baja';
        location.reload();
    };

    // Casilla 58 muerte 
    if(turnoJugador === 58){
        turnoJugador = 1;
        mensajeJugador= 'La muerte te ha tocado';
        location.reload();
    };
    

    // Ganador
    if(turnoJugador === tablero){
        mensajeJugador = 'Has ganado tu';
        location.reload();
    }
    if(turnoJugador > tablero){
        turnoJugador -= dadoJugador+1;
        location.reload();
    };

};

const port = 3000;

function volver() {
    turnoJugador = 1;
    turnoMaquina = 1
    
}

server.get('/laOca', (req,res) => {
    res.status(200).set('Content-Type', 'text/html').send(`Casilla jugador: ${turnoJugador}  ${mensajeJugador}<br>
    Casilla maquina: ${turnoMaquina}  ${mensajeMaquina}<br>
    <button onclick="location.reload()">Siguiente turno</button><br>
    <button id="volverBtn";">Volver a empezar</button>`);
    tirarJugador();
    tirarMaquina();
});


server.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

server.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
});