/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

const output = document.querySelector('body');

const numero = prompt('inserisci un numero');
let cubi;

for(let i = 1; i <= numero; i++){
  cubi = (i*i*i);
  output.innerHTML += `<div> ${cubi} </div>`;
  console.log(cubi);
}