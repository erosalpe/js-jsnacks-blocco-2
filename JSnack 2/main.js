let x = Math.floor((Math.random() * 100) + 1);
let flag = false;
const buttonCheck = document.getElementById("buttonCheck");
let numeroUtente = parseInt(prompt("Indovina il numero"));

while (flag === false){
    if (numeroUtente > x){
        numeroUtente = parseInt(prompt("Il numero che sto pensando è più basso,Indovina il numero"));
    } else if (numeroUtente < x){
        numeroUtente = parseInt(prompt("Il numero che sto pensando è più alto, Indovina il numero"));
    } else {
        document.getElementById("checkText").innerHTML = `Hai indovinato stavo proprio pensando al numero ${x}`;
        flag = true;
    }
}



