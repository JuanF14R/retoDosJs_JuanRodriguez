let number = parseInt(prompt("Ingrese un número"));


function secuenciaFibonacci(n) {
    if (n < 0) {
      return [];
    }
  
    const secuencia = [0, 1];
    let i = 2;
    while (secuencia[i - 1] + secuencia[i - 2] <= n) {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
      i++;
    }
  
    let secuenciaEncontrada = "Secuencia de numeros: " + secuencia.join(", ");
    return secuenciaEncontrada;
  }

  alert(`${secuenciaFibonacci(number)}`)