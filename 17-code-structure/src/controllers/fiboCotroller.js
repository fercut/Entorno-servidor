export function fiboCotroller(req, res){
    
    function fibonacciHasta100() {
        var fibonacci = [1, 1];
        
        while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= 100) {
            fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
        }
    
        return fibonacci;
    }

    res.status(200).send(fibonacciHasta100().join(', '));
  }