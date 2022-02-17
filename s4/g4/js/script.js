var frase = 'Ciao a Tutti, Belli e Brutti, e ho finito le idee di nuovo.'
var fMaiuscolo = frase.toLowerCase();
var fMinuscolo = frase.toUpperCase();

console.log(frase);

console.log(fMaiuscolo);

console.log(fMinuscolo);

var lista = frase.split(','),
    lista;
console.log(lista);

var stringaNuova = lista[0].concat(lista[1]);

console.log(stringaNuova);

var persone = ['Alberto', 'Marco', 'Luca', 'Carlo']

console.log(persone[2]);

var aggiungiElemento = persone.push("Giancane");

console.log(persone.length)

var saluti = ['Ciao ', 'Buongiorno ', 'Come ', 'Va ', 'Stai ', 'Salve ']

function calcola() {

    document.getElementById('test').innerHTML = saluti[1] + saluti[2] + saluti[3] + '?';
}
calcola()

var metodi = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

var elimina = metodi.shift('3');
console.log(elimina);

var aggiungi = metodi.unshift('3');
console.log(aggiungi);