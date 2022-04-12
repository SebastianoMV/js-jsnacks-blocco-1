/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/
const output = document.querySelector('h1');
const numeri = [];

for(let i = 0; i < 6; i++){
  const numeriUtente = prompt('inserisci un numero');
  if(numeriUtente % 2){
  numeri.push(numeriUtente);
  }
}

output.innerHTML = numeri;