function palidromaONo (parola){
    if(parolaInserita == parolaInversa){
        alert('la parola è palindroma');
    } 
    else {
        alert('la parola non è palindroma');
    }
}

const parolaInserita = prompt('inserisci una parola e verifichiamo se è palindroma oppure no');
console.log('la parola inserita è: ', parolaInserita)
let carattere;
let parolaInversa = '';


let i = parolaInserita.length - 1;
while (i >= 0) {
  carattere = parolaInserita[i];
  parolaInversa += carattere;
  console.log(i, carattere);
  
  i--;
}
console.log('parola invertita: ', parolaInversa);

let risultato = palidromaONo(parolaInserita);
