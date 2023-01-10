function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroRandom;
}

const pariODispari = prompt('scegli pari o dispari');
console.log('utente ha scelto ', pariODispari,)

if (pariODispari == 'pari' || pariODispari == 'dispari') {
    
    const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
    console.log('numero inserito: ', numeroUtente);

    if(numeroUtente < 1 || numeroUtente > 5){
        alert('valori non validi. Devi scegliere un numero da 1 a 5')
    }
    else{
        const numeroComputer = generaNumeroRandom(1, 5)
        console.log('numero computer: ', numeroComputer);

        const somma = numeroUtente + numeroComputer;
        console.log('somma dei due numero = ', somma);

        if(somma % 2 == 0 && pariODispari == 'pari'){
            alert('hai vinto')
            console.log('hai vinto')
        }
        else if(somma % 2 != 0 && pariODispari == 'dispari'){
            alert('hai vinto')
            console.log('hai vinto')
        }
        else{
            alert('hai perso')
            console.log('hai perso')
        }
        }

}
else{
    alert('valori non validi')
}