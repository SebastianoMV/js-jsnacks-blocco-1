/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/
const output = document.querySelector('h1');
let somma = 0;

for( let i = 1; i <= 10; i++){
  somma = somma+ i;
  
}

const media = somma / 10;

output.innerHTML = `La somma dei primi 10 numeri è ${somma}, mentre la loro medià è ${media}`

