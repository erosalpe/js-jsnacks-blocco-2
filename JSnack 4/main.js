let quanteVolte = parseInt(prompt("Quanti numeri vuoi controllare?"));


for (let i = 0; i < quanteVolte; i++){
    let numeroDaControllare = parseInt(prompt("Inserisci numero da controllare"));
    if (numeroDaControllare % 2 == 0){
        document.writeln(`<br>Il numero ${numeroDaControllare} è pari<br>`);
    } else {
        document.writeln(`<br>Il numero ${numeroDaControllare} è dispari, il numero pari successivo più vicino è il numero ${numeroDaControllare + 1}<br>`);
    }
}