/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/

let numero = 'abc';
while(isNaN(numero), numero.length != 4){
  numero = prompt('insirisci un numero di 4 cifre');
}

let numeroChar = 0;
let somma = 0;
const output = document.querySelector('h1');

for(let i = 0; i < 4;i++){
  numeroChar = parseInt(numero.charAt(i));
  somma += numeroChar;
  
}
output.innerHTML = `la somma è: ${somma}`;
