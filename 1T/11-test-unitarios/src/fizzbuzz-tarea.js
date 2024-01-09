const fizzBuzz = (n, condicion) =>{
    let text = '';
    Object.entries(condicion).forEach(([num, t]) => {
        if(n % num === 0) text += t;
    });
    
    return text || n;
}

export default fizzBuzz;