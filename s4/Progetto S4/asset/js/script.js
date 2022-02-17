//calcolatrice

var operazioneCliccata = false;

function tasti(valore) {

    if (valore == "+" || valore == "-" || valore == "*" || valore == "/") {
        if (operazioneCliccata == false) {
            document.getElementById("ops").value += valore;
            operazioneCliccata = true;
        }
    }

    if (Number.isInteger(valore) || valore == ".") {
        document.getElementById("ops").value += valore;
    }
}

function operazione() {
    document.getElementById("ops").value = eval(document.getElementById("ops").value);
    operazioneCliccata = false;
}

function cancella() {
    document.getElementById("ops").value = "";
    operazioneCliccata = false;
}