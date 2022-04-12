/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/


const festone = ['Jay Gatsby','Nick Carraway','Daisy Buchanan','Tom Buchanan','Myrtle Wilson','Jordan Baker'];
const nomeUtente = prompt('inserisci il tuo nome');
const output = document.querySelector('h1');
let flag = false;

for(let i = 0; i < festone.length; i++){
  if (nomeUtente == festone[i]){
    flag = true;
  }
}

if (flag){
  output.innerHTML = 'Benvenuto alla festa!'
}else{
  output.innerHTML = 'Non sei il benvenuto alla festa!'
}