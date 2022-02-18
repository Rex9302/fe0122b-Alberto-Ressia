//calcolatrice

var operazioneCliccata = false;

function tasti(valore) {
    i = 0;
    if (valore == "+" || valore == "-" || valore == "*" || valore == "/") {
        if (operazioneCliccata == false) {
            document.getElementById("ops").value += valore;
            operazioneCliccata = true;
        }
    }

    if (Number.isInteger(valore) || valore == ".") {
        document.getElementById("ops").value += valore;
    }

    if (document.getElementById("ops").value.length > 18) { //Se si eccedono le dimensioni del display (18 caratteri) si avrà un errore
        document.getElementById("ops").value = 'Error';
    }

}


// Funzione "sperimentale" --> L'uguale dopo aver fornito il risultato se premuto di nuovo divide per 2
var i = 0;

function operazione() {
    i++;
    if (i <= 1) {
        document.getElementById("ops").value = eval(document.getElementById("ops").value);
        operazioneCliccata = false;
    }
    if (i >= 2) {

        document.getElementById("ops").value = document.getElementById("ops").value / 2;
    }

    if (document.getElementById("ops").value.length > 18) { //Se si eccedono le dimensioni del display  (18 caratteri) si avrà un errore
        document.getElementById("ops").value = 'Error';
    }
}

function cancella() {
    document.getElementById("ops").value = "";
    operazioneCliccata = false;
    i = 0;
}