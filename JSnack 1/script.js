// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
let primoNumero;
let secondoNumero;

//controllo dei numeri fino a quando non sono effettivamente dei numeri
while(isNaN(primoNumero)){
  primoNumero = prompt('insirisci il primo numero');
}

while(isNaN(secondoNumero)){
  secondoNumero = prompt('insirisci il secondo numero');
}

const output = document.querySelector('h1');

if (primoNumero > secondoNumero){
  output.innerHTML='Il primo numero è il più grande';
} else if(primoNumero < secondoNumero){
  output.innerHTML='Il secondo numero è il più grande';
} else{
  output.innerHTML='I due numeri sono uguali';
}