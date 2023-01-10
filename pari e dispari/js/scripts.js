function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroRandom;
}

function risultatoPariDispari(numero){
    if(numero % 2 == 0 && pariODispari == 'pari' || numero % 2 != 0 && pariODispari == 'dispari' ){
        console.log('hai vinto');
        alert('Complimenti. hai vinto :)');
        
    }
    else{
        console.log('hai perso');
        alert('Mi dispiace. hai perso :(');
            
    }
}

let pariODispari = prompt('scegli pari o dispari.');

let i = 0
while(pariODispari !== 'pari' && pariODispari !== 'dispari'){
    pariODispari = prompt('valori non validi. \nScegli pari o dispari');

    i++
}
console.log('utente ha scelto ', pariODispari,);

let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));

let j = 0
while(numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente) == true){
    numeroUtente = parseInt(prompt('valori non validi. \nInserisci un numero da 1 a 5'));

    j++
}
console.log('numero inserito: ', numeroUtente);

const numeroComputer = generaNumeroRandom(1, 5);
console.log('numero computer: ', numeroComputer);

const somma = numeroUtente + numeroComputer;
console.log('somma dei due numero = ', somma);

const risultato = risultatoPariDispari(somma);