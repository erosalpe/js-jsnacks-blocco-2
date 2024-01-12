const arrayPrimo = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
const arraySecondo = ["2", "2",  "2", "2", "2", "2", "2", "2", "2", "2", "2"]

let lunghezzaMassimaArray 

if (arrayPrimo.length > arraySecondo.length){
    lunghezzaMassimaArray = arrayPrimo.length;
}else if (arraySecondo.length > arrayPrimo.length){
    lunghezzaMassimaArray = arraySecondo.length;
}else {
    lunghezzaMassimaArray = arrayPrimo.length;
}








for (let i = 0; i < lunghezzaMassimaArray; i++) {
    if (arrayPrimo.length > arraySecondo.length){
        arraySecondo.push("0");
    }else if (arraySecondo.length > arrayPrimo.length){
        arrayPrimo.push("0");
    }
}

document.writeln(`I due array sono lunghi rispettivamente ${arrayPrimo.length} e ${arraySecondo.length}<br><br> il primo array contiene:<br> ${arrayPrimo}<br><br> il secondo array contiene:<br> ${arraySecondo}`);
