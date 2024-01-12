const arrayNumeri = [];
let totaleNumeri = 0;
let i = 0;
while (totaleNumeri < 50){
    arrayNumeri[i]= parseInt(prompt("Inserisci un numero"));
    console.log(arrayNumeri[i]);
    totaleNumeri = totaleNumeri + arrayNumeri[i];
}

document.writeln(`La somma non è più minore di 50, infatti la somma è ${totaleNumeri}`);
