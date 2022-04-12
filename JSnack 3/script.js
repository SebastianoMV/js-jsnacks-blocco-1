/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


const output = document.querySelector('h1');
let somma = 0;

// Versione con FOR
// for (let i = 0; i < 5; i++){
//   const numero = parseInt(prompt('inserisci un numero'));
//   somma = somma += numero;
// }



let c = 0;
while(c < 5){
  const numero = parseInt(prompt('inserisci un numero'));
  somma = somma += numero;
  c++
}

output.innerHTML = somma;

