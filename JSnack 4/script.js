/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/


const festone = ['Jay Gatsby','Nick Carraway','Daisy Buchanan','Tom Buchanan','Myrtle Wilson','Jordan Baker'];
const nomeUtente = prompt('inserisci il tuo nome');
const outputFestone = document.querySelector('#benvenuto');
const outputNo = document.querySelector('#non-entri');
const outputEntrata = document.querySelector('.benvenuto');
let flag = false;
let c = 0;

for(let i = 0; i < festone.length; i++){
  if (nomeUtente == festone[i]){
    flag = true;
    c = i;
  }
}

if (flag){
  outputFestone.classList.remove('smv-hide');
  outputEntrata.innerHTML = `Benvenuto alla festa ${festone[c]}!`
  
}else{
  outputNo.classList.remove('smv-hide');
  outputNo.innerHTML = 'Non sei il benvenuto alla festa!'
}