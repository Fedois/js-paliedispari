function palidromaONo (parola){
    if(parola == parolaInversa){
        alert("la parola E' palidroma");
    } 
    else {
        alert("la parola NON E' palidroma");
    }
}

let parolaInserita = prompt('inserisci una parola e verifichiamo se è palidroma oppure no');
let carattere;
let parolaInversa = '';

let i = 0
while(isNaN(parolaInserita) == false){
    parolaInserita = prompt('valori non validi. inserisci una parola e verifichiamo se è palidroma oppure no');

    i++
}
console.log('la parola inserita è: ', parolaInserita)


let j = parolaInserita.length - 1;
while (j >= 0) {
  carattere = parolaInserita[j];
  parolaInversa += carattere;
  console.log(j, carattere);
  
  j--;
}
console.log('parola invertita: ', parolaInversa);

let risultato = palidromaONo(parolaInserita);

