const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {

    if(pin.length<4 && pin===NaN) return 'Invalid input.';
  
	const pinNum =pin.split('').map(Number);
    let movimiento = new Array(4);
  
  	for(let i= 0; i<pinNum.length; i++){
        pinNum[i] = (pinNum[i] + i) % MOVES.length;
    }
  console.log(pinNum)
  
    for(let i= 0; i<movimiento.length; i++){
        movimiento[i] = MOVES[pinNum[i]];
			 if(movimiento[i]=== undefined) return 'Invalid input.';
    }
    return movimiento;
}

